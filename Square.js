import React from 'react'

function square(props) {
  return (
    <div onClick={props.onClick} className='square'>
      
        <h5>{props.value}</h5>
      
    </div>
  )
}

export default square
