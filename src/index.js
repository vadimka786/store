let TrendRow = document.querySelector(".trending__row");
let TrendBbtn = document.querySelector(".trending__btn");

let Lessthan100 = document.querySelector(".trending__row-Lessthan100");
let Lessthan100Btn = document.querySelector(".trending__btn-Lessthan100");


/* TrendingSection */
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

getTrendsTovar();


TrendBbtn.addEventListener("click", () => {
    if (TrendBbtn.textContent == "See more") {
        getTrendsTovar(limit = 10);
        TrendBbtn.textContent = "Hide";
        localStorage.setItem("buttonState", "hide");
    } else {
        getTrendsTovar();
        TrendBbtn.textContent = "See more";
        localStorage.setItem("buttonState", "visible");
    }
});

// При загрузке страницы восстанавливаем состояние кнопки
document.addEventListener("DOMContentLoaded", () => {
    const buttonState = localStorage.getItem("buttonState");
    if (buttonState === "hide") {
        getTrendsTovar(limit = 10);
        TrendBbtn.textContent = "Hide";
    } else {
        getTrendsTovar();
        TrendBbtn.textContent = "See more";
    }
});



/* Less100 Section */
const getTovarLess100 = (limit = 5) => {
    let Less100CardsUrl = `http://localhost:3000/products?price_lte=100&_limit=${limit}`;

    fetch(Less100CardsUrl)
    .then((resolve) => resolve.json())
    .then((resolve) => {
        Lessthan100.innerHTML = '';
        resolve.forEach((item) => {
            Lessthan100.innerHTML += `
            <div class="trending__card">
                    <img src="${item.image}" alt="" class="trending__card-img">
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
        });
    });
};

getTovarLess100();


Lessthan100Btn.addEventListener("click", () => {
    if(Lessthan100Btn.textContent == "See more") {
        getTovarLess100(10);
        Lessthan100Btn.textContent = "Hide"
        localStorage.setItem("BtnMoreLess100", "Hide")
    } else {
        getTovarLess100();
        Lessthan100Btn.textContent = "See more"
        localStorage.setItem("BtnMoreLess100", "visible")
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const BtnMoreLess100 = localStorage.setItem("BtnMoreLess100", "Hide");
    if(BtnMoreLess100 == "Hide") {
        getTovarLess100(10);
        Lessthan100Btn.textContent = "Hide"
    } else {
        getTovarLess100();
        Lessthan100Btn.textContent = "See more"
    }
});