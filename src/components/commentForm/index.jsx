import "./style.css"

const CommentForm = (props) => {

    const { onAddComment, onFieldChanged, form } = props;

    return (
        <div>
            <form className="comment-form" onSubmit={onAddComment}>
                <h2>Add a comment</h2>
                <div>
                    <input onChange={onFieldChanged} value={form.name} type="text" name="name" placeholder="Your name" required="required" />
                </div>
                <div>
                    <input onChange={onFieldChanged} value={form.email} type="email" name="email" placeholder="Your email" required="required" />
                </div>
                <div>
                    <textarea onChange={onFieldChanged} value={form.message} name="message" rows="4" placeholder="Your message" required="required" />
                </div>
                <button type="submit">Add a comment</button>
            </form>
        </div>
    )
}

export default CommentForm