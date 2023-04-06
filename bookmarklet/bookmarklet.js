/*
FINAL PRODUCT!!!!!!!!!
*/
import Prism from 'prismjs';
function revealPassword() {
  var myPassword = document.querySelectorAll("input[type=password]");
  for (var element = 0; element < myPassword.length; element++) {
    myPassword[element].type = "text";
    myPassword[element].setAttribute('previously', "password");
  }
}
function hidePassword() {
  var myPassword = document.querySelectorAll("input[previously='password']");
  for (var element = 0; element < myPassword.length; element++) {
    myPassword[element].type = "password";
    
  }
}


if(window.hideStatePassword){
  hidePassword();
  window.hideStatePassword=0

}
else{
  revealPassword();
  window.hideStatePassword=1
}


//javascript:(function()%7Bfunction%20revealPassword()%20%7B%0A%20%20var%20myPassword%20%3D%20document.querySelectorAll(%22input%5Btype%3Dpassword%5D%22)%3B%0A%20%20for%20(var%20element%20%3D%200%3B%20element%20%3C%20myPassword.length%3B%20element%2B%2B)%20%7B%0A%20%20%20%20myPassword%5Belement%5D.type%20%3D%20%22text%22%3B%0A%20%20%20%20myPassword%5Belement%5D.setAttribute('previously'%2C%20%22password%22)%3B%0A%20%20%7D%0A%7D%0Afunction%20hidePassword()%20%7B%0A%20%20var%20myPassword%20%3D%20document.querySelectorAll(%22input%5Bpreviously%3D'password'%5D%22)%3B%0A%20%20for%20(var%20element%20%3D%200%3B%20element%20%3C%20myPassword.length%3B%20element%2B%2B)%20%7B%0A%20%20%20%20myPassword%5Belement%5D.type%20%3D%20%22password%22%3B%0A%20%20%20%20%0A%20%20%7D%0A%7D%0A%0A%0Aif(window.hideStatePassword)%7B%0A%20%20hidePassword()%3B%0A%20%20window.hideStatePassword%3D0%0A%0A%7D%0Aelse%7B%0A%20%20revealPassword()%3B%0A%20%20window.hideStatePassword%3D1%0A%7D%7D)()%3B

// hidePassword();

/**
 * WORKS GREAT!
 * INITIAL WORKING FUNCTION
 * Function that changes all instances of a password type to be text type.
 * changes from type="password" to type="text"
//  */
// function passwordToText() {
//   var passwordInputs = document.querySelectorAll("input[type=password]");
//   for (
//     var elem = 0;
//     elem < passwordInputs.length;
//     elem++ /*iterates through 
//     password inputs until ALL of them are called*/
//   ) {
//     passwordInputs[elem].type = "text";
//   }
// }
// passwordToText(); /*calls function and makes it work */

// javascript:(function()%7Bfunction%20changePasswordToText()
//%20%7Bvar%20passwordInputs%20%3D%20document.querySelectorAll
//(%22input%5Btype%3Dpassword%5D%22)%3Bfor%20(var%20i%20%3D%200
//%3B%20i%20%3C%20passwordInputs.length%3B%20i%2B%2B)%20%7B
//passwordInputs%5Bi%5D.type%20%3D%20%22text%22%3B%7D%7Dchange
//PasswordToText()%7D)()
