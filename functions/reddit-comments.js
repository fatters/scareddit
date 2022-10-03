const snoowrapInit = require('snoowrap');
const localSnoowrapConfig = require('../snoowrap-config.json');
let snoowrap;

exports.handler = async (event, context) => {
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
      const thread = await snoowrap.getSubmission(threadId).expandReplies(threadConfig);
      const title = thread.title ?? 'Title not found'
      const comments = thread.comments ?? [];

      return {
        statusCode: 200,
        body: JSON.stringify({ title, comments })
      }
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({error: 'Bad Request'})
      }
    }
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({error: 'Failed communicating with Snoowrap'})
    }
  }
}
