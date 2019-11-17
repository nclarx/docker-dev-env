const Sequelize = require('sequelize')
const Model = Sequelize.Model
const Faker = require('faker/locale/en_AU')

const dbname = `appdb`
const username = `postgres`
const pw = `postgres`

console.table([dbname, username, pw])

const db = new Sequelize(`postgres://${username}:${pw}@db:5432/${dbname}`, {
    dialect: 'postgres'
})

function closeDatabase() {
    db.close()
        .then((success) => {
            console.log('SUCCESS', 'Connection to DB closed')
        })
        .catch((error) => {
            console.error('Error closing connection')
        })
}

function seedUser() {
    return {
        firstName: Faker.name.firstName(),
        lastName: Faker.name.lastName()
    }
}

class User extends Model { }
User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'user',
    timestamps: true
})

db.authenticate()
    .then(() => {
        console.log('Connected!')

        // class Role extends Model { }
        // Role.init({
        //     roleId: {
        //         type: Sequelize.UUID,
        //         primaryKey: true
        //     },
        //     roleName: {
        //         type: Sequelize.STRING,
        //         allowNull: false,
        //     }
        // }, {
        //     sequelize: db,
        //     modelName: 'role'
        // })

        // class Product extends Model { }
        // Product.init({
        //     productId: {
        //         type: Sequelize.UUID,
        //         primaryKey: true
        //     },
        //     productName: {
        //         type: Sequelize.STRING,
        //         allowNull: false
        //     },
        //     productCost: {
        //         type: Sequelize.FLOAT,
        //         allowNull: true
        //     }
        // },
        //     {
        //         sequelize: db,
        //         modelName: 'product'
        //     }
        // )

        // Relationships

        // User.belongsTo(Role)
        // Role.hasMany(User)
        // Product.belongsTo(User)
        // User.hasMany(Product)

        // Role.create({
        //     roleName: "Admin"
        // })

        // Product.create({
        //     productName: "Ruler",
        //     cost: 0.99,

        // })

        for (let i = 0; i < 10; i++) {
            console.log('user')
            User.create(seedUser())
        }
        // db.sync({ force: true })
        //     .then((data) => {

        //})

    })
    .catch((error) => {
        console.error(error)
    })




function findAll() {
    return User.findAll()
}

function findFirst(number) {
    return User.findAll({
        limit: number,
        model: User,
        mapToModel: true
    })
}


function rawQuery(statement) {
    return db.query(statement, { type: db.QueryTypes.SELECT })
}

module.exports = {
    findAll: findAll,
    findFirst: findFirst,
    rawQuery: rawQuery
}
