const express = require('express');
const {getBookController,getAllBookController,addBookController,updateBookController,deleteBookController} = require("../Controller/bookController");

const router = express.Router();
router
    .post("/",addBookController)
    .get('/',getAllBookController)
    .get('/:id',getBookController)
    .put("/:id",updateBookController)
    .delete('/:id',deleteBookController)
module.exports = router;


