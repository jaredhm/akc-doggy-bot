'use strict';

const agent = require('request');

const CLIENT_ID = process.env.SLACK_CLIENT_ID;
const CLIENT_SECRET = process.env.SLACK_CLIENT_SECRET;
const REDIRECT_URI = process.env.SLACK_REDIRECT_URI;
const OATH_URI = process.env.SLACK_OATH_URI;

function authPage() {
  return `
    <a href="https://slack.com/oauth/authorize?scope=bot&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}">
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/>
    </a>
  `;
}

function completeAuth(code) {
  let options = {
    baseUrl: OATH_URI,
    headers: [
      { name: 'content-type', value: 'application/x-www-form-urlencoded' }
    ],
    qs: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
      redirect_uri: REDIRECT_URI
    }
  };
  agent.get(options, function(err, res, body) {
    if(err) { console.log(err) }
    console.log(body);
  });
}

module.exports = {
  authPage: authPage,
  completeAuth: completeAuth
}
