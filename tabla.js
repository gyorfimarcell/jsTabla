const tabla = document.getElementById("tabla");

function General() {
    let mezokSzama = document.getElementById("mezok").value;
    let szelesseg = document.getElementById("szelesseg").value + "px";

    tabla.innerHTML = "";

    for (let y = 0; y < mezokSzama; y++) {
        let sor = document.createElement("div");
        sor.className = "sor";

        for (let x = 0; x < mezokSzama; x++) {
            let mezo = document.createElement("div");
            mezo.className = y % 2 == x % 2 ? "sotet" : "vilagos";
            mezo.style.width = szelesseg;
            mezo.style.height = szelesseg;
            mezo.addEventListener("click", SzinValtas);
            sor.appendChild(mezo);
        }

        tabla.appendChild(sor);
    }
}

function SzinValtas(e) {
    let mezo = e.target;

    let szin = Math.round(Math.random() * (256 * 256 * 256));
    let szinHex = "#" + szin.toString(16);

    tabla.style.setProperty(mezo.classList.contains("sotet") ? "--sotet" : "--vilagos", szinHex);
}

General();