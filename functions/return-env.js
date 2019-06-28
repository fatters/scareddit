exports.handler = function(event, context, callback) {
  const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, USER_AGENT } = process.env;
  console.log('CLIENT ID', CLIENT_ID);
  console.log(process.env);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      userAgent: USER_AGENT
    })
  });
};
