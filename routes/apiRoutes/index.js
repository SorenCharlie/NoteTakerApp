const router = require('express').Router(); //gets router level middleware
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

router.route('/notes')
    // Route to read db.json file and return all saved notes as JSON
    .get((req, res) => {
        const notesData = fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8');
        const notes = JSON.parse(notesData);
        res.json(notes);
    })
    // Route to receive a new note and add it to the db.json file
    .post((req, res) => {
        const newNote = req.body;
        newNote.id = uuid.v4(); // Generate a unique ID for the new note
        const notesData = fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8');
        const notes = JSON.parse(notesData);
        notes.push(newNote);
        fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes, null, 2));
        res.json(newNote);
    })

// Optional: Route to delete a note based on its ID
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const notesData = fs.readFileSync(path.join(__dirname, '../../db/db.json'), 'utf8');
    let notes = JSON.parse(notesData);
    notes = notes.filter(note => note.id !== noteId);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes, null, 2));
    res.json({ message: 'Note deleted successfully' });
});

module.exports = router;