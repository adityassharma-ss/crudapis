const controller = require('../controllers/courses');
const router = require('express').Router();

// CRUD Routes /courses
router.get('/', controller.getCourses); // /users
router.get('/:courseId', controller.getCourse); // /users/:userId
router.post('/', controller.createCourse); // /users
// router.put('/:courseId', controller.updateCourse); // /users/:userId
// router.delete('/:courseId', controller.deleteCourse); // /users/:userId

module.exports = router;