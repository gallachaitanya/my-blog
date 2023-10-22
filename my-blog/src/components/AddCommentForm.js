import axios from "axios";
import { useState } from "react";
import useUser from "../hooks/useUser";

const AddCommentForm = ({articleName, onArticleUpdate}) => {
    const [commentText, setCommentText] = useState("")
    const {user} = useUser();

    const addComment = async () => {
        const token = user && await user.getIdToken()
        const headers = token ? {authtoken : token} : {}
        const response = await axios.post(`/api/articles/${articleName}/comments`, {
            postedBy : user.email,
            text : commentText,
        },{headers})
        const updatedArticle = response.data
        onArticleUpdate(updatedArticle)
        setCommentText("")
    }

    return (
        <div>
            <h3 className="font-bold text-left mb-2">
                Add a Comment
            </h3>
            {user && <p className="text-start px-3">Your are posting as {user.email}:</p>}
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" cols="50" value={commentText} onChange={e => setCommentText(e.target.value)} />
            <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-2" type="button" onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;