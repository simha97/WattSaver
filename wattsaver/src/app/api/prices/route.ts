import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams;
  const date = url.get('date');
  const area = url.get('area');

  const apiUrl = `https://www.elprisetjustnu.se/api/v1/prices/2025/${date}_${area}.json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch data", err }, { status: 500 });
  }
}