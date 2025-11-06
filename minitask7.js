const hasilUjian = {
  matematika: 80,
  bahasa_inggris: 90,
  bahasa_indonesia: 88,
  ipa: 77,
};

let nilaiTotal = 0;
let nilaiRataRata = 0;

function Hitung(nilaiUjian) {
  const countObj = Object.keys(hasilUjian).length;

  nilaiTotal = matematika + bahasa_inggris + bahasa_indonesia + ipa;
  nilaiRataRata = nilaiTotal / countObj;

  const hasilAkhir = {
    total: nilaiTotal,
    ratarata: nilaiRataRata,
  };

  return `
  Total = ${hasilAkhir.total}
  Rata-Rata = ${hasilAkhir.ratarata}
  `;
}

const outHasil = Hitung(
  ({ matematika, bahasa_inggris, bahasa_indonesia, ipa } = hasilUjian)
);

console.log(outHasil);
