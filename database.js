const pgp = require('pg-promise')()

const user = 'anthonybuccat'
const password ="123456"
const host = 'localhost'
const pgPort = '5432'
const database = 'project4'

const connection = `postgres://${user}:${password}@${host}:${pgPort}/${database}`

const db = pgp(connection)

module.exports = db