// conditional
/**
 * Study case 1
 * 
 * cek bilangan ganjil genap
 * 
 * contoh var num =9;
 * 
 * Result:
 * 9 adalah bilangan Ganjl
 * 
 */

/**
 * Study case 2
 * 
 * buatlah codigan untuk cek grade sekolah
 * 
 * Grade A : score antara 100 - 85
 * Grade B : score antara 84 - 70
 * Grade C : score antara 69 - 55
 * Grade D : score antara 54 - 40
 * Grade E : score antara 39 - 0
 * 
 */

/**
 * 
 * Study Case 3
 * ada 3 jenis access : Public, Protected, Private.
 * 
 * Jika akses kosong maka tampilkan "Input access"
 * 
 * Access Public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access Public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access Public, jika level sama dengan 5 maka tampilkan "Public five"
 * 
 * Access Private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access Private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access Private, jika level sama dengan 5 maka tampilkan "Private five"
 * 
 * Access protected, jika level di bawah 5 maka tampilkan "protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "protected five"
 * 
 * Jika access salah, tampilkan "Access is not deFined"
 * 
 * BUAT CODING 
 */

var num = 9;

if (num % 2 === 0) {
    console.log(`${num} adalah bilangan Genap`)
} else {
    console.log(`${num} adalah bilangan Ganjil`)
}


var score = 50;

if (score <= 100 && score >= 85) {
    console.log(`Grade A`)
} else if (score <= 84 && score >= 70) {
    console.log(`Grade B`)
} else if (score <= 69 && score >= 55) {
    console.log(`Grade C`)
} else if (score <= 54 && score >= 40) {
    console.log(`Grade D`)
} else if (score <= 39 && score >= 0) {
    console.log(`Grade E`)
} else {
    console.log(`Masukan Score yang benar, Trims.`)
}


var access = "PriVate";
var level = 7;

switch (access.toLowerCase()) {
    case "public":
        if (level < 5) {
            console.log("Public di bawah 5");
        } else if (level > 5) {
            console.log("Public di atas 5");
        } else {
            console.log("Public Five");
        } break;
    case "private":
        if (level < 5) {
            console.log("private di bawah 5");
        } else if (level > 5) {
            console.log("private di atas 5");
        } else {
            console.log("private Five");
        }
        break;
    case "protected":
        if (level < 5) {
            console.log("protected di bawah 5");
        } else if (level > 5) {
            console.log("protected di atas 5");
        } else {
            console.log("protected Five");
        }
        break;
    case "":
        console.log("Input Access");
        break;
    default:
        console.log("Access is not deFined");
        break;

}