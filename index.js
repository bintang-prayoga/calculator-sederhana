let hasil = document.getElementById("hasil")

function darkSwitch() {
    let upperBg = document.getElementById("mainRow")
    let topCol = document.getElementById("topCol")
    let mainCont = document.getElementById("mainCont")
    upperBg.classList.toggle("bg-grey1")
    topCol.classList.toggle("bg-grey1")
    mainCont.classList.toggle("bg-black1");
}

function bersihkan() {
    hasil.innerHTML = "";
}

function percentage() {
    let p = hasil.innerHTML;
    let q = eval(p);
    hasil.innerHTML = q/100
}

function backspace() {
    let p = hasil.innerHTML
    let r = p.substring(0, p.length - 1)
    hasil.innerHTML = r
}

function display(value) {
    let charCheck = hasil.innerText.slice(-1)
    if(['+', '-', '*', '/', '.'].includes(charCheck) && ['+', '-', '*', '/', '.'].includes(value)) {
        return;
    }else {
        hasil.innerHTML += value
        console.log(hasil.innerHTML )
    }

}

function hitung() {
    let p = hasil.innerHTML;

    if(p == "") {
        hasil.innerHTML = ""
    }else {
        let q = eval(p);
        let r = "" + q
        hasil.innerHTML = r
    }
}