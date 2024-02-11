import React, { useState } from 'react';

interface NewPostFormProps {
  onSubmit: (postData: { id: number; title: string; body: string; email: string }) => void;
  onCancel: () => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Generate a unique id for the post
    const postId = generateUniqueId();

    // Submit the form data
    onSubmit({ id: postId, title, body, email });
    // Clear form fields
    setTitle('');
    setBody('');
    setEmail('');
    setError('');
  };

  // Function to generate a unique id
  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="title" style={{ marginBottom: '5px', display: 'block' }}>Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="body" style={{ marginBottom: '5px', display: 'block' }}>Body:</label>
        <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%', minHeight: '100px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={{ marginBottom: '5px', display: 'block' }}>Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }} />
        {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
      </div>
      <div style={{ textAlign: 'center' }}>
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', marginRight: '10px', cursor: 'pointer' }}>Submit</button>
        <button type="button" onClick={onCancel} style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#dc3545', color: '#fff', cursor: 'pointer' }}>Cancel</button>
      </div>
    </form>
  );
};

export default NewPostForm;
