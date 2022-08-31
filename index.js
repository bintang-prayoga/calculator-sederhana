let hasil = document.getElementById("hasil")

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
    let charCheck = hasil.innerHTML.slice(-1)

    if(['+', '-', '*', '/', '.'].includes(charCheck) && ['+', '-', '*', '/', '.'].includes(value)) {
        return;
    }else {
        hasil.innerHTML += value
        console.log(hasil.innerHTML )
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