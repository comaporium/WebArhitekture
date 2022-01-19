function provjeri() {

    let adresa = document.getElementById("adresa").value;
    let dijelovi = adresa.split(".");
    let numerickiDijelovi = [];

    //iskoristiti cemo poslije 
    let opseg1 = "10.0.0.0 - 10.255.255.255";
    let opseg2 = "172.16.0.0 - 172.31.255.255";
    let opseg3 = "192.168.0.0 - 192.168.255.255";

    //Ako adresa ima vise od 15 karaktera neispravna je

    if (adresa.length > 15) {
        document.getElementById("izlaz").innerHTML = "Unijeli ste neispravnu IP adresu.";
    }

    //ako adresa ima vise od 4 okteta neispravna je

    if (dijelovi.size > 4) {
        document.getElementById("izlaz").innerHTML = "Unijeli ste neispravnu IP adresu.";
    }

    //pretvaramo string u integere kako bi mogli raditi poredjenje

    for (let i = 0; i < dijelovi.length; i++) {
        numerickiDijelovi.push(parseInt(dijelovi[i]));
    }

    //ako je vrijednost nekog okteta veca od 255 ili manja od 0 neispravna je adresa

    if (((numerickiDijelovi[0] > 255) || (numerickiDijelovi[0] < 0)) || ((numerickiDijelovi[1] > 255) || (numerickiDijelovi[1] < 0))
        || ((numerickiDijelovi[2] > 255) || (numerickiDijelovi[2] < 0)) || ((numerickiDijelovi[3] > 255) || (numerickiDijelovi[3] < 0))) {
        document.getElementById("izlaz").innerHTML = "Unijeli ste neispravnu IP adresu.";
    }

    //ako je ispravna 
    if (numerickiDijelovi[0] == 10) {
        document.getElementById("ispis").innerHTML = "Unesena IP adresa je ";
        document.getElementById("opseg").innerHTML = "privatna i pripada opsegu " + opseg1;
    } else if ((numerickiDijelovi[0] == 172) && (16 <= numerickiDijelovi[1] <= 31)) {
        document.getElementById("ispis").innerHTML = "Unesena IP adresa je ";
        document.getElementById("opseg").innerHTML = "privatna i pripada opsegu " + opseg2;
    } else if ((numerickiDijelovi[0] == 192) && (numerickiDijelovi[1] == 168)) {
        document.getElementById("ispis").innerHTML = "Unesena IP adresa je ";
        document.getElementById("opseg").innerHTML = "privatna i pripada opsegu " + opseg3;
    } else {
        document.getElementById("ispis").innerHTML = "Unesena IP adresa je ";
        document.getElementById("opseg").innerHTML = "javna.";
    }

}