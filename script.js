/**Project**/

const panels = document.querySelectorAll(".panel");

panels.forEach((panels) => {
  panels.addEventListener("click", () => {
    removeAction();
    panels.classList.add("active");
  });
});

function removeAction() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

/**Typying effect**/

function typingLetter(element) {
  const arrText = element.innerHTML.split("");
  element.innerHTML = "";

  arrText.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, 100 * i);
  });
}

const title = document.querySelector(".typing");

typingLetter(title);

/****Hamburger Menu******/

const menu_ham = document.querySelector(".fa-solid.fa-bars");

menu_ham.addEventListener("click", () => {
  menu_ham.classList.toggle("active");

  const ham_content = document.querySelector(".ham_content");

  if (menu_ham.classList.contains("active")) {
    ham_content.innerHTML = `
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutMe">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      `;
  } else {
    ham_content.innerHTML = "";
  }
});


/*****Animation***/
