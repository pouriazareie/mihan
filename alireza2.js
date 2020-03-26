for (var i=0; i<10000; i++) (function(t) {
  window.setTimeout(function() {




var deleteCookie = function (name)
{
  document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};



//existCondition1
var existCondition1 = setInterval(function() {
 if ($('#topcmm-123flashchat-mainview-top-settings-btn').length) {
    console.log("existCondition1 Exists!");
    clearInterval(existCondition1);
	//document.getElementById("topcmm-123flashchat-mainview-top-settings-btn").click();
	document.getElementById("topcmm-123flashchat-settings-menuitem-logout").click();
 }
}, 1000); 


//existCondition2
var existCondition2 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-username-input').length) {
    console.log("existCondition3as2 Exists!!");
    clearInterval(existCondition2);
	document.getElementById("topcmm-123flashchat-loginview-username-input").value=Math.random().toString(24).substr(2, 3);
document.querySelector("#topcmm-123flashchat-loginview-guest-checkbox").checked=true;

 }
}, 1000); 






//existCondition3
var existCondition3 = setInterval(function() {
 if ($('#topcmm-123flashchat-loginview-login-btn').length) {
    console.log("existCondition5 Exists!!");

    clearInterval(existCondition3);
	document.getElementById("topcmm-123flashchat-loginview-login-btn").click();

    doTheRestOfTheStuff(parameters);
 }
}, 1000); 



//existCondition4
var existCondition4 = setInterval(function() {
	
	document.querySelector("#topcmm-123flashchat-roomlist-container > div:nth-child(1)").click();
	if ($('#topcmm-123flashchat-roomlist-container > div:nth-child(1)').length){ 
		
		console.log("existCondition4 Exists!!");
		
		

		
			document.querySelector("#topcmm-123flashchat-roomlist-container > div:nth-child(1)").click();
				clearInterval(existCondition4);
		}
	}, 1000); 

/*



//existCondition5
var existCondition5 = setInterval(function() {
	
	document.querySelector("#topcmm-123flashchat-roomlist-container > div:nth-child(1)").click();
	if ($('#topcmm-123flashchat-main-send-msg-btn').length){ 
		
		console.log("existCondition5 Exists!!");
		
		

		
			document.getElementById("topcmm-123flashchat-main-message-input").value='خوبید';

		document.querySelector("#topcmm-123flashchat-main-send-msg-btn").click();
				clearInterval(existCondition5);
		}
	}, 1000); 
*/



}, t*3000)}(i)) 
