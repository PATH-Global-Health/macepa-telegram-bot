import { Bot, Context, InputFile, Keyboard } from "grammy";
import * as dotenv from "dotenv";
import nodeHtmlToImage from "node-html-to-image";
import schedule from "node-schedule";
import fs from "fs";

import { districtKeyboard, gzKeyboard, edKeyboard } from "./keyboard";
import { getData, generateTable } from "./utils";
import { ORG_UNITS } from "./utils";

dotenv.config();

const bot = new Bot(process.env.TELEGRAM_TOKEN!);

const reply = async (ctx: Context, keyboard: Keyboard, fileName: string) => {
  if (fs.existsSync(fileName)) {
    await ctx.replyWithPhoto(new InputFile(fileName), {
      reply_markup: keyboard,
    });
  } else {
    await ctx.reply("Please try again later", {
      reply_markup: keyboard,
    });
  }
};

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply("Welcome! MACEPA HRP Study.", {
      reply_markup: districtKeyboard,
    })
);

bot.on("message:text", async (ctx) => {
  await ctx.reply("...", {
    reply_markup: { remove_keyboard: true },
  });

  switch (ctx.message.text) {
    case "Gondar Zuria":
      reply(ctx, gzKeyboard, "./images/E42T5wtktJL.png");
      break;
    case "East Dembia":
      reply(ctx, edKeyboard, "./images/V1Ora4NbSEE.png");

      break;
    case "Back":
      await ctx.reply("Select a district", {
        reply_markup: districtKeyboard,
      });
  }
});

// Start the bot.
bot.start();

const job = schedule.scheduleJob("*/5 * * * *", async () => {
  for (const key in ORG_UNITS) {
    const data = await getData(key);
    const html = generateTable(ORG_UNITS[key], data.data["rows"]);
    const fileName = `./images/${key}.png`;
    await nodeHtmlToImage({
      output: fileName,
      html,
    });
  }
  console.log("Table generation is complete.");
});

const stopRunner = async () => {
  console.log("Stopping the bot and scheduler");
  await schedule.gracefulShutdown();
  bot.stop();
};

process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);
