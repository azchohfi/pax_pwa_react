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
        navigator.mediaDevices.getUserMedia({video: true, audio: false})
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
                this.mainVideo.current.srcObject.onloadedmetadata = function(e) {
                    console.log("hello");
                    this.mainVideo.current.srcObject.play();
                }
            })
            .catch(function (err) {
                /* handle the error */
            });
    }

    render() {
        return (
            <div>
                <video ref={this.mainVideo}> 

                </video>
            </div>
        );
    }
}

export default Home;