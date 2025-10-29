import { NextResponse } from "next/server";

export async function GET() {
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produtos`);
    const produtos = await response.json();
    return NextResponse.json(produtos);

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({error:'Failed to fetch products'}, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({error:'Failed to fetch products'}, { status: 500 });
  }
}
