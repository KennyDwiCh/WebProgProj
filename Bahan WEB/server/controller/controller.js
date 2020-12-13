var itemDB = require('../model/item');
const express = require("express")
const app = express(); 

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    const item = new itemDB({
        Image: req.body.Image,
        Name: req.body.Name,
        Description: req.body.Description,
        Color: req.body.Color,
        ListPrice: req.body.ListPrice,
        Category: req.body.Category,
        Filter: req.body.Filter,
        Discount: req.body.Discount
    });

     

    //save to DB
    item
        .save(item)
        .then(data =>{
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        }); 

}

exports.find = (req, res) => {
    
    if(req.query.id){
        const id = req.query.id;

        itemDB.findById(id)
        .then(data=>{
            if(data){
                res.status(404).send({message: "Not Found User With ID" +id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message: "Error retriving user with ID" +id})
        })
    }else{
        itemDB.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "Error Occurred while retriving item information"})
        })
    }

}

// update by id
exports.update = (req, res) => {
    if(req.body){
        return res
        .status(400)
        .send({message: "Data to update not be empty"})
    }

    const id = req.params.id;
    itemDB.findByIdAndUpdate(id,req.body, {useFindAndModify: false})
    .then(data =>{
        if(!data){
            res.status(404).send({message: `Cannot Update item with ${id}. Maybe user not found!`})
        }else{
            send.data
        }
    })
    .catch(err =>{
        res.status(500).send({message: "Error update item information"})
    })
}

// delete by id
exports.delete = (req, res) => {
    const id = req.params.id;

    itemDB.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message: `Cannot Update item with ${id}. Maybe user not found!`})
        }else{
            res.send({
                message: "User was deleted successfully!"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({message: "Error update item information"
        })
    })
}