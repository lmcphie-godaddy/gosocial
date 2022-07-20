const cors = require("cors")
const express = require("express")
const router = express.Router()
const http = require("http")
const {spawn} = require("child_process")
const concat = require("concat-stream")
http.createServer(async (req,res) => {
  // await sendEmail(req.params);
  // concat(req, (data) => {
  //   console.log(data)
  // })
  await sendEmail(null); 
  // add params
  // res.end("hello world");
}).listen(9002)

const sendEmail = async (params) => {
    const py = await spawn("python3", ["sendEmail.py"]);
    await py.stdout.on("data", async (data) => {
      console.log("success")
    })
  };