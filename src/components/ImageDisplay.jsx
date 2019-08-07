import React, { Component } from 'react';
import { withFirebase } from 'react-redux-firebase';

class ImageDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      downloadURL: ""
    }
    this.fetchDownloadURL = this.fetchDownloadURL.bind(this);
  }

  componentDidMount() {
    this.fetchDownloadURL();
  }

  fetchDownloadURL = async () => {
    try {
      const storage = this.props.firebase.storage();
      const downloadURL = await storage.ref(this.props.file.fullPath).getDownloadURL();
      this.setState({
        downloadURL: downloadURL
      });
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const {file} = this.props;
    return (
      <div className="image-display">
        <img src={this.state.downloadURL} alt={file.name} width="200" />
        <p>{file.name}</p>
      </div>
    )
  }
}

export default withFirebase(ImageDisplay);
