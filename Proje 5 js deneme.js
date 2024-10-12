let b = document.getElementById('input-bill');
let p = document.getElementById('input-person');
let TipPerPerson = document.getElementById('tipamount-result');
let TotalPerPerson = document.getElementById('total-result');
let reset = document.querySelector('.reset-button');
let hata = document.querySelector('#hidden-text');


let box1 = document.getElementById('box-button1');
let box2 = document.getElementById('box-button2');
let box3 = document.getElementById('box-button3');
let box4 = document.getElementById('box-button4');
let box5 = document.getElementById('box-button5');
let box6 = document.getElementById('custom-bill');


p.addEventListener('input',function(){
    if(p.value==0){
        console.log('p 0 olamaz');
        hata.style.display = 'block';
    } 
    else{
        console.log('sorun yok');
        hata.style.display = 'none';
    }
});


box1.addEventListener('click', function () {
    a1 = Number(b.value);  
    a1 = a1/100*5;
    a1 = a1/p.value;
    console.log(a1);
    TipPerPerson.innerHTML='$'+a1;
    let total=Number(b.value/p.value) + a1;
    TotalPerPerson.innerHTML ='$' +total;
    console.log(Number(b.value) + a1);  
});
box2.addEventListener('click', function () {
    a2 = Number(b.value);  
    a2 = a2/100*10;
    a2 = a2/p.value;
    console.log(a2);
    TipPerPerson.innerHTML='$'+a2;
    let total=Number(b.value/p.value) + a2;
    TotalPerPerson.innerHTML ='$' +total;
    console.log(Number(b.value) + a2);  
});
box3.addEventListener('click', function () {
    a3 = Number(b.value);  
    a3 = a3/100*15;
    a3 = a3/p.value;
    console.log(a3);
    TipPerPerson.innerHTML='$'+a3;
    let total=Number(b.value/p.value) + a3;
    TotalPerPerson.innerHTML ='$' +total;
    console.log(Number(b.value) + a3);  
});
box4.addEventListener('click', function () {
    a4 = Number(b.value);  
    a4 = a4/100*25;
    a4 = a4/p.value;
    console.log(a4);
    TipPerPerson.innerHTML='$'+a4;
    let total=Number(b.value/p.value) + a4;
    TotalPerPerson.innerHTML ='$' +total;
    console.log(Number(b.value) + a4);  
});
box5.addEventListener('click', function () {
    a5 = Number(b.value);  
    a5 = a5/100*50;
    a5 = a5/p.value;
    console.log(a5);
    TipPerPerson.innerHTML='$'+a5;
    let total=Number(b.value/p.value) + a5;
    TotalPerPerson.innerHTML ='$' +total;
    console.log(Number(b.value) + a5);  
});
box6.addEventListener('input', function () {
    console.log(box6.value)
    a6 = Number(b.value);  
    a6 = a6/100*Number(box6.value);
    a6 = a6/p.value;
    console.log(a6);
    TipPerPerson.innerHTML='$'+a6;
    let total=Number(b.value/p.value) + a6;
    TotalPerPerson.innerHTML ='$' +total;
    console.log(Number(b.value) + a6);  
});

reset.addEventListener('click', function(){
    location.reload(); 
});
