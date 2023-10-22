import { Link } from "react-router-dom";

const ArticlesList = ({articles}) => {
    return (
        <>
            {articles.map((article) => (
        <Link
          className='w-1/2 border-b-4 border-b-slate-800'
          key={article.name}
          to={`/articles/${article.name}`}
        >
          <h3 className='text-left py-4 text-lg font-bold'>{article.title}</h3>
          <p className='text-left pb-4'>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
        </>
    )
}

export default ArticlesList;