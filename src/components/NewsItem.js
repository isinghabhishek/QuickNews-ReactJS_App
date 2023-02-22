
import React from 'react'

const NewsItems = (props)=> {

     let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card"> 
        <div style={{display: 'flex',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: '0'}}>
        <span class=" badge rounded-pill bg-danger"> {source}</span>
        </div>
        <img src={!imageUrl?"https://c.ndtvimg.com/2018-12/uhbeqgog_mobile-tower-generic_625x300_22_December_18.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}<h5>
                </h5></h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknow": author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} traget="blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItems
