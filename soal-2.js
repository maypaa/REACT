const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabungkanArray = (arr1, arr2) => [...arr1, ...arr2];
const gabungan = gabungkanArray(hewanBuas, hewanJinak);
console.log(gabungan);

const mix = (a) =>
  a.map((hewan) => ({
    hewan,
    makananKesukaan: {
      Kucing: "Ikan",
      Kelinci: "Wortel",
      Ayam: "Jagung",
    }[hewan],
  }));

  setTimeout(() => {
    const hasil = mix(hewanJinak);
    console.log("Hasil :", hasil);
  }, 5000);

