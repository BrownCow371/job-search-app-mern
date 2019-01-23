import React from 'react';

const Note =({note, key}) => {
    let date = new Date(note.entryDate);

    return (
        <li key={key}>
            <strong>{date.toLocaleDateString()}: </strong> 
            { note.text}
        </li>
    )

}

export default Note