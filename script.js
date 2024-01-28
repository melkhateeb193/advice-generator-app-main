document.addEventListener('DOMContentLoaded',()=>{
let btn = document.getElementById('btn');
let Advice = document.getElementById('Advice');
let adviceNumber = document.getElementById('adviceNumber');


let getdata = async()=>{
try{
const url = `https://api.adviceslip.com/advice`;
let response = await fetch(url);
if(response.ok){
let finialResponse = await response.json();
Advice.textContent=finialResponse.slip.advice ;
adviceNumber.textContent = finialResponse.slip.id; ; 

}else{
console.error('Error:', response.status, response.statusText);
}
}catch{
console.error('Error fetching data:', error);
}
}
getdata()
btn.addEventListener('click',()=>{
    getdata()
})

})

