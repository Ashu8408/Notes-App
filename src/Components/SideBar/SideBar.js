import React, {useState} from 'react';

import plus from '../../Assets/pen.png';

import './SideBar.css';

function Sidebar(props) {
const colors =['magenta','#ff7eb9','#ce81ff','#f39a4f','#7afcff','#fff740','#dffe50','#f3e3d6','#e7e7e7']

const[listOpen, setListOpen] = useState(false);

const toggleList = () =>{
  setListOpen(!listOpen);
};

  return (
    <div className='sidebar'>
        <button className='transparent_button' onClick ={toggleList}>
          <img src={plus} alt='Add'/>
          </button>
        
        <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
          {colors.map((item, index)=>(
          <li
          key={index}
          className='sidebar_list_item'
          style={{backgroundColor:item}}
          onClick={()=> props.addNote(item)} ///mapping the coloured item array here to link new note of the available colour options
          />
        ))}
        </ul>
    </div>
  );
}

export default Sidebar;