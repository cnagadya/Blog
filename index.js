'use strict';

const faunadb = require('faunadb');

const q = faunadb.query;

var client = new faunadb.Client({ secret: 'fnACvpGQp_ACAksvQ9zzx6omC6wsGR80wLnalkdq' });

client.query(q.CreateDatabase({ name: "ncr_blog" }))
    .then(() => {
        return client.query({
            "ref": { "@ref": "databases/ncr_blog" },
            "class": { "@ref": "databases" },
            "ts": 1520225686389954,
            "name": "ncr_blog"
        })
    })
client.query(q.CreateKey(
    { database: q.Database("ncr_blog"), role: "server" })).then(() => {
        return ({
            "ref": { "@ref": "keys/192903209473278464" },
            "class": { "@ref": "keys" },
            "ts": 1520225686419239,
            "database": { "@ref": "databases/ncr_blog" },
            "role": "server",
            "secret": "fnACrVRybLACAOytRXDMleFgdUZKXcJfMdzyjsRq",
            "hashed_secret": "$2a$05$k9x7YbL5CYY9KIMhW6RaIOILyEwY3IHuX0NWvK9iUMWk8TJ7k1H8O"
        })
    })

client.query(q.CreateClass({ name: "posts" })).then(() => {
    return ({
        "ref": { "@ref": "classes/posts" },
        "class": { "@ref": "classes" },
        "ts": 1520225686488810,
        "history_days": 30,
        "name": "posts"
    })
})
