import mongoose from "mongoose";
import New from "../models/newModel.js";

export const getNews = async (req, res) => {
    try {
        const news = await New.find();
        console.log("news:", news);
        res.status(200).json(news);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const createNew = async (req, res) => {
    console.log("REQ=", req.body)
    const newBody = req.body;
    console.log("entro a createNews = ", newBody);
    const newNew = new New(newBody);

    try {
        await newNew.save();

        res.status(201).json(newNew);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateNew = async (req, res) => {
    
    try {
        const { id: _id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ message: "Invalid id" });
       
        const newBody = req.body;
        const newNew = await New.findByIdAndUpdate(_id, newBody, {
            new: true,
        });
        res.status(200).json(newNew);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteNew = async (req, res) => {
    try {
        const { id: _id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({ message: "Invalid id" });
        const newNew = await New.findByIdAndDelete(_id);
        res.status(200).json({message: "New deleted"});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
