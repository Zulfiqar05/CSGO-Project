import './style.css'
// import image4 from './'
import img2 from '../../images/image6.png'
import img3 from '../../images/image4.png'

function Mission() {
  return (
    <div className='Main-Mission'>

      <div className='Main-Mission-2'>

        <h1 className='text-1'>
            OUR NEWEST 
        </h1>

        <h2 className='text-2'>
            COLLECTION
        </h2>

        <h3 className='text-3'>
            25% OFF!
        </h3>

        <button className='shop-button'>
            Shop Now
        </button>

      </div>

      <div className='sub-main'>
        <img src={img2}/>
        <img src={img2}/>
      </div>

      <div className='sub-main-2'>  

      <img src={img3}/>

      </div>
        <button className='responsiveBtn'>
          Shop Now
        </button>

     
      

    </div>
  
  )
}

export default Mission
