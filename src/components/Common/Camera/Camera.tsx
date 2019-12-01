import React, { Component } from 'react';

import CameraResolving from './CameraResolving';

type CameraOpts = true | object;

interface CameraProps {
  children: (hasCamera: boolean, switchCamera: Function, stream: false | MediaStream) => React.ReactNode;
}

interface CameraState {
  resolved: boolean;
  hasCamera: boolean;
  stream: false | MediaStream;
  timer: null | number;
  devices: Array<MediaDeviceInfo>;
  deviceIndex: number;
}


class Camera extends Component<CameraProps, CameraState> {
  constructor(props: CameraProps) {
    super(props);

    this.state = {
      resolved: false,
      hasCamera: false,
      stream: false,
      timer: null,
      devices: [],
      deviceIndex: 0
    };
  }

  componentDidMount() {
    this._getCamera()
      .finally(() => {
        this._listCameras()
          .then(devices => {
            this.setState({
              resolved: true,
              devices
            });
          })
      })
  }

  componentWillUnmount() {
    const { stream } = this.state;

    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(t => t.stop());
    }
  }

  _listCameras() {
    return navigator.mediaDevices.enumerateDevices()
      .then(devices => devices.filter(d => {
        return d.kind.includes('video');
      }));
  }

  _getCamera(video: CameraOpts = true) {
    return this._requestCamera(video)
      .then(stream => {
        this.setState({
          hasCamera: true,
          stream
        })
      })
      .catch(() => {
        this.setState({
          hasCamera: false
        })
      })
  }

  _requestCamera(video: CameraOpts) {
    const opts = { video };
    return navigator.mediaDevices.getUserMedia(opts)
  }

  _getCameraObject(key: number) {
    return this.state.devices.length > key ? this.state.devices[key] : this.state.devices[0];
  }

  switchCamera = () => {
    this.setState({
      deviceIndex: this.state.deviceIndex + 1
    }, () => {
      const device = this._getCameraObject(this.state.deviceIndex);
      this._getCamera(device);
    });
  }

  render() {
    const { children } = this.props;
    const { resolved, hasCamera, stream } = this.state;

    return (
      <>
        { !resolved && <CameraResolving /> }
        { resolved && children(hasCamera, this.switchCamera, stream) }
      </>
    );
  }
}

export default Camera;
