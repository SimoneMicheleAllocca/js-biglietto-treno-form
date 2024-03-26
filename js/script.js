const sendBtn = document.getElementById("send");
    console.log(sendBtn);

sendBtn.addEventListener("click", function(){


const kmInputElem = document.getElementById("km");
    console.log(kmInputElem);

const kmValue = kmInputElem.value;
    console.log(kmValue);

    const ageInputElem = document.getElementById("user-age");
    console.log(ageInputElem);

const ageValue = ageInputElem.value;
    console.log(kmValue);

    const price = kmValue * 0.21; 
    console.log(price);

let discount = " "; 

if(ageValue < 18){
    discount = price * 0.20;
} else if (ageValue > 65) {
    discount = price * 0.40 ;
} else {
    discount = " ";
}

let priceDiscount = price - discount;
console.log(priceDiscount);

const finalPrice= priceDiscount.toFixed(2);
    resultMessage = "Il tuo biglietto costerà: " + finalPrice;

    document.getElementById("testo-biglietto").innerHTML = resultMessage;

});