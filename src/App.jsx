import  { useState } from 'react';
import {LandingPage} from './pages/LandingPage';
import {PostDetailPage} from './pages/PostDetailPage';
import NewPostPage from './pages/NewPostPage';

function App() {
  const [page, setPage] = useState('landing'); // Manage the page state

  const navigateToPostDetail = (postId) => {
    setPage('postDetail');
    // Additional logic to pass postId to PostDetailPage if needed
  };

  const navigateToNewPost = () => {
    setPage('newPost');
  };

  const navigateBackToLanding = () => {
    setPage('landing');
  };

  const handleSubmit = (postData) => {
    // Add logic to handle form submission
    console.log('Submitted post data:', postData);
    // For example, you can navigate back to the landing page after submission
    navigateBackToLanding();
  };

  return (
    <div className="App">
      {page === 'landing' && (
        <LandingPage
          navigateToPostDetail={navigateToPostDetail}
          navigateToNewPost={navigateToNewPost}
        />
      )}
      {page === 'postDetail' && (
        <PostDetailPage navigateBackToLanding={navigateBackToLanding} />
      )}
      {page === 'newPost' && (
        <NewPostPage onSubmit={handleSubmit} navigateBackToLanding={navigateBackToLanding} />
      )}
    </div>
  );
}

export default App;
