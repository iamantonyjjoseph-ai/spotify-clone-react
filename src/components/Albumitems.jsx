import React from 'react';
import { useNavigate } from 'react-router-dom';

const Albumitems = (props) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/album/${props.id}`)}
      className='max-w-[200px0 min-h-[100px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded min-w-[155px] max-h-[189px]' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1 text-white'>{props.name}</p>
        <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default Albumitems