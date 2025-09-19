import { NextRequest, NextResponse } from 'next/server';
import { mockProfileData } from './mock';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> }
) {
  const { userId } = await context.params; // ✅ await the promise

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const data = mockProfileData[userId];

  if (!data) {
    return NextResponse.json(
      { error: `No profile data found for user ${userId}` },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
