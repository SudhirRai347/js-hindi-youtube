// Immedeately Invoked Function Expression(IIFE)
(function chai(){
    console.log(`DB CONNECTED`);
}) ();

((name)=>{
console.log(`DB CONNECTED ${name}`);
}) ('Hitesh')