import React, { useState, useEffect } from 'react';
import './CaseStudy.css';

import asiaPic from '../../assets/asia.png';
import mandiPic from '../../assets/mandi.png';
import binazizPic from '../../assets/binaziz.png';

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  // Scroll lock logic jab pop-up open ho
  useEffect(() => {
    if (selectedCase) {
      document.body.classList.add('modal-open-lock');
    } else {
      document.body.classList.remove('modal-open-lock');
    }
    return () => {
      document.body.classList.remove('modal-open-lock');
    };
  }, [selectedCase]);

  // Aapki 3 Case Studies ka exact data
  const caseStudies = [
    {
      id: 1,
      service: "Social Media Management",
      client: "Asia Kashmir Travels",
      img: asiaPic,
      objective: "Brand awareness aur engagement ko barhana takay travel packages ki bookings mein izafa ho sakay.",
      challenge: "Asia Kashmir Travels ke pas behtareen tour packages thay, lekin unki social media presence purani thi aur engagement bohot kam thi.",
      strategy: "Hum ne unke liye ek customized content calendar banaya jis mein 'Destination Spotlights' aur interactive polls shamil kiye. Hum ne trend-based hashtags aur target audience (travelers) ke mutabiq posting timing ko optimize kiya.",
      result: "Sirf 3 mahino mein organic reach mein 150% izafa hua aur queries (leads) ki tadad pehly se dugna ho gayi. Unka page ab Kashmir tourism ke liye ek reliable source mana jata hai."
    },
    {
      id: 2,
      service: "Branding & Graphic Designing",
      client: "Mandi Bahauddin Travels",
      img: mandiPic,
      objective: "Ek naya aur modern brand image create karna jo international standards se match kare.",
      challenge: "Client ko ek aisi visual identity chahiye thi jo trust aur professionalism ko reflect kare, taaky log unke international travel services par bharosa kar sakein.",
      strategy: "LeadsPK ne unke liye ek unique logo aur complete brand identity kit design ki. Hum ne unke brochures, posters, aur digital banners ke liye ek 'Premium Blue and Gold' theme select ki jo luxury aur reliability ko zahir karti hai.",
      result: "Naye design ne client ki market value ko boost kiya. Unka naya look ab customers ko zyada attract karta hai aur competitors ke darmiyan unhein ek alag pehchan deta hai."
    },
    {
      id: 3,
      service: "Video Editing & Content Creation",
      client: "Bin Aziz Tourism",
      img: binazizPic,
      objective: "High-quality promotional videos ke zariye visa consultancy aur tour services ko promote karna.",
      challenge: "Tourism aur consultancy mein visual trust bohot zaroori hai. Client ko aisi videos chahiye thien jo informative bhi hon aur professional bhi, taaky viewers ka trust jeeta ja sakay.",
      strategy: "Hum ne unke liye high-definition video editing ki, jis mein cinematic transitions, professional voice-overs, aur informative motion graphics ka istemal kiya gaya. Hum ne complex visa processes ko asan visual flow mein convert kiya.",
      result: "In videos ko jab social media aur ads par chalaya gaya, toh Bin Aziz Tourism ko high-quality leads milna shuru ho gaein. Videos ki wajah se unka average watch-time barh gaya aur brand authority mazeed mazboot hui."
    }
  ];

  // Kyunke cases sirf 3 hain, slider break na ho isliye hum iski 4 copies banayenge (Total 12 cards dikhenge)
  const repeatedCases = [...caseStudies, ...caseStudies, ...caseStudies, ...caseStudies];

  return (
    <section id="case-study" className="case-study-section reveal reveal-up">
      <div className="case-study-container">
        <h1 className="case-study-title">Case Studies</h1>
        <p className="case-study-subtitle">Click to explore our success stories</p>

        <div className="case-study-slider-wrapper">
          <div className="case-study-track">
            {repeatedCases.map((cs, index) => (
              <div 
                key={index} 
                className="case-study-card"
                onClick={() => setSelectedCase(cs)}
              >
                <div className="cs-card-header">
                  <div className="cs-img-container">
                    {cs.img ? <img src={cs.img} alt={cs.client} /> : <div className="cs-placeholder"></div>}
                  </div>
                  <h4 className="cs-client-name">{cs.client}</h4>
                </div>
                
                <h3 className="cs-service-name">{cs.service}</h3>
                
                <p className="cs-short-desc">
                  <strong>Objective:</strong> {cs.objective.substring(0, 70)}...
                </p>
                
                <div className="cs-read-more">Read Full Case Study <span className="arrow">→</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POP-UP MODAL */}
      {selectedCase && (
        <div className="cs-modal-overlay" onClick={() => setSelectedCase(null)}>
          <div className="cs-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cs-close-btn" onClick={() => setSelectedCase(null)}>
              &times;
            </button>
            
            <div className="cs-modal-header">
               <div className="cs-modal-img">
                 {selectedCase.img && <img src={selectedCase.img} alt={selectedCase.client} />}
               </div>
               <div>
                 <h2 className="cs-modal-client">{selectedCase.client}</h2>
                 <h4 className="cs-modal-service">{selectedCase.service}</h4>
               </div>
            </div>

            <div className="cs-modal-body">
              <div className="cs-section">
                <h5>🎯 The Objective</h5>
                <p>{selectedCase.objective}</p>
              </div>
              <div className="cs-section">
                <h5>🚧 The Challenge</h5>
                <p>{selectedCase.challenge}</p>
              </div>
              <div className="cs-section">
                <h5>💡 Our Strategy</h5>
                <p>{selectedCase.strategy}</p>
              </div>
              <div className="cs-section highlight-result">
                <h5>📈 The Result</h5>
                <p>{selectedCase.result}</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudy;