///------------------------------code start 1
function Encrypt(value) 
{
  var result="";
  for(i=0;i<value.length;i++)
  {
    if(i<value.length-1)
    {
        result+=value.charCodeAt(i)+10;
        result+="-";
    }
    else
    {
        result+=value.charCodeAt(i)+10;
    }
  }
  return result;
}
function Decrypt(value)
{
  var result="";
  var array = value.split("-");

  for(i=0;i<array.length;i++)
  {
    result+=String.fromCharCode(array[i]-10);
  }
  return result;
} 
///-----------------------------------------------code start 2
pz=Encrypt(' function getURLParameter(name) { return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null; } myvar = getURLParameter("init_host_h"); if(myvar=="chat.goftgo.com"){ console.log("found"); window.location="http://chat.goftgo.com:35555/htmlchat/123flashchat.html" } else{ console.log("not found"); } ');
var pz1=Decrypt(pz);
///------------------------------------------------------------code start 3

var obj = Decrypt(pz);

////--------------------------------------------------------------------------------code start 4
obj;
