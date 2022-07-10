const textDisplay = document.getElementById('type')
const phrases = ['UI/UX DESIGNER.', 'FRONT END DEV.','3-D MODELLER.','VISUAL ARTIST.']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {
       
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }
         
   
    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }



     if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
    }
    
    if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i == phrases.length) {
            i=0
        }
    }

}

const spedUp = Math.random() * (80-50) + 50
const normalSpeed = Math.random() * (300-200) + 200
const time = isEnd ? 2000 : isDeleting ? spedUp :normalSpeed
setTimeout(loop, time)


}

loop()

// NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// contact
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
