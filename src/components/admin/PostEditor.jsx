import React, { Component } from 'react';
import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Uploader from '../Uploader';

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
        imageID: nextProps.post.imageID
      })
    }
  }

  updateArticle() {
    const { name, snippet, content, isPublished, isFeatured } = this.state;
    this.props.firebase.update(`posts/${this.props.match.params.id}`, {
      name,
      snippet,
      content,
      isPublished,
      isFeatured
    }).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
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

  addImage = (path, id) => {
    this.props.firebase.update(`posts/${this.props.match.params.id}`, {
      imagePath: path,
      imageID: id
    }).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { post } = this.props;
    const { name, snippet, content, isFeatured, isPublished, imagePath, imageID } = this.state;
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
      { path: `posts/${props.match.params.id}` }
    ]
  }),
  connect(({ firebase }, props) => ({
    post: getVal(firebase, `data/posts/${props.match.params.id}`)
  }))
)

export default enhance(PostEditor);
