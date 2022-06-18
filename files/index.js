const path = require("path");
const fs = require("fs/promises");

const dataPath = path.join(__dirname, "..", "data", "den.txt");
// const dataPath = path.resolve("data", "den.txt");
// console.log(path);
// console.log(__dirname);
// console.log(__filename);
// console.log(dataPath);

// const readFile = async () => {
//   try {
//     const data = await fs.readFile(dataPath, { encoding: "utf-8" });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// (() => {
//   readFile();
// })();

const appendFile = async () => {
  try {
    const data = await fs.appendFile(dataPath, "\nhello", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
(() => {
  appendFile();
})();

// const writeFile = async () => {
//   try {
//     const data = await fs.writeFile(dataPath, { encoding: "utf-8" });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// (() => {
//   writeFile();
// })();

// const removeFile = async () => {
//   try {
//     const data = await fs.unlink(dataPath, { encoding: "utf-8" });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// (() => {
//   removeFile();
// })();

// const createFile = async () => {
//   try {
//     const data = await fs.appendFile(dataPath, "Max", { encoding: "utf-8" });
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// (() => {
//   createFile();
// })();
