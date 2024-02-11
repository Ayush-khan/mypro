import React from 'react';
import Card from './Card';

interface PostListProps {
  posts: { id: number; title: string; body: string }[];
  onViewComments: (postId: number) => void;
}

export const PostList: React.FC<PostListProps> = ({ posts, onViewComments }) => {
  const renderPosts = () => {
    const rows: JSX.Element[] = [];
    let row: JSX.Element[] = [];

    posts.forEach((post, index) => {
      row.push(
        <div key={post.id} style={{ flex: '1 0 30%', margin: '10px',boxShadow:'  0px 0px 17px 0px black ;' }}>
          <Card title={post.title} body={`User ID: ${post.userId} - ${post.body}`} onClick={() => onViewComments(post.id)} />
        </div>
      );

      if ((index + 1) % 3 === 0 || index === posts.length - 1) {
        rows.push(<div key={index} style={{ display: 'flex' }}>{row}</div>);
        row = [];
      }
    });

    return rows;
  };

  return (
    <div>
      {renderPosts()}
    </div>
  );
};

// export default PostList;
