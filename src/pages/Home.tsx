import * as React from 'react';
import '../styles/Home.css';

class Home extends React.Component {

  private mainVideo = React.createRef<HTMLVideoElement>();

  constructor(props) {
    super(props);
    this.state = {
      videoStream: null
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    //Set facingMode to "environment" for rear camera and "user" for front camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: false })
      .then((stream) => {
        this.setState({
          videoStream: stream
        });

        const correctVideoElement = this.mainVideo.current!;

        if (this.mainVideo) {
          correctVideoElement.srcObject = (this.state as any).videoStream;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="Home">
        <video autoPlay={true} ref={this.mainVideo} className="Home-Video"></video>
        <button>Front</button><button>Rear</button>
      </div>
    );
  }
}

export default Home;