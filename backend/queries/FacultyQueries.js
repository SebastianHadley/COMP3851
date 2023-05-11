const { db } = require('../db');
const { FacultyGroup, FacultyMember } = require('../models/FacultyModels');

module.exports = async function getFaculties() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Execute the two queries in parallel
      const facultyQuery = 'SELECT * FROM FacultyMember';
      const facultyGroupQuery = 'SELECT * FROM Faculty';

      const faculties = [];
      const facultyHelper = [];
      db.all(facultyGroupQuery, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          // Populate faculties array with FacultyGroup instances
          rows.forEach(row => {
            const facultyGroup = new FacultyGroup(row.FacultyName, row.FacultyID);
            faculties.push(facultyGroup);
            facultyHelper[facultyGroup.FacultyID] = facultyGroup;
          });
          db.all(facultyQuery, [], (err, members) => {
            if (err) {
              reject(err);
            } else {
              // Populate FacultyGroup instances with FacultyMember instances
              members.forEach(staff => {
                const facultyGroup = facultyHelper[staff.ParentFaculty];
                const facultyMember = new FacultyMember(
                  staff.FirstName,
                  staff.LastName,
                  staff.Title,
                  staff.Email,
                  staff.JobRole,
                  staff.Subject
                );
                facultyGroup.FacultyMembers.push(facultyMember);
              });
              resolve(faculties);
            }
          });
        }
      });
    });
  });
};
