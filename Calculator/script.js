let buttons=document.querySelectorAll("button");
let table=document.getElementById("table");
let input=document.querySelector('input');
let c_btn=document.querySelector("#c-btn");

table.addEventListener('click',(event)=>{
   if (event.target.tagName !== 'BUTTON') return;
   if (event.target.value === 'C')
   {
    input.value='';
   }
   else if(event.target.value==='=')
   {
    try{
        input.value=eval(input.value);
    }
    catch(err){
        alert("Please enter a valid expression!!!");
        input.value='';
    }
   }
   else
   input.value+=event.target.value;
}
);