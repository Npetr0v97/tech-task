import { NextResponse } from 'next/server';
import { mockTransactions } from './mock';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  const data = mockTransactions?.[userId];
  return NextResponse.json(data);
}
