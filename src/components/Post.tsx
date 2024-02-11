import React from 'react';

interface PostProps {
  id: number;
  title: string;
  body: string;
  onViewComments: (postId: number) => void;
}

export const Post: React.FC<PostProps> = ({ id, title, body, onViewComments }) => {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={() => onViewComments(id)}>View Comments</button>
      </div>
    );
  };
  
