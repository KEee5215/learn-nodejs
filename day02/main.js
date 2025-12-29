import { readFile, writeFile } from "node:fs/promises";

const data = await readFile("./data.txt", "utf-8");

// console.log(data);

const keychain = +(await readFile("./keychain.txt", "utf-8"));

console.log("移动位数", keychain);

//move right side
const moveRightDecryptedData = data
  .split("")
  .map((currentChar) => {
    currentChar = currentChar.charCodeAt() + keychain;
    return String.fromCharCode(currentChar);
  })
  .join("");
console.log("右移结果", moveRightDecryptedData);

//move left side
const moveLeftDecryptedData = data
  .split("")
  .map((currentChar) => {
    currentChar = currentChar.charCodeAt() - keychain;
    return String.fromCharCode(currentChar);
  })
  .join("");
console.log("左移结果", moveLeftDecryptedData);

writeFile("./desktop.txt", moveLeftDecryptedData, "utf-8");

// //三次反转法,实现右移数组元素
// arr = reverse(arr, 0, keychain - 1);
// arr = reverse(arr, keychain, arr.length - 1);
// arr = reverse(arr, 0, arr.length - 1);
// console.log("右移", arr.join(""));

// //左移数组元素
// arr1 = reverse(arr1, 0, arr1.length - 1);
// arr1 = reverse(arr1, keychain, arr1.length - 1);
// arr1 = reverse(arr1, 0, keychain - 1);
// console.log("左移", arr1.join(""));

// let result = `右移${keychain}位结果：${arr.join("")}\n\n
// 左移${keychain}位结果：${arr1.join("")}
// `;

// await writeFile("./desktop.txt", result, "utf-8");

//三次反转法,实现左移数组元素

// function reverse(arr, start, end) {
//   while (start < end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
//   return arr;
// }
