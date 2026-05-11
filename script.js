const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceId = document.getElementById('dice-id');
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const response = await fetch(url);
  const { slip: { id, advice } } = await response.json();
  // const body = await response.json();
  // const slip = body.slip;
  // const advice = body.slip.advice;
  // const id = body.slip.id;
  // console.log(body);
  // console.log(slip);
  // console.log(advice);
  // console.log(id);
  adviceId.innerText = id;
  adviceText.innerText = advice;
}
getAdvice()
diceId.addEventListener('click', getAdvice);