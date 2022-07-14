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
    ],
    form: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComment = (event) => {
    event.preventDefault();

    const newComment = {...this.state.form, date: new Date()}

    this.setState({
      comments: [...this.state.comments, newComment],
      form: {
        name: '',
        email: '',
        message: ''
      }
    });
  }

  onFieldChanged = (event) => {
    const newCommentForm = this.state.form
    newCommentForm[event.target.name] = event.target.value

    this.setState({
      form: newCommentForm,
    })
  }

  deleteComment = (comment) => {
    const filteredList = this.state.comments.filter((commentFilter) => {
      return comment !== commentFilter
    })
    
    this.setState({
      comments: filteredList
    })
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
              onDeleteComment= { () => {
                this.deleteComment(comment)}
              }
            />
          );
        })}
        <form onSubmit={this.addComment}>
          <h2>Add a comment</h2>
          <div>
            <input onChange={this.onFieldChanged} value={this.state.form.name} type="text" name="name" placeholder="Your name" required="required" />
          </div>
          <div>
            <input onChange={this.onFieldChanged} value={this.state.form.email} type="email" name="email" placeholder="Your email" required="required" />
          </div>
          <div>
            <textarea onChange={this.onFieldChanged} value={this.state.form.message} name="message" rows="4" placeholder="Your message" required="required" />
          </div>
          <button type="submit">Add a comment</button>
        </form>
      </div>
    );
  }
}

export default App;
