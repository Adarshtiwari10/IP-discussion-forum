import React, { useState } from 'react';
import Reply from './Reply';

function Topic({ topic, onAddReply }) {
  const [replyContent, setReplyContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim() && author.trim()) {
      onAddReply(topic.id, {
        author,
        content: replyContent
      });
      setReplyContent('');
      setAuthor('');
    }
  };

  return (
    <div>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }}>
        <h2>{topic.title}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#888', marginBottom: '15px' }}>
          <span>Posted by: {topic.author}</span>
          <span>{topic.date}</span>
        </div>
        <p style={{ whiteSpace: 'pre-wrap' }}>{topic.content}</p>
      </div>

      <h3>Replies ({topic.replies.length})</h3>
      {topic.replies.map(reply => (
        <Reply key={reply.id} reply={reply} />
      ))}

      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '20px'
      }}>
        <h3>Post a Reply</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="author" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Your Name:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="content" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Your Reply:</label>
            <textarea
              id="content"
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              rows="4"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
              required
            />
          </div>
          <button 
            type="submit"
            style={{
              padding: '10px 15px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Post Reply
          </button>
        </form>
      </div>
    </div>
  );
}

export default Topic;