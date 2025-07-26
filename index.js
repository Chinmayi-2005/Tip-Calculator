const btnEl=document.getElementById("calculate");
const billEl=document.getElementById("bill");
const tipEl=document.getElementById("tip");
const total=document.getElementById("total");

function calculateTotal(){
    const billvalue=billEl.value;
    const tipvalue=tipEl.value;
    const totalvalue=billvalue *(1 + tipvalue / 100);
    /*console.log(totalvalue);*/
    total.innerText = totalvalue.toFixed(2);
    
}


btnEl.addEventListener("click", calculateTotal);