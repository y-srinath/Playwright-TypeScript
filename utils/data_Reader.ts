import path from "path";
import { read_CSV } from "../utils/CSV_Reader";
import { read_Excel } from "../utils/Excel_Reader";
import fs, { readFileSync } from "fs";

export function read_Data(filePath: string, sheetName?: string) {
  const ext = path.extname(filePath).toLocaleLowerCase();

  switch (ext) {
    case ".csv":
      console.log(".. I am reading CSV file ..");
      return read_CSV(filePath);

    case ".xlsx":
      console.log(".. I am reading EXCEL file ..");
      return read_Excel(filePath, sheetName || "Sheet1");

    case ".json":
      console.log(".. I am reading JSON file ..");
      const JSONData = fs.readFileSync(filePath, "utf8");
      return JSON.parse(JSONData);

    default:
      throw new Error(`Unsupported File Type - ${ext}`);
  }
}
