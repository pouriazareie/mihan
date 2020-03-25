
for (var i=0; i<10000; i++) (function(t) {
  window.setTimeout(function() {

 

//existCondition1
var existCondition1 = setInterval(function() {
 if ($('#topcmm-123flashchat-mainview-top-settings-btn').length) {
    console.log("existCondition1 Exists!");
    clearInterval(existCondition1);
	document.getElementById("topcmm-123flashchat-mainview-top-settings-btn").click();
 }
}, 100); // check every 5000ms
//existCondition2
var existCondition2 = setInterval(function() {
 if ($('#topcmm-123flashchat-settings-menuitem-signin').length) {
    console.log("existCondition2 Exists!!");
    clearInterval(existCondition2);
document.getElementById("topcmm-123flashchat-settings-menuitem-signin").click();
 }
}, 100); // check every 5000ms


//existCondition3as2
var existCondition3as2 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-username-input').length) {
    console.log("existCondition3as2 Exists!!");
    clearInterval(existCondition3as2);
	document.getElementById("topcmm-123flashchat-loginview-username-input").value='.';
 }
}, 100); // check every 5000ms
//OK

//existCondition3
var existCondition3 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-username-input').length) {
    console.log("existCondition3 Exists!!");
    clearInterval(existCondition3);
		document.getElementById("topcmm-123flashchat-sign-in-guest-checkbox-block").style="display: show;";
 }
}, 100); // check every 100ms





//existCondition4
var existCondition4 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-username-input').length) {
    console.log("existCondition4 Exists!!");
    clearInterval(existCondition4);
	document.getElementById("topcmm-123flashchat-loginview-username-input").value=Math.random().toString(24).substr(2, 3);
 }
}, 100); // check every 5000ms



//existCondition3as1
var existCondition3as1 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-guest-checkbox').length) {
    console.log("existCondition3as1 Exists!!");
    clearInterval(existCondition3as1);
	document.getElementById("topcmm-123flashchat-loginview-guest-checkbox").click();
 }
}, 100); // check every 100ms


//OK
//existCondition5
var existCondition5 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-login-btn').length) {
    console.log("existCondition5 Exists!!");

    clearInterval(existCondition5);
	document.getElementById("topcmm-123flashchat-loginview-login-btn").click();
   // doTheRestOfTheStuff(parameters);
 }
}, 100); // check every 100ms



// ----------   code neveshtan dar text box va click button dar sahfe omomi ghyre faal
     
     
     
     
     
     
     
     
     
/*
//existCondition6
var existCondition6 = setInterval(function() {
 if ($('#topcmm-123flashchat-main-message-input').length) {
    console.log("existCondition6 Exists!!");
	
    clearInterval(existCondition6);
	document.getElementById("topcmm-123flashchat-main-message-input").value=Math.random().toString(24).substr(1, 2);
    doTheRestOfTheStuff(parameters);
 }
}, 1000); 



//existCondition7
var existCondition7 = setInterval(function() {if ($('#topcmm-123flashchat-main-send-msg-btn').length) { console.log("existCondition7 Exists!!");clearInterval(existCondition7);document.querySelector("#topcmm-123flashchat-main-send-msg-btn").click();doTheRestOfTheStuff(parameters)}}, 1000); 

    */











// ----------   timmer

 }, t*3500)
}(i)) 
