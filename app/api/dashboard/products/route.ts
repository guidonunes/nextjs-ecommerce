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
