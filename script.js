let plus = document.querySelectorAll(".fa-plus");
let btnMoins = document.querySelectorAll(".fa-minus");
let qte = document.querySelectorAll(".quantité");
let price = document.querySelectorAll(".price");
let somme = document.getElementById(".total-price");
let remove = document.querySelectorAll(".close");

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function () {
    remove[i].parentElement.remove();
    total();
  });
}

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    qte[i].innerHTML++;
    total();
  });
}
for (let i = 0; i < btnMoins.length; i++) {
  btnMoins[i].addEventListener("click", function () {
    if (qte[i].innerHTML > 0) {
      qte[i].innerHTML--;
      total();
    }
  });
}

function total() {
  let quantity = document.getElementsByClassName("quantité");
  let price = document.getElementsByClassName("price");
  let somme = 0;
  for (let i = 0; i < price.length; i++) {
    somme = somme + quantity[i].innerHTML * price[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = somme;
}

let bg = document.querySelectorAll(".fa-heart");
for (let i = 0; i < bg.length; i++) {
  bg[i].addEventListener("click", () =>
    bg[i].style.color == "red"
      ? (bg[i].style.color = "black")
      : (bg[i].style.color = "red")
  );
}
