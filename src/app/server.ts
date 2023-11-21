import app from './app'
import Config from "./Config";
import mongoose from 'mongoose';
async function main() {
   try{
    await mongoose.connect(Config.database_url as string);
    app.listen(Config.port, () => {
      console.log(`Example app listening on port ${Config.port}`)
    })
   }catch(err){
    console.log(err)
   }
  }
main()

