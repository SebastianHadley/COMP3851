const sql = require('mssql');
const { connection } = require('../db');
const {FacultyGroup, FacultyMember} = require("../models/FacultyModels")
module.exports = async function getFaculties(){
    const pool = await connection;
    const Faculty = await pool.request().query('SELECT * FROM FacultyMember');
    const FacultyGroups = await pool.request().query('SELECT * FROM FacultyGroup');
    const formattedResult =  mapFaculty(Faculty.recordset,FacultyGroups.recordset)
    return Faculty;
}


  function mapFaculty(Faculty,FacultyGroups){
    // console.log(FacultyGroups);
    const facultyByGroup = Faculty.reduce((group, member) => {
      if (!group[member.ParentFaculty]) {
        group[member.ParentFaculty] = [];
      }
      group[member.ParentFaculty].push(member);
      return group;
    }, {});
    console.log("hello2");
    console.log(FacultyGroups.length)
    Faculties = [FacultyGroups.length];
    for(i = 0; i < FacultyGroups.length; i++){
      Faculties[i] = new FacultyGroup(FacultyGroups[i].FacultyName,FacultyGroups[i].FacultyID,FacultyGroups[i].ParentSection,facultyByGroup[i]);
    }
    console.log(Faculties)
    // console.log(FacultyGroups[0])
    // console.log("check")
    // console.log(FacultyGroups[1])
  }