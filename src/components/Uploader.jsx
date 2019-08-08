import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { map } from "lodash";
import { compose } from "recompose";
import { firebaseConnect } from "react-redux-firebase";

import Dropzone from "react-dropzone";
import ImageDisplay from "./ImageDisplay";

// Path within Database for metadata (also used for file Storage path)
const filesPath = "images";

/* Uploader (Class Component) : adapted from react-redux-firebase recipe
 * - File is NOT immediately uploaded to Firebase
 * - Upon upload, the full download path to the file is added to the metadata
 * - Upon upload, the file is added to the resource passed in through props
 */
class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      droppedFile: null,
      fileName: "",
      file: null
    }
  }

  // Uploads files and pushes objects containing metadata to database at dbPath
  onFilesDrop = props => async files => {

    if (!files) { return; }

    const fileName = window.prompt("name the file", files[0].name);
    const filePreview = URL.createObjectURL(files[0]);

    this.setState({
      file: files[0],
      droppedFile: filePreview,
      fileName: fileName
    })
  }

  uploadImage = props => async event => {
    event.preventDefault();
    // upload to storage
    const result = await this.props.firebase.uploadFile("images", this.state.file);
    const storage = this.props.firebase.storage();
    const downloadURL = await storage.ref(result.uploadTaskSnapshot.metadata.fullPath).getDownloadURL();
    // get downloadURL, image ID, and send it to the parent for wire-up
    await this.props.addImage(result, downloadURL, this.state.fileName, this.state.imageDescription);
    return this.setState({
      droppedFile: null,
      fileName: "",
      imageDescription: "",
      file: null
    })
  }

  inputChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  render() {
    const { uploadedFiles } = this.props;
    const { droppedFile } = this.state;
    return (
      <div className="uploader">
        <Dropzone onDrop={this.onFilesDrop()} >
          {({getRootProps}) => (
            <div className="dropzone" {...getRootProps()}>
              <p>Drop a SINGLE image here</p>
            </div>
          )}
        </Dropzone>

        {droppedFile && (
          <div className="uploader--dropped-files">
            <p>Preview:</p>
            <img src={droppedFile} width="200" alt="preview of dropped image"/>
            <button onClick={this.uploadImage()}>Upload</button>
          </div>
        )}
      </div>
    )
  }
}

// Adds props.firebase and creates a listener for files then passes them into props.uploadedFiles
const enhance = compose(
  // Create listeners for Real Time Database which write to redux store
  firebaseConnect([{ path: filesPath }]),
  // connect redux state to props
  connect(({ firebase: { data } }) => ({
    uploadedFiles: data[filesPath]
  }))
);

export default enhance(Uploader);
