import { getProjects } from "@/lib/fetchmdx";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const projects = await getProjects();
        return NextResponse.json(projects);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Internal Server error", {status: 500})
    }
}