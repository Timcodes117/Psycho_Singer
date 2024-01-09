"use client"

import React, { useEffect, useState, useRef } from "react";

import '../site.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faClose, faDiagramNext, faHamburger, faHeart, faHistory, faMusic, faPaperPlane, faSearch, faTrash, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'
// import Preview from './Preview'
import { set, ref, onValue, remove, update } from "firebase/database";
// import db from "./firebase";
import axios, { Axios } from "axios";
import Image from "next/image";
import Link from "next/link";
import { downloads } from "../utils/download";

const Page = () => {
  const [showNav, HideNAv] = useState(false)
  const [download, setdownload] = useState(new downloads)
  const [list, setlist] = useState<any[]>(download.getDownloads())

  useEffect(()=>{
    console.log(list)
  },[])

  return (
    <>
      <header>
      <div style={{ fontSize: 40, fontFamily: 'Sac', color: 'white'}}><FontAwesomeIcon icon={faBarsStaggered} onClick={()=> HideNAv(!showNav)} className='hmenu' style={{width: 25, height: 25, position: 'absolute', left:10, top: 30}}/> PsychoSinger</div>
    </header>
    <nav>
      <Link href={'/'}><button style={{}}>All</button></Link>
      <button style={{background: 'white', color: 'black'}}>Downloads</button>
      <button>About</button>
      <button>Contact</button>
    </nav>

    <div className="sidenav" style={showNav ? {width: '90%'} : {width: '0%', }}>
    <FontAwesomeIcon icon={faClose} onClick={()=> HideNAv(!showNav)} className='hmenu' style={showNav ? {width: 25, height: 25, marginRight: 5, position: 'absolute', left: 10, top: 30, color: 'white', transform: 'rotate(360deg)', transition: 'all 1s'} : {width: 25, height: 25, marginRight: 5, position: 'absolute', left: 10, top: 30, color: 'white', transform: 'rotate(0deg)', transition: 'all 0.5s'}}/> 
    <br />
    <br />
    <div className="follow">
      <b>Contact Us</b>
    <div className="contact" style={{justifyContent: 'center', border: '1px solid #327dff'}}>
      Send us a mail
      <FontAwesomeIcon icon={faPaperPlane} style={{margin: 10}}/>
    </div>
      <br />
      <br />
      <b id="ff" style={{width: '85%'}}>Follow us</b>
      <div className="Fbox" style={{animationDuration: '1s',}}><Image src={'/ig.png'} width={20} height={20} alt={"instagram"} style={{margin: 10}} /> INSTAGRAM</div>
      <div className="Fbox" style={{animationDuration: '3s'}}><Image src={'/fbblue.png'} width={20} height={20} alt={"facebook"} style={{margin: 10}} /> FACEBOOK</div>
      <div className="Fbox" style={{animationDuration: '5s'}}><Image src={'/twitterblue.png'} width={20} height={20} alt={"twitter"} style={{margin: 10}} /> TWITTER</div>
    </div>
    </div>

    <div style={{width: '100%', minHeight: 700, marginTop: 100}}>
        <br />
        <strong style={{color: 'white', fontSize: 40, marginLeft: 20, fontFamily: 'Muse'}}> Downloads</strong>
        <br />
    <div style={{width: '100%', minHeight: 700, display: 'flex', justifyContent: 'center'}}>
        <br />
        <br />
        <div style={{width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', 
            //  justifyContent: 'center'
             }}>
        {/* <strong style={{color: 'white', fontSize: 50, marginLeft: 20, fontFamily: 'Muse'}}> Downloads</strong> */}
            <div style={{width: '90%', height: 50, background: '#262626', borderRadius: 20,
             display: 'flex', flexDirection: 'row', alignItems: 'center', 
             justifyContent: 'flex-start', color: 'black'}}>

                <FontAwesomeIcon icon={faSearch}  style={{width: 30, height: 30, color: 'gray', margin: 20}}/>
                <input type="text" name="" id="" style={{display: 'flex', flex: 1, height: 40, border: 'none', background: 'none', color: 'white'}} 
                placeholder="type song to filter"/>


       </div>
       <br />
       <br />
       <>
       {
        list ?
         list.map((song, index)=>{
          return(
            
            <div key={index} style={{width: '90%', height: 60, marginTop: 10, background: 'black', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', color: 'gray'}}>
            <div><FontAwesomeIcon icon={faMusic} /></div>
                <b>{song.title}</b>
                <p>{song.artist}</p>
                <p>{song.type}</p>

                <div onClick={()=>{
                  download.delete(list, song.id)
                  setlist(download.getDownloads())
                }
                  }
                style={{width: 40, height: 40, background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><FontAwesomeIcon icon={faTrash} /></div>
            </div>
        )
        })
        : <i style={{color: 'grey'}}>no downloads yet</i>
            }
          </>
        </div>
    </div>
    </div>
    
    </>
  )
}

export default Page
