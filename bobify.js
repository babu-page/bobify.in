//changing head title//
const titleofmain=document.querySelector("title");

const id=setInterval(()=>{
let heading=randomreturns();
titleofmain.innerText=heading;

},7000);

const randomreturns=()=>{
    const arr=["Bobify","Fan Made for lion","jai babu","babu ante babu ey"];
    let word=arr[Math.floor(Math.random()*4)];
    return word;
}




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

















const inn=document.querySelector("input");
const btn=document.querySelector("button");
const div=document.querySelector("div");
const pp=document.querySelector("p");
 const h11=document.querySelector("h1");
pp.addEventListener("click",function(){
    alert("Bhai");
})
h11.addEventListener("click",function(){
    alert("h1");
})


btn.addEventListener("click",function(){
 
    
    const h=document.createElement("h2");
    h.innerText=inn.value;
    div.appendChild(h);
    inn.value="";

})



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
