import * as React from 'react';

class Home extends React.Component {

  private mainVideo = React.createRef<HTMLVideoElement>();

  constructor(props) {
    super(props);
    this.state = {
      videoStream: null
    }
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
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
      <div>
        <video autoPlay={true} ref={this.mainVideo} />
      </div>
    );
  }
}

export default Home;