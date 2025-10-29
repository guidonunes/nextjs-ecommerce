import { NextResponse } from "next/server";

export async function  POST(request: Request) {
  const {email, password} = await request.json();

  if(!email || !password) {
    return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
  }

  if (email === 'admin@example.com' && password === 'admin123') {
    return NextResponse.json(({ token: 'fake-jwt-token' }), { status: 200 });
  } else {
    return NextResponse.json(({ message: 'Invalid email or password.' }), { status: 401 });
  }
}
