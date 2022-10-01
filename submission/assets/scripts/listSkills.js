let listSkills = [
  {
    name: "HTML",
    src: "./assets/image/html.svg",
  },
  {
    name: "CSS",
    src: "./assets/image/css.svg",
  },
  {
    name: "Javascript",
    src: "./assets/image/js.svg",
  },
  {
    name: "HTML",
    src: "./assets/image/html.svg",
  },
  {
    name: "CSS",
    src: "./assets/image/css.svg",
  },
  {
    name: "Javascript",
    src: "./assets/image/js.svg",
  },
];

listSkills.forEach((skill) => {
  let sectionSkills = document.getElementById("sectionSkills");

  let img = document.createElement("img");
  img.src = skill.src;

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(skill.name));

  let section = document.createElement("section");
  section.setAttribute("class", "card card-skill");
  section.appendChild(img);
  section.appendChild(p);

  sectionSkills.appendChild(section);
});

export default listSkills;

// let skills = document.getElementById("skills");
// let div = document.createElement("div")
// div.setAttribute("class", "flex");
// div.setAttribute("id", "sectionSkills");
// console.log(div)

// console.log(skills);

// skills.appendChild(div)