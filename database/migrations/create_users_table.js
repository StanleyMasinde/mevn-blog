const { Schema, BluePrint } = require('../../app/orm')

let table = BluePrint

Schema.create('users', () => {
    table.increments()
    table.string('email')
    table.string('name')
    table.string('password')
    table.timestamps()
})