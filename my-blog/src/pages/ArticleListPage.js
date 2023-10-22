
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlesListPage = () => {
  return (
    <div className='flex flex-col items-center text-left'>
      <h1 className='text-3xl font-semibold pb-4'>Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ArticlesListPage;
