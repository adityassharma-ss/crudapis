const controller = require('../controllers/teachers');
const router = require('express').Router();

// CRUD Routes /users
router.get('/', controller.getTeachers); // /teachers
router.get('/:teacherId', controller.getTeacher); // /teachers/:teachersId
router.post('/', controller.createTeacher); // /teachers
router.put('/:teacherId', controller.updateTeacher); // /teachers/:teachersId
router.delete('/:teacherId', controller.deleteTeacher); // /teachers/:teachersId

module.exports = router;