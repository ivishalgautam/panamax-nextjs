import { NextResponse } from "next/server";
import productsData from "@/store/productsData";

export async function GET(request) {
  return NextResponse.json(productsData);
}
