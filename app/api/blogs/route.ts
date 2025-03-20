import { getBlogs } from "@/lib/fetchmdx";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const blogs = await getBlogs();
        return NextResponse.json(blogs);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Internal Server error", {status: 500})
    }
}