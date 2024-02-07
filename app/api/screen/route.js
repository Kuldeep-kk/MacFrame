import {NextResponse} from "next/server";

export  const POST=async (request)=>{
    const {to,subject,text}=await request.json();

    console.log(to,subject,text);

    try {

        return NextResponse.json(to);
    }

    catch (e) {
        console.log(e);
        return NextResponse.json(e);

    }
}