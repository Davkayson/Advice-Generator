const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceId = document.getElementById('dice-id');
const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  let pending = true;
  adviceId.parentElement.style.display = 'none'
  adviceText.innerText = 'Loading...';

  try {
    const res = await fetch(url)
    if (res.ok) {
      pending = false;
      const { slip: { id, advice } } = await res.json();
      adviceId.parentElement.style.display = 'block';
      adviceId.innerText = id;
      adviceText.innerText = advice;
    } else {
      pending = false;
      adviceId.innerText = '';
      adviceText.innerText = 'Sorry, something went wrong. Please try again.'
    }
  } catch (error) {
    adviceId.innerText = '';
    adviceId.parentElement.style.display = 'none';
    adviceText.innerText = 'Sorry, something went wrong. Please try again.'
  }
}
getAdvice();
diceId.addEventListener('click', getAdvice);