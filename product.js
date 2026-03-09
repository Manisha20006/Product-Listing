const products = [

{
name:"Laptop",
category:"electronics",
price:60000,
rating:4.5,
image:"https://res.cloudinary.com/dekf6zybg/image/upload/v1773065683/aspire-vero_16-03_gojzpq.jpg"
},

{
name:"Smartphone",
category:"electronics",
price:20000,
rating:4.2,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},

{
name:"T Shirt",
category:"clothing",
price:800,
rating:4.0,
image:"https://res.cloudinary.com/dekf6zybg/image/upload/v1773066081/APL-02018-A_bdksi8.webp"
},

{
name:"Jeans",
category:"clothing",
price:1500,
rating:4.3,
image:"https://images.unsplash.com/photo-1542272604-787c3835535d"
},

{
name:"JavaScript Book",
category:"books",
price:500,
rating:4.8,
image:"https://images.unsplash.com/photo-1512820790803-83ca734da794"
},

{
name:"Database Book",
category:"books",
price:650,
rating:4.6,
image:"https://images.unsplash.com/photo-1516979187457-637abb4f9353"
}

];

let cart = [];

function displayProducts(items){

const container=document.getElementById("productContainer");
container.innerHTML="";

items.forEach(product=>{

const stars="⭐".repeat(Math.round(product.rating));

const div=document.createElement("div");
div.className="product";

div.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="rating">${stars}</p>
<p class="price">₹${product.price}</p>
<button onclick="addToCart('${product.name}')">Add to Cart</button>
`;

container.appendChild(div);

});

}

function filterProducts(){

let search=document.getElementById("search").value.toLowerCase();
let category=document.getElementById("category").value;
let price=document.getElementById("price").value;
let sort=document.getElementById("sort").value;

let filtered=[...products];

if(search){
filtered=filtered.filter(p=>p.name.toLowerCase().includes(search));
}

if(category!="all"){
filtered=filtered.filter(p=>p.category===category);
}

if(price){
filtered=filtered.filter(p=>p.price<=price);
}

if(sort=="low"){
filtered.sort((a,b)=>a.price-b.price);
}

if(sort=="high"){
filtered.sort((a,b)=>b.price-a.price);
}

if(sort=="rating"){
filtered.sort((a,b)=>b.rating-a.rating);
}

displayProducts(filtered);

}

let cartCount=0;

function addToCart(product){

cartCount++;

document.getElementById("cartCount").innerText=cartCount;

alert(product + " added to cart");

}

displayProducts(products);