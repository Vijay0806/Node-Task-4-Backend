const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const booksRoute=require("./routes/books");
require("dotenv").config();


const PORT=process.env.PORT ||4050;

app.use(cors({origin:true}))
const dbUrl = process.env.DB_URL;//"mongodb://localhost:27017/test";

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection; //to get the connection status

app.use(express.json());
app.use(express.urlencoded({ extended: false }));




try {
    con.on("open", () => {
      console.log("MongoDB connected!!!!");
    });
  } catch (error) {
    console.log("Error: " + error);
  }


app.get('/',(req,res)=>{
    res.send("☆☆☆☆Hi this VIJAY !!!☆☆☆☆")
});

app.use('/createBooks',booksRoute);


app.listen(PORT,()=>{
    console.log("Server is running at "+PORT);
});



