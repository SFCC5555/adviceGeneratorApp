let adviceButton=document.querySelector(".adviceLogoContainer");
let adviceText=document.querySelector(".adviceText");
let adviceNumber=document.querySelector(".adviceNumber")

adviceButton.addEventListener("click", getAdvice);

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {

    adviceNumber.innerText="ADVICE # "+data.slip.id;
    adviceText.innerText=`"${data.slip.advice}"`;

  })
}

getAdvice();

