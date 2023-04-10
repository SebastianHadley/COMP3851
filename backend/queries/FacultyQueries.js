const sql = require('mssql');
const { connection } = require('../db');
module.exports = async function getFaculties(){
    const pool = await connection;
    const Faculty = await pool.request().query('SELECT * FROM FacultyMember');
    const FacultyGroups = await pool.request().query('SELECT * FROM FacultyGroup');
    const formattedResult = await mapFaculty(Faculty.recordset,FacultyGroups.recordset)
    return Faculty;
}


  function mapFaculty(Faculty,FacultyGroups){
    console.log("check");
    console.log(FacultyGroups);
    const facultyByGroup = Faculty.reduce((group, member) => {
      if (!group[member.ParentFaculty]) {
        group[member.ParentFaculty] = [];
      }
      group[member.ParentFaculty].push(member);
      return group;
    }, {});
    console.log("hello2")
    for(i = 1; i < FacultyGroups.length; i++){
      console.log("hello")
      console.log(facultyByGroup[i]);
      FacultyGroups[i] = FacultyGroup(facultyByGroup[i]);
      console.log(FacultyGroups);
    }
    console.log(FacultyGroups);
  }