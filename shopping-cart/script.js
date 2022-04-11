const DUMMY_PRODUCTS = [
  {
    brand: "Timberland",
    type: "Cotton Trench Coat",
    price: "₱ 6, 670",
    imageUrl: "../assets/item.png",
  },
  {
    brand: "Seven Zero Five",
    type: "T-shirt",
    price: "₱ 705",
    imageUrl: "../assets/item2.png",
  },
  {
    brand: "Haut",
    type: "Baseball Cap",
    price: "₱ 595",
    imageUrl: "../assets/item3.png",
  },
  {
    brand: "MTL",
    type: "Baseball Cap",
    price: "₱ 545",
    imageUrl: "../assets/item4.png",
  },
  {
    brand: "Replay",
    type: "Cap with bill in cotton",
    price: "₱ 645",
    imageUrl: "../assets/item5.png",
  },
  {
    brand: "Breguet",
    type: "Baseball Cap",
    price: "₱ 699",
    imageUrl: "../assets/item6.png",
  },
  {
    brand: "Tiffany & Co",
    type: "Leather Jacket",
    price: "₱ 5, 450",
    imageUrl: "../assets/item7.png",
  },
  {
    brand: "RYZ",
    type: "Leather Jacket",
    price: "₱ 8, 450",
    imageUrl: "../assets/item8.png",
  },
  {
    brand: "RVCA",
    type: "Cap",
    price: "₱ 500",
    imageUrl: "../assets/item9.png",
  },
  {
    brand: "Worthy",
    type: "Cap",
    price: "₱ 6, 670",
    imageUrl: "../assets/item10.png",
  },
  {
    brand: "Rossi",
    type: "Bag",
    price: "₱ 4, 320",
    imageUrl: "../assets/item11.png",
  },
  {
    brand: "Liz Claiborne",
    type: "Bag",
    price: "₱ 5, 900",
    imageUrl: "../assets/item12.png",
  },
  {
    brand: "Graff",
    type: "Bag",
    price: "₱ 7, 299",
    imageUrl: "../assets/item13.png",
  },
  {
    brand: "Baume",
    type: "Bag",
    price: "₱ 3, 999",
    imageUrl: "../assets/item14.png",
  },
  {
    brand: "Baume et Mercier",
    type: "Cotton Trench Coat",
    price: "₱ 5, 499",
    imageUrl: "../assets/item15.png",
  },
  {
    brand: "Nike",
    type: "Sports Shoes",
    price: "₱ 8, 650",
    imageUrl: "../assets/item16.png",
  },
  {
    brand: "Bvlgari",
    type: "Sports Shoes",
    price: "₱ 6, 299",
    imageUrl: "../assets/item17.png",
  },
  {
    brand: "C&A",
    type: "Sports Shoes",
    price: "₱ 7, 129",
    imageUrl: "../assets/item18.png",
  },
  {
    brand: "Bvlgari",
    type: "Sports Shoes",
    price: "₱ 7, 499",
    imageUrl: "../assets/item19.png",
  },
  {
    brand: "Champion",
    type: "Sports Shoes",
    price: "₱ 8, 999",
    imageUrl: "../assets/item20.png",
  },
  {
    brand: "Ecco",
    type: "Cotton Trench Coat",
    price: "₱ 4, 500",
    imageUrl: "../assets/item21.png",
  },
  {
    brand: "Thierry Mugler",
    type: "Bag",
    price: "₱ 5, 200",
    imageUrl: "../assets/item22.png",
  },
  {
    brand: "Graff",
    type: "Bag",
    price: "₱ 5, 600",
    imageUrl: "../assets/item23.png",
  },
  {
    brand: "Kuyichi",
    type: "Cotton Trench Coat",
    price: "₱ 6, 600",
    imageUrl: "../assets/item24.png",
  },
  {
    brand: "Helly Hansen",
    type: "Bag",
    price: "₱ 3, 250",
    imageUrl: "../assets/item25.png",
  },
  {
    brand: "Russell",
    type: "Necklace",
    price: "₱ 6, 670",
    imageUrl: "../assets/item26.png",
  },
  {
    brand: "Solange",
    type: "Necklace",
    price: "₱ 2, 370",
    imageUrl: "../assets/item27.png",
  },
  {
    brand: "Baume",
    type: "Necklace",
    price: "₱ 3, 290",
    imageUrl: "../assets/item28.png",
  },
  {
    brand: "TEVA",
    type: "Necklace",
    price: "₱ 2, 290",
    imageUrl: "../assets/item29.png",
  },
  {
    brand: "Wella",
    type: "Necklace",
    price: "₱ 3, 600",
    imageUrl: "../assets/item30.png",
  },
  {
    brand: "Pupa",
    type: "T-shirt",
    price: "₱ 799",
    imageUrl: "../assets/item31.png",
  },
  {
    brand: "Adidas",
    type: "T-shirt",
    price: "₱ 899",
    imageUrl: "../assets/item32.png",
  },
  {
    brand: "Outcast",
    type: "T-shirt",
    price: "₱ 799",
    imageUrl: "../assets/item33.png",
  },
  {
    brand: "Seven Zero Five",
    type: "T-shirt",
    price: "₱ 705",
    imageUrl: "../assets/item34.png",
  },
  {
    brand: "Champion",
    type: "Cotton Trench Coat",
    price: "₱ 599",
    imageUrl: "../assets/item35.png",
  },
  {
    brand: "Timberland",
    type: "Cotton Trench Coat",
    price: "₱ 6, 670",
    imageUrl: "../assets/item36.png",
  },
  {
    brand: "Billabong",
    type: "Leather Jacket",
    price: "₱ 7, 770",
    imageUrl: "../assets/item37.png",
  },
  {
    brand: "Timberland",
    type: "Leather Jacket",
    price: "₱ 8, 490",
    imageUrl: "../assets/item38.png",
  },
  {
    brand: "Maje",
    type: "Cotton Trench Coat",
    price: "₱ 7, 290",
    imageUrl: "../assets/item39.png",
  },
  {
    brand: "Faberlic",
    type: "Cotton Trench Coat",
    price: "₱ 5, 990",
    imageUrl: "../assets/item40.png",
  },
  {
    brand: "Kenzo",
    type: "Sports Shoes",
    price: "₱ 7, 299",
    imageUrl: "../assets/item41.png",
  },
  {
    brand: "Triumph",
    type: "Snickers",
    price: "₱ 6, 670",
    imageUrl: "../assets/item42.png",
  },
  {
    brand: "Vanz",
    type: "Snickers",
    price: "₱ 4, 299",
    imageUrl: "../assets/item43.png",
  },
  {
    brand: "Tibi",
    type: "Snickers",
    price: "₱ 5, 499",
    imageUrl: "../assets/item44.png",
  },
  {
    brand: "Toms",
    type: "Snickers",
    price: "₱ 6, 499",
    imageUrl: "../assets/item45.png",
  },
  {
    brand: "Kappa",
    type: "Shoes",
    price: "₱ 7, 800",
    imageUrl: "../assets/item46.png",
  },
  {
    brand: "Nike",
    type: "Sports Shoes",
    price: "₱ 9, 200",
    imageUrl: "../assets/item47.png",
  },
  {
    brand: "Kendo",
    type: "Cotton Trench Coat",
    price: "₱ 7, 870",
    imageUrl: "../assets/item48.png",
  },
  {
    brand: "Nike",
    type: "Cotton Trench Coat",
    price: "₱ 8, 499",
    imageUrl: "../assets/item49.png",
  },
  {
    brand: "Triumph",
    type: "Cotton Trench Coat",
    price: "₱ 5, 450",
    imageUrl: "../assets/item50.png",
  },
];

const container = document.querySelector("#mainContainer");
for (let i = 0; i < 10; i++) {
  const row = document.createElement("div");
  row.className = "row mb-5";
  row.id = "productRow";
  for (let j = 0; j < 5; j++) {
    const column = document.createElement("div");
    column.className = "col";
    row.append(column);
  }
  container.append(row);
}

const columns = document.querySelectorAll(".col");
for (const product of DUMMY_PRODUCTS) {
  const productBrand = document.createElement("h4");
  const productType = document.createElement("h6");
  const productPrice = document.createElement("h5");
  const productImage = document.createElement("img");

  productBrand.innerText = product.brand;
  productType.innerText = product.type;
  productPrice.innerText = product.price;
  productImage.src = product.imageUrl;

  const imageBackdrop = document.createElement("div");
  imageBackdrop.id = "imageBackdrop";
  imageBackdrop.append(productBrand, productType, productPrice);

  const productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productItem.append(productImage, imageBackdrop);

  const currentIndex = DUMMY_PRODUCTS.indexOf(product);
  columns[currentIndex].append(productItem);

  productItem.addEventListener("click", () => {
    product.id = `p${currentIndex}`;
    console.log(product);
    location.href = `./item-details.html`;
  });
}
