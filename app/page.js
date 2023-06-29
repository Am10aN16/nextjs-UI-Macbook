import React from 'react'
import Image from 'next/image'
import wave from "./assets/wave.svg"
import mobile from "./assets/mobile.png"
import tick from "./assets/tickbox.png"
import form from "./assets/form.png"

const HomePage = () => {
  return (
    <div className='main'>
      <div className="top">
        <h1>Check your financial health</h1>
       <div className="content">
       <p>Use WeathoMeter to get a free report
card for your finances- within minutes! </p>
        </div> 
        <button className='btn'>Get Started</button>
      </div>

     

<div className="middle">
<div className="left_part">
          <div className="row">
              <Image src={tick} width={25}/>
              <p>Expected Retirement Age</p>
          </div>
          <div className="row">
              <Image src={tick}  width={25}/>
              <p>Identify Mistakes</p>
          </div>
      </div>
<Image 
        src={mobile}
        alt="Picture of the wave"
        width={400}
        height={650}
      />

<div className="right_part">
          <div className="row">
              <Image src={tick} width={25}/>
              <p>Personalised Road Map</p>
          </div>
          <div className="row">
              <Image src={tick}  width={25}/>
              <p>Tips To Improve</p>
          </div>
      </div>
</div>

<div >
<div className="bottom_up w-full">
  <h1>How it works?</h1>
  <Image id='form' src={form}/>
  <div className="content_frm  ">
    <div><p>Answer few questions</p></div>
    <div><p>Register using phone and OTP</p></div>
    <div><p>Get Report and Personal roadmap</p></div>
  </div>
  <div className="cust_btn">

  <button className='btn '>Get Started</button>  
  </div>
</div>
<div id="bottom">
<Image className='w-full wave'
        src={wave}
        alt="Picture of the wave"
      />
</div>
</div>
     
    </div>
  )
}

export default HomePage