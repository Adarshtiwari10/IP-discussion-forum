import React, { useState } from 'react';
import TopicList from './TopicList';
import Topic from './Topic';
import CreateTopic from './CreateTopic';
import { initialTopics } from '../data';

function Forum() {
  const [topics, setTopics] = useState(initialTopics);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showCreateTopic, setShowCreateTopic] = useState(false);

  const handleTopicSelect = (topicId) => {
    const topic = topics.find(t => t.id === topicId);
    setSelectedTopic(topic);
    setShowCreateTopic(false);
  };

  const handleBackToList = () => {
    setSelectedTopic(null);
    setShowCreateTopic(false);
  };

  const handleCreateTopicClick = () => {
    setSelectedTopic(null);
    setShowCreateTopic(true);
  };

  const addTopic = (newTopic) => {
    const topic = {
      ...newTopic,
      id: topics.length + 1,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      replies: []
    };
    setTopics([...topics, topic]);
    setShowCreateTopic(false);
    setSelectedTopic(topic);
  };

  const addReply = (topicId, reply) => {
    const updatedTopics = topics.map(topic => {
      if (topic.id === topicId) {
        return {
          ...topic,
          replies: [
            ...topic.replies,
            {
              id: topic.replies.length + 1,
              ...reply,
              date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }
          ]
        };
      }
      return topic;
    });
    
    setTopics(updatedTopics);
    setSelectedTopic(updatedTopics.find(t => t.id === topicId));
  };

  return (
    <div>
      {!selectedTopic && !showCreateTopic ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Discussion Topics</h2>
            <button 
              onClick={handleCreateTopicClick}
              style={{
                padding: '10px 15px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Create New Topic
            </button>
          </div>
          <TopicList topics={topics} onTopicSelect={handleTopicSelect} />
        </>
      ) : showCreateTopic ? (
        <>
          <button 
            onClick={handleBackToList}
            style={{
              padding: '8px 12px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer'
            }}
          >
            ← Back to Topics
          </button>
          <CreateTopic onCreateTopic={addTopic} />
        </>
      ) : (
        <>
          <button 
            onClick={handleBackToList}
            style={{
              padding: '8px 12px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer'
            }}
          >
            ← Back to Topics
          </button>
          <Topic topic={selectedTopic} onAddReply={addReply} />
        </>
      )}
    </div>
  );
}

export default Forum;