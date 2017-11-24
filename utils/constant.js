var user = 'liuheng';
var password = 'kjD62ooD7EPYpKXN';

const dbUrl = 
`mongodb://${user}:${password}@cluster0-shard-00-00-cii4w.mongodb.net:27017,
cluster0-shard-00-01-cii4w.mongodb.net:27017,
cluster0-shard-00-02-cii4w.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`

//const dbUrl = 'mongodb://localhost/test'
module.exports = {
    dbUrl: dbUrl
}