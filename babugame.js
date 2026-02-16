let gamesequence=[];
let usersequence=[];
let gameState=false;
let level=0;
 
document.addEventListener("keypress",function(event){
     
    if(event.code=="KeyB"  ){
     if(gameState==false){
        gameState=true;
         
         
        levelup();
     }
    }})

function levelup(){
    
level++;
const display=document.querySelector("h3");
display.innerText=`babu mana level ${level}`; 

 
let flashing=randomSelect();
console.log(("#"+flashing));
gamesequence.push(flashing);
flash(flashing);
userclick();
 

}

const randomSelect=function(){
    const num=["one","two","three","four"];
   let flasingButton=num[Math.floor(Math.random()*4)];
    
   return flasingButton;
};

const flash=(flashingButton)=>{
    let button=document.querySelector("#"+flashingButton);
    button.classList.toggle("flash");
    setTimeout(function(){
        button.classList.toggle("flash")
    },300);

};
const userflash=(targeting)=>{
    let button=document.querySelector("#"+targeting);
    button.classList.toggle("userflash");
    setTimeout(function(){
        button.classList.toggle("userflash")
    },100);
}

const userclick=()=>{
    let colorButtons=document.querySelectorAll(".b");
    let display=document.querySelector("h3");
for(button of colorButtons){
    button.addEventListener("click",function(event){
        usersequence.push(this.id);
        userflash(event.target.id);
        console.log(gamesequence);
        console.log(usersequence);

        if(verify()){
         display.innerText=`babu mana level ${level}`; 
          
          


        } 


        
        
        
    })
}
}
const verify=()=>{
    
    if(usersequence.length==gamesequence.length){
    if(usersequence[usersequence.length-1]==gamesequence[gamesequence.length-1]){
        levelup();
        

    }
    else{
        console.log("fail");
         

    }
}
     
}