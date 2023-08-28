let Productsrow = document.querySelector(".trending__row-mens");
let ProductsPage = document.querySelector(".div-container-btn-page");

let page = 1;

const getAllProducts = () => {
let letAllProducts = `http://localhost:3000/products?_page=${page}&_limit=10`;

    fetch(letAllProducts)
    .then((resolve) => resolve.json())
    .then((resolve) => {
        resolve.forEach((item) => {
            Productsrow.innerHTML += `
            <div class="trending__card">
                <img src="${item.image}" alt="" class="trending__card-img-super-count">
                <div class="trending__card-info">
                        <h3 class="trending__card-title">
                            ${item.title}
                        </h3>
                        <p class="trending__card-category">
                            ${item.category}
                        </p>
                    <div class="trending__card-bottom">
                            <p class="trending__card-price">
                                ${item.price}$

                            </p>
                        <div class="trending__card-purchased">
                            <span class="span-wrapper-purchased-people" >${item.rating.count}</span> people purchased
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    })
}
getAllProducts();



const getAllProductsCount = () => {
    fetch(`http://localhost:3000/products`)
    .then((response) => response.json())
    .then((response) => {
        for(let i = 1; i <= Math.ceil(response.length / 10); i++) {
            ProductsPage.innerHTML +=`
            <button data-id="${i}" class="mens-pagination-btn btn btn-pages-Products" >
                    ${i}
            </button>
            `
        }
    })
}
getAllProductsCount();