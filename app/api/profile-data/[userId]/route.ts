import { NextRequest, NextResponse } from 'next/server';
import { mockProfileData } from './mock';
type RouteContext = {
  params: { userId: string };
};
export async function GET(request: NextRequest, { params }: RouteContext) {
  const { userId } = params;

  const data = mockProfileData?.[userId];
  return NextResponse.json(data);
}
