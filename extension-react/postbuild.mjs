import { copyFile } from "fs";
import { readdir } from "fs/promises";

const findFiles = async (names, ext) => {
  try {
    const dir = "./";
    const files = await readdir(dir);

    const matchingFiles = files.filter((file) => {
      const fileParts = file.split(".");
      const fileName = fileParts[0];
      const fileExt = fileParts.pop().toLowerCase();
      return names.some((name) => name === fileName) && fileExt === ext;
    });

    if (matchingFiles.length > 0) {
      console.log("✅Matching Files: ");
      matchingFiles.forEach((file) => console.log(file));
      return matchingFiles;
    } else {
      console.log("❌No Matching Files Found!");
    }
  } catch (error) {
    console.error("Error finding files", error);
  }
};

const names = ["service-worker", "content"];
const extension = "js";

const copy = async () => {
  const filesToCopy = await findFiles(names, extension);
  filesToCopy.forEach((file) => {
    copyFile(file, `./dist/${file}`, (err) => {
      if (err) throw err;
      console.log(`Copied file: ${file} successfully!✅`, file);
    });
  });
};

copy();
