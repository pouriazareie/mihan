t1 = setInterval(function(){
var mydiv = $('#topcmm-123flashchat-main-chat > div.topcmm-123flashchat-common-chat-panel-input-box > div > div > span > span > input');
if (mydiv.length > 0) {
console.log('elemnt1 exists');
$("#topcmm-123flashchat-main-chat > div.topcmm-123flashchat-common-chat-panel-input-box > div > div > span > span > input").attr("autocomplete", "off");
clearInterval(t1);
}
}, 2000);
