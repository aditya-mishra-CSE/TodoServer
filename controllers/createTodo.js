//import the model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title and description from the request body
        const {title, description} = req.body;
        //create a new Todo Obj and insert in DB
        const todo = await Todo.create({title, description});
        //send a json todo with a success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:'Entry CReated Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:err.message,
        })
    }
} 

