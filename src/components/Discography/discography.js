import React from 'react';
import cd from './cd.png';
import '../styles/style.css';

const Discography = (props) =>{
    return(
        <div style={{width:'50%',minWidth:'700px'}}>
            <div>
                <img src={cd} alt="cd" />
            </div>
            <div style={{paddingLeft:'60px'}}>
                <div className="albumHeading"><h1>Discography</h1></div>
                <div className="albumContent">
                    <ul>
                        {props.albums.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <div className="albumTitle">{item.title}</div>&#11044;
                                    <div className="albumYear">{item.year}</div>
                                    <div onClick={()=>props.changeAlbum(index)} className="listen">LISTEN</div>
                                    <div className="buy">BUY</div></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Discography;