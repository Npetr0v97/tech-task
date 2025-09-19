import { NextRequest, NextResponse } from 'next/server';
import { mockProfileData } from './mock';

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  try {
    const data = mockProfileData[userId];

    if (!data) {
      return NextResponse.json(
        { error: `No profile data found for user ${userId}` },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Error fetching profile:', err);
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    );
  }
}
