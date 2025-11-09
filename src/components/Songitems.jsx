import React, { useContext } from 'react'
import { playercontext } from './Context/PlayerContext'

const Songitems = (props) => {
  const {playwithid}=useContext(playercontext);
  return (
    <div onClick={()=>playwithid(props.id)} className='max-w-[200px0 min-h-[100px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded min-w-[155px] max-h-[189px]' src={props.image} alt="" />
      <p className='font-bold mt-2 mb-1 text-white'>{props.name}</p>
      <p className='text-slate-200 text-sm'>{props.desc}</p>
    </div>
  )
}

export default Songitems