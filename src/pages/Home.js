import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoStream: null
    }
    this.mainVideo = React.createRef();
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    //Set facingMode to "environment" for rear camera and "user" for front camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false })
      .then((stream) => {
        this.setState({
          videoStream: stream
        });
        this.mainVideo.current.srcObject = this.state.videoStream;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="Home">
        <video autoPlay ref={this.mainVideo} className="Home-Video" ></video>
        <button>Front</button><button>Rear</button>
      </div>
    );
  }
}

export default Home;