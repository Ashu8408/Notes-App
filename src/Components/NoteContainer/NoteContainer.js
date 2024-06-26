import React from 'react';

import Note from '../Note/Note';

import './NoteContainer.css';

function NoteContainer(props) {

    const revArray = (arr) => {
    //     return arr.slice().reverse();
    // };
        const array=[];

        for(let i= arr.length-1; i>=0; --i){
            array.push(arr[i]);
        }
        return array;
    };


    const notes = revArray(props.notes);
    ///console.log(props.notes,notes)

    return(
    <div className='note-container'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
              {notes?.length>0 ? (notes.map((item) => (
              <Note key={item.id} note={item}
              updateText={props.updateText}
              deleteNote={props.deleteNote}
              />))) :   <h4>Add new notes...</h4> 
            }
              </div>
              </div>
      );
    }

export default NoteContainer;