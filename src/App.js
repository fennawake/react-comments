import React from 'react';
import './App.css';
import Comment from './components/Comment';

class App extends React.Component {

  state = {
    comments: [
      {
        name: "Fernando Souza",
        email: "fenna.wake@gmail.com",
        message: "First comment component with props, class and state",
        date: new Date()
      },
      {
        name: "John Mayer",
        email: "johnmayer@gmail.com",
        message: "This is other component with props, class and state",
        date: new Date()
      }
    ]
  }

  addComment = () => {
    const newComment = {
      name: "Susan boyle",
      email: "susan@gmail.com",
      message: "This component was created when the button clicked!",
      date: new Date()
    };

    this.setState({
      comments: [...this.state.comments, newComment]
    });

    console.log("Access addComment method!");
  }

  render(){
    return (
      <div className="App">
        <h1>My Comments App!</h1>
        {this.state.comments.map((comment, index)=>{
          return(
            <Comment 
              key= {index}
              name= {comment.name} 
              email= {comment.email} 
              message= {comment.message}
              date= {comment.date} 
            />
          );
        })}
        <button onClick={this.addComment}>Adicionar comentario</button>
      </div>
    );
  }
}

export default App;
