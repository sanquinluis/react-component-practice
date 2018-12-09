import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className = "ui container comments">
			<ApprovalCard>
				<CommentDetail 
				author='Lui' 
				timeAgo='Today at 3:40am' 
				comment='Nice Dude'
				avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				author='Papo' 
				timeAgo='Today at 4:30pm' 
				comment='Thats Crazy'
				avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				author='Hector' 
				timeAgo='Yesterday at 12:00pm' 
				comment='You rock!'
				avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
		</div>
	);
};




ReactDOM.render(<App />, document.querySelector('#root'));