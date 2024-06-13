import React from 'react';
import '../ourPartner/ourBusinessPartner.css';

const OurBusinessPartner = () => {
  const clients = {
    uae: [
      "/ourClients/uae/1.png", "/ourClients/uae/2.png", "/ourClients/uae/3.png",
      "/ourClients/uae/4.png", "/ourClients/uae/5.png", "/ourClients/uae/6.png",
      "/ourClients/uae/7.png", "/ourClients/uae/8.png", "/ourClients/uae/9.png",
      "/ourClients/uae/10.png", "/ourClients/uae/11.png", "/ourClients/uae/12.png",
      "/ourClients/uae/13.jpg", "/ourClients/uae/14.jpg", "/ourClients/uae/15.jpg"
    ],
    kuwait: [
      "/ourClients/kwait/1.png", "/ourClients/kwait/2.png", "/ourClients/kwait/3.png",
      "/ourClients/kwait/4.png", "/ourClients/kwait/5.png", "/ourClients/kwait/6.png",
      "/ourClients/kwait/7.jpg",  "/ourClients/kwait/8.jpg",  "/ourClients/kwait/9.jpg",
      "/ourClients/kwait/10.jpg",  "/ourClients/kwait/11.jpg",  "/ourClients/kwait/12.jpg",

    ],
    malaysia: [
      "/ourClients/mala/1.jpg", "/ourClients/mala/2.jpg", "/ourClients/mala/3.jpg",
      "/ourClients/mala/4.jpg", "/ourClients/mala/5.jpg", "/ourClients/mala/6.jpg",
      "/ourClients/mala/7.jpg", "/ourClients/mala/8.jpg", "/ourClients/mala/9.jpg",
      "/ourClients/mala/10.jpg","/ourClients/mala/11.jpg","/ourClients/mala/12.jpg",
      "/ourClients/mala/13.jpg","/ourClients/mala/14.jpg","/ourClients/mala/15.jpg",
    ],
    ksa: [
      "/ourClients/ksa/1.png", "/ourClients/ksa/2.png", "/ourClients/ksa/3.png",
      "/ourClients/ksa/4.png", "/ourClients/ksa/5.png"
    ],
    qatar: [
      "/ourClients/qatar/1.jpg", "/ourClients/qatar/2.jpg", "/ourClients/qatar/3.jpg",
      "/ourClients/qatar/4.jpg", "/ourClients/qatar/5.jpg", "/ourClients/qatar/6.jpg",
      "/ourClients/qatar/7.jpg", "/ourClients/qatar/8.jpg", "/ourClients/qatar/9.jpg",
      "/ourClients/qatar/10.jpg", "/ourClients/qatar/11.jpg", "/ourClients/qatar/12.jpg",
       "/ourClients/qatar/13.jpg", "/ourClients/qatar/14.jpg", "/ourClients/qatar/15.jpg",
       "/ourClients/qatar/16.jpg", "/ourClients/qatar/17.jpg", "/ourClients/qatar/18.jpg",
    ]
  };

  return (
    <div className="ourbusinessPartner_Container">
      <div className="container">
        <div className='clientHeading'>
          <h2>Our Clients & Business Partners</h2>
          <p className='clientPara'>From UAE</p>
        </div>
        <div className='clientContainer uae'>
          {clients.uae.map((src, index) => <img className='clientLogo' key={index} src={src} alt={`UAE Client ${index + 1}`} />)}
        </div>

        <div className='clientSection clientHeading'>
          <p className='clientPara'>From Kuwait</p>
          <div className='clientContainer'>
            {clients.kuwait.map((src, index) => <img className='clientLogo' key={index} src={src} alt={`Kuwait Client ${index + 1}`} />)}
          </div>
        </div>

        <div className='clientSection clientHeading'>
          <p className='clientPara'>From Malaysia</p>
          <div className='clientContainer'>
            {clients.malaysia.map((src, index) => <img className='clientLogo' key={index} src={src} alt={`Malaysia Client ${index + 1}`} />)}
          </div>
        </div>

        <div className='clientSection clientHeading'>
          <p className='clientPara'>From KSA</p>
          <div className='clientContainer'>
            {clients.ksa.map((src, index) => <img className='clientLogo' key={index} src={src} alt={`KSA Client ${index + 1}`} />)}
          </div>
        </div>

        <div className='clientSection clientHeading'>
          <p className='clientPara'>From Qatar</p>
          <div className='clientContainer'>
            {clients.qatar.map((src, index) => <img key={index} src={src} alt={`Qatar Client ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBusinessPartner;
