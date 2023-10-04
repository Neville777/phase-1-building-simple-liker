// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Select the heart elements
const hearts = document.querySelectorAll(".like-glyph");

// Add click event listeners to each heart

hearts.forEach((heart)=> {
  heart.addEventListener("click", () =>{
    mimicServerCall()
    .then(()=>{
      // Change the heart to a full heart
      heart.classList.toggle ("activated-heart");
      heart.classList.toggle ("like-glyph");

      if(heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
      } else {
        heart.textContent = EMPTY_HEART;
      }
    })

  .catch(()=>{
    const modal = document.getElementById("modal");
    const modalMessage = modal.querySelector("#modal-message");

    // Display the error modal
    modal.classList.remove("hidden");

    // Use set Timeout to hide the modal after 3 secs
    setTimeout(()=>{
      modal.classList.add("hidden");
    },3000)
  })
  })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
