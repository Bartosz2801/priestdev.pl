
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const portfolios = await prisma.portfolioitem.findMany();
    console.log(portfolios)
    return new NextResponse(JSON.stringify(portfolios, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};