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

function getData(id){
    const product = products.find((product)=> product.productId=== id);
    console.log(product);
    
   
}


const producfilterInput = document.getElementById("product-filter");
const productprice = document.getElementById("product-price");
const productqty = document.getElementById("product-qty");
const addtocardbtn = document.getElementById("addtocart");

producfilterInput.addEventListener("keydown",  (event)=>{
    if(event.key === "Enter" && event.target.value !== ""){
       getData(event.target.value);
}
})  ;