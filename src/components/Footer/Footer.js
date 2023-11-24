import React, { PureComponent } from 'react'
import './Footer.css'
import img from '../../images/logo.png'

export class Footer extends PureComponent {
  render() {
    return (
      <div className='Footer'>

          <div class="leftfooter">
                <h1>Go To</h1>
                <a href="#">HOME</a>
                <a href="#">SHOP</a>
                <a href="#">TEAM</a>
                <a href="#">CS:GO</a>
                <a href="#">Content Creators</a>
                <a href="#">contact</a>
            </div>

            <div className='footerlogo'>
            <img src={img} alt="" />

            </div>

            <div class="rightfooter ">
                <h1>Contact</h1>
                <h2>Team@chrono-esports.com</h2>
                <h2>Press@chrono-esports.com</h2>
                <br></br>
                <br></br>
                <h1>inktr.ee/teamchr</h1>

            </div>
        


        
      </div>
    )
  }
}

export default Footer
