import { FacultyMember } from "./models/FacultyModels";

export function getFacultyImage(ImageID){
    try{
        return require("./assets/img/FacultyImages/"+ImageID+".png");
    }catch{
        return require("./assets/img/FacultyImages/Blank.png");
    }
}