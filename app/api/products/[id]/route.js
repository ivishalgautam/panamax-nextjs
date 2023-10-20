import { NextResponse } from "next/server";
import productsData from "@/store/productsData";

export async function GET(request, { params: { id } }) {
  const product = productsData.filter((product) => product.path === id);
  return NextResponse.json(product);
}
