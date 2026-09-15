


function reverseString(str){

let reversed = "";

if(str == null || str == undefined){
    console.log("String can not be null or undifined");
    return;
}

if(str.length == 0 ){
    console.log("String cannot be empty");
    return;
}

for (let i = str.length()-1; i >= 0; i--){
    reverseString += str(i);
}
console.log(reverseString);
}