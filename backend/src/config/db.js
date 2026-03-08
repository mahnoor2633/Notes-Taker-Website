// import mongoose from "mongoose";

// export const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGO_CONN_URI);
//         console.log("MONGODB CONNECTED SUCCESSFULLY")
//     } catch (error) {
//         console.log("ERROR CONNECTING TO MONGODB", error);
//         process.exit(1); //exit with failure
//     }
// }

// import mongoose from "mongoose";

// export const connectDB = async () =>{
//     try {
//         await mongoose.connect(process.env.MONGO_CONN_URI);
//         console.log("MONGO DB CONNECTED SUCCESSFULLY");
//     } catch (error) {
//         console.error("CONNECTION WITH MONGODB FAILED");
//         process.exit(1);
//     }
// }

import mongoose from "mongoose";

const connectDB=async()=> {
    try{
        await mongoose.connect(process.env.MONGO_CONN_URI)
        console.log("CONNECTED TO MONGODB")
    }
    catch(error){
        console.error("CONNECTION O MONGODB ERROR:", error);
        process.exit(1);
    }
}

export default connectDB;