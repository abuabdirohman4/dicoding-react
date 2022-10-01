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
    let sectionSkills = document.getElementById("sectionSkills");
  
    let img = document.createElement("img");
    img.src = skill.src;
  
    let p = document.createElement("p");
    p.appendChild(document.createTextNode(skill.name));
  
    let div = document.createElement("div");
    div.setAttribute("class", "card card-skill");
    div.appendChild(img);
    div.appendChild(p);
  
    sectionSkills.appendChild(div);
  });