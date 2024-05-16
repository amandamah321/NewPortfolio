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
/*
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

typingLetter(title);*/

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

/*****Animation Aside***/

const sections = document.querySelectorAll(".animationAside");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 700;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show_animation");
    }
  });
};

/****Projects Display***/

var data = [
  {
    title: "Quiz",
    textDesc: "This project was crafted utilizing JavaScript, users are able to check their knoledge about the environment.",
    skill: ["html", "css", "js"],
    imageUrl: "quiz",
  },
  {
    title: "Real State Agency Website",
    textDesc: "This project was crafted as an Angular project, designed to enhance proficiency in using Angular components",
    skill: ["Angular", "js", "css"],
    imageUrl: "realstate",
  },
  
  {
    title: "E-players Website",
    textDesc: "This project was built using figma and javaScript.",
    skill: ["html", "css", "js"],
    imageUrl: "eplayers",
  },  
  {
    title: "React Simple Calculador",
    textDesc: "This project was built utilizing React components, designed specifically to improve proficiency in React functions",
    skill: ["css", "react", "typescript"],
    imageUrl: "calculador",
  },

  {
    title: "English Dictionary",
    textDesc:
      "This is a project meticulously crafted with JavaScript, leveraging an API to fetch data and seamlessly deliver it to the user.",
    skill: ["html", "css", "js"],
    imageUrl: "dictionary",
  },

  {
    title: "ClothesMe.com Website",
    textDesc: "An Ecommerce project made by using Html and its validations",
    skill: ["html", "css", "js"],
    imageUrl: "ecommerce",
  },
  
  
];

function displayProjects() {
  data.map((element) => {
    let containerEl = document.querySelector(".project-section");

    let divProject = document.createElement("div");

    divProject.innerHTML = `
    
            <div class="project-container">
                <img class="project-image" src="./assets/projects/${element.imageUrl}.png" alt="">

                <div class="project-description">

                    <h2>${element.title}</h2>
                    <p>${element.textDesc}</p>
                    
                    <div class="skills">
                        <img class="skill" src="./assets/languagesImg/${element.skill[0]}.png" alt="">
                        <img class="skill" src="./assets/languagesImg/${element.skill[1]}.png" alt="">
                        <img class="skill" src="./assets/languagesImg/${element.skill[2]}.png" alt="">
                    </div>
                    
                </div>

            </div>
    `;

    containerEl.appendChild(divProject);
  });
}

displayProjects();


/*******************Typing and Erasing Words*****************/

const typeText = document.querySelector(".typed-text");
const words = ["Front-end Developer", "Back-end Developer", "Full-stack Developer", "Software Engineer"];
const typingDelay = 100;
const erasingDelay = 100;
const newLetterDelay = 300;
let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {

  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typeText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typeText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }

    setTimeout(type, typingDelay + 100);
  }
}