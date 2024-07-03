const fs = require('node:fs');
const path = require('node:path');

let snoowrap;

Devvit.configure({
  redditAPI: true,
  // other plugins
});

export async function onRequest(request, context) {
  const { reddit } = context;
  console.log('what am i actually even doing anymore', reddit);

  const productionParam = request?.queryStringParameters?.production;
  
  const isProduction = (productionParam === 'true');


  if (!isProduction) {
    try {
      // localSnoowrapConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../snoowrap-config.json'), { encoding: 'utf8', flag: 'r' }));
    } catch {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Error reading the local snoowrap-config.json` })
      }
    }
  }

  // const {
  //   CLIENT_ID,
  //   CLIENT_SECRET,
  //   REFRESH_TOKEN,
  //   USER_AGENT
  // } = isProduction ? process.env : localSnoowrapConfig;

  // const snoowrapConfig = {
  //   userAgent: USER_AGENT,
  //   clientId: CLIENT_ID,
  //   clientSecret: CLIENT_SECRET,
  //   refreshToken: REFRESH_TOKEN
  // }

  const threadId = request?.queryStringParameters?.threadId;

  const threadConfig = { // Not sure if we'll ever want to change these so static obj for now
    limit: Infinity,
    depth: 0
  };

  try {
    if (!snoowrap) {
      try {
        // snoowrap = new snoowrapInit(snoowrapConfig);
      } catch (error) {
        console.error(`Error initialising Snoowrap`, error);
      }
    }

    if (snoowrap && threadId) {
      try {
        const thread = await snoowrap.getSubmission(threadId).expandReplies(threadConfig);
        const id = thread.id ?? '';
        const title = thread.title ?? 'Title not found'
        const comments = thread.comments ?? [];

        return new Response({
          statusCode: 200,
          body: JSON.stringify({ id, title, comments })
        });
      } catch {
        return new Response({
          statusCode: 404,
          body: JSON.stringify({ error: 'Reddit thread not found' })
        });
      }

    } else {
      return new Response({
        statusCode: 400,
        body: JSON.stringify({ error: 'Bad Request' })
      });
    }
  } catch {
    return new Response({
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed communicating with Snoowrap' })
    })
  }
}
