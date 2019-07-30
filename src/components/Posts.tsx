import React from 'react';
import  { FirebaseContext } from './Firebase';

const Posts: React.FC = () => {

  return (
    <FirebaseContext.Consumer>
      {(firebase:any) => {
        return (
          <div className="posts">
            <h2>Some shit JJ wrote</h2>
            <p>lorem ipsum</p>
          </div>
        )
      }}
    </FirebaseContext.Consumer>
  );
}

export default Posts;
