const snoowrapInit = require('snoowrap');
const fs = require('fs');
const path = require('path');

let snoowrap;

exports.handler = async (event, context) => {

  const isProduction = event?.queryStringParameters?.production;

  let localSnoowrapConfig = {};

  if (!isProduction) {
    fs.readFile(path.resolve(__dirname, '../snoowrap-config.json'), 'UTF-8', (error, config) => {
      if (error) {
        console.error('error');
      }
      if (config) {
        localSnoowrapConfig = config;
      }
    });
  }

  const {
    CLIENT_ID,
    CLIENT_SECRET,
    REFRESH_TOKEN,
    USER_AGENT
  } = process.env;

  const {
    CLIENT_ID: CLIENT_ID_DEV,
    CLIENT_SECRET: CLIENT_SECRET_DEV,
    REFRESH_TOKEN: REFRESH_TOKEN_DEV,
    USER_AGENT: USER_AGENT_DEV
  } = localSnoowrapConfig;

  const threadId = event?.queryStringParameters?.threadId;

  const threadConfig = { // Not sure if we'll ever want to change these so static obj for now
    limit: Infinity,
    depth: 0
  };

  const snoowrapConfig = {
    userAgent: USER_AGENT ?? USER_AGENT_DEV,
    clientId: CLIENT_ID ?? CLIENT_ID_DEV,
    clientSecret: CLIENT_SECRET ?? CLIENT_SECRET_DEV,
    refreshToken: REFRESH_TOKEN ?? REFRESH_TOKEN_DEV
  };

  try {
    if (!snoowrap) {
      snoowrap = new snoowrapInit(snoowrapConfig);
    }

    if (snoowrap && threadId) {
      try {
        const thread = await snoowrap.getSubmission(threadId).expandReplies(threadConfig);
        const id = thread.id ?? '';
        const title = thread.title ?? 'Title not found'
        const comments = thread.comments ?? [];

        return {
          statusCode: 200,
          body: JSON.stringify({ id, title, comments })
        }
      } catch {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Reddit thread not found' })
        }
      }

    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Bad Request' })
      }
    }
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed communicating with Snoowrap' })
    }
  }
}
