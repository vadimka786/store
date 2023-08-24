let TrendRow = document.querySelector(".trending__row");
let TrendBbtn = document.querySelector(".trending__btn");


const getTrendsTovar = (limit = 5) => {
    let trentsCardsUrl = `http://localhost:3000/products?_sort=ratimg.rate&_order=desc&_limit=${limit}`;
    

    fetch(trentsCardsUrl)
    .then((responce) => responce.json())
    .then((responce) => {
        TrendRow.innerHTML = '';
        responce.forEach((item) => {
            TrendRow.innerHTML += `
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
                                <span class="trending__card-oldPrice">
                                    79$
                                </span>
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
};

getTrendsTovar()


TrendBbtn.addEventListener("click", () => {
    if (TrendBbtn.textContent == "See more") {
        getTrendsTovar(limit = 10);
        TrendBbtn.textContent = "Hide";
        localStorage.setItem("buttonState", "hidden");
    } else {
        getTrendsTovar