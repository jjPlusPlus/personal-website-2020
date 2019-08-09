import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Uploader from '../Uploader';
import CodeBlock from '../CodeBlock';

class PostEditor extends Component {
  constructor(props) {
    super(props)
    const post = this.props.post;

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

    this.updateResource = this.updateResource.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.post && nextProps.post) {
      // post was passed in successfully
      this.setState({
        name: nextProps.post.name,
        snippet: nextProps.post.snippet,
        content: nextProps.post.content,
        isPublished: nextProps.post.isPublished,
        isFeatured: nextProps.post.isFeatured,
        images: nextProps.post.images || [],
        tags: nextProps.post.tags || []
      })
    }
  }

  updateResource(event) {
    event.preventDefault();
    let { name, snippet, content, isPublished, isFeatured } = this.state;
    name = name || "";
    snippet = snippet || "";
    content = content || "";
    isPublished = isPublished || false;
    isFeatured = isFeatured || false;
    this.props.firebase.update(`posts/${this.props.match.params.id}`, {
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
    const postID = this.props.match.params.id;

    const postTags = this.state.tags; // all tags for this post
    const tagposts = this.props.tags[tagID].posts || []; // all posts for this tag

    if (isChecked) {
      postTags.push(tagID);
      tagposts.push(postID);
      // add this tag to the current post's tags array
      this.props.firebase.update(`posts/${postID}`, {
        tags: postTags,
      }).then(result => {
        // add this post to the current Tag's post array
        this.props.firebase.update(`tags/${tagID}`, {
          posts: tagposts,
        }).catch(error => {
          console.log(error);
          alert("The tag could not be updated");
        });
      }).catch(error => {
        console.log(error);
        alert("The tag could not be updated");
      });

    } else {
      postTags.splice(postTags.indexOf(tagID), 1);
      tagposts.splice(tagposts.indexOf(postID), 1);
      // remove this tag from the current post's tag array
      this.props.firebase.update(`posts/${postID}`, {
        tags: postTags,
      }).then(result => {
        // remove this post from the current Tag's post array
        this.props.firebase.update(`tags/${tagID}`, {
          posts: tagposts,
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
    return this.props.firebase.update(`posts/${this.props.match.params.id}`, {
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
    this.props.firebase.update(`posts/${this.props.match.params.id}`, {
      images: images
    }).then(result => {
      alert("Image removed successfully");
    }).catch(error => {
      console.log(error);
    });
  }

  deletepost = post => (event) => {

    // delete post after confirmation
    const confirmation = window.confirm("Are you sure? This is permanent. You can always unpublish the post.");

    const resourceID = this.props.match.params.id;
    const images = this.state.images;
    const postTags = this.state.tags;
    const allTags = this.props.tags;

    if (confirmation) {
      this.props.firebase.remove(`posts/${resourceID}`)
        .then(result => {
          // Remove the images from Firebase Storage
          if (images && images.length) {
            images.forEach(img => {
              return this.props.firebase.deleteFile(img.fullPath);
            });
          }
          // Unbind all the relationships to this Post in Tags (but not the tags themselves)
          if (postTags && postTags.length) {
            postTags.forEach(tag => {
              // remove postID from allTags[tag].posts
              allTags[tag].posts.splice(allTags[tag].posts.indexOf(resourceID, 1));
              this.props.firebase.update(`tags/${tag}`, {
                posts: allTags[tag].posts
              }).catch(error => {
                console.log(error);
              });
            });
          }
        })
        .then(() => {
          alert("post deleted");
          this.props.history.push("/admin/dashboard/posts");
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

  render() {
    const { post, tags } = this.props;
    const { name, snippet, content, isFeatured, isPublished, images, newTag } = this.state;
    const existingTags = this.state.tags;

    if (!post) {
      return null;
    }

    return (
      <div className="post-editor">
        <h2>Edit post</h2>
        <button onClick={this.deletepost()}>Delete post</button>
        { post
          ? <form onSubmit={this.updateResource}>
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
      { path: `posts/${props.match.params.id}` },
      'tags'
    ]
  }),
  connect(({ firebase }, props) => ({
    post: getVal(firebase, `data/posts/${props.match.params.id}`),
    tags: firebase.data.tags
  }))
)

export default enhance(PostEditor);
