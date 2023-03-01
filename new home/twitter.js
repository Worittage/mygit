const nameInput = document.querySelector(".blockInputsOne");
const tweetInput = document.querySelector(".blockInputsTwo");
const tweetButton = document.querySelector(".blockInputsButton");
const tweetSection = document.querySelector(".sectionOne");


tweetButton.addEventListener("click", () => {
 
  const name = nameInput.value.trim();
  const tweet = tweetInput.value.trim();

  
  if (!name || !tweet) {
    alert("Please enter your name and tweet before tweeting!");
    return;
  }

  
  const date = new Date().toLocaleString();
  const newTweet = `
    <div class="blockOne">
      <div class="blockOneP">
        <p class="blockOneName">${name}</p>
        <p class="blockOneDate">${date}</p>
      </div>
      <h1 class="blockOneTitle">${tweet}</h1>
      <div class="blockOneBottom">
        <p class="blockOneNr">0</p>
        <p class="blockOneLike">likes</p>
        <img src="./img/inima.png" alt="" />
      </div>
    </div>
  `;

 n
  tweetSection.insertAdjacentHTML("afterbegin", newTweet);

  
  nameInput.value = "";
  tweetInput.value = "";
});
