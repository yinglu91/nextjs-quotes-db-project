import {NextResponse} from "next/server"
import getRandomQuote from '@/lib/getRandomQuote'

// http://localhost:3000/api/randomquote
export async function GET(request: Request) {
    const quote = await getRandomQuote()

    return NextResponse.json(quote)
}