import React, { Component } from 'react';
import { firebaseConnect, getVal } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

class PostEditor extends Component {
  constructor(props) {
    super(props)
    const post = this.props.post;

    this.state = {
      name: "",
      snippet: "",
      content: "",
      isPublished: false,
      isFeatured: false
    }

    this.updateArticle = this.updateArticle.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (!this.props.post && nextProps.post) {
      // Post was passed in successfully
      debugger;
      this.setState({
        name: nextProps.post.name,
        snippet: nextProps.post.snippet,
        content: nextProps.post.content,
        isPublished: nextProps.post.isPublished,
        isFeatured: nextProps.post.isFeatured
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

  render() {
    if (!this.props.post) {
      return null;
    }

    return (
      <div className="post-editor">
        <h2>Edit Article</h2>
        { this.props.post
          ? <form onSubmit={this.updateArticle}>

              <label htmlFor="name">Name</label>
              <input name="name" type="text" value={this.state.name} onChange={this.inputChange('name')} />
              <br />
              <label htmlFor="snippet">Snippet (short list description)</label>
              <input name="snippet" type="text" value={this.state.snippet} onChange={this.inputChange('snippet')} />
              <p>{this.state.snippet}</p>
              <label htmlFor="content">Content</label>
              <textarea name="content" value={this.state.content} onChange={this.inputChange('content')} />
              <br />
              <label htmlFor="isFeatured">Featured</label>
              <input name="isFeatured" type="checkbox" value={this.state.isFeatured} onChange={this.checkboxChange('isFeatured')} />
              <br />
              <label htmlFor="isPublished">Published</label>
              <input name="isPublished" type="checkbox" value={this.state.isPublished} onChange={this.checkboxChange('isPublished')} />
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
