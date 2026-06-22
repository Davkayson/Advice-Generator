const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceId = document.getElementById('dice-id');
const url = "https://api.adviceslip.com/advice";
const section = document.querySelector('section')

async function getAdvice() {
  let isLoading = true;
  adviceText.innerText = 'Loading';
  adviceId.parentElement.style.display = 'none';
  try {
    const res = await fetch(url)

    if (res.status === 200) {
      isLoading = false
      const { slip: { id, advice } } = await res.json();
      adviceId.parentElement.style.display = 'block';
      adviceId.innerText = id;
      adviceText.innerText = advice;
    } else {
      adviceText.innerText = "sorry!, something went wrong"
      adviceId.parentElement.style.display = 'none';
    }
  } catch (error) {
    isLoading = false;
    adviceText.innerText = "sorry!, something went wrong"
    adviceId.parentElement.style.display = 'none';
  }
}
getAdvice();
diceId.addEventListener('click', getAdvice);