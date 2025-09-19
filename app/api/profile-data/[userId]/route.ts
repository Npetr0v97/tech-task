import { NextResponse } from 'next/server';
import { mockProfileData } from './mock';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  const data = mockProfileData?.[userId];
  return NextResponse.json(data);
}
