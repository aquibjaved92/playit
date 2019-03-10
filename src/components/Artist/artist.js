import React, {Component} from 'react';
import boy from './boy.png';
import '../styles/style.css';

class Artist extends Component {
    constructor(){
        super();
        this.state = {
            members : [                                                //band member array
                {
                    id: 0,
                    FirstName : 'LAURIE',
                    SecondName : 'ALTON',
                    role : 'VOCALIST'
                },
                {
                    id:1,
                    FirstName : 'CHARLES',
                    SecondName : 'TIMMY',
                    role : 'GUITAR'
                },
                {
                    id:2,
                    FirstName : 'CURT',
                    SecondName : 'SHEARD',
                    role : 'BASE'
                },
                {
                    id:3,
                    FirstName : 'CADE',
                    SecondName : 'RYKER',
                    role : 'DRUMS'
                },
                {
                    id:4,
                    FirstName : 'TOMMY',
                    SecondName : 'BRANDON',
                    role : 'ELECTRONICS'
                },
            ],
            currentMemberId: 2

        }
    }

    prevMember(){
        if(this.state.currentMemberId>=0){                                                //show previous member
            this.setState({
                currentMemberId : this.state.currentMemberId-1,
            })
        }
        if(this.state.currentMemberId===0){                                                //take to last member
            this.setState({
                currentMemberId : 4,
            })
        }
    }

    nextMember(){  
        if(this.state.currentMemberId<=4){                                                //show next member
            this.setState({
                currentMemberId : this.state.currentMemberId+1,
            })
        }
        if(this.state.currentMemberId===4){                                                //take to first member
            this.setState({
                currentMemberId : 0,
            })
        }
    }

    render(){
        const membersArray = this.state.members;
        const id = this.state.currentMemberId;
        const members = this.state.members.map((item)=>{
            return(
                <li key={item.id} style={id===item.id ? {opacity:1} : {opacity: 0.3}}>
                    <div className="leftList">{item.FirstName}&nbsp;{item.SecondName}</div>
                    &#11044;
                    <div className="rightList">{item.role}</div>
                </li>
            )
        })
        return(
            <div style={{position:'relative'}}>
                <div className="artistPage">
                    <div className='aboutArtist'>
                        <img src={boy} alt='artist'/>
                        <div className='artistName'>
                            <span style={{color:'#88665f'}}>{membersArray[id].FirstName}<br/></span>
                            <span style={{color:'#292420'}}>{membersArray[id].SecondName}</span>
                        </div>
                    </div>
                    <div className="artistDesc">
                        <div className="teamMembers">
                            <ul>
                                {members}
                            </ul>
                        </div>
                        <div className="meetBand">
                            <h3>Meet our band</h3>
                            <p>
                                Court Sheard, swag iPhone neutra williamsburg,<br/>
                                sriracha you probably haven't heard of them PBR&B<br/>
                                marfa seitan. Four dollar toast wayfarers helvetica<br/>
                                etsy, affogato pinterest schillz, Squid yr mlkshk, pin-<br/>
                                terest pour-over polaroid photo booth. Yr fixie plaid<br/>
                                kogi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="arrows">
                    <div className="arrow" onClick={() => this.prevMember()}> &#8249; </div>
                    <div className="arrow" onClick={() => this.nextMember()}> &#8250; </div>
                </div>
            </div>
        )
    }
}

export default Artist;