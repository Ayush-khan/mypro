import React, { useEffect, useState } from 'react';

interface PostDetailPageProps {
  postId: number;
  navigateBackToLanding: () => void;
}

export const PostDetailPage: React.FC<PostDetailPageProps> = ({ postId, navigateBackToLanding }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the selected post using the postId
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error));
  }, [postId]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px',textAlign:'center',color:'rgb(49, 58, 59);'}}>Post Detail Page</h1>
      <h2 style={{ marginBottom: '10px',fontSize:'1.7em', textAlign:'center',color:'rgb(49, 58, 59);'}}>Comments</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {comments.map((comment, index) => (
          <div key={index} style={{ width: '30%', margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3 style={{textTransform:'capitalize',textAlign:'center',fontSize:'1.3em'}}>{comment.name}</h3>
            <p style={{fontWeight:'400'}}><strong style={{fontWeight:'700',fontSize:'1.2em'}}>Email:</strong> {comment.email}</p>
            <p style={{textAlign:'start',textTransform:'capitalize'}}>{comment.body}</p>
          </div>
        ))}
      </div>
      <button onClick={navigateBackToLanding} style={{ marginTop: '20px', fontSize: '1rem', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Back to Landing</button>
    </div>
  );
};
