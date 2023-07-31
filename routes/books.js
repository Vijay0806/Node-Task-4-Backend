const express=require("express");
const router=express.Router();
const BookData=require('../model/Book');

router.get("/",(req,res)=>{
    BookData.find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.json({message: err});
    });
});

router.post("/",(req,res)=>{
    const createBook=new BookData({
        title:req.body.title,
        description:req.body.description,
    });
    createBook.save()
    .then((data)=>{
        res.json(data);
    })
   .catch((err)=>{
        res.json({message:err});
    });
})


router.delete("/:id", (req, res) => {
    BookData.deleteOne({ _id: req.params.id })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      });
  });

  
  router.patch("/:id", (req, res) => {
    BookData.updateOne(
      { _id: req.params.id },
      {
        $set: { description: req.body.description },
      }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ message: err });
      });
    });

    module.exports=router;
  