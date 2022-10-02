import { Bot, InputFile } from "grammy";
import { run } from "@grammyjs/runner";
import type { ParseModeContext } from "@grammyjs/parse-mode";
import { hydrateReply, parseMode } from "@grammyjs/parse-mode";
import * as dotenv from "dotenv";
import nodeHtmlToImage from "node-html-to-image";
import schedule from "node-schedule";

import { districtMenu, gzMenu, edMenu } from "./menu";
import { getData, generateTable } from "./utils";

dotenv.config();

const bot = new Bot<ParseModeContext>(process.env.TELEGRAM_TOKEN!);

// Use the plugin.
bot.use(hydrateReply);

// Sets default parse_mode for ctx.reply
bot.api.config.use(parseMode("HTML"));

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply("Welcome! MACEPA HRP Study.", {
      reply_markup: districtMenu,
    })
);

bot.hears("Gondar Zuria", async (ctx) => {
  const data = await getData("E42T5wtktJL");
  const html = generateTable("Gondar Zuria", data.data["rows"]);
  await ctx.reply("...", {
    reply_markup: { remove_keyboard: true },
  });

  const fileName = "./images/E42T5wtktJL.png";
  await nodeHtmlToImage({
    output: fileName,
    html,
  });

  await ctx.replyWithPhoto(new InputFile(fileName), {
    reply_markup: gzMenu,
  });
});

bot.hears("East Dembia", async (ctx) => {
  const data = await getData("V1Ora4NbSEE");
  const html = generateTable("East Dembia", data.data["rows"]);
  await ctx.reply("...", {
    reply_markup: { remove_keyboard: true },
  });

  const fileName = "./images/V1Ora4NbSEE.png";
  await nodeHtmlToImage({
    output: fileName,
    html,
  });

  await ctx.replyWithPhoto(new InputFile(fileName), {
    reply_markup: edMenu,
  });
});

bot.hears("Back", async (ctx) => {
  await ctx.reply("Welcome! MACEPA HRP Study.", {
    reply_markup: districtMenu,
  });
});

// Start the bot.
const runner = run(bot);

const job = schedule.scheduleJob("5 * * * *", function () {
  console.log("The answer to life, the universe, and everything!");
});

const stopRunner = async () => {
  console.log("Stopping the bot and scheduler");
  await schedule.gracefulShutdown();
  runner.isRunning() && runner.stop();
};

process.once("SIGINT", stopRunner);
process.once("SIGTERM", stopRunner);
