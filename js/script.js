//Functions - Variable Scope

var width =5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
//console.log(width) //If put console log out of function
                    //Will choose in this case the width outside the function
calcArea(); //This will repeat the whole function

//