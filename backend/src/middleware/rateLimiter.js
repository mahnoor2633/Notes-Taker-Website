// import ratelimit from "../config/upstash.js";

// const rateLimiter = async(req, res, next) => {
//     try{
//         const {success} = await ratelimit.limit("");
//         if(!success) return res.status(429).json({message:"TOO MANY REQUESTS, PLEASE TRY AGAIN LATER"});
//         next();
//     }
//     catch(error){
//         console.error("RATE LIMIT ERROR", error);
//         next(error);
//     }
// }

// export default rateLimiter;

// import ratelimiter from "../config/upstash";

// const rateLimiter = async(req, res, next) => {
//     try {
//         const {success} = await ratelimiter.limit("my-user-key")
//         if(!success) return res.status(429).json({message: "TOO MANY REQUESTS"});
//         next();
//     } catch (error) {
//         console.error("ERROR IN RATE LIMITING:", error)
//         next(error)
//     }
// }

// export default rateLimiter;

import ratelimiter from "../config/upstash.js";

const rateLimiter = async(req, res, next) => {
    try {
        
        const {success} = await ratelimiter.limit("my-user-key");
        if(!success) return res.status(429).json({message: "TOO MANY REQUESTS"});
    
        next();
    } catch (error) {
        console.error("ERROR IN RATE LIMITING:", error)
        next(error)
    }
}

export default rateLimiter;