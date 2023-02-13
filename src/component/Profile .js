import React, { Component } from 'react';
import proptypes from 'prop-types';

class Profile extends Component {
  state = {
    person: {
      fullName: "Haoua Khleifi",
      bio: "5 years of experience",
      imgSrc: "./profilephoto.jpg",
      profession: "Web Developper"
    },
    timeSinceMounted: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      let timeSinceMounted = this.state.timeSinceMounted + 1;
      let hours = Math.floor(timeSinceMounted / 3600);
      let minutes = Math.floor((timeSinceMounted % 3600) / 60);
      let seconds = timeSinceMounted % 60;
      this.setState({
        timeSinceMounted,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  };
  render() {
    return (
      <div >
            <div className='profile'>
             <div className='info'>
            <h2>Name:{this.state.person.fullName}</h2>
            <p>Bio:{this.state.person.bio}</p>
            <p>Profession:{this.state.person.profession}</p>
            </div>
            <div className='photo'>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            </div>
            </div>
            <div className='pfin'>
          <p >Time since last mount: {this.state.hours}:{this.state.minutes}:{this.state.seconds}</p>
          </div>
      </div>
    );
  }
}
Profile.prototypes={
fullName:proptypes.string,
Bio:proptypes.string,
profession:proptypes.string

}
export default Profile;