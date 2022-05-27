 //Cuando carga la página iniciamos la siguiente función automáticamente
 
 window.onload = () => {
    let randomNumber = Math.random() *10;
    document.querySelector("#excuse").innerHTML = generateExcuse();
    console.log("Hola! " + randomNumber);
 };

 let generateExcuse = () => {


    return "My dog eat my homework";
 }