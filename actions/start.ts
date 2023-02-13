import { bot } from "../config/index.ts"

bot.command('start', ctx => {
    ctx.reply("Oh, hi!\nThis bot sends you random quotes from random animes.\nTo use, simply send the /random command.")
})