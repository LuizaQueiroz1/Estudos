let products = {
  data: [
    {
      productName: "Regular white T-Shirt",
      category: "Topwear",
      price: "30",
      image: "./assets/white-tshirt.png",
    },
    {
      productName: "Begie Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "./assets/white-skirt.png",
    },
    {
      productName: "Sporty SmartWhatch",
      category: "Watch",
      price: "30",
      image: "./assets/sport-smartwatch.png",
    },

    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "30",
      image: "./assets/basic-knittedtop.png",
    },
    {
      productName: "Black Leather jacket",
      category: "Jacket",
      price: "30",
      image: "./assets/black-leatherjacket.png",
    },

    {
      productName: "Black Leather jacket",
      category: "Jacket",
      price: "30",
      image: "./assets/black-leatherjacket.png",
    },
  ],
};

for (let i of products.data) {
  //create card
  let card = document.createElement("div");

  //card should have category
  card.classList.add("card", i.category, "hide");

  //image div

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  //product name

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  //price
  let price = document.createElement("h6");
  price.classList.add("product-price");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (parameter same as category)

let buttons = document.querySelectorAll(".button-value");

buttons.forEach((element) => {
  element.addEventListener("click", (event) =>
    filterProduct(event.target.value)
  );
});

function filterProduct(value) {
  console.log(value);

  buttons.forEach((button) => {
    if (value === button.value) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards

  let elemets = document.querySelectorAll(".card");
  //loop through all cards
  console.log(elemets);

  elemets.forEach((element) => {
    //display all cards in 'all' button click

    if (value == "All") {
      element.classList.remove("hide");
    } else {
      //check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other
        element.classList.add("hide");
      }
    }
  });
}

//search button click

document.getElementById("search").addEventListener("click", () => {
  //inicializations

  let searchInput = document.getElementById("search-input").value;
  let elemets = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements

  elemets.forEach((element, index) => {
    //check if it includes the search value

    if (element.innerHTML.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//inialize display all products

window.onload = () => {
  filterProduct("All");
};
