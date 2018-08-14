import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArticleCards from './ArticleCards'

class App extends Component{
  constructor(){
    super();
    this.state={
      obj:[{ number:1, image: 'www.knobcreek.com-1550031134660845.jpg', icon:'Article.svg', date:'NOVEMBER 10', title:'This Creek Run Full, Making Every Glass Count', continue:'Read More'},
      { number:2, image: 'www.knobcreek.com-1564585437648699.jpg', icon:'Video.svg', date:'NOVEMBER 1', title:`Celebrating Knob Creek's 25th Anniversary`, continue:'Watch Video '},
      { number:3, image: 'www.knobcreek.com-1550246487292757.jpg', icon:'Glass.svg', date:'OCTOBER 30', title:`The Single Barrel Experience`, continue:'Read More '},
      { number:4, image: 'www.knobcreek.com-1550164189475220.jpg', icon:'Video.svg', date:'OCTOBER 20', title:`Make No Small Plans. Drink No Small Bourbon`, continue:'Watch Video'},
      { number:5, image: 'www.knobcreek.com-1550293000153014.jpg', icon:'Article.svg', date:'OCTOBER 10', title:`There's No Faking Flavor: It Has To Be Earned`, continue:'Read Video'},
      { number:6, image: 'www.knobcreek.com-1550664938574687.jpg', icon:'Gallery.svg', date:'OCTOBER 05', title:`Learn about Pre-Prohibition Style Whiskey`, continue:'View Gallery '},
      { number:7, image: 'www.knobcreek.com-1550653084056276.jpg', icon:'Article.svg', date:'SEPTEMBER 30', title:`About Our Master Distiller Booker Noe`, continue:'Read More '},
      { number:8, image: 'www.knobcreek.com-1550660375610157.jpg', icon:'Glass.svg', date:'SEPTEMBER 18', title:`About Our Master Distiller Booker Noe`, continue:'Read More '},
      { number:9, image: 'www.knobcreek.com-1550319714280280.jpg', icon:'Gallery.svg', date:'OCTOBER 05', title:`Unmistakeable Richness and Signiture Sweetness`, continue:'View Gallery '},







    ]

      }
    }
  
  render() {
    const {obj}= this.state
    return (
      <div className="main-div">
        <div id="sponsored"> Sponsored By </div>

        {/* HEADER  */}
        <div id="header">
          <img
            id="header-knob-creek-icon"
            src={require("./assets/images/logos/knobcreek.svg")}
          />

          <div id="header-center-logo">LOGO </div>

          <div id="header-social-media-icon">
            {" "}
            <img
              className="fab fa-facebook-f fa-2x"
              src={require("./assets/images/logos/facebook-f-brands.svg")}
            />
            <img
              className="fab fa-twitter fa-2x"
              src={require("./assets/images/logos/twitter-brands.svg")}
            />{" "}
          </div>
        </div>

        {/* CENTER DIV  */}

        <div id="splash-page-container">
          <div id="splash-page">
            <div id="splash-page-bio">
              <p id="bio-header">Maple Never Tasted So Good </p>
              <p id="bio-blurb">
                {" "}
                We blend this bourbon with natural smoked maple flavors for
                <br /> a unique, smoky sweetness. Full Bodied, inviting maple
                notes
                <br /> that life to smoke and are complemented with rich vanilla
                <br />
                caramel. Smoked hickory and maple work with hints of
                <br />
                earthy grains.
              </p>
            </div>

            <div id="splash-page-bourbon-bottle">
              <img
                id="splash-resize-bottle"
                src={require("./assets/images/www.knobcreek.com-1310894113736742.png")}
              />
            </div>
          </div>

          {/* bottom splash  DIV  */}

          <div id="bottom-splash">
            <img id="pour-mug" src={require("./assets/images/pour-mug.jpg")} />

            <div id="pour-mug-text">
              
                <img
                  className="pour-mug-article-icon"
                  src={require("./assets/images/icons/Article.svg")}
                />
             

              <p className="date"> NOVEMBER 20 </p>
              <p className="article-title">
                {" "}
                Too Much Flavor For Four <br /> Walls To Hold
              </p>
              <p className="article-blurb">
                There are only so many hours in a day, so we make every
                <br /> glass count. We craft full-flavored whiskey for those who
                find
                <br /> a way to get the most out of every minute of every day
                ...
              </p>

              <label className="article-readmore"> Read More </label>
              
            </div>
          </div>
        </div>

  {/* bottom div */}
  <div id = 'recent-articles-container'>
    <p id='recent-articles-heading'> Recent Articles</p>
    <ArticleCards articles={obj}/>


    </div>

      </div>
    );
  }
}

export default App;
