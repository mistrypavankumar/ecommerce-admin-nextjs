import { NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Required for CORS support to
  "Acess-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Acess-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}
