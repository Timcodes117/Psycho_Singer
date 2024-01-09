import { faClose, faMusic, faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


interface Props {
  data: any,
  onDownload: any, 
  toggle: any
}
const Preview : React.FC<Props>= ({data, onDownload, toggle}) => {
  return (
    <>
        <div className="shadow">
            {/* <div style={{display: 'flex', flex: 1, width: '90%', maxWidth: 1200, height: '90vh',background: 'red', alignItems: 'center', justifyContent: 'center'}}> */}
            <div className="Preview">
                <div className='cls' onClick={()=> toggle()} style={{width: 50, height: 50,cursor: 'pointer', background: 'black', borderRadius: 100,position: 'absolute', right: 10, top: 10, alignItems: 'center', zIndex: 5000, justifyContent: 'center', display: 'flex'}}><FontAwesomeIcon icon={faClose} style={{width: 25, height: 25, color: 'white'}} ></FontAwesomeIcon></div>
            <div className="thumbnail" style={{background: `url(${data.tmb})`, backgroundSize: 'cover', backgroundColor: '#0b0b0b'}}>
                <FontAwesomeIcon icon={faMusic} style={{width: 100, height: 100, opacity: 0.2, color: 'white'}} />
            </div>

            <div className="info">
              <br />
              <br />
              <b>Title</b>
                <strong style={{fontSize: 50}}>{data.name}</strong>
                <br />
                <b>Description:</b>
                <p style={{fontSize: 12, width: '90%'}}> {data.details}</p>
                <br />
                <b>Artist:</b>
                <p> {data.artist}</p>
                <br />
                <button onClick={()=> onDownload(data) }>Download <FontAwesomeIcon icon={faSignIn} style={{transform: 'rotate(90deg)', width: 15, height: 15}}/></button>
                <br />
                <br />
            </div>
            </div>
            </div>
        {/* </div> */}
    </>
  )
}

export default Preview
