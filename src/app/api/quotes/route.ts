import {NextResponse} from "next/server"
import getAllQuotes from '@/lib/getAllQuotes'

// http://localhost:3000/api/quotes
export async function GET(request: Request) {
    const quotes = await getAllQuotes()

    return NextResponse.json(quotes)
}