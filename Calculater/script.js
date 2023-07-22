let buttons= document.querySelectorAll("button");
let input=document.getElementById("input");

let str="";
let arr=Array.from(buttons);

arr.forEach((btn)=>{
    // console.log(btn);
      btn.addEventListener("click",(dets)=>{
            if(dets.target.innerHTML === "=")
            {
                str=eval(str);
                input.value =str;
            }
            else if(dets.target.innerHTML === "AC")
            {
                str = "";
                input.value =str;
            }
            else if(dets.target.innerHTML === "DEL")
            {
                str = str.substring(0,str.length-1);
                input.value=str;
            }
           else
           {   
            str+=dets.target.innerHTML;
            input.value = str;
           }          
      })
})