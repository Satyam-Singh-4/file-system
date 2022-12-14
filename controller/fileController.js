const fs = require("fs").promises;

const createFile = async(req, res) => {
  try {
    const { fname, data } = req.body;

    const file = await fs.writeFile(fname, data);
    res.status(200).json({
      response: file,
      message: "file created succssefully",
    });
  } catch (error) {
    res.status(400).json({
      message: "not created",
      response: error,
    });
  }
};

const readFile1=async(req,res)=>{
  try {
    const {path}=req.body;
  const resp=await fs.readFile(path);
  res.status(200).json({
    response:resp.toString(),
    message:"succseefully readed"
  })
  } catch (error) {
    res.status(400).json({
      message:"not readed",
      response:error
    })
  }
}
module.exports = {
  createFile,
  readFile1
};
