import React from 'react';

const CommentsPage = ({ postId, comments, navigateBackToLanding }) => {
  return (
    <div className="comments-page" style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px',background:'red' }}>Comments for Post {postId}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {comments.map(comment => (
          <div key={comment.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px',background:'black' }}>
            <h3>{comment.name}</h3>
            <p><strong>Email:</strong> {comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
      <button onClick={navigateBackToLanding} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', backgroundColor: 'green', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Back to Landing</button>
    </div>
  );
};

export default CommentsPage;
