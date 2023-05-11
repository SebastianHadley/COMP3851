
class FacultyGroup{
  constructor(FacultyName, FacultyID){
    this.FacultyName = FacultyName;
    this.FacultyID = FacultyID;
    this.FacultyMembers = [];
  };

}

class FacultyMember{
    constructor(FirstName, LastName,Title,ContactInformation, JobRole,Subject){
        this.Name = FirstName + ' ' + LastName;
        this.Title = Title;
        this.JobDescription = JobRole + (Subject ? ', ' + Subject : '');
        this.Email = ContactInformation;
        this.ImageID = FirstName;
    }
}

module.exports = {FacultyMember,FacultyGroup};