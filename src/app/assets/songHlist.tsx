"use client"
import React, {useEffect, useState} from 'react'
import { type,  } from 'os';
// import { Mail, User, Bell, ChevronDown,Shield, Moon, ShoppingCart, Search, Home, Filter, Bookmark, ChevronRight, Heart, Layers} from 'react-feather';
// import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesRight, faArrowRight, faDownload, faGamepad, faGlasses, faHeart, faKitMedical, faMusic, faTshirt, faTv } from '@fortawesome/free-solid-svg-icons';

interface HorizontalListProps {
  songs: any[];
  clickPush: any
//   current_category: any;
}

const HorizontalList: React.FC<HorizontalListProps> = ({ songs, clickPush }) => {
  const numRows = Math.ceil(songs.length / 4);
  const [randP, setrandP] = useState(Math.floor(Math.random() * songs.length));

  
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * songs.length);
      setrandP(newIndex);
      // console.log(randP)
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [songs]);

  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const startIndex = i * 4;
      const endIndex = Math.min(startIndex + 4, songs.length);
      const rowsongs = songs.slice(startIndex, endIndex);

      const row = (
          <>
    <div className='bc' key={i} style={{position: 'relative', display: 'flex', alignItems: 'center', overflowX: 'scroll', background: 'none', width: '100%', overflow: 'hidden', marginLeft: 0}}>
        <div  className="pView">
          <div className='Pmargin' style={{minWidth: 50, height: 210, display: 'none' }}></div>
          {
          rowsongs
          .slice()
          .reverse()
          .map((itm : any, id) => (
              <>
             
                <div className='Product' key={id} 
                // onClick={()=> clickPush([{id: itm.id, name: itm.name, images: itm.image, Category: itm.Category, Price: itm.Price, List: itm.List, details: itm.Details}])}
               onClick={()=>clickPush(
               {
                  name: songs[id].name,
                  details: songs[id].details,
                  url: songs[id].Musicurl,
                  tmb: songs[id].thumbUrl,
                  artist: songs[id].author,
                }
               )}
               >
              
              <div className="Pimg" style={{background: `url(${songs[id].thumbUrl})`, backgroundSize: 'cover',}}><FontAwesomeIcon icon={faMusic} style={{width: 50, height: 50, opacity: 0.2, color: 'white'}} /></div>
              <div className="pInfo">
              <figcaption style={{fontSize: 20, marginLeft: 10, wordWrap: 'break-word', lineBreak: 'anywhere', width: '90%', fontWeight: 'bolder', color: 'whitesmoke'}}>{songs[id].name}</figcaption>
              <p style={{fontSize: 12, marginLeft: 10, color: 'white'}}>by {songs[id].author}</p>
              <br />
                 <div className="fav">
                
                <FontAwesomeIcon icon={faHeart} style={{width: 20, height: 20, color: 'white'}}/>
              </div>
              </div>
    
            </div>             
             
            </>
          ))}
          <div className='Pmargin' style={{minWidth: 50, height: 210, display: 'none' }}></div>

        </div>
        <div className="prev" style={{left: 0}}>
        <FontAwesomeIcon icon={faAngleLeft} style={{width: 20, height: 20}}  />
      </div>
      <div className="next" style={{right: 0}}>
        <FontAwesomeIcon icon={faAngleRight} style={{width: 20, height: 20}} />
      </div>
    </div>
    {
      i % 2 ?
      <>

    <strong style={{fontSize: 100, color: '#ffffff1c', position: 'absolute', transform: 'rotate(90deg)', zIndex: 1, left: -150, }}>PSYCHO</strong>
    <strong style={{fontSize: 100, color: '#ffffff1c', position: 'absolute', transform: 'rotate(90deg)', zIndex: 1, right: -120, }}>SINGER</strong>
   
      <div style={{position: 'relative', display: 'flex', alignItems: 'center', width: '100%', overflow: 'hidden', }}>

      <div className='chView' style={{width: '100%', height: 200, background: `linear-gradient(to top, #00000099, #00000099), url(img2.jpg)`, backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <>
          <label htmlFor="" style={{marginLeft: '10%', color: 'white', fontSize: 70, width: '60%'}}>Trailer</label>
          <br />
          <button style={{cursor: 'pointer'}}>Download <FontAwesomeIcon icon={faDownload} shake style={{marginLeft: 10}} /> </button>
          <br />
         <div className="off">-5% off</div>
          </>
      </div> 
      </div>
      <br />
          </>
      : null
    }
          </>
      );

      rows.push(row);
    }

    return rows;
  };

  return <div className="horizontal-list">{renderRows()}</div>;
};

export default HorizontalList;
