//your JS code here. If required.
const text=document.getElementById("text");
const delayedtimer=document.getElementById("delay");
const button=document.getElementById("btn");
const outputDiv=document.getElementById("output");


button.addEventListener("click", displayMsg);

// function click(){
// 	console.log(delayedtimer.value, typeof delayedtimer.value);
// }

async function displayMsg(){
	const message=text.value;
	const delay=parseInt(delayedtimer.value);

	const promVal=new Promise(resolve=>{
    setTimeout(()=>{
		resolve(message);
	},delay) 
	});

	
	promVal.then((message) => {
		outputDiv.innerText=message;
    }).catch((error) => {
  console.log(error); // Print the error message
});
	
}