document.addEventListener("DOMContentLoaded", function () {
  // Kodlar buraya gelecek

  let b = document.getElementById("input-bill");
  let p = document.getElementById("input-person");
  let TipPerPerson = document.getElementById("tipamount-result");
  let TotalPerPerson = document.getElementById("total-result");
  let reset = document.querySelector(".reset-button");
  let hata = document.querySelector("#hidden-text");

  let box1 = document.getElementById("box-button1");
  let box2 = document.getElementById("box-button2");
  let box3 = document.getElementById("box-button3");
  let box4 = document.getElementById("box-button4");
  let box5 = document.getElementById("box-button5");
  let box6 = document.getElementById("custom-bill");

  p.addEventListener("input", function () {
    if (p.value == 0) {
      console.log("p 0 olamaz");
      hata.style.display = "block";
    } else {
      console.log("sorun yok");
      hata.style.display = "none";
    }
  });

  document.querySelectorAll(".percentage-buttons").forEach(function (element) {
    element.addEventListener("click", function () {
      a1 = Number(b.value);
      a1 = (a1 / 100) * parseInt(this.innerHTML);
      a1 = a1 / p.value;
      console.log(a1);
      TipPerPerson.innerHTML = "$" + a1;
      let total = Number(b.value / p.value) + a1;
      TotalPerPerson.innerHTML = "$" + total;
      console.log(Number(b.value) + a1);
    });
  });

  box6.addEventListener("input", function () {
    console.log("Selam: ", box6.value);
    a6 = Number(b.value);
    a6 = (a6 / 100) * Number(box6.value);
    a6 = a6 / p.value;
    console.log(a6);
    TipPerPerson.innerHTML = "$" + a6;
    let total = Number(b.value / p.value) + a6;
    TotalPerPerson.innerHTML = "$" + total;
    console.log(Number(b.value) + a6);
  });

  reset.addEventListener("click", function () {
    location.reload();
  });
});
