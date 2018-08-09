import * as React from 'react';
import '../styles/Home.css';

class Home extends React.Component {

  private mainVideo = React.createRef<HTMLVideoElement>();

  constructor(props) {
    super(props);
    this.state = {
      videoStream: null,
      front: false
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    this.handleCamera();
  }

  handleCamera() {
    //Set facingMode to "environment" for rear camera and "user" for front camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: (((this.state as any).front ? "user" : "environment")) }, audio: false })
      .then((stream) => {
        console.log('handleCamera');
        console.log((this.state as any).front);
        this.setState({
          videoStream: stream
        });

        const correctVideoElement = this.mainVideo.current!;

        if (this.mainVideo && correctVideoElement) {
          correctVideoElement.srcObject = (this.state as any).videoStream;
          console.log(stream.getVideoTracks()[0].getConstraints().facingMode);
        }
        
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleCameraToggle() {
    console.log('handle camera toggle'); 
   (this.state as any).videoStream.getTracks()[0].stop();
   this.setState({
      front: !(this.state as any).front
    }, () =>{
      this.handleCamera();
    });
  }

  render() {
    return (
      <div className="Home">
        <video autoPlay={true} ref={this.mainVideo} className="Home-Video"></video>
        <button onClick={() => this.handleCameraToggle()}>Toggle</button>
      </div>
    );
  }
}

export default Home;