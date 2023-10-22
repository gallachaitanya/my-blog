const CommentsList = ({comments}) => (
    <div>
        <h3 className="font-bold text-left my-4 border-t-2 border-slate-800 py-2">Comments:</h3>
        {comments.map(comment => (
            <div className="my-4" key={comment.postedBy + ":" + comment.text}>
                <h4 className="text-left font-semibold">{comment.postedBy}</h4>
                <p className="text-left font-thin">{comment.text}</p>
            </div>
        ))}
    </div>
)

export default CommentsList;