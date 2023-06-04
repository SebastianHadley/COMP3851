
export function getFacultyImage(ImageID){
    try{
        return require("./assets/img/FacultyImages/"+ImageID+".png");
    }catch{
        return require("./assets/img/FacultyImages/Blank.png");
    }
}

export function GetImage(ImageID){
    return require("./assets/img/"+ImageID+".png");
}

export function GetSVG(ImageID){
    return require("./assets/img/"+ImageID+".svg");
}