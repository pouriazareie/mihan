
// 10000 tedade dafate tekrar
for (var i=0; i<10000; i++) (function(t) {
  window.setTimeout(function() {

 
// masalan in code vase  feshordane button settinge :)
//existCondition1
var existCondition1 = setInterval(function() {
 if ($('#topcmm-123flashchat-mainview-top-settings-btn').length) {
    console.log("existCondition1 Exists!");
    clearInterval(existCondition1);
	document.getElementById("topcmm-123flashchat-mainview-top-settings-btn").click();
 }
}, 2000); // check every 2000 saniye







//existCondition2
var existCondition2 = setInterval(function() {
 if ($('#topcmm-123flashchat-settings-menuitem-signin').length) {
    console.log("existCondition2 Exists!!");
    clearInterval(existCondition2);
document.getElementById("topcmm-123flashchat-settings-menuitem-logout").click();
 }
}, 3000); // check every 5000ms




//existCondition3





//existCondition4
var existCondition4 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-username-input').length) {
    console.log("existCondition4 Exists!!");
    clearInterval(existCondition4);
	document.getElementById("topcmm-123flashchat-loginview-username-input").value=Math.random().toString(24).substr(2, 3);
 }
}, 2000); // haR 2 SANIYE



//existCondition3as1
var existCondition3as1 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-guest-checkbox').length) {
    console.log("existCondition3as1 Exists!!");
    clearInterval(existCondition3as1);
	document.getElementById("topcmm-123flashchat-loginview-guest-checkbox").click();
 }
}, 2000); // check every 2 sanie


//OK
//existCondition5
var existCondition5 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-login-btn').length) {
    console.log("existCondition5 Exists!!");

    clearInterval(existCondition5);
	document.getElementById("topcmm-123flashchat-loginview-login-btn").click();
   // doTheRestOfTheStuff(parameters);
 }
}, 2000); // check every 100ms

//OK
//existCondition5
var existCondition5 = setInterval(function() {
 if ($('#topcmm-123flashchat-roomlist-container > div:nth-child(1)').length) {
    console.log("existCondition5 Exists!!");

    clearInterval(existCondition5);
document.querySelector("#topcmm-123flashchat-roomlist-container > div:nth-child(1)").click();
   // doTheRestOfTheStuff(parameters);
 }
}, 2000); // check every 100ms

/*
//existCondition6
var existCondition6 = setInterval(function() {
 if ($('#topcmm-123flashchat-main-message-input').length) {
    console.log("existCondition6 Exists!!");
	
    clearInterval(existCondition6);
	document.getElementById("topcmm-123flashchat-main-message-input").value='salam';
   // doTheRestOfTheStuff(parameters);
 }
}, 2000); // check every 100ms
//existCondition7
var existCondition7 = setInterval(function() {if ($('#topcmm-123flashchat-main-send-msg-btn').length) { console.log("existCondition7 Exists!!");clearInterval(existCondition7);document.querySelector("#topcmm-123flashchat-main-send-msg-btn").click();
   // doTheRestOfTheStuff(parameters);
 }
}, 1000); // check every 100ms


  */










// inja har code i benivis i ro 10000  bar tekrar mikone va sorate tekrar ham  4000

// ----- zamane colesh am injast
 }, t*4000)
}(i)) 
