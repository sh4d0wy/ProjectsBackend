const books = require("../model/bookModel");

//create
const addBookController = async (req,res)=>{
    let counter =  await books.find();  
    const book = new books({
        id:counter.length+1,
        title: req.body.title,
        author :  req.body.author ,
        price:req.body.price,
        rating:req.body.rating
    })
    try{
        await book.save();
        res.json({
            "message":"Book added successfully",
            book
        })
    }catch(e){
        res.json(e);
    }
}

//read
const getAllBookController =async (req,res)=>{
    let  bookDb =  await books.find();
    res.json(bookDb);
}

//read :id
const getBookController = async (req,res)=>{
    let  bookDb =  await books.find({id:req.params.id});
    res.json(bookDb);
}

//update :id
const updateBookController = async (req,res)=>{
    try{
        let  bookDb =  await books.findOneAndUpdate({id:req.params.id},{id:24},{returnDocument:'after'});
        res.json(bookDb);
    }catch(e){
        console.log(e);
    }
}
//delete :id
const deleteBookController = async (req,res)=>{
    let bookDb = await books.findOneAndDelete({id:24})
    res.send("Deleted")
}

module.exports = {getBookController,getAllBookController,addBookController,updateBookController,deleteBookController}
