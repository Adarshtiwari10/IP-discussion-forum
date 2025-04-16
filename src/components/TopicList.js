import React from 'react';

function TopicList({ topics, onTopicSelect }) {
  return (
    <div>
      {topics.map(topic => (
        <div 
          key={topic.id} 
          onClick={() => onTopicSelect(topic.id)}
          style={{
            backgroundColor: 'white',
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease',
            ':hover': {
              transform: 'translateY(-2px)'
            }
          }}
        >
          <h3 style={{ margin: '0 0 10px 0' }}>{topic.title}</h3>
          <p style={{ margin: '0 0 10px 0', color: '#666' }}>
            {topic.content.length > 100 
              ? topic.content.substring(0, 100) + '...'
              : topic.content
            }
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#888' }}>
            <span>Posted by: {topic.author}</span>
            <span>{topic.date}</span>
          </div>
          <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#888' }}>
            {topic.replies.length} {topic.replies.length === 1 ? 'reply' : 'replies'}
          </div>
        </div>
      ))}
      {topics.length === 0 && (
        <p style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
          No topics have been posted yet.
        </p>
      )}
    </div>
  );
}

export default TopicList;