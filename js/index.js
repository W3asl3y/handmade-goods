import jsonData from '/products.json' assert {type: 'json'};

class Product {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    get getName() {
        return this._name;
    }

    get getPrice() {
        return this._price;
    }
}

// An array for the products
let productsArray = [];

// Loop through the products in the JSON data
for (let i = 0; i < jsonData.products.length; i++) {
  let product = jsonData.products[i];
  let name = product.name;
  let price = product.price;
  
  // Create an product object and push it into the productsArray array
  let productObj = new Product(name, price);
  productsArray.push(productObj);
}

// Test that the Product objects were created and added to the productsArray array
console.log(productsArray);



// DOM elemets
const addBtn = docoment.getElementById("addBtn");
const deleteBtn = document.getElementById("delete");
const cartTable = document.getElementById("cart-table");



// An array for the cart
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Rendering cart items when page is refreshed
if (localStorage.getItem("cartItems")) {
  cartItems.map((item) => {
    addItem(item)
  })
}

// Event listeners
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const product = {
    id: new Date().getTime(),
    name: _name
  }

  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  addItem(item)
  }) 


deleteBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn") || e.target.parentElement.classList.contains("deleteBtn") || e.target.parentElement.parentElement.classList.contains("deleteBtn")) {
    const productId = e.target.closest("tr").id

    deleteFromCart(productId)
  }
})




// Function to add item to the cart table
function addItem(item) {
  const itemEle = document.createElement("tr")

  itemEle = setAttribute("id", item.id)

  const itemEleTemplate = `
  <td><a><i class="fa-solid fa-xmark delete" style="color: #fff;"></i></a></td>
  <td> ${_name} </td>
  <td> ${_price} </td>
  <td> <input type="number" min="1" max="99" value="1"> </td>
  <td> ${_price} </td>
  `
  itemEle.innerHTML = itemEleTemplate

  cartTable.appendChild(itemEle)
}

// Function to delete item from cart
function deleteFromCart(productId) {
  productsArray = productsArray.filter((item) => Product.id !== parseInt(productId))

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  document.getElementById("productId").remove()

  updatePrice();
}





