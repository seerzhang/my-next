//支持以下HTTP方法：
// GET 、 POST 、 PUT 、 PATCH 、 DELETE 、 HEAD 和 OPTIONS 。
// 如果调用了不支持的方法，Next.js将返回 405 Method Not Allowed 响应。

import { NextResponse } from "next/server"
// import { UserModel } from "../../../../DB/config"
// import mongoose from 'mongoose'

export async function GET() {

    // console.log('\n\n\n-------------'+Math.random(), mongoose.models.user)

    // const data = await UserModel.find({}).cursor({ batchSize: 1000 })

    // console.log('\n\n\n-----------data--'+Math.random(), data)


    // const data = await mongoose.model('user', new mongoose.Schema({
    //     name: String,
    //     age: Number
    // })).find({})

    return NextResponse.json({
        code: 200,
        data: [],
        message: 'ok'
    })
}