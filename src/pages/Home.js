import React, { Component } from 'react';

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
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
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
      <div>
        <video autoPlay ref={this.mainVideo}></video>
      </div>
    );
  }
}

export default Home;