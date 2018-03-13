'use strict';

const pg = require('pg');

const DATABASE_URL=process.env.DATABASE_URL;

function bot(bot, access_token, scopes, teamId, teamName) {
  const select = `SELECT COUNT(*) FROM bot_install WHERE team_id=${teamId}`;
  pg.connect(DATABASE_URL, function(err, client, done) {
    client.query(select, function(err, result) {
      done();
      if (err) {
        console.log(`Could not install bot with user id ${userId} into team with id ${teamId}`);
      } else {
        console.log(result);
      }
    });
  });
}
