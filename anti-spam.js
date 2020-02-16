

function removeDuplicateWords (s) {
  // your perfect code...
var str =document.getElementById("topcmm-123flashchat-loginview-username-input");

 str.value=s.split(" ");
var result = [];
for(var i =0; i < str.length ; i++){
    //if(result.indexOf(str[i]) == -1) result.push(str[i]);
    if(result.indexOf(str[i]) === -1){
      result.push(str[i]);
    } 
}
 return result.join(" ");
}


 removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')//'alpha beta gamma delta'


