import { faAt, faComment, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../site.css'

const Page = () => {
  return (
    <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <div className="contact">
<label style={{width: '100%', textAlign: 'center', fontSize: 15, color: '#2f518e',  fontWeight: '500'}}>contacts</label>
  <strong style={{width: '100%', textAlign: 'center', fontSize: 25}}>Contact us</strong>
  <div style={{display: 'flex', flex: 1,  alignItems: 'center', justifyContent: 'center'}}>
  <form action="">
    <div className="form_img">
      <div className="img"></div>
      <br />
      <div className="dets">
        <div className="det_info">
          <b> <FontAwesomeIcon icon={faPhone} style={{marginRight: 5}}/> Call us</b>
          <label style={{fontSize: 11, color: 'gray'}}>+234 05156</label>
        </div>
        <div className="det_info">
          <b><FontAwesomeIcon icon={faAt} style={{marginRight: 5}}/>Our email</b>
          <label style={{fontSize: 11, color: 'gray'}}>@helpyou@gmail.com</label>
        </div>
      </div>
    </div>
    <div className="form_fields">
      <div className="input_container">
        <FontAwesomeIcon icon={faUser}  style={{margin: 20, width: 20, height: 20}}/>
        <input type="text" placeholder='Your name' />
      </div>
      <div className="input_container">
        <FontAwesomeIcon icon={faEnvelope}  style={{margin: 20, width: 20, height: 20}}/>
        <input type="text"placeholder='Your subject' />
      </div>
      <div className="input_container" style={{minHeight: 130, alignItems: 'flex-start'}}>
        <FontAwesomeIcon icon={faComment}  style={{margin: 20, width: 20, height: 20}}/>
        <textarea name="" id="" placeholder='Your message' ></textarea>
      </div>

      <button type='submit'><label>Signup</label></button>
    </div>
  </form>
    </div>
</div>
    </div>
  )
}

export default Page