import React from 'react';


const CommentDetail = (props) => {
	return (
		<div className = "commment">
			<a href='/' className = "avatar">
				<img alt= 'avatar' src={props.avatar}/>
			</a>
			<div>
				<a href = '/' className ='author'>
					{props.author}
				</a>
				<div className ='metadata'>
					<span className='date'>
							{props.timeAgo}
					</span>
				</div>
				<div className='text'>{props.comment}</div>
			</div>
		</div>

	);
};

export default CommentDetail;
