import { Bot } from "grammy";
// import * as dotenv from "dotenv";
import schedule from "node-schedule";

import { districtKeyboard, gzKeyboard, edKeyboard } from "./keyboard";
import { ORG_UNITS, generateReport, reply } from "./utils";

// dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

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
      reply(ctx, gzKeyboard, "E42T5wtktJL", "Gondar Zuria");
      break;
    case "Chinchaye":
      reply(ctx, gzKeyboard, "PP27kXYrC7p", "Chinchaye");
      break;
    case "Debre Selam":
      reply(ctx, gzKeyboard, "tAKQdfV6Qqa", "Debre Selam");
      break;
    case "Degola":
      reply(ctx, gzKeyboard, "hLWb32BOEpa", "Degola");
      break;
    case "Firqa Dangurie":
      reply(ctx, gzKeyboard, "UNdYuOEbHEi", "Firqa Dangurie");
      break;
    case "East Dembia":
      reply(ctx, edKeyboard, "V1Ora4NbSEE", "East Dembia");
      break;
    case "Arebia":
      reply(ctx, edKeyboard, "ZqRY2qejFe8", "Arebia");
      break;
    case "Fenja":
      reply(ctx, edKeyboard, "LkNpXjhXdJO", "Fenja");
      break;
    case "Jangua":
      reply(ctx, edKeyboard, "Nimdjs72wnV", "Jangua");
      break;
    case "Sufankara":
      reply(ctx, edKeyboard, "oNlTbCiJamP", "Sufankara");
      break;
    case "Back":
      await ctx.reply("Select a district", {
        reply_markup: districtKeyboard,
      });
  }
});

// Start the bot.
bot.start();
// At every 5th minute.
// "*/5 * * * *"
//At 02:00.
const job = schedule.scheduleJob("0 2 * * *", async () => {
  for (const key in ORG_UNITS) {
    generateReport(key, ORG_UNITS[key]);
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
