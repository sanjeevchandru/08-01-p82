document.write("46.to check two given non-negative integers if one (not both) is a multiple of 7 or 11"+"<br>");
function test46(a,b){
    if(a%7==0 || b%7==0 || a%11==0 || b%11==0){
        return true;
    }
    return false;
}
document.write("The numbers are :21,10  ,Ans:"+test46(21,10)+"<br>");
document.write("The numbers are :12,13 , Ans:"+test46(12,13)+"<br><br>");