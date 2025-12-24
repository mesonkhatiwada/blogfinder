import fs from 'fs';
import path from 'path';

const file = path.join('src','data','blog.json');

export default (req,res)=>{
  const {title} = req.body;
  if(!title) return res.status(400).json({message:'Title required'});

  const list = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : [];
  const blog = {id:list.length+1,title,createdAt:new Date().toISOString()};
  list.push(blog);
  fs.writeFileSync(file,JSON.stringify(list,null,2));

  res.status(201).json({success:true,blog});
};