let hasil = document.getElementById("hasil")

function darkMode() {
    let container0 = document.getElementById("cont0")
    let displayCont = document.getElementById("displayCont")
    let displayText = document.getElementById("hasil")
    let textSwitch = document.querySelectorAll(".textSwitch")
    container0.classList.toggle("bg-black1")
    displayCont.classList.toggle("bg-grey1")
    displayText.classList.toggle("text-white")
    textSwitch.forEach((i) =>{
        i.classList.toggle("text-white")
    })
}

function bersihkan() {
    hasil.innerHTML = "";
}

function percentage() {
    let a = hasil.innerHTML;
    let b = eval(a);
    hasil.innerHTML = b/100
}

function plusMinus() {
    let a = hasil.innerHTML
    let b = a.charAt(0)
    let c = "-" + a

    if(['-'].includes(b) == true) {
        hasil.innerHTML = a.slice(1)
        console.log(a.slice(1))
    }else{
        hasil.innerHTML = c
    }
}

function backspace() {
    let a = hasil.innerHTML
    let b = a.substring(0, a.length - 1)
    hasil.innerHTML = b
}

function display(value) {
    let a = hasil.innerHTML
    let charCheck = hasil.innerHTML.slice(-1)

    if(!a && ['+', '*', '/', '.'].includes(value)) {
        return
        } else if (['+', '-', '*', '/', '.'].includes(charCheck) && ['+', '-', '*', '/', '.'].includes(value)) {
            return;
        } else {
        hasil.innerHTML += value    
        }
    }

function hitung() {
    let a = hasil.innerHTML;

    if(a == "") {
        hasil.innerHTML = ""
    }else {
        let b = eval(a);
        hasil.innerHTML = b
    }
}