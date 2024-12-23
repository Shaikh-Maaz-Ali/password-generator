let pass = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passEl1 = document.getElementById("p1")
let passEl2 = document.getElementById("p2")
let passLe = document.getElementById("pass-len")

function gen() {
    passEl1.textContent = "" 
    passEl2.textContent = "" 
    let length = parseInt(passLe.value);
    if(isNaN (length) || length < 6 || length > 16){
        alert("please enter a valid password length between 6 amd 16");
        return;
    }
    
    for (let i = 0; i < length; i++) {
       let rndm1 = Math.floor( Math.random()*pass.length) 
       let rndm2 = Math.floor( Math.random()*pass.length)
       passEl1.textContent += pass[rndm1] 
       passEl2.textContent += pass[rndm2] 
    }
   
    
}