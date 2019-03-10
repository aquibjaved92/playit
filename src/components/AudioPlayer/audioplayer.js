import React,{ Component } from 'react';
import '../styles/style.css';

export default class AudioPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs : [                                         //array of songs details
                {
                    songId : "01.",
                    songTitle : "Clouds In The Forest",
                    songLength: "3:20",
                    playing: true,
                },
                {
                    songId : "02.",
                    songTitle : "Rat In The River",
                    songLength: "2:48",
                    playing: false,
                },
                {
                    songId : "03.",
                    songTitle : "Giants and Companions",
                    songLength: "2:27",
                    playing: false,
                },
                {
                    songId : "04.",
                    songTitle : "Ashamed Of Light",
                    songLength: "3:32",
                    playing: false,
                },
                {
                    songId : "05.",
                    songTitle : "Criminals of The Lake",
                    songLength: "2:55",
                    playing: false,
                },
                {
                    songId : "06.",
                    songTitle : "Doubting The Forest",
                    songLength: "2:40",
                    playing: false,
                },
                {
                    songId : "07.",
                    songTitle : "Curse Of Eternity",
                    songLength: "1:33",
                    playing: false,
                },
                {
                    songId : "08.",
                    songTitle : "Fog In My Town",
                    songLength: "1:33",
                    playing: false,
                },
                {
                    songId : "09.",
                    songTitle : "Serpent In The Mountains",
                    songLength: "3:24",
                    playing: false,
                }
            ],                       

            selectedSongId : "01.",                              //current playing song id
            selectedSongTitle: "Clouds In The Forest",           //current playing song title
            playingOpacity: 1,
            pausedOpacity: 0.2,
            play: true                                           // to change the play/pause button on the music player
        }
    }

    selectSong(index){                                      // to change the current song on the music player
        this.setState({
            selectedSongId : this.state.songs[index].songId,
            selectedSongTitle: this.state.songs[index].songTitle,
        })
    }
     
    togglePlay(){                                             // change play button to pause and vice-versa
        this.setState({
            play: !this.state.play
        })
    }

    render(){
        const songList = this.state.songs.map((item,index) => {
            return(
                <div onClick={() => this.selectSong(index)} key={item.songId} className="song">
                    <div className="songsList">
                        <i style={(item.songId===this.state.selectedSongId) ?
                            {opacity:this.state.playingOpacity} :
                            {opacity:this.state.pausedOpacity}} 
                            className="fa fa-play" 
                            aria-hidden="true">
                        </i>
                        <p className="songItem">{item.songId}&nbsp;{item.songTitle}</p>
                    </div>
                    <div className="songsList" style={{display:"flex",width:'50%'}}>
                        <div className="dots"></div>
                        <p className="songItem">{item.songLength}</p>
                    </div>
                </div>
            )
        })

        return(
            <div className="audioPlayer">
                <div style={{paddingTop:"35px"}}>
                    <div className="playerHeader"><h1>Now playing</h1></div>
                    <div>
                        <p className='albumPlaying'>{this.props.currentAlbum}</p>
                        <p className="songTitle">{this.state.selectedSongId}&nbsp;{this.state.selectedSongTitle}</p>
                    </div>
                    <div style={{marginTop:"87px"}}>
                        <div className="audioPlayerbtn">
                            <i className="fa fa-backward active" aria-hidden="true"></i>
                            <div onClick={() => this.togglePlay()}>
                                {this.state.play ? 
                                    <i className="fa fa-pause active" aria-hidden="true"></i> :
                                    <i className="fa fa-play active" aria-hidden="true"></i>
                                }
                            </div>
                            <i className="fa fa-forward active" aria-hidden="true"></i>
                        </div>
                        <div className="progress">
                            <hr style={{width:'40%',background:'#E4DCDC'}}/>
                            &#11044;
                            <hr style={{width:'60%',background: '#856b61'}}/>
                        </div>
                    </div>
                </div>
                <div style={{marginTop:"115px"}}>
                    <div><p className='albumPlaying'>{this.props.currentAlbum}</p></div>
                    <div style={{marginTop:"27px"}}>
                        {songList}
                    </div>
                </div>
            </div>
        )
    }
}