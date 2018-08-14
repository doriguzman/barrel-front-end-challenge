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

    {/* bottom splash  DIV  */}

<div id='bottom-splash'>

<img id='pour-mug' src={require('./assets/images/pour-mug.jpg')}/>

<div id='pour-mug-text'> 
<div>
<img className='pour-mug-article-icon' src={require('./assets/images/icons/Article.svg')}/>
</div>

<p className='date'> NOVEMBER 20 </p>
<p className='article-title'> Too Much Flavor For Four <br/> Walls To Hold</p>
<p className='article-blurb'>There are only so many hours in a day, so we make every 
  <br/> glass count. We craft full-flavored whiskey for those who find 
  <br/> a way to get the most out of every minute of every day ...
</p>

<label className='article-readmore'> Read More </label>
</div> 




  </div>




        </div>


  
    </div>
    );
  }
}

export default App;
