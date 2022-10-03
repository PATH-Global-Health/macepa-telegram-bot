import nodeHtmlToImage from "node-html-to-image";
import { Context, InputFile, Keyboard } from "grammy";
import fs from "fs";

import getData from "./dhis2";
import generateTable from "./tables";
import { ORG_UNITS } from "./constants";

const generateReport = async (orgUnitId: string, orgUnitName: string) => {
  const data = await getData(orgUnitId);
  const html = generateTable(orgUnitName, data.data["rows"]);
  const fileName = `./images/${orgUnitId}.png`;
  return nodeHtmlToImage({
    output: fileName,
    html,
  });
};

const reply = async (
  ctx: Context,
  keyboard: Keyboard,
  orgUnitId: string,
  orgUnitName: string
) => {
  const fileName = `./images/${orgUnitId}.png`;
  if (!fs.existsSync(fileName)) {
    await generateReport(orgUnitId, orgUnitName);
  }

  await ctx.replyWithPhoto(new InputFile(fileName), {
    reply_markup: keyboard,
  });
};

export { ORG_UNITS, generateReport, reply };
