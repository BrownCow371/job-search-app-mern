import React from 'react';
import Note from './Note.js'

const NotesList =({notes}) => {
    return (
        <ul>
             {notes.map((note) => (
                 <Note
                    key={note._id}
                    note={note}
                 />
             ))}
        </ul>
    )

}

export default NotesList;