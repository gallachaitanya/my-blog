import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import axios from "axios";
import articles from "./article-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import NotFoundPage from "./NotFoundPage";

const ArticlePage = () => {
  const [articleInfo, setArticalInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
  const {canUpvote} = articleInfo
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  const { user, loading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken()
      const headers = token ? {authtoken : token} : {}
      const response = await axios.get(`/api/articles/${articleId}`,{
        headers
      });
      setArticalInfo(response.data);
    };

    if (!loading){
    loadArticleInfo();
    }
    
  }, [user,loading,articleId]);

  const addUpVote = async () => {
    const token = user && await user.getIdToken()
    const headers = token ? {authtoken : token} : {}
    const response = await axios.put(`/api/articles/${articleId}/upvote`,null,{headers});
    const updatedInfo = response.data;
    setArticalInfo(updatedInfo);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className='grid grid-cols-3'>
      <div className='col-start-2'>
        <h1 className='text-2xl font-bold pb-4'>{article.title}</h1>
        <div className='flex mb-2'>
          {user ? (
            <button
              className='text-white font-bold bg-slate-700 hover:bg-slate-950 px-2 py-2 rounded-md mr-2 '
              onClick={addUpVote}
            >
            {canUpvote ? 'Upvote' : 'Already Upvoted'}
            </button>
          ) : (
            <button className='text-white font-bold bg-slate-700 hover:bg-slate-950 px-2 py-2 rounded-md mr-2 '>Login to Upvote</button>
          )}
          <p>This article has {articleInfo.upvotes} upvote(s)</p>
        </div>
        {article.content.map((paragraph, i) => (
          <p key={i} className='text-justify mb-4'>
            {paragraph}
          </p>
        ))}
        {user ? 
        <AddCommentForm
          articleName={articleId}
          onArticleUpdate={(updatedArticle) => setArticalInfo(updatedArticle)}
        /> :
        <button className='text-white font-bold bg-slate-700 hover:bg-slate-950 px-2 py-2 rounded-md mr-2 '>Login to Comment</button>
        }
        <CommentsList comments={articleInfo.comments} />
      </div>
    </div>
  );
};

export default ArticlePage;
