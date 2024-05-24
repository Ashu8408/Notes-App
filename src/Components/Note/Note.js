import React from 'react';

import deleteIcon from '../../Assets/delete.png';
import './Note.css'

let timer=500,timeout;

function Note(props) {

const timeStamp=(value)=>{
  if(!value) return'';
  const date=new Date(value)

  let hrs=date.getHours();
  hrs=hrs<10?"0"+hrs:hrs;

  let min=date.getMinutes();
  min=min<10?"0"+min:min;

  let sec=date.getSeconds();
  sec=sec<10?"0"+sec:sec;


  /*const suff=['','st','nd','rd','th','th','th','th','th','th','th',
  'th','th','th','th','th','th','th','th','th','th',
  'st']*/
  
  let day=date.getDate();
  day=day<10?"0"+day:day;


  const monthNames=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec']
  const MM=date.getMonth();
  let month=monthNames[MM]

  //return `${hrs}:${min}:${sec}   ${day}${suff[day]} ${month}`; 
  return `${hrs}:${min}:${sec}   ${day} ${month}`;
};

const debounce=(func) => {
  clearTimeout(timeout)
  timeout=setTimeout(func,timer);
}

const updateText=(text,id)=>{
  debounce(()=>props.updateText(text,id));
}

  return (
    <div className='note' style={{backgroundColor:props.note.color}}>
        <textarea className='note_text' defaultValue={props.note.text}
        onChange={(event)=>updateText(event.target.value, props.note.id)}
        />

        <div className='note_footer'>
        <p>{timeStamp(props.note.time)}</p>
        
        <img src = {deleteIcon} alt='DELETE'
        onClick={()=> props.deleteNote(props.note.id)} />
        </div>
    </div>
  );
}

export default Note;