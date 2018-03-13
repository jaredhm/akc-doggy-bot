'use strict';

const CLIENT_ID = process.env.SLACK_CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;

function getAuthPage() {
  return `
    <a href="https://slack.com/oauth/authorize?scope=bot&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}">
      <img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/>
    </a>
  `;
}

module.exports = {
  getAuthPage: getAuthPage
}
