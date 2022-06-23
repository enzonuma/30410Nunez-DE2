let prodCate = ""
let prodName = ""
let prodPrice = ""
let congratstext = ""
let prodList = []

function congrats() {
    // congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")

    while (congratstext != "NN") {
        switch (congratstext) {
            case "YY":
                addProduct();
                congrats();
                break;

            default:
                alert("Please enter an option");
                congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")                
                return congrats();
        }
    }

    if (congratstext == "NN") {
        let thankYou = alert("Thank you for visit us! There are your products, good luck!");

    }
}

function addProduct() {
    class Product {
        constructor(prodCate, prodName, prodPrice) {
            this.prodCate = prodCate
            this.prodName = prodName
            this.prodPrice = parseInt(prodPrice)
        }
    }

    prodCate = prompt("Do you want to add: Shoe | Clothes | Accesories ?")
    prodName = prompt("Enter the Model/Name:")
    prodPrice = prompt("Enter the price:")
    prodList.push(new Product(prodCate, prodName, prodPrice))
    congratstext = prompt("Your products were added succesfully! Do you want to add another ones? (YY / NN to close)")
}

function showProd() {
    const prodCards = document.querySelector("#prodCatalog");
    prodCards.innerHTML = ""

    prodList.forEach( prod => {
        const prodDiv = document.createElement("div")
        prodDiv.classList.add("col-4", "prodCards")
        prodDiv.innerHTML += `<img src="">
        <p class="pcCategory">${prod.prodCate}</p>
        <h6 class="pcTitle">${prod.prodName}</h6>
        <p class="pcPrice">$${prod.prodPrice}</p>`

        prodCards.appendChild(prodDiv)
    });
}

let btnAddProd = document.querySelector("#addProd")
btnAddProd.addEventListener("click", () => {
    addProduct()
    congrats()
    showProd()
})

// export { prodList };