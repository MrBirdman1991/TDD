import { generateReportData, storeData } from "./src/data";
import log from "./src/util/logger";

const data = generateReportData(log);
storeData(data)