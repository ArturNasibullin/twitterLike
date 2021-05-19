import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import '../post-list/post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
	const elements = posts.map((item) => {
		return (
			<li key={item.id} className='list-group-item'>
				<PostListItem
					label={item.label}
					important={item.important}
					onDelete={() => onDelete(item.id)}
					onToggleImportant={() => onToggleImportant(item.id)}
					onToggleLike={() => onToggleLike(item.id)}
				/>
			</li>
		);
	});
	return <ul className='app-list list-group'>{elements}</ul>;
};

export default PostList;
