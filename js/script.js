//Functions - Variable Scope

/*var width =5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
//console.log(width) //If put console log out of function
                    //Will choose in this case the width outside the function
calcArea(); //This will repeat the whole function*/

//Arguments and Parameters

/*function dogYears(age){ //**Parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}
dogYears(4); //**Passing
dogYears(5); //Arguments*/

//Returning Values

/*var total = calcArea(30, 20); //Make var so return stores there

function calcArea(w, h){
    var area = w * h;
    return area; //Function spitting the info out
}
console.log(total);*/

//Function vs Procedure

//This is a function
function calcAreaF(width, height){
    var area = width * height;
    return area;
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); // no return
}