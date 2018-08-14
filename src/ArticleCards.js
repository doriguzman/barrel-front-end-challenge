import React, { Component } from "react";

class ArticleCards extends Component {
  render() {
    let articles = this.props.articles;
    
    return (
       <div id='articles-container'> 
       
       {console.log(articles)}
       
       {articles.map(article =>{
           {console.log(article.title)}
        //    let image= article.image
        //    console.log(article.image)
           return (
               <div key={article.number} className= 'article-card'>

               <img src={require(`./assets/images/${article.image}`)} alt='img'/>
               <div className='article-icon'>
               <img
                  className="pour-mug-article-icon"
                  src={require(`./assets/images/icons/${article.icon}`)}
                />
                </div>
                <p className="date"> {article.date} </p>
                <p className="article-title"> {article.title}</p>
                <label className="article-readmore"> {article.continue} </label>

               </div>
           )
       })}
           </div>
    )
  }
}

export default ArticleCards;