const products = [
  { name: "Laptop", category: "electronics", price: 800 },
  { name: "Shirt", category: "clothing", price: 20 },
  { name: "Phone", category: "electronics", price: 500 },
  { name: "Jeans", category: "clothing", price: 40 }
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");
const sortOptions = document.getElementById("sort-options");

function displayProducts(items) {
  productList.innerHTML = "";
  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `<h3>${product.name}</h3><p>Category: ${product.category}</p><p>Price: $${product.price}</p>`;
    productList.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = products;
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }
  const sortValue = sortOptions.value;
  if (sortValue === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }
  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOptions.addEventListener("change", filterAndSort);

displayProducts(products);
