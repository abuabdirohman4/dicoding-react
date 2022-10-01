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
    let skillsWrapper = document.querySelector("#skills .wrapper");
    let img = document.createElement("img");
    img.src = skill.src;
    img.alt = skill.name;
  
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(skill.name));
  
    let section = document.createElement("section");
    section.setAttribute("class", "card card-skill");
    section.appendChild(img);
    section.appendChild(p);
  
    skillsWrapper.appendChild(section);
  });