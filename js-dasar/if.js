function scoreChecker(score) {
  let result;
  if (score >= 90) {
    result = "Selamat ! anda mendapatkan nilai A";
  }
  if (score >= 80 && score <= 89) {
    result = "Anda mendapatkan nilai B";
  }
  if (score >= 70 && score <= 79) {
    result = "Anda mendapatkan nilai C";
  } else result = "Anda mendapatkan niali E";

//   console.log(score);
//   console.log(result);
  // TODO
  // Jangan hapus kode ini
  return result;
}

console.log(scoreChecker(90))

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker;
