import  mongoose from "mongoose";


const dbContion = async() => {
    try {
         const response =await mongoose.connect(process.env.DB_URI)
         console.log('mognodb Contion was susffully ', response.connection.host)
         return response;
    } catch (error) {
        console.log("mongod error ", error)
        process.exit(1)
    }
}


export{dbContion}