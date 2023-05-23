const mahasiswa = {
    nama: "maypa",
    nim: 02042111021,
    email: "deamaypa@gmail.com"
};

let {nama,nim,email} = mahasiswa;
console.log(mahasiswa);


let teman1 = ["aliya","bunga"];
let teman2 = ["ama","amel"];
let teman3 = ["vita","uzi"];

let gabung = [...teman1,...teman2,...teman3];
console.log(gabung);
