import { NextRequest, NextResponse } from 'next/server';
import { mockConfigurations } from './mock';

interface RouteContext {
  params: Promise<{ userId: string }>;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { userId } = await context.params;

  if (!userId) {
    return NextResponse.json({ error: 'Missing userId' }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type') ?? 'profile';

  try {
    const userConfig = mockConfigurations[userId];
    if (!userConfig) {
      return NextResponse.json(
        { error: `No configuration found for user ${userId}` },
        { status: 404 }
      );
    }

    const data = userConfig[type];
    if (!data) {
      return NextResponse.json(
        { error: `No configuration of type "${type}" for user ${userId}` },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Error fetching configuration:', err);
    return NextResponse.json(
      { error: 'Failed to fetch configuration' },
      { status: 500 }
    );
  }
}
