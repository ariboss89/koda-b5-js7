const hasilUjian = {
  matematika: 80,
  bahasa_inggris: 90,
  bahasa_indonesia: 88,
  ipa: 77,
};

let nilaiTotal = 0;
let nilaiRataRata = 0;

function Hitung({
  matematika,
  bahasa_inggris,
  bahasa_indonesia,
  ipa,
} = hasilUjian) {
  const countObj = Object.keys(hasilUjian).length;

  nilaiTotal = matematika + bahasa_inggris + bahasa_indonesia + ipa;
  nilaiRataRata = nilaiTotal / countObj;

  console.log(nilaiTotal);
  console.log(nilaiRataRata);
}

Hitung(hasilUjian);
