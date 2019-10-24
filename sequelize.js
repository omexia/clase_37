const Sequelize = require("sequelize");
const UserModel = require("./models/user-model");

const connection = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel.User(connection, Sequelize);

connection.sync({force: true }).then(() => {
    console.log('Database and tables created/connected');
});

module.exports = {
    User
}