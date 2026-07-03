const products = [
    {
        productId: 101,
        name: "Samosa",
        price: 15,
    },
    {
        productId: 102,
        name: "Burger",
        price: 50,
    },
    {
        productId: 103,
        name: "Pizza",
        price: 200,
    },
    {
        productId: 104,
        name: "Cold Drink",
        price: 40,
    }
];

let cart = [];

const producfilterInput = document.getElementById("product-filter");
const productprice = document.getElementById("product-price");
const productqty = document.getElementById("product-qty");
const addtocardbtn = document.getElementById("addtocart");
const tableBody = document.getElementById("cart-items-body");
const finalbill = document.getElementById("finalbill");

function getData(id) {
    const product = products.find(product => product.productId === Number(id));
    console.log(product);

    if (!product) {
        alert("Product not found");
        producfilterInput.value = "";
        productprice.value = "";
        productqty.value = "";
        return;
    }

    producfilterInput.value = product.name;
    productprice.value = product.price;
    productqty.value = 1;
    productqty.focus();
}

function addNewRow(product, qty) {

    const total = product.price * qty;
    const row = tableBody.insertRow();

    const uniqueId = Date.now().toString();
    row.setAttribute("data-id", uniqueId);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.innerHTML = product.name;
    cell2.innerHTML = product.price;
    cell3.innerHTML = qty;
    cell4.innerHTML = total.toFixed(2);
    cell5.innerHTML = `<button class="deletebtn" aria-label="Delete">Delete</button>`;

    const item = {
        Id: uniqueId,
        name: product.name,
        price: product.price,
        qty: qty,
        total: total
    };

    cart.push(item);

    const deleteBtn = cell5.querySelector(".deletebtn");

    deleteBtn.addEventListener("click", () => {
        row.remove();

        cart = cart.filter(item => item.Id !== uniqueId);

        calculateTotal();
    });
}

function calculateTotal() {

    const total = cart.reduce((acc, item) => acc + item.total, 0);

    finalbill.innerHTML = `Total Bill: ₹${total.toFixed(2)}`;
}

producfilterInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && event.target.value !== "") {
        getData(event.target.value);
    }

});

addtocardbtn.addEventListener("click", () => {

    if (
        producfilterInput.value === "" ||
        productprice.value === "" ||
        productqty.value === ""
    ) {
        alert("Please fill all the fields");
        return;
    }

    const product = products.find(
        product => product.name === producfilterInput.value
    );

    if (!product) {
        alert("Product not found");
        return;
    }

    addNewRow(product, Number(productqty.value));

    calculateTotal();

    producfilterInput.value = "";
    productprice.value = "";
    productqty.value = "";

    producfilterInput.focus();

});