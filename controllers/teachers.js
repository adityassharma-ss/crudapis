const Teacher = require('../models/teacher');

//get all teachers
exports.getTeachers = (req, res, next) => {
    Teacher.findAll()
        .then(teachers => {
            res.status(200).json({ teachers:teachers });
        })
        .catch(err => console.log(err));
}

//get teacher by id
exports.getTeacher = (req, res, next) => {
    const teacherId = req.params.teacherId;
    Teacher.findByPk(teacherId)
        .then(teacher => {
            if (!teacher) {
                return res.status(404).json({ message: 'Teacher not found!' });
            }
            res.status(200).json({ teacher:teacher });
        })
        .catch(err => console.log(err));
}

//create teacher
exports.createTeacher = (req, res, next) => {
  const name = req.body.name;
  const is_active = req.body.is_active;
  const designation = req.body.designation;
  Teacher.create({
    name: name,
    is_active: is_active,
    designation: designation
  })
    .then(result => {
      console.log('Created Teacher');
      res.status(201).json({
        message: 'Teacher created successfully!',
        teacher: result
      });
    })
    .catch(err => {
      console.log(err);
    }); 
}


//update teacher
exports.updateTeacher = (req, res, next) => {
  const teacherId = req.params.teacherId;
  const updatedName = req.body.name;
  const updatedIs_Active = req.body.is_active;
  const updatedDesignation = req.body.designation;
  Teacher.findByPk(teacherId)
    .then(teacher => {
      if (!teacher) {
        return res.status(404).json({ message: 'Teacher not found!' });
      }
      teacher.name = updatedName;
      teacher.is_active = updatedIs_Active
      teacher.designation = updatedDesignation;
      return teacher.save();
    })
    .then(result => {
      res.status(200).json({message: 'Teacher updated!', teacher: result});
    })
    .catch(err => console.log(err));
}


//delete tecaher
exports.deleteTeacher = (req, res, next) => {
  const teacherId = req.params.teacherId;
  Teacher.findByPk(teacherId)
    .then(teacher => {
      if (!teacher) {
        return res.status(404).json({ message: 'User not found!' });
      }
      return Teacher.destroy({
        where: {
          id: teacherId
        }
      });
    })
    .then(result => {
      res.status(200).json({ message: 'Teacher deleted!' });
    })
    .catch(err => console.log(err));
}