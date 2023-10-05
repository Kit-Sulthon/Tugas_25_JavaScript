function Tugas25() {
  const soal1 = ["2", "39", "76", "50", "9", "7", "41", "2", "24", "1", "16"];
  const soal2 = ["2", "39", "76", "50", "9", "7", "41", "2", "24", "1", "16"];
  const soal3 = ["2", "39", "76", "50", "9", "7", "41", "2", "24", "1", "16"];
  let soal4 = ["2", "39", "76", "50", "9", "7", "41", "2", "24", "1", "16"];
  soal1.sort();
  soal3.sort().reverse();
  let difilter = soal4.filter((soal4) => {
    return soal4 > 10;
  });

  console.log("Sebelumnya :", soal2);
  console.log("Ascending :", soal1);
  console.log("Descending :", soal3);
  console.log("Filter > 10 :", difilter.sort().reverse());
}

console.log(Tugas25());
