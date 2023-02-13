import { axiod } from "../deps.ts"

const randomQuote = async () => {
    const URL = "https://animechan.vercel.app/api/random";
    
    let result = await axiod.get(URL)

    return result.data

}

export { randomQuote }