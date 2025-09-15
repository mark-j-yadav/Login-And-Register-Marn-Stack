import { app } from "./app.js";
import { dbContion } from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
})
dbContion()
.then(() => {
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    })
  

})
.catch((err) => console.log(err))