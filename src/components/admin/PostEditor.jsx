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
      imagePath: null,
      imageID: null,
      tags: [],
      newTag: "",
    }

    this.updateArticle = this.updateArticle.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.post && nextProps.post) {
      // Post was passed in successfully
      this.setState({
        name: nextProps.post.name,
        snippet: nextProps.post.snippet,
        content: nextProps.post.content,
        isPublished: nextProps.post.isPublished,
        isFeatured: nextProps.post.isFeatured,
        imagePath: nextProps.post.imagePath,
        imageID: nextProps.post.imageID,
        tags: nextProps.post.tags || []
      })
    }
  }

  updateArticle(event) {
    event.preventDefault();
    const { name, snippet, content, isPublished, isFeatured } = this.state;
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
    const tagPosts = this.props.tags[tagID].posts || []; // all posts for this tag

    if (isChecked) {
      postTags.push(tagID);
      tagPosts.push(postID);
      // add this tag to the current Post's tags array
      this.props.firebase.update(`posts/${postID}`, {
        tags: postTags,
      }).then(result => {
        // add this post to the current Tag's post array
        this.props.firebase.update(`tags/${tagID}`, {
          posts: tagPosts,
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
      tagPosts.splice(tagPosts.indexOf(postID), 1);
      // remove this tag from the current Post's tag array
      this.props.firebase.update(`posts/${postID}`, {
        tags: postTags,
      }).then(result => {
        // remove this post from the current Tag's post array
        this.props.firebase.update(`tags/${tagID}`, {
          posts: tagPosts,
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

  addImage = (path, id) => {
    console.log('uhh');
    this.props.firebase.update(`posts/${this.props.match.params.id}`, {
      imagePath: path,
      imageID: id
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

  render() {
    const { post, tags } = this.props;
    const { name, snippet, content, isFeatured, isPublished, imagePath, imageID, newTag } = this.state;
    const existingTags = this.state.tags;

    if (!post) {
      return null;
    }

    return (
      <div className="post-editor">
        <h2>Edit Article</h2>
        { post
          ? <form onSubmit={this.updateArticle}>
              <label htmlFor="name">Name</label> <br />
              <input name="name" type="text" value={name} onChange={this.inputChange('name')} />
              <br />
              <label htmlFor="snippet">Snippet (short list description)</label> <br />
              <input name="snippet" type="text" value={snippet} onChange={this.inputChange('snippet')} />
              <br />

              <label>Add/update article image:</label> <br />
              { imagePath
                ? <img src={imagePath} alt={imageID} width="200px" />
                : null
              }
              <Uploader addImage={(path, id) => this.addImage(path, id)}/>

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
