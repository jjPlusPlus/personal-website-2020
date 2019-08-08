import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Uploader from '../Uploader';
import CodeBlock from '../CodeBlock';

class ProjectEditor extends Component {
  constructor(props) {
    super(props)
    const project = this.props.project;

    this.state = {
      name: "",
      snippet: "",
      content: "",
      isPublished: false,
      isFeatured: false,
      images: [],
      tags: [],
      newTag: "",
    }

    this.updateArticle = this.updateArticle.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.project && nextProps.project) {
      // project was passed in successfully
      this.setState({
        name: nextProps.project.name,
        snippet: nextProps.project.snippet,
        content: nextProps.project.content,
        isPublished: nextProps.project.isPublished,
        isFeatured: nextProps.project.isFeatured,
        images: nextProps.project.images || [],
        tags: nextProps.project.tags || []
      })
    }
  }

  updateArticle(event) {
    event.preventDefault();
    const { name, snippet, content, isPublished, isFeatured } = this.state;
    this.props.firebase.update(`projects/${this.props.match.params.id}`, {
      name,
      snippet,
      content,
      isPublished,
      isFeatured
    }).then(result => {
      alert("Update successful.")
    }).catch(error => {
      console.log(error);
      alert("There was a problem updating the article");
    });
  }

  inputChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  checkboxChange = field => event => {
    this.setState({
      [field]: event.target.value
    })
  }

  handleTagCheckboxChange = name => (event) => {
    const isChecked = event.target.checked;
    const tagID = event.target.value;
    const projectID = this.props.match.params.id;

    const projectTags = this.state.tags; // all tags for this project
    const tagprojects = this.props.tags[tagID].projects || []; // all projects for this tag

    if (isChecked) {
      projectTags.push(tagID);
      tagprojects.push(projectID);
      // add this tag to the current project's tags array
      this.props.firebase.update(`projects/${projectID}`, {
        tags: projectTags,
      }).then(result => {
        // add this project to the current Tag's project array
        this.props.firebase.update(`tags/${tagID}`, {
          projects: tagprojects,
        }).catch(error => {
          console.log(error);
          alert("The tag could not be updated");
        });
      }).catch(error => {
        console.log(error);
        alert("The tag could not be updated");
      });

    } else {
      projectTags.splice(projectTags.indexOf(tagID), 1);
      tagprojects.splice(tagprojects.indexOf(projectID), 1);
      // remove this tag from the current project's tag array
      this.props.firebase.update(`projects/${projectID}`, {
        tags: projectTags,
      }).then(result => {
        // remove this project from the current Tag's project array
        this.props.firebase.update(`tags/${tagID}`, {
          projects: tagprojects,
        }).catch(error => {
          console.log(error);
          alert("The tag could not be updated")
        });
      }).catch(error => {
        console.log(error);
        alert("The tag could not be updated")
      });
    }
  };

  addImage = (image, downloadURL, name, description) => {
    const images = this.state.images;
    const imageMeta = {
      key: Date.now(),
      name: name,
      description: description || "",
      contentType: image.uploadTaskSnapshot.metadata.contentType,
      bucket: image.uploadTaskSnapshot.metadata.bucket,
      fullPath: image.uploadTaskSnapshot.metadata.fullPath,
      downloadURL: downloadURL
    }
    images.push(imageMeta);
    return this.props.firebase.update(`projects/${this.props.match.params.id}`, {
      images: images
    }).then(result => {
      alert("Image added successfully");
    }).catch(error => {
      console.log(error);
    });
  }

  addTag = tag => (event) => {
    event.preventDefault();
    const newTagName = this.state.newTag;
    if (newTagName.length === 0) {
      return alert("The new tag name cannot be empty");
    }
    const newTag = {
      name: this.state.newTag,
      color: "#000"
    };
    this.props.firebase.push("tags", newTag).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  }


  onImageDelete = image => (event) => {
    event.preventDefault();
    const images = this.state.images;
    images.splice(images.indexOf(image), 1);
    // delete the file from storage
    this.props.firebase.deleteFile(image.fullPath, `images/${image.key}`)
      .catch(error => {
        alert('unable to delete the file from firebase storage');
        console.log(error);
      });
    // remove the relationship to the resource model
    this.props.firebase.update(`projects/${this.props.match.params.id}`, {
      images: images
    }).then(result => {
      alert("Image removed successfully");
    }).catch(error => {
      console.log(error);
    });
  }

  deleteProject = project => (event) => {

    // delete project after confirmation
    const confirmation = window.confirm("Are you sure? This is permanent. You can always unpublish the project.");

    const resourceID = this.props.match.params.id;
    const images = this.state.images;
    const projectTags = this.state.tags;
    const allTags = this.props.tags;

    if (confirmation) {
      this.props.firebase.remove(`projects/${resourceID}`)
        .then(result => {
          // Remove the images from Firebase Storage
          if (images && images.length) {
            images.forEach(img => {
              return this.props.firebase.deleteFile(img.fullPath);
            });
          }
          // Unbind all the relationships to this Post in Tags (but not the tags themselves)
          if (projectTags && projectTags.length) {
            projectTags.forEach(tag => {
              // remove projectID from allTags[tag].projects
              allTags[tag].projects.splice(allTags[tag].indexOf(resourceID, 1));
              this.props.firebase.update(`tags/${tag}`, {
                projects: allTags[tag].projects
              }).then(result => {
                alert("tags updated successfully");
              }).catch(error => {
                console.log(error);
              });
            });
          }
        })
        .catch(error => {
          console.log(error);
          alert('Failed to remove the project');
        })
    }
  }

  render() {
    const { project, tags } = this.props;
    const { name, snippet, content, isFeatured, isPublished, images, newTag } = this.state;
    const existingTags = this.state.tags;

    if (!project) {
      return null;
    }

    return (
      <div className="project-editor">
        <h2>Edit Project</h2>
        { project
          ? <form onSubmit={this.updateArticle}>
              <label htmlFor="name">Name</label> <br />
              <input name="name" type="text" value={name} onChange={this.inputChange('name')} />
              <br />
              <label htmlFor="snippet">Snippet (short list description)</label> <br />
              <input name="snippet" type="text" value={snippet} onChange={this.inputChange('snippet')} />
              <br />
              <label>Add/update article image:</label> <br />
              { images &&
                Object.keys(images).map((image, index) => {
                  return (
                    <div className="resource-image" key={index}>
                      <img src={images[image].downloadURL} alt={images[image].description} width="200px" />
                      <span>{images[image].name}: "{images[image].description}"</span>
                      <button onClick={this.onImageDelete(images[image])}>Delete Image</button>
                    </div>
                  )
                })
              }
              <Uploader addImage={(path, downloadURL, name, description) => this.addImage(path, downloadURL, name, description)}/>

              <label htmlFor="content">Content</label> <br />
              <textarea name="content" value={content} onChange={this.inputChange('content')} />
              <ReactMarkdown source={content} renderers={{ code: CodeBlock }}/>
              <br />
              <label>Tag Editor</label>
              { tags &&
                Object.keys(tags).map((value, index) => {
                  const tag = tags[value];
                  const isChecked = existingTags && existingTags.includes(value);

                  return (
                    <div className="tag-manager" key={index}>
                      <input type="checkbox" checked={isChecked} value={value} name={tag.name} key={value} onChange={this.handleTagCheckboxChange(value)} />
                      <label htmlFor={tag.name}>{tag.name}</label>
                    </div>
                  )
                })
              }
              <p>Add a Tag</p>
              <input name="newTag" type="text" value={newTag} onChange={this.inputChange('newTag')} />
              <button onClick={this.addTag()}>Add</button>

              <br />
              <label htmlFor="isFeatured">Featured</label> <br />
              <input name="isFeatured" type="checkbox" value={isFeatured} onChange={this.checkboxChange('isFeatured')} />
              <br />
              <label htmlFor="isPublished">Published</label> <br />
              <input name="isPublished" type="checkbox" value={isPublished} onChange={this.checkboxChange('isPublished')} />
              <br />
              <button type="submit"> Update </button>
            </form>
          : <p>loading...</p>
        }
      </div>
    )
  }
}

const enhance = compose(
  firebaseConnect(props => {
    return [
      { path: `projects/${props.match.params.id}` },
      'tags'
    ]
  }),
  connect(({ firebase }, props) => ({
    project: getVal(firebase, `data/projects/${props.match.params.id}`),
    tags: firebase.data.tags
  }))
)

export default enhance(ProjectEditor);
