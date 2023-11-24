import React from 'react'
import btnimg1 from '../images/Rectangle 6.png'
import btnimg2 from '../images/Rectangle 5.png'
function Btns() {
  return (
    <section className='maindevofbtns'>
      <div>
      <img src={btnimg1}/>
      </div>
      <div>
      <img src={btnimg2}/>  
      </div>
    </section>
  )
}

export default Btns
