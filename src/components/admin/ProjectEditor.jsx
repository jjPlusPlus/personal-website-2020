import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Uploader from '../Uploader';
import CodeBlock from '../CodeBlock';
import Typer from '../Typer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faTrashAlt, faCheck } from "@fortawesome/free-solid-svg-icons";

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
      links: [],
      newTag: "",
      newLink: {
        description: "",
        url: ""
      },
      stickyTopBar: false,
      showPreview: false,
    }

    this.updateResource = this.updateResource.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isExpanded = this.state.stickyTopBar;
      if (window.scrollY > 90 && !isExpanded) {
        this.setState({ "stickyTopBar": true });
      }
      if (window.scrollY <= 90 && isExpanded) {
        this.setState({ "stickyTopBar": false });
      }
    })
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
        tags: nextProps.project.tags || [],
        links: nextProps.project.links || [],
        heroImage: nextProps.project.heroImage,
        listImage: nextProps.project.listImage
      })
    }
  }

  updateResource(event) {
    event.preventDefault();
    let { name, snippet, content, isPublished, isFeatured, listImage, heroImage } = this.state;
    name = name || "";
    snippet = snippet || "";
    content = content || "";
    isPublished = isPublished || false;
    isFeatured = isFeatured || false;
    listImage = listImage || null;
    heroImage = heroImage || null;
    this.props.firebase.update(`projects/${this.props.match.params.id}`, {
      name,
      snippet,
      content,
      isPublished,
      isFeatured,
      listImage,
      heroImage
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

  deepInputChange = (object, field) => event => {
    const base = this.state[object];
    base[field] = event.target.value;

    this.setState({
      [object]: base
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

  saveNewLink = link => (event) => {
    event.preventDefault();
    const newLink = this.state.newLink;

    // TODO: improve validation
    if (!newLink || newLink.description.length === 0 || newLink.url.length === 0) {
      return;
    }

    const links = this.state.links;
    links.push(newLink);
    this.props.firebase.update(`projects/${this.props.match.params.id}`, {
      links: links
    }).then(result => {
      alert("Update successful.")
    }).catch(error => {
      console.log(error);
      alert("There was a problem updating the resource");
    });
  }
  saveLink = link => (event) => {

  }
  deleteLink = link => (event) => {

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
              allTags[tag].projects.splice(allTags[tag].projects.indexOf(resourceID, 1));
              this.props.firebase.update(`tags/${tag}`, {
                projects: allTags[tag].projects
              }).catch(error => {
                console.log(error);
              });
            });
          }
        })
        .then(() => {
          alert("project deleted");
          this.props.history.push("/admin/dashboard/projects");
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  goBack = () => {
    this.props.history.push("/admin/dashboard/projects");
  }

  render() {
    const { project, tags } = this.props;
    const { name, snippet, content, isFeatured, isPublished, images, newTag, newLink, listImage, heroImage } = this.state;
    const existingTags = this.state.tags;

    if (!project) {
      return null;
    }

    return (
      <div className="page--container editor">
        <div className="page">
          <div className="flex flex-row">
            <div className="page-header--back-button flex flex-center" onClick={() => this.goBack()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="page--header flex-1">
              <h1 className="page--title">
                <Typer text={"Edit Project " + name} delay={1200} interval={150} />
                <span className="blink">_</span>
              </h1>
            </div>
          </div>
          <div className="editor">
            { project
              ? <form onSubmit={this.updateResource}>
                  <div className={"editor--section editor--section-highlighted editor--control-panel page--content " + (this.state.stickyTopBar ? "editor--section-sticky-topbar" : "")}>
                    <div className="full-padding flex flex-row">
                      <div className="flex flex-center">
                        <div className="form-inline-checkbox flex flex-center">
                          <div className="checkbox" onClick={this.checkboxChange('isFeatured')}>
                            {isFeatured
                              ? <div className="checkmark">
                                  <FontAwesomeIcon icon={faCheck} />
                                </div>
                              : null
                            }
                          </div>
                          <label htmlFor="isFeatured">Featured</label>
                        </div>
                        <div className="form-inline-checkbox flex flex-center">
                          <div className="checkbox" onClick={this.checkboxChange('isPublished')}>
                            {isPublished
                              ? <div className="checkmark">
                                  <FontAwesomeIcon icon={faCheck} />
                                </div>
                              : null
                            }
                          </div>
                          <label htmlFor="isPublished">Published</label>
                        </div>
                      </div>
                      <div className="flex-1"></div>
                      <div className="flex flex-row flex-center">
                        <div className="delete-icon" onClick={this.deleteProject()}>
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </div>
                        <button className="save-button" type="submit"> <FontAwesomeIcon icon={faCheck} /> </button>
                      </div>
                    </div>
                  </div>

                  {this.state.stickyTopBar
                    ? <div className="editor--section-sticky-placeholder"></div>
                    : null
                  }

                  <div className="editor--section page--content">
                    <h2>General Information</h2>
                    <label htmlFor="name">Name</label> <br />
                    <input className="text-input" name="name" type="text" value={name} onChange={this.inputChange('name')} />

                    <label htmlFor="snippet">Snippet (short list description)</label> <br />
                    <input className="text-input" name="snippet" type="text" value={snippet} onChange={this.inputChange('snippet')} />
                  </div>

                  <div className="editor--section page--content">
                    <h2>Links</h2>
                    { project.links &&
                      project.links.map((link, index) => {
                        return (
                          <div className="resource-link flex flex-row">
                            <div className="flex-1">
                              <p>{link.url}</p>
                              <p>{link.description}</p>
                            </div>
                            <div className="flex flex-row flex-center">
                              <div className="delete-icon" onClick={this.deleteLink()}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </div>
                              <button className="save-button" onClick={this.saveLink()}>
                                <FontAwesomeIcon icon={faCheck} />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    }

                    <p>Add a link:</p>

                    <label htmlFor="link-url">URL</label>
                    <input className="text-input" type="text" name="link-url" value={newLink.url} onChange={this.deepInputChange('newLink', 'url')} />
                    <label htmlFor="link-description">Description</label>
                    <input className="text-input" type="text" name="link-description" value={newLink.description} onChange={this.deepInputChange('newLink', 'description')} />
                    <button onClick={this.saveNewLink()}>Add</button>
                  </div>

                  <div className="editor--section page--content">
                    <h2>Images:</h2>
                    <label htmlFor="listImage">List Image URL</label> <br />
                    <input className="text-input" name="listImage" type="text" value={listImage} onChange={this.inputChange('listImage')} />

                    <label htmlFor="heroImage">Hero Image URL</label> <br />
                    <input className="text-input" name="heroImage" type="text" value={heroImage} onChange={this.inputChange('heroImage')} />

                    { images &&
                      Object.keys(images).map((image, index) => {
                        return (
                          <div className="resource-image flex flex-row flex-center pad-vertical" key={index}>
                            <img src={"http://jj-plus-plus.imgix.net/" + images[image].fullPath} alt={images[image].description} width="200px" />
                            <div className="flex-1 full-padding">
                              <p>
                                <span className="bold-text">{images[image].name}:</span> <br /> "{images[image].description}"
                              </p>
                              <small>{"http://jj-plus-plus.imgix.net/images/" + images[image].fullPath}</small>
                            </div>

                            <button className="button delete-button" onClick={this.onImageDelete(images[image])}>Delete Image</button>
                          </div>
                        )
                      })
                    }
                    <Uploader addImage={(path, downloadURL, name, description) => this.addImage(path, downloadURL, name, description)}/>
                  </div>

                  <div className="editor--section page--content">
                    <h2>Content</h2>
                    <div className="markdown-editor">
                      <div className="markdown-editor--toggle flex flex-row">
                        <div onClick={() => this.setState({"showPreview": !this.state.showPreview})} className={"markdown-editor--toggle-option flex-1 " + (!this.state.showPreview ? "selected" : "")}>
                          <p>Editor</p>
                        </div>
                        <div onClick={() => this.setState({"showPreview": !this.state.showPreview})} className={"markdown-editor--toggle-option flex-1 " + (this.state.showPreview ? "selected" : "")}>
                          <p>Preview</p>
                        </div>
                      </div>
                      { this.state.showPreview
                        ? <ReactMarkdown className="markdown-editor--preview" source={content} renderers={{ code: CodeBlock }}/>
                        : <textarea className="markdown-editor--textarea" name="content" value={content} onChange={this.inputChange('content')} />
                      }
                    </div>
                  </div>

                  <div className="editor--section page--content">
                    <h2>Tag Editor</h2>
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
                  </div>
                </form>
              : <p>loading...</p>
            }
          </div>
        </div>
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
