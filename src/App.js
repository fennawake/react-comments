import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>My Comments App!</h1>
      <Comment 
        name="Fernando Souza" 
        email="fenna.wake@gmail.com" 
        message="First comment component with props" 
        date={new Date()} 
      />
      <Comment 
        name="John Mayer" 
        email="johnmayer@gmail.com" 
        message="This is other component with props" 
        date={new Date()} 
      />
    </div>
  );
}

export default App;
