import React from 'react';
import './App.css';
import Comment from './components/Comment/';
import CommentForm from './components/commentForm';
import Swal from 'sweetalert2';

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

    Swal.fire('Comment added with success!', '', 'success')
  }

  onFieldChanged = (event) => {
    const newCommentForm = this.state.form
    newCommentForm[event.target.name] = event.target.value

    this.setState({
      form: newCommentForm,
    })
  }

  deleteCommentAlert = (comment) => {
    Swal.fire({
      title: 'Do you want delete the comment?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      icon: 'question'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteComment(comment)
        Swal.fire('Deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Comment are not deleted', '', 'info')
      }
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
                this.deleteCommentAlert(comment)}
              }
            />
          );
        })}
        <CommentForm 
          onFieldChanged={this.onFieldChanged} 
          onAddComment={this.addComment} 
          form={this.state.form} 
        />
      </div>
    );
  }
}

export default App;
