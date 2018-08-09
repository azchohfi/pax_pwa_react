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
        /* use the stream */
        console.log(stream);
        //var video = document.querySelector('video');
        //this.state.videoStream = stream;
        //this.state.videoStream.onloadedmetadata = function(e) {
        //  this.state.videoStream.play();
        //};

        this.setState({
          videoStream: stream
        });
        this.mainVideo.current.srcObject = this.state.videoStream;
      })
      .catch(function (err) {
        /* handle the error */
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