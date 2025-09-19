import { NextRequest, NextResponse } from 'next/server';
import { mockTransactions } from './mock';

// Define context type explicitly for clarity
interface RouteContext {
  params: Promise<{ userId: string }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { userId } = await context.params;

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const data = mockTransactions[userId];

  if (!data) {
    return NextResponse.json(
      { error: `No transactions for user ${userId}` },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
