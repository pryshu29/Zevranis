import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {category,name} = props;
    return (
   <>
    <div className='breadcrum'>
        HOME <img src={arrow_icon}/> 
        SHOP <img src={arrow_icon}/> 
        {category} 
        <img src={arrow_icon}/> 
        {name}
    </div>
   </>
  )
}

export default Breadcrum