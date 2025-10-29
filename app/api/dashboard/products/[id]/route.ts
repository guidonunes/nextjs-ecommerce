import { NextResponse } from "next/server";


export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await props.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produtos/${id}`);
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({error:'Failed to fetch products'}, { status: 500 });
  }
}

export async function PUT(request: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await props.params;
    const body = await request.json();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produtos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error updating products:', error);
    return NextResponse.json({error:'Failed to update products'}, { status: 500 });
  }
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await props.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produtos/${id}`, {
      method: 'DELETE',
    })
    if(!response.ok){
      throw new Error('Failed to delete product');
    }
    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting products:', error);
    return NextResponse.json({error:'Failed to delete products'}, { status: 500 });
  }
}
