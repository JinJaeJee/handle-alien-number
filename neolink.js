/* */
/* AB=4 AZ=9 ZL=40 ZC=90 CD=400 CR=900 RRR= 3000 DDD= 1500 */
/* the possible the largest number is RRR CR ZC AZ = 3999  */
/* if Start with DDD next possible value can be DR ZC AZ next value can be */
/* So Largest to smallest left to right which can not be written in R DD or CLL  */

function HanddleAlienNumerals(s) {
  let total = 0;
  let prevValue = 0;
  function getValue(numeral) {
    switch (numeral) {
      case "A":
        return 1;
      case "B":
        return 5;
      case "Z":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "R":
        return 1000;
      default:
        return 0;
    }
  }
  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = getValue(s[i]);
    if (currentValue < prevValue) {
      total -= currentValue;
      repeatedCount = 1;
    } else {
      total += currentValue;
      if (currentValue === prevValue) {
        repeatedCount++;

        if (repeatedCount > 3) {
          return null;
        }
      } else {
        repeatedCount = 1;
      }
    }
    if (
      s[i] === "A" &&
      (s[i + 1] === "L" ||
        s[i + 1] === "C" ||
        s[i + 1] === "D" ||
        s[i + 1] === "R")
    ) {
      return null;
    }
    if (s[i] === "Z" && (s[i + 1] === "D" || s[i + 1] === "R")) {
      return null;
    }
    if (s[i] === "C" && s[i + 1] === "L" && s[i + 2] === "L") {
      return null;
    }
    if (s[i] === "R" && s[i + 1] === "D" && s[i + 2] === "D") {
      return null;
    }
    if (s[i] === "A" && s[i + 1] === "Z" && s[i + 2] === "L") {
      return null;
    }
    if (s[i] === "B" && s[i + 1] === "A" && s[i + 2] === "Z") {
      return null;
    }
    if (s[i] === "B" && s[i + 1] === "D") {
      return null;
    }
    if (s[i] === "L" && s[i + 1] === "D") {
      return null;
    }
    if (
      s[i + 1] === "R" &&
      (s[i] === "D" || s[i] === "L" || s[i] === "Z" || s[i] === "B")
    ) {
      return null;
    }
    if (s[i] === "C" && s[i + 1] === "C" && s[i + 2] === "D") {
      return null;
    }
    prevValue = currentValue;
  }
  return total;
}

console.log(HanddleAlienNumerals("AAA"));
console.log(HanddleAlienNumerals("LBAAA"));
console.log(HanddleAlienNumerals("RCRZCAB"));
console.log(HanddleAlienNumerals("CRZCAZ")); // input should be 999
console.log(HanddleAlienNumerals("ZCAZ")); // input 99
console.log(HanddleAlienNumerals("AZ"));
console.log(HanddleAlienNumerals("LZZZAZ"));
console.log(HanddleAlienNumerals("RRZBAA"));
console.log(HanddleAlienNumerals("RRRCDBAA"));

//////// case สำหรับตรวจสอบไม่ให้รันได้ ค่าน้อยห้ามขึ้นก่อนค่ามาก และอื่นๆ
console.log(HanddleAlienNumerals("AR"));
console.log(HanddleAlienNumerals("AZL"));
console.log(HanddleAlienNumerals("DRD"));
console.log(HanddleAlienNumerals("RDD"));
console.log(HanddleAlienNumerals("CLL"));
console.log(HanddleAlienNumerals("RRRR"));
console.log(HanddleAlienNumerals("N"));
console.log(HanddleAlienNumerals("LD"));
console.log(HanddleAlienNumerals("BD"));
console.log(HanddleAlienNumerals("DR"));
console.log(HanddleAlienNumerals("CCD"));
console.log(HanddleAlienNumerals("ZAD"));
console.log(HanddleAlienNumerals("BAZ"));
console.log(HanddleAlienNumerals("LLR"));
console.log(HanddleAlienNumerals("BR"));
console.log(HanddleAlienNumerals("CCBR"));
