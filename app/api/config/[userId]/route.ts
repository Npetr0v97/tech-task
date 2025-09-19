import { NextResponse } from 'next/server';
import { mockConfigurations } from './mock';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  // Grab the query parameter from the URL
  const { searchParams } = new URL(request.url);
  const type: string = searchParams.get('type') ?? 'profile';
  let data;
  try {
    data = mockConfigurations?.[userId]?.[type];
  } catch (err) {
    console.error('Error fetching configuration:', err);
    return NextResponse.json(
      { error: 'Failed to fetch configuration' },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
