import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { map } from "lodash";
import { compose, withHandlers, setPropTypes } from "recompose";
import { firebaseConnect } from "react-redux-firebase";

import Dropzone from "react-dropzone";
import ImageDisplay from "./ImageDisplay";

// Path within Database for metadata (also used for file Storage path)
const filesPath = "images";

const handlers = {
  // Uploads files and pushes objects containing metadata to database at dbPath
  onFilesDrop: props => files => {
    debugger;
    const fileName = window.prompt("name the file", files[0].name);
    const uploadOptions = {
      name: fileName
    }
    return props.firebase.uploadFile(filesPath, files[0], filesPath, uploadOptions);
  },
  onFileDelete: props => (file, key) => {
    return props.firebase.deleteFile(file.fullPath, `${filesPath}/${key}`);
  }
};

const enhancerPropsTypes = {
  firebase: PropTypes.object.isRequired
};

// Component Enhancer that adds props.firebase and creates a listener for
// files them passes them into props.uploadedFiles
const enhance = compose(
  // Create listeners for Real Time Database which write to redux store
  firebaseConnect([{ path: filesPath }]),
  // connect redux state to props
  connect(({ firebase: { data } }) => ({
    uploadedFiles: data[filesPath]
  })),
  // Set proptypes of props used within handlers
  setPropTypes(enhancerPropsTypes),
  // Add handlers as props
  withHandlers(handlers)
);

const Uploader = ({ uploadedFiles, onFileDelete, onFilesDrop }) => (
  <div className="uploader">
    <Dropzone onDrop={onFilesDrop} >
      {({getRootProps}) => (
        <div className="dropzone" {...getRootProps()}>
          <p>Drop files here, or click to select files</p>
        </div>
      )}
    </Dropzone>

    {uploadedFiles && (
      <div className="uploader--files">
        <p>Image File:</p>
        {map(uploadedFiles, (file, key) => {
          return (
            <div key={file.name + key}>
              <ImageDisplay file={file}/>
              <button onClick={() => this.onFileDelete(file, key)}>Delete</button>
            </div>
          )
        }
      )}
      </div>
    )}
  </div>
);

Uploader.propTypes = {
  firebase: PropTypes.object.isRequired,
  uploadedFiles: PropTypes.object
};

// Apply enhancer to component on export
export default enhance(Uploader);
