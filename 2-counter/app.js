// Nitin Kumar
// uses 'animals' list

// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns)

// for (let i = 0; i < btns.length; i++) {
//   // btn.addEventListener()
// }
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
      // count = count * 2
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = animals[Math.abs(count)%animals.length];
  });
});
