



const heading= document.querySelector("h1");

const bt=document.querySelectorAll("button");
const body=document.querySelector("body");
 
for(bts of bt){
    bts.addEventListener("click",()=>{
        const newc=generator();
         heading.style.color=newc;
        
    }
);

}

body.addEventListener("keydown",function(event){
     
    if(event.code=="KeyB"){
        console.log("k");
        const newc=generator();
         heading.style.color=newc;
        
    }
})

const generator=function(){
    const colors=["pink","burlywood","white"];

    const final=colors[Math.floor(Math.random()*3)];
    return final;
}























let data=function(datas){
return new Promise((resolve,reject )=>{
    if (datas>1){
       resolve(succes());
    }
    else{ reject(fail())};
}
)
};
succes=()=>{
    console.log("aba");
}
fail=()=>{
    console.log("fsil");
}
