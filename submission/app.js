const listSkills = [
  {
    name: "HTML",
    src: "./assets/image/html.svg",
  },
  {
    name: "CSS",
    src: "./assets/image/css.svg",
  },
  {
    name: "JScript",
    src: "./assets/image/js.svg",
  },
  {
    name: "React",
    src: "./assets/image/react.svg",
  },
  {
    name: "Vue",
    src: "./assets/image/vue.svg",
  },
  {
    name: "Laravel",
    src: "./assets/image/laravel.png",
  },
];

listSkills.forEach((skill) => {
  const skillsWrapper = document.querySelector("#skills .wrapper");
  const img = document.createElement("img");
  img.src = skill.src;
  img.alt = skill.name;

  const p = document.createElement("p");
  p.appendChild(document.createTextNode(skill.name));

  const section = document.createElement("section");
  section.setAttribute("class", "card card-skill");
  section.appendChild(img);
  section.appendChild(p);

  skillsWrapper.appendChild(section);
});

// Hamburger Menu
const menuToggle = document.querySelector('nav .menu-toggle input')
const nav = document.querySelector('nav ul')

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide')
    document.querySelector('nav .menu-toggle').classList.toggle('slide')
})