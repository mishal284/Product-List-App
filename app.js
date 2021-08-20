let products = [{
  productName: 'Cloth',
  image: "1601890054864_0..webp",
  isLiked: false,
  tag: "cloth"
},
{
  productName: 'Cloth',
  image: "online.jpg",
  isLiked: false,
  tag: "cloth"
},
{
  productName: 'Cloth',
  image: "down.jpg",
  isLiked: false,
  tag: "cloth"
},
{
  productName: "Headphones",
  image: "images.jpg",
  isLiked: true,
  tag: "electronic"
},
{
  productName: "Charger",
  image: "charger.jpg",
  isLiked: true,
  tag: "electronic"
},
{
  productName: "Sandal",
  image: "sandal.jpg",
  isLiked: false,
  tag: "footwear"
},
{
  productName: "Shoe",
  image: "download.jpg",
  isLiked: true,
  tag: "footwear"
},
{
  productName: "Shirt",
  image: "shirt.jpg",
  isLiked: false,
  tag: "cloth"
}
];



function ProductTemplate(myProducts) {
return `
<div class="cards">
<i class="fa fa-heart" aria-hidden="true"></i>
<div class="img">
<img src="${myProducts.image}">
</div>
<h4 >${myProducts.productName} </h4>

<a href="">Add to Cart</a>
</div>
`;
}


document.getElementById("filteredItems").innerHTML += `
${products.map(ProductTemplate).join('')}

`;

function getProduct(userSelected) {
let selectedItemsArray = products.filter(myProduct);

function myProduct(myProducts) {
  if (myProducts.tag == userSelected) {
      return document.getElementById("filteredItems").innerHTML = `
  ${products.map(ProductTemplate).join('')}
  `;

  }
}
document.getElementById("filteredItems").innerHTML = `
${selectedItemsArray.map(ProductTemplate).join('')}  
`
}