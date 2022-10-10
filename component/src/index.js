import './style/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from "@faker-js/faker";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>you sure?</ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Sam"
            timeAgo="Today at 4:45PM"
            content="Nice blog post" 
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timeAgo="Today at 4:00PM"
            content="Very informative"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Jane"
            timeAgo="Today at 5:00AM"
            content="This is great. Thank you."
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root')); 