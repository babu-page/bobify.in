//changing head title//
const titleofmain=document.querySelector("title");

const id=setInterval(()=>{
let heading=randomreturns();
titleofmain.innerText=heading;

},7000);

const randomreturns=()=>{
    const arr=["Bobify","made for lion","jai babu","babulake babu","super star","ssmb"];
    let word=arr[Math.floor(Math.random()*arr.length)];
    return word;
}
