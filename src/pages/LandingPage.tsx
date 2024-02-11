import React, { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import { PostDetailPage } from './PostDetailPage';
import NewPostForm from './NewPostPage'; // Import the NewPostForm component


export const LandingPage = () => {
  const [posts, setPosts] = useState([]);
  const [showPostDetail, setShowPostDetail] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [showCreatePostForm, setShowCreatePostForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const navigateToPostDetail = (postId) => {
    setSelectedPostId(postId);
    setShowPostDetail(true);
  };

  const navigateBackToLanding = () => {
    setShowPostDetail(false);
    setShowCreatePostForm(false); // Hide the create post form if visible
  };

  const handleCreatePost = (postData) => {
    // Logic to create a new post
    console.log('New post data:', postData);
    // For demonstration purposes, let's just add the new post to the list
    setPosts(prevPosts => [...prevPosts, { id: prevPosts.length + 1, ...postData }]);
    // Hide the create post form after submission
    setShowCreatePostForm(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      {showPostDetail ? (
        <PostDetailPage postId={selectedPostId} navigateBackToLanding={navigateBackToLanding} />
      ) : (
        <div>
          <h1 style={{ marginBottom: '20px', textAlign:'center', width:'100vw',margin:'auto'}}>Posts</h1>
          {showCreatePostForm ? (
            <NewPostForm onSubmit={handleCreatePost} onCancel={() => setShowCreatePostForm(false)} />
          ) : (
            <div>
              <PostList posts={posts} onViewComments={navigateToPostDetail} />
              <button onClick={() => setShowCreatePostForm(true)} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>Create New Post</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// export default LandingPage;
