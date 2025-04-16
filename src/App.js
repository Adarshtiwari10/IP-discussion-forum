import React from 'react';
import Forum from './components/Forum';

function App() {
  return (
    <div className="App">
      <header style={{ 
        backgroundColor: '#282c34', 
        padding: '20px', 
        color: 'white', 
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h1>Discussion Forum</h1>
      </header>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <Forum />
      </main>
      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        marginTop: '50px', 
        borderTop: '1px solid #eee',
        color: '#666'
      }}>
        © 2025 Discussion Forum
      </footer>
    </div>
  );
}

export default App;