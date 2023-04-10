class FacultyGroup{

  constructor(FacultyName, FacultyID,ParentSection,FacultyMembers){
    this.FacultyName = FacultyName;
    this.FacultyID = FacultyID;
    this.ParentSection = ParentSection;
    this.FacultyMembers = FacultyMembers;
  };

}
class FacultyMember{
    constructor(FirstName, LastName,Title,
    FacultyMemberID,UniRole,ContactInformation,
    ParentFaculty,ImageID,MemberDescription,Education){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Title = Title;
        this.FacultyMemberID = FacultyMemberID;
        this.UniRole = UniRole;
        this.ContactInformation = ContactInformation;
        this.ParentFaculty = ParentFaculty;
        this.ImageID = ImageID;
        this.MemberDescription = MemberDescription;
        this.Education = Education;
    }
}
module.exports = {FacultyMember,FacultyGroup};