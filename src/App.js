import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main-div">
      <div id='sponsored'> Sponsored By </div>


      {/* HEADER  */}
        <div id='header'> 
          <img id='header-knob-creek-icon' src={require('./assets/images/logos/knobcreek.svg')}/>

          <div id='header-center-logo'>LOGO </div>

         <div id='header-social-media-icon'> <img className="fab fa-facebook-f fa-2x" src= {require('./assets/images/logos/facebook-f-brands.svg')}/>
         <img className="fab fa-twitter fa-2x"  src= {require('./assets/images/logos/twitter-brands.svg')}/> </div>
       
        </div>

        {/* CENTER DIV  */}

        <div id='splash-page-container'>

      <div id='splash-page'>
        <div id='splash-page-bio'>

          <p id='bio-header'>Maple Never Tasted So Good </p>
          <p id='bio-blurb'> We blend this bourbon with natural smoked maple flavors for 
            <br/> a unique, smoky sweetness. Full Bodied, inviting maple notes 
            <br/> that life to smoke and are complemented with rich vanilla 
            <br/>caramel. Smoked hickory and maple work with hints of 
            <br/>earthy grains. 
            </p>

        </div>

        <div id='splash-page-bourbon-bottle'>
        <img id='splash-resize-bottle' src={require('./assets/images/www.knobcreek.com-1310894113736742.png')}/>
          </div>
        </div>

// bottom of splash container






        </div>


  
    </div>
    );
  }
}

export default App;
