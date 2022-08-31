let hasil = document.getElementById("hasil")

function bersihkan() {
    hasil.innerHTML = "";
}

function percentage() {
    let p = hasil.innerHTML;
    let q = eval(p);
    hasil.innerHTML = q/100
}

function minus() {
    let p = hasil.innerHTML
    let q = p.slice(-p.length)
    let r = "-" + q
    hasil.innerHTML = r
    
}

function backspace() {
    let p = hasil.innerHTML
    let r = p.substring(0, p.length - 1)
    hasil.innerHTML = r
}

function display(value) {
    let charCheck = hasil.innerHTML.slice(-1)
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
        hasil.innerHTML = q
    }
}