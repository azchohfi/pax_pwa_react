import * as React from 'react';
import '../styles/Home.css';

declare var mobilenet: any;

class Home extends React.Component {
  private mainVideo = React.createRef<HTMLVideoElement>();
  private mainCanvas = React.createRef<HTMLCanvasElement>();

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
    }, () => {
      this.handleCamera();
    });
  }

  processFrame() {
    if (!this.mainCanvas.current)
      return;

    var context = this.mainCanvas.current.getContext('2d');
    if (this.mainVideo.current && context) {
      var width = this.mainVideo.current.width;
      var height = this.mainVideo.current.height;
      this.mainCanvas.current.width = width;
      this.mainCanvas.current.height = height;
      context.drawImage(this.mainVideo.current, 0, 0, width, height);

      let img = new Image();
      img.src = this.mainCanvas.current.toDataURL('image/png').replace('image/png', 'image/octet-stream');

      //@ts-ignore
      if (window.Windows && Windows.UI.Popups)//Windows.AI.MachineLearning)
      {
        //@ts-ignore
        let x = new Windows.UI.Popups.MessageDialog('Test')
        x.showAsync();
        //Windows.AI.MachineLearning.
      } else {
        console.log("NOT windows");
        // Load the model.
        mobilenet.load().then(model => {
          // Classify the image.
          console.log('Classifying...');
          model.classify(img).then(predictions => {
            console.log('Predictions: ');
            console.log(predictions);
          });
        });

      }
    }
  }

  render() {
    return (
      <div className="Home">
        <video autoPlay={true} ref={this.mainVideo} className="Home-Video"></video>
        <canvas ref={this.mainCanvas} />
        <button onClick={() => this.handleCameraToggle()}>Toggle</button>
        <button onClick={() => this.processFrame()}>Process frame</button>
      </div>
    );
  }
}

export default Home;