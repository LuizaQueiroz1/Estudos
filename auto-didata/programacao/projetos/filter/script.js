let filterComponents = {
  data: [
    {
      text: "How to start",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nemo praesentium fugiat hic deserunt maiores quibusdam ab nihil, tempore alias reiciendis at. Ut, corrupti! Tempora nam corrupti aliquid blanditiis atque.",
      button: "More",
      icon: "./assets/graduation-cap.svg",
      link: "./other-page.html",
    },
    {
      text: "Issues",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nemo praesentium fugiat hic deserunt maiores quibusdam ab nihil, tempore alias reiciendis at. Ut, corrupti! Tempora nam corrupti aliquid blanditiis atque.",
      button: "More",
      icon: "./assets/bug.svg",
      link: "./other-page.html",
    },
    {
      text: "FAQ",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nemo praesentium fugiat hic deserunt maiores quibusdam ab nihil, tempore alias reiciendis at. Ut, corrupti! Tempora nam corrupti aliquid blanditiis atque.",
      button: "More",
      icon: "./assets/question.svg",
      link: "./other-page.html",
    },
    {
      text: "Coding",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nemo praesentium fugiat hic deserunt maiores quibusdam ab nihil, tempore alias reiciendis at. Ut, corrupti! Tempora nam corrupti aliquid blanditiis atque.",
      button: "More",
      icon: "./assets/code.svg",
      link: "./other-page.html",
    },
  ],
};

let indice = 0;

for (let i of filterComponents.data) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  card.appendChild(cardContainer);

  let h2 = document.createElement("h2");
  h2.innerHTML = i.text;

  let para = document.createElement("p");
  para.innerHTML = i.paragraph;

  let a = document.createElement("a");

  a.innerHTML = i.button;

  let img = document.createElement("img");
  img.setAttribute("src", i.icon);

  cardContainer.appendChild(img);

  cardContainer.appendChild(h2);
  cardContainer.appendChild(para);
  cardContainer.appendChild(a);

  document.getElementById("cards").appendChild(card);

  a.addEventListener("click", () => {
    a.href = "other-page.html";
  });
}

const filterElement = document.getElementById("input-search");

const cards = document.querySelectorAll(".card");

filterElement.addEventListener("input", filterCards);

console.log(cards);

function filterCards() {
  if (filterElement.value != "") {
    for (let card of cards) {
      let title = card.querySelector("h2");

      title = title.textContent.toLowerCase();
      console.log(title);

      let filterText = filterElement.value.toLowerCase();
      console.log(filterText);

      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "block";
    }
  }
}
