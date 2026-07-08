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

let cart = JSON.parse(localStorage.getItem("mycart")) || [] ;


const producfilterInput = document.getElementById("product-filter");
const productprice = document.getElementById("product-price");
const productqty = document.getElementById("product-qty");
const addtocardbtn = document.getElementById("addtocart");
const tableBody = document.getElementById("cart-items-body");
const totalitems=document.getElementById("totalitems");
const subtotal=document.getElementById("subtotal");
const totalGST=document.getElementById("totalGST");
const grandtotal=document.getElementById("grandtotal");
const finalbill = document.getElementById("finalbill");
const invoice = document.getElementById("invoice");
const invoiceItems = document.getElementById("invoice-items");

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
producfilterInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getData(producfilterInput.value);
    }
});
function addNewRow(product, qty) {

    const item = {
        Id: Date.now().toString(),
        name: product.name,
        price: product.price,
        qty: qty,
        total: product.price * qty
    };

    cart.push(item);

    saveCartToLocalStorage();
    loadCartFromLocalStorage();
}

    

function calculateTotal() {

    const sub = cart.reduce((sum, item) => {
        return sum + item.price * item.qty;
    }, 0);

    const gst = sub * 0.18;
    const grand = sub + gst;

    totalitems.textContent = cart.length;
    subtotal.textContent = sub.toFixed(2);
    totalGST.textContent = gst.toFixed(2);
    grandtotal.textContent = grand.toFixed(2);
}

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

    const qty = Number(productqty.value);

    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {

        existingItem.qty += qty;
        existingItem.total = existingItem.price * existingItem.qty;

        saveCartToLocalStorage();
        loadCartFromLocalStorage();

    } else {

        addNewRow(product, qty);

    }

    calculateTotal();

    producfilterInput.value = "";
    productprice.value = "";
    productqty.value = "";

    producfilterInput.focus();

});

//Functioning of delete button of each row
tableBody.addEventListener("click", (event) => {
    const button = event.target.closest(".deletebtn");
    if (button) {
        const row = button.closest("tr");
        row.remove();

        const rowId = row.getAttribute("data-id");
        cart = cart.filter(data => data.Id != rowId);
        saveCartToLocalStorage();
        calculateTotal();
    }

})

function saveCartToLocalStorage(){
    localStorage.setItem("mycart",JSON.stringify(cart));
}

function loadCartFromLocalStorage() {

    tableBody.innerHTML = "";

    cart.forEach(item => {

        const row = tableBody.insertRow();
        row.setAttribute("data-id", item.Id);

        row.insertCell(0).textContent = item.name;
        row.insertCell(1).textContent = item.price;
        row.insertCell(2).textContent = item.qty;
        row.insertCell(3).textContent = (item.price * item.qty).toFixed(2);

        row.insertCell(4).innerHTML =
            `<button class="deletebtn">Delete</button>`;

    });

    calculateTotal();
}

finalbill.addEventListener("click", () => {

    invoice.style.display = "block";

    invoiceItems.innerHTML = "";

    let sub = 0;

    cart.forEach(item => {

        sub += item.price * item.qty;

        invoiceItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td>${item.price * item.qty}</td>
            </tr>
        `;
    });

    const gst = sub * 0.18;
    const grand = sub + gst;

    document.getElementById("invoice-subtotal").textContent = sub.toFixed(2);
    document.getElementById("invoice-gst").textContent = gst.toFixed(2);
    document.getElementById("invoice-grandtotal").textContent = grand.toFixed(2);

    const now = new Date();

    document.getElementById("invoice-number").textContent =
        "INV-" + Date.now();

    document.getElementById("invoice-date").textContent =
        now.toLocaleDateString();

    document.getElementById("invoice-time").textContent =
        now.toLocaleTimeString();
});

loadCartFromLocalStorage();
calculateTotal();