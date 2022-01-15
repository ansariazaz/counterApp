

document.addEventListener("DOMContentLoaded", function () {
    // let count = document.querySelector('.display')
    // let add = document.querySelector('.add')
    // let subtract = document.querySelector('.subtract')
    // let reset = document.querySelector('.reset')
    
    // reset.addEventListener('click', () => {
    //     count.innerHTML=0;
    //     if(count.innerHTML=0){
    //         count.style.color="white";
    //        }
    // })

    // add.addEventListener('click', () => {
    //     count.innerHTML++;
    //     if(count.innerHTML > 0){
    //         count.style.color="yellow";
    //        }
    // })
    // subtract.addEventListener('click', () => {
    //     count.innerHTML--;
    //     if(count.innerHTML < 0){
    //      count.style.color="red";
    //     }
    // })
   

    let count = document.querySelector('.display')
    let buttons = document.querySelector('.buttons')

    buttons.addEventListener('click',(e)=>{
        if(e.target.classList.contains("add")){
           count.innerHTML++;
           setColor();
        }
        if(e.target.classList.contains("subtract")){
            count.innerHTML--;
            setColor();
         }
         if(e.target.classList.contains("reset")){
            count.innerHTML=0;
            setColor();
         }
    })

     const setColor=()=>{
         if(count.innerHTML>0){
            count.style.color="yellow";
         }else if(count.innerHTML<0){
            count.style.color="red";
         }else{
            count.style.color="white"; 
         }
     }

});