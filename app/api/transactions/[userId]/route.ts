import { NextRequest, NextResponse } from 'next/server';
import { mockTransactions } from './mock';
type RouteContext = {
  params: { userId: string };
};
export async function GET(request: NextRequest, { params }: RouteContext) {
  const { userId } = params;

  const data = mockTransactions?.[userId];
  return NextResponse.json(data);
}
