const Task=require('../models/Task');
exports.createTask=async(req,res)=>{
    try{
       
        const task=await Task.create({
            title:req.body.title,
            description:req.body.description,
            status:req.body.status||"pending",
            user:req.user.id
        })
           res.status(201).json({msg:'task created successfully',task});
    }catch(error){
        res.status(500).send(error);
    }
    
};


exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } 
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getTaskById=async(req,res)=>{
try{
const task=await Task.findOne({_id:req.params.id,user:req.user.id})
res.json(task)
}
catch(error)
{
res.json(error)
}
}
exports.updateTask=async(req,res)=>{
    try{
    const task=await Task.findOneAndUpdate({
        _id:req.params.id,
        user:req.user.id,
    },
{
    title:req.body.title,
    description:req.body.description,
    status:req.body.status

},{new:true})
if(!task){
    res.json({msg:"no task exist"})
}
res.json(task);
}
catch(error){
    res.json(error);
}
}
exports.updateTaskPatch=async(req,res)=>{
     try{
    const task=await Task.findOneAndUpdate({
        _id:req.params.id,
        user:req.user.id,
    },
    req.body,
{new:true},
)
if(!task){
    res.json({msg:"no task exist"})
}
res.json(task);
}
catch(error){
    res.json(error);
}
}
exports.deleteTask=async(req,res)=>{
    try{
        const task=await  Task.findOneAndDelete({
            _id:req.params.id,
            user:req.user.id
        })
        res.json(task)
    }
    catch(error){
        res.json(error)
    }
}