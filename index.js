import express from "express";
import bodyParser from "body-parser";
import QRCode  from "qrcode";

const app = express();
const port = 4000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("index.ejs");
})

app.post("/submit", async (req, res) =>{
    const urlText = req.body["text"];
    try{
        const urlImg = await QRCode.toDataURL(urlText);
        res.render("generate.ejs",
            {
                generatedQR : urlImg,
                providedUrl : urlText,
            });
    }catch(err){
        console.log(err);
    }
})

app.post("/redirect", (req, res) =>{
    res.redirect("/");
})

app.listen(port, (req, res) =>{
    console.log(`Server running on port : ${port}.`);
})