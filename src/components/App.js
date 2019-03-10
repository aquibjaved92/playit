import React ,{ Component } from 'react';
import Artist from './Artist/artist'
import DiscoGraphy from './Discography/discography'
import AudioPlayer from './AudioPlayer/audioplayer'

class App extends Component {
    constructor(){
        super();
        this.state = {
            albums : [                                                      //array of albums
                {
                    title: "Surprise Without Flaws",
                    year: 2015,
                },
                {
                    title: "Mist Of A Shadow",
                    year: 2014,
                },
                {
                    title: "Heroes Of The Sun",
                    year: 2013,
                },
                {
                    title: "Picture Of The Past",
                    year: 2012,
                },
            
            ],

            currentAlbum: "Surprise Without Flaws", //album selected by user to listen
        }

        this.changeAlbum = this.changeAlbum.bind(this);
    }

    changeAlbum(index){                                         //changes albumName on click of listen button
        this.setState({
            currentAlbum: this.state.albums[index].title
        })
    }

    render(){
        return(
            <div>
                <Artist />
                <div style={{display:'flex',minWidth:'1300px'}}>
                    <DiscoGraphy albums={this.state.albums} changeAlbum={this.changeAlbum}/>
                    <AudioPlayer currentAlbum={this.state.currentAlbum}/>
                </div>
            </div>
        )
    }
}

export default App;