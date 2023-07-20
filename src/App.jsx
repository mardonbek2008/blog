import React from 'react'
import "./App.css"
import fotoone from "./assets/img1.svg"
import cardfotoone from "./assets/imgcard1.png"
import cardfototwo from "./assets/imgcard2.png"
import cardfotothree from "./assets/imgcard3.png"
import facebook from "./assets/faceb.svg"
import instagram from "./assets/insta.svg"
import twitter from "./assets/twitter.svg"
import linkedlin from "./assets/Linkedin.svg"
export default function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className="tab-links">
          <a href="" className="linked-blok">Works</a>
          <a href="" className="linked-blok">Blog</a>
          <a href="" className="linked-blok">Contact</a>
        </div>
        <div className="add-section">
          <div className="add-text">
            <h1 className="text-bigger">Hi, I am John, <br /> Creative Technologist</h1>
            <p className="text-mini">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <a href="#" className="button-red">
              <h1 className='button-text'>
                Download Resume
              </h1>
            </a>
          </div>
          <div className="add-foto">
            <img src={fotoone} alt="" className='foto-header' />
          </div>
        </div>
      </header>
      <main className='main'>
        <section className="main-section-one">
          <div className="bg-box-text">
            <div className="texts-box">
              <p className="text-mini-one">Recent posts</p>
              <a href="" className="text-mini-two">Viev all</a>
            </div>
          </div>
          <div className="cards-bigger">
            <div className="cards-flexer">
              <div className="universal-card">
                <h1 className="cards-textt">Making a design system from scratch</h1>
                <div className="texts-mini-box">
                  <p className="mini-text">12 Feb 2020</p>
                  <div className="line-mini"></div>
                  <p className="mini-text">Design, Pattern</p>
                </div>
                <p className="mini-texted">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              <div className="universal-card">
                <h1 className="cards-textt">Creating pixel perfect icons in Figma</h1>
                <div className="texts-mini-box">
                  <p className="mini-text">12 Feb 2020</p>
                  <div className="line-mini"></div>
                  <p className="mini-text">Figma, Icon Design</p>
                </div>
                <p className="mini-texted">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              
            </div>
          </div>
        </section>
        <section className='main-section-two'>
          <div className="sector-mini-secury">
            <div className="title-box-f">
              <h1 className="title-text">Featured works</h1>
            </div>
            <div className="work-cards-bigger">
              <div className="work-card">
                <div className="work-card-blok-one">
                  <img src={cardfotoone} alt="" className="work-card-img" />
                </div>
                <div className="work-card-blok-two">
                  <h1 className="work-card-title">Designing Dashboards</h1>
                  <div className="work-card-mini-text-blok">
                    <p className="year-text">2020</p>
                    <p className="info-work">Dashboard</p>
                  </div>
                  <p className="work-cards-mini-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="work-card-lne"></div>
              <div className="work-card">
                <div className="work-card-blok-one">
                  <img src={cardfototwo} alt="" className="work-card-img" />
                </div>
                <div className="work-card-blok-two">
                  <h1 className="work-card-title">Designing Dashboards</h1>
                  <div className="work-card-mini-text-blok">
                    <p className="year-text">2014</p>
                    <p className="info-work">Illustration</p>
                  </div>
                  <p className="work-cards-mini-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="work-card-lne"></div>
              <div className="work-card">
                <div className="work-card-blok-one">
                  <img src={cardfotothree} alt="" className="work-card-img" />
                </div>
                <div className="work-card-blok-two">
                  <h1 className="work-card-title">Designing Dashboards</h1>
                  <div className="work-card-mini-text-blok">
                    <p className="year-text">2018</p>
                    <p className="info-work">Typography</p>
                  </div>
                  <p className="work-cards-mini-text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="work-card-lne"></div>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer'>
        <div className="foot-section">
          <div className="links-bigger">
            <a className='linkkk-web ' href="#">
              <img src={facebook} alt="" className="web-iconss" />
            </a>
            <a className='linkkk-web ' href="#">
              <img src={instagram} alt="" className="web-iconss" />
            </a>
            <a className='linkkk-web ' href="#">
              <img src={twitter} alt="" className="web-iconss" />
            </a>
            <a className='linkkk-web ' href="#">
              <img src={linkedlin} alt="" className="web-iconss" />
            </a>
          </div>
          <h1 className="footer-text">Copyright ©2020 All rights reserved </h1>
        </div>
      </footer>

    </div>
  )
}
