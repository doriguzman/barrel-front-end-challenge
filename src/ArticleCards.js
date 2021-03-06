import React, { Component } from "react";
import "./ArticleCards.css"
class ArticleCards extends Component {
  render() {
    let articles = this.props.articles;
    
    return (
       <div id='articles-container'> 
       
       {console.log(articles)}
       
       {articles.map(article =>{
           {console.log(article.title)}
        
           return (
               <div key={article.number} className= 'article-card'>

               <img src={require(`./assets/images/${article.image}`)} alt='img'/>
           
               { article.icon==='Gallery.svg'? <img className='article-icon-gallery' src={require(`./assets/images/icons/${article.icon}`)}
                /> :
              ''}
              {article.icon ==='Glass.svg' ?  <img
                  className="article-icon-glass"
                  src={require(`./assets/images/icons/${article.icon}`)}
                />: ''}
                {article.icon !=='Glass.svg' && article.icon !== 'Gallery.svg' ?  <img
                  className="article-icon"
                  src={require(`./assets/images/icons/${article.icon}`)}
                />: ''}

    <div className='article-blurb'>
                    <p className="date"> {article.date} </p>
                <div className="article-title"> {article.title}</div>
                <br/>
                <label className="article-readmore"> {article.continue} </label>
                </div>
               </div>
           )
       })}
           </div>
    )
  }
}

export default ArticleCards;