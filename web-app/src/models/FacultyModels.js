/** @typedef {object} json
 * @property {string} FacultyName
 * @property {number} FacultyID
 * @property {object[]} FacultyMembers
 * @property {string} FacultyMembers.FirstName
 * @property {string} FacultyMembers.LastName
 * @property {string} FacultyMembers.Title
 * @property {number} FacultyMembers.FacultyMemberID
 * @property {string} FacultyMembers.JobRole
 * @property {string} FacultyMembers.Email
 * @property {number} FacultyMembers.ParentFaculty
 * @property {null} FacultyMembers.ImageID
 * @property {string} FacultyMembers.Subject
 */

class FacultyResponse {
    FacultyData = [];
}

class FacultyGroup{
  constructor(FacultyName, FacultyID){
    this.FacultyName = FacultyName;
    this.FacultyID = FacultyID;
    this.FacultyMembers = [];
  };

}
class FacultyMember{
    constructor(FirstName, LastName,Title,
    FacultyMemberID,JobRole,ContactInformation,
    ParentFaculty,ImageID,Subject){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Title = Title;
        this.FacultyMemberID = FacultyMemberID;
        this.JobRole = JobRole;
        this.Email = ContactInformation;
        this.ParentFaculty = ParentFaculty;
        this.ImageID = ImageID;
        this.Subject = Subject
    }
}
module.exports = {FacultyMember,FacultyGroup};