
class FacultyGroup{
  constructor(FacultyName, FacultyID){
    this.FacultyName = FacultyName;
    this.FacultyID = FacultyID;
    this.FacultyMembers = [];
  };

}

class FacultyMember{
    constructor(FirstName, LastName,Title,ContactInformation, JobRole,Subject, Link){
        this.Name = FirstName + ' ' + LastName;
        this.Title = Title;
        this.JobDescription = JobRole ? JobRole + (Subject ? ', ' + Subject : '') : Subject;
        this.Email = ContactInformation;
        this.ImageID = FirstName;
        this.Link = Link
    }
}

module.exports = {FacultyMember,FacultyGroup};