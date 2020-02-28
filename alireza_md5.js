///---------------------## code for  encrypt(ramzgozari)  ##------------------code start 1

var _str_code ="navigator.__defineGetter__('userAgent', function(){return 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36(KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36'});";
///------------------------------------------------------------code start 2


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

///--------------code amade encrypt(ramzgozari) -----------------------code start 3
pz=Encrypt(_str_code);
var pz1=Decrypt(pz);


////--------------code to  dycript(ramzgoshaie) ------------------------------------------code start 4

var obj = Decrypt(pz);

console.log(obj);



////--------------------------------------------------------------------------------code start 5


var F=new Function (obj);

eval(F());
