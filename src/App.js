import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArticleCards from "./ArticleCards";

class App extends Component {
  constructor() {
    super();
    this.state = {
      obj: [
        {
          number: 1,
          image: "www.knobcreek.com-1550031134660845.jpg",
          icon: "Article.svg",
          date: "NOVEMBER 10",
          title: "This Creek Run Full, Making Every Glass Count",
          continue: "Read More"
        },
        {
          number: 2,
          image: "www.knobcreek.com-1564585437648699.jpg",
          icon: "Video.svg",
          date: "NOVEMBER 1",
          title: `Celebrating Knob Creek's 25th Anniversary`,
          continue: "Watch Video"
        },
        {
          number: 3,
          image: "www.knobcreek.com-1550246487292757.jpg",
          icon: "Glass.svg",
          date: "OCTOBER 30",
          title: `The Single Barrel Experience`,
          continue: "Read More "
        },
        {
          number: 4,
          image: "www.knobcreek.com-1550164189475220.jpg",
          icon: "Video.svg",
          date: "OCTOBER 20",
          title: `Make No Small Plans. Drink No Small Bourbon`,
          continue: "Watch Video"
        },
        {
          number: 5,
          image: "www.knobcreek.com-1550293000153014.jpg",
          icon: "Article.svg",
          date: "OCTOBER 10",
          title: `There's No Faking Flavor: It Has To Be Earned`,
          continue: "Read Video"
        },
        {
          number: 6,
          image: "www.knobcreek.com-1550664938574687.jpg",
          icon: "Gallery.svg",
          date: "OCTOBER 05",
          title: `Learn about Pre-Prohibition Style Whiskey`,
          continue: "View Gallery"
        },
        {
          number: 7,
          image: "www.knobcreek.com-1550653084056276.jpg",
          icon: "Article.svg",
          date: "SEPTEMBER 30",
          title: `About Our Master Distiller Booker Noe`,
          continue: "Read More"
        },
        {
          number: 8,
          image: "www.knobcreek.com-1550660375610157.jpg",
          icon: "Glass.svg",
          date: "SEPTEMBER 18",
          title: `About Our Master Distiller Booker Noe`,
          continue: "Read More"
        },
        {
          number: 9,
          image: "www.knobcreek.com-1550319714280280.jpg",
          icon: "Gallery.svg",
          date: "SEPTEMBER 10",
          title: `Unmistakeable Richness and Signature Sweetness`,
          continue: "View Gallery"
        }
      ]
    };
  }

  render() {
    const { obj } = this.state;
    return (
      <div className="main-div">
        <div id="sponsored"> Sponsored By </div>

        {/* HEADER  */}
        <div id="header">
          <img
            className="knob-creek-icon"
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
              <div id="bio-header">Maple Never Tasted So Good </div>
              <div id="bio-blurb">
                {" "}
                We blend this bourbon with natural smoked maple flavors for a
                unique, smoky sweetness. Full Bodied, inviting maple notes that
                life to smoke and are complemented with rich vanilla caramel.
                Smoked hickory and maple work with hints of earthy grains.
              </div>
            </div>

            <div id="splash-page-bourbon-bottle-container">
              <img
                id="splash-bourbon-bottle"
                src={require("./assets/images/www.knobcreek.com-1310894113736742.png")}
              />
            </div>
          </div>

          {/* bottom splash  DIV  */}

          <div id="bottom-splash"> 
          <div id='bottom-splash-image-container'>
            <img id="bottom-splash-image" src={require("./assets/images/pour-mug.jpg")} />
            </div>
            <div id="bottom-splash-text">
              <img
                className="bottom-splash-article-icon"
                src={require("./assets/images/icons/Article.svg")}
              />

              <p id="bottom-splash-article-date"> NOVEMBER 20 </p>
              {/* <div id="article-main-content"> */}
                <div className="bottom-splash-article-title">
                  {" "}
                  Too Much Flavor For Four  Walls To Hold
                </div>
                <div id="article-blurb">
                  There are only so many hours in a day, so we make every glass
                  count. We craft full-flavored whiskey for those who find a way
                  to get the most out of every minute of every day ...
                </div>

                <label className="article-readmore"> Read More </label>
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* bottom div */}
        <div id="recent-articles-container">
          <p id="recent-articles-heading"> Recent Articles</p>
          <ArticleCards articles={obj} />
        </div>

        <div id="footer">
          <div id="footer-social">
            <div id="shareon"> SHARE ON </div>
            <div id="footer-social-icons">
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
          <img
            className="knob-creek-icon"
            src={require("./assets/images/logos/knobcreek.svg")}
          />
        </div>
      </div>
    );
  }
}

export default App;
