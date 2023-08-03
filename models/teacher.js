const Sequelize = require('sequelize');
const db = require('../util/database');

const Teacher = db.define('teacher', {
    teacher_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    is_active: Sequelize.BOOLEAN,
    designation: Sequelize.STRING
});

module.exports = Teacher;