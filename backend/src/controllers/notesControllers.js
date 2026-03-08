// import Note from "../models/Note.js";

// export async function getAllNotes(_, res) {
//     try {
//         const notes = await Note.find().sort({createdAt: -1,});
//         res.status(200).json(notes)
//     } catch (error) {
//         console.error("ERROR IN getAllNotes controller: ", error)
//         res.status(500).json({message:"INTERNAL SERVER ERROR"})
//     }
// }

// export async function createNote(req, res) {
//     try {
    
//         const {title, content} = req.body;
//         console.log("TITLE & CONTENT:", title, content);
//         const newNote = new Note({title, content});
//         const savedNote = await newNote.save();
    
//         res.status(201).json({message:"NOTE CREATED SUCCESSFULLY", note: savedNote});
//     } catch (error) {
//         console.error("ERROR IN CREATING NOTE: ", error);
//         res.status(500).json({message:"INTERNAL ERROR IN CREATING NOTE"})
//     }
// }

// export async function updateNote(req, res) {
//     try {

//         const {title, content} = req.body
//         const updatedNote = await Note.findByIdAndUpdate(
//             req.params.id, 
//             {title,content}, 
//             {new: true}
//         );

//         console.log(updatedNote);

//         if (!updatedNote) return res.status(404).json({message:"NOTE NOT FOUND! CREATE A NEW ONE OR CHANGE AN EXISTING ONE PLEASE"})

//         res.status(200).json({message:"NOTE UPDATED SUCCESSFULLY", note: updatedNote});
        
//     } catch (error) {
//         console.error("ERROR IN UPDATING NOTE: ", error);
//         res.status(500).json({message:"INTERNAL ERROR IN UPDATING NOTE"})
//     }
// }

// export async function deleteNote(req, res) {
    
//     try {
        
//         const deletedNote = await Note.findByIdAndDelete(req.params.id)

//         if(!deletedNote) return res.status(404).json({message:"NOTE DOESNOT EXIST"})

//         res.status(200).json({message:"NOTE DELETED SUCCESSFULLY", note: deletedNote})

//     } catch (error) {
//         console.error("ERROR IN DELETING NOTE: ", error);
//         res.status(500).json({message:"INTERNAL ERROR IN DELETING NOTE"})
//     }

// }

// export async function getNoteById(req, res) {

//     try {
        
//         const fetchedNote = await Note.findById(req.params.id);

//         if(!fetchedNote) return res.status(404).json({message:"NOTE DOESNOT EXIST"});

//         res.status(200).json({message:"NOTE FETCHED SUCCESSFULLY", note: fetchedNote})

//     } catch (error) {
//         console.error("ERROR IN FETCHING NOTE: ", error);
//         res.status(500).json({message:"INTERNAL ERROR IN FETCHING NOTE"})
//     }

// }

import Note from "../models/Note.js";

export async function getAllNotes(_, res){
    try{
        const notes = await Note.find().sort({createdAt: -1});

        if (notes.length === 0) return res.status(404).json({message: "NO NOTES EXIST YET"})
        
        res.status(200).json({message: "NOTES FETCHED SUCCESSFULLY", notes})
    }
    catch(error){
        console.error("ERROR IN getAllNotes controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function getNoteById(req, res){
    try{
        const fetchNote = await Note.findById(req.params.id);
        if(!fetchNote) return res.status(404).json({message: "REQUESTED NOTE DOESN'T EXIST"})

        res.status(200).json({message:"NOTE FETCHED SUCCESSFULLY", note: fetchNote})
    }
    catch(error){
        console.error("ERROR IN getNoteById controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function createNote(req, res){
    try{
        const{title, content} = req.body;

        const newNote = new Note({title, content});

        const savedNote = await newNote.save();

        res.status(201).json({message:"NOTE CREATED SUCCESSFULLY", note: savedNote})    
    }
    catch(error){
        console.error("ERROR IN createNote controller: ", error)
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function updateNote(req, res){
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {new: true}
        );
        if(!updatedNote) return res.status(404).json({message:"NOTE NOT FOUND! CREATE A NEW ONE OR CHANGE AN EXISTING ONE PLEASE"});

        res.status(200).json({message:"NOTE UPDATED SUCCESSFULLY", note: updatedNote})
    }
    catch(error){
        console.error("ERROR IN UPDATING NOTE", error);
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function deleteNote(req, res){
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote) return res.status(404).json({message:"NOTE DOESN'T EXIST"})
        res.status(200).json({message:"NOTE DELETED SUCCESSFULLY", note: deletedNote})
    }
    catch(error){
        console.error("ERROR IN DELETING NOTE", error);
        res.status(500).json({message:"INTERNAL SERVER ERROR"})
    }
}

export async function deleteAll(_, res){
    try{
        const deletedNotes = await Note.deleteMany({});
        if(deletedNotes.deleteCounts === 0) return res.status(404).json({message:"NO NOTES TO DELETE"})
        res.status(200).json({message:"ALL NOTES DELETED SUCCESSFULLY", notes: deletedNotes})
    }
    catch(error){
        console.error("ERROR IN DELETING ALL NOTES", error);
        res.status(500).json({message:"INTERNAL SERVER ERROR"});
    }
}