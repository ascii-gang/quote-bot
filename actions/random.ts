import { bot } from "../config/index.ts"
import { randomQuote } from "../utils/quote.ts"

bot.command("random", async (ctx) => {
    let quote = await randomQuote();

    await ctx.reply(
        `Anime: ` + quote.anime + `\n` +
        `Character: ` + quote.character + `\n` +
        `Quote: ` + quote.quote,
    );
})