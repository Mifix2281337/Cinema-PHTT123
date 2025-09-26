const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const stylevar = document.querySelector("iframe");
const btn = document.getElementById("btnplay");
const diraction1 = document.querySelector(".diraction");
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked'))
    {
        event.target.classList.toggle("activ")
        let totalSeats = schemeSvg.querySelectorAll('.activ').length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

btn.addEventListener('click', (event) => {
    stylevar.style.display = "block";
    btn.style.display = "none";
    diraction1.style.display = "none";
});