import { Bot } from "grammy";
import * as dotenv from "dotenv";
dotenv.config();

const bot = new Bot(process.env.TELEGRAM_TOKEN!);

bot.command("start", (ctx) => ctx.reply("Welcome! MACEPA HRP Study."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Start the bot.
bot.start();
