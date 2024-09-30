

import { NextRequest, NextResponse } from "next/server";

// Stop this route from being pre-rendered
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {

    try {

        const body = await request.json();

        const response = await fetch(`${process.env.API_BASE_URL}/api/v1/userInterest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        return (new NextResponse(null, { status: response.status }))

    } catch (err) {
        console.log(err);

    }

}