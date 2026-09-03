import fs from "node:fs";
import path from "node:path";

const notFoundFile = "404.html";
const targetFile = "not_found.html";
const buildDir = "dist";
const notFoundFilePath = path.join(
  process.cwd(),
  `${buildDir}/${notFoundFile}`,
);
const targetFilePath = path.join(process.cwd(), `${buildDir}/${targetFile}`);

if (!fs.existsSync(notFoundFilePath)) {
  console.error("Not found file not found.");
} else {
  fs.copyFileSync(notFoundFilePath, targetFilePath);

  console.log("Not found file copied.");
}
