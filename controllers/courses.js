const User = require('../models/course');

//get all courses
exports.getCourses = (req, res, next) => {
    Course.findAll()
        .then(courses => {
            res.status(200).json({ courses: courses });
        })
        .catch(err => console.log(err));
}

//get user by id
exports.getCourse = (req, res, next) => {
    const courseId = req.params.courseId;
    Course.findByPk(courseId)
        .then(course => {
            if (!course) {
                return res.status(404).json({ message: 'User not found!' });
            }
            res.status(200).json({ course: course });
        })
        .catch(err => console.log(err));
}

//create user
exports.createCourse = (req, res, next) => {
    const course_mentor = req.body.course_mentor;
    const name = req.body.name;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const description = req.body.description;
    const is_active = req.body.is_active;
Course.create({
    course_mentor: course_mentor,
    name: name,
    start_date: start_date,
    end_date: end_date,
    description: description,
    is_active: is_active
})
    .then(result => {
      console.log('Created User');
      res.status(201).json({
        message: 'User created successfully!',
        course: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}

//update user
exports.updateCourse = (req, res, next) => {
  const courseId = req.params.courseId;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  Course.findByPk(courseId)
    .then(course => {
      if (!course) {
        return res.status(404).json({ message: 'User not found!' });
      }
      course.name = updatedName;
      course.email = updatedEmail;
      return course.save();
    })
    .then(result => {
      res.status(200).json({message: 'User updated!', course: result});
    })
    .catch(err => console.log(err));
}

//delete user
// exports.deleteUser = (req, res, next) => {
//   const userId = req.params.userId;
//   User.findByPk(userId)
//     .then(user => {
//       if (!user) {
//         return res.status(404).json({ message: 'User not found!' });
//       }
//       return User.destroy({
//         where: {
//           id: userId
//         }
//       });
//     })
//     .then(result => {
//       res.status(200).json({ message: 'User deleted!' });
//     })
//     .catch(err => console.log(err));
// }