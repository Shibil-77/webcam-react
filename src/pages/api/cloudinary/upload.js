const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name:process.env.Cloud_Name,
    api_key:process.env.API_Key,
    api_secret:process.env.API_Secret,
    secure:true
})

export default async function handler(req,res){
    const {image} = JSON.parse(req.body)
    const result = await cloudinary.uploader.upload(image);
  
    res.status(200).json({...result})
}