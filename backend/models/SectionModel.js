class Section{
  constructor(SectionTitle, Paragraphs, ImageID, SubSections, SectionSubTitle,SectionAdditionalText){
    this.SectionTitle = SectionTitle;
    this.SectionSubTitle = SectionSubTitle
    this.ImageID = ImageID;
    this.Paragraphs = Paragraphs;
    this.SubSections = SubSections;
    this.SectionAdditionalText = SectionAdditionalText;
  };

}

module.exports = {Section};