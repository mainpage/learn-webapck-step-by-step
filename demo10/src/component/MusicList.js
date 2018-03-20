import React, { Component } from 'react';
import './MusicList.css';

class MusicList extends Component {
  constructor(props){
    super(props);
    this.state = {
      musicList: []
    }
  }

  componentDidMount(){
    fetch('/api/musicList')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if(data.code == 200){
        this.setState({
          musicList: data.recommend
        })
      }
    })
    .catch((err) => {
      
    })
  }

  render() {
    const {musicList} = this.state;
    return (
      <ul className="music-list">
        {musicList.map((music) => {
          return (
            <li className="music-item">
              <img src={music.picUrl} alt=""/>
              <p className="name">{music.name}</p>
            </li>
          )
        })}
      </ul>
    );
  }
}

module.exports = MusicList;


