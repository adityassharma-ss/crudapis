const Sequelize = require('sequelize');
const db = require('../util/database');

const Course = db.define('course', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    course_mentor: Sequelize.INTEGER,
    name: Sequelize.STRING,
    start_date: Sequelize.INTEGER,
    end_date: Sequelize.INTEGER,
    description: Sequelize.STRING,
    is_active: Sequelize.BOOLEAN
});

module.exports = Course;