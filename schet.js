let TABLO = document.getElementById("TABLO")

function VTABLO(input) {
    if (TABLO.value === "+" || TABLO.value === "0" || TABLO.value === "-" || TABLO.value === "/" || TABLO.value === "*" || TABLO.value === "Ашипка") {
        TABLO.value = input
    }
    else {TABLO.value += input;
    }
}

function OCHISTKA() {
    TABLO.value = "0";
}

function SCHET() {
try {
    const REZULTAT = eval(TABLO.value);
     TABLO.value = REZULTAT
      }
      catch(error){
        TABLO.value = "Ашипка";
    }
        ISTORIA(TABLO.value);
    
}

function ISTORIA(REZULTAT) {
    const ISTORIAdiv = document.getElementById("ISTORIA");
    const ISTORIAelem = document.createElement("div");
    ISTORIAelem.textContent = REZULTAT;
    ISTORIAdiv.appendChild(ISTORIAelem);
}
