"use client"

import React, { useEffect, useState, useRef } from "react";

import './site.css'
import HorizontalList from './assets/songHlist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faClose, faDiagramNext, faHamburger, faHistory, faMusic, faPaperPlane, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'
import Preview from './Preview'
import { set, ref, onValue, remove, update } from "firebase/database";
import db from "./firebase";
import axios, { Axios } from "axios";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { downloads } from "./utils/download";

const Page = () => {

  const [showNav, HideNAv] = useState(false)
  // const [deivceWidth, setdeivceWidth] = useState(
  //     document.documentElement.clientWidth
  //   );
  const [musicList, setMusicList] = useState<any[]>([]);
  const [prevOpen, setPrevstate] = useState<boolean>(false)

  const [musicArray, setMusicArray] = useState<any>({
    name: "Nill",
    details: "this.dets",
    url: "this.url",
    tmb: "",
    artist: "dis.aurthor",
  });
  // const myArray = [10, 20, 30, 40, 50, 60];
  
  const randomIndex = getRandomIndex(musicList);
  // const randomValue = musicList[randomIndex];
  
  function getRandomIndex(array:any) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
  }
  

  useEffect(() => {
    // Load Google Ads script
    if (typeof window !== 'undefined') {
      // Code that accesses the document or the browser environment
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9976753474067424';
      script.async = true;
      document.head.appendChild(script);

    }

  }, []);

  const downloadFile = async (url: any, filename: string) => {
    console.log(url + ' ' + filename)
    const config: any = { responseType: "blob" };

    console.log(url);

    axios
      .get(url, config)

      .then((response: any) => {
        var xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function () {
          var blob = xhr.response;
          var url = window.URL.createObjectURL(new Blob([response.data]));
          var a = document.createElement("a");

          a.href = url;
          a.target = "_blank";
          a.download = filename + ".mp3";
          a.click();
        };
        xhr.open("GET", url);
        xhr.send();

        let dow = new downloads;
        dow.saveToDownloads({ title: filename, id: Math.random(), artist: 'anonymous' })
      });
  }



  useEffect(() => {

    onValue(ref(db), (snapshot) => {
      setMusicList([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((list) => {
          setMusicList((oldArray) => [...oldArray, list]);
          console.log(musicList)
        });
      }
    });
  }, []);

  return (
    <>

     <Head>
  <meta property="og:title" content="psychosinger" />
  <meta property="og:description" content="psycho singer music portfolio website" />
  <meta property="og:image" content="https://github.com/Timcodes117/CAFE_SITE/blob/main/psychOG.PNG?raw=true" />
  <meta property="og:url" content="https://psychosinger.vercel.app" />
  <meta property="Keywords" content="psycho, psycho singer, music website, psycho-singer" />
  <meta name="Keywords" content="psycho, psycho singer, music website, psycho-singer" />

  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9976753474067424"
    crossOrigin="anonymous"
  ></script>
</Head>

      <header>
        <div style={{ fontSize: 40, fontFamily: 'Sac', color: 'white' }}><FontAwesomeIcon icon={faBarsStaggered} onClick={() => HideNAv(!showNav)} className='hmenu' style={{ width: 25, height: 25, position: 'absolute', left: 10, top: 30 }} /> PsychoSinger</div>
      </header>
      <nav>
        <Link href="/"><button style={{ background: 'white', color: 'black' }}>All</button></Link>
        <Link href="/downloads"><button style={{}}>Downloads</button></Link>
        <Link href="/"><button>About</button></Link>
        <Link href="/"><button>Contact</button></Link>
      </nav>

      <div className="sidenav" style={showNav ? { width: '90%' } : { width: '0%', }}>
        <FontAwesomeIcon icon={faClose} onClick={() => HideNAv(!showNav)} className='hmenu' style={showNav ? { width: 25, height: 25, marginRight: 5, position: 'absolute', left: 10, top: 30, color: 'white', transform: 'rotate(360deg)', transition: 'all 1s' } : { width: 25, height: 25, marginRight: 5, position: 'absolute', left: 10, top: 30, color: 'white', transform: 'rotate(0deg)', transition: 'all 0.5s' }} />
        <br />
        <br />
        <div className="follow">
          <b>Contact Us</b>
          <div className="contact" style={{ justifyContent: 'center', border: '1px solid #327dff' }}>
            Send us a mail
            <FontAwesomeIcon icon={faPaperPlane} style={{ margin: 10 }} />
          </div>
    
          <br />
          <br />
          <b id="ff" style={{ width: '85%' }}>Follow us</b>
          <div className="Fbox" style={{ animationDuration: '1s', }}><Image src={'/ig.png'} width={20} height={20} alt={"instagram"} style={{ margin: 10 }} /> INSTAGRAM</div>
          <div className="Fbox" style={{ animationDuration: '3s' }}><Image src={'/fbblue.png'} width={20} height={20} alt={"facebook"} style={{ margin: 10 }} /> FACEBOOK</div>
          <div className="Fbox" style={{ animationDuration: '5s' }}><Image src={'/twitterblue.png'} width={20} height={20} alt={"twitter"} style={{ margin: 10 }} /> TWITTER</div>
        </div>
      </div>

      <strong style={{ fontSize: 100, color: '#ffffff1c', position: 'absolute', transform: 'rotate(90deg)', zIndex: 1, left: -150, top: 300 }}>PSYCHO</strong>
      <div className="hero">

        <div className="cinfo" >
          <br />
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            | ALBUM <span style={{ color: 'red', marginLeft: 2, }}>*</span>
          </div>
          <br />
          <br />
          <p>Get+</p>
          <strong style={{ fontSize: 100, color: 'white', fontFamily: 'Muse' }}> { musicList[randomIndex] ? musicList[randomIndex].name : ''}</strong>
          <p style={{ fontSize: 12 }}>{musicList[randomIndex] ? musicList[randomIndex].details : ''} </p>
          <p style={{ fontSize: 12 }}>MP4 AUDIO | FREE </p>
          <br />
          <div style={{ width: '95%', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={()=> downloadFile(musicList[randomIndex].Musicurl, musicList[randomIndex].name)} style={{
              width: 200, height: 50, border: '2px solid white', background: 'none', borderRadius: 100,
              color: 'white',
            }}>Download</button>
          </div>
        </div>

      </div>
      {/* <strong style={{fontSize: 50, color: 'white', fontFamily: 'Muse', width: '90%', marginLeft: '10%'}}>Top</strong> */}
      <div className="tops">
        <div id="tp" style={{ display: 'flex', flexDirection: 'row', width: '100%', minWidth: 1000, marginRight: 50, height: 200, alignItems: 'center', justifyContent: 'space-evenly', overflowY: 'hidden' }}>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 50 }}>

            <div className="tops_box">
              <FontAwesomeIcon icon={faMusic} style={{ width: 25, height: 25, }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
              <b style={{ fontSize: 20 }}>Album</b>
              <b></b>
              <label htmlFor="">Psycho</label>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 50 }}>

            <div className="tops_box" style={{ fontSize: 50, color: 'white' }}>
              {musicList.length}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ fontSize: 20 }}>Songs</b>
              <b></b>
              <label htmlFor="">Count</label>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 50 }}>

            <div className="tops_box">
              <FontAwesomeIcon icon={faHistory} style={{ width: 25, height: 25, }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <b style={{ fontSize: 20 }}>Recent</b>
              <b></b>
              <label htmlFor="">Dance</label>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <strong style={{ fontSize: 50, color: 'white', fontFamily: 'Muse', width: '90%', marginLeft: '10%' }}>Tracks</strong>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, }}>
        <HorizontalList songs={musicList} clickPush={(data: any) => {
          setMusicArray(data)
          setPrevstate(true)
        }} />
      </div>
      {
        prevOpen ?
          <Preview data={musicArray} toggle={() => setPrevstate(false)} onDownload={(info: any) => downloadFile(info.url, info.name)} />
          : null
      }
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9976753474067424"
        data-ad-slot="9103899286"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

      <br />
      <br />
      <footer>
        <div className="det">
          <div className="logo" style={{ fontFamily: 'Sac', fontSize: 40, color: 'white' }}>Psycho Singer</div>
          <label htmlFor="" style={{ fontSize: 17, letterSpacing: 2, lineHeightStep: 2, color: 'gray', }}>your ultimate destination for downloading and experiencing the heartbeat of sound.</label>
        </div>

        <div className="lnx">
          <strong style={{ fontSize: 20, color: 'white' }}>Studio</strong>
          <Link href="">About</Link>
          <Link href="">Career</Link>
          <Link href="">Mobile</Link>

        </div>

        <div className="lnx">
          <strong style={{ fontSize: 20, color: 'white' }}>Contact</strong>
          <Link href="">Instagram</Link>
          <Link href="">Facebook</Link>
          <Link href="">FAQ’s</Link>
          <Link href="">Blog</Link>
        </div>

        <div className="lnx">
          <strong style={{ fontSize: 20, color: 'white' }}>Meet Us</strong>
          <Link href="">+234 7000 099</Link>
          <Link href="mailto:timcodes117@gmail.com">Mail Us</Link>
          <Link href="">Lagos, Nigeria</Link>
        </div>

      </footer>
    </>
  )
}

export default Page