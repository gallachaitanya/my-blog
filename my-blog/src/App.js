import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticleListPage';
import CreateAccountPage from './pages/CreateAccountPage';
import LoginPage from './pages/LoginPage';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div className='py-5'>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/articles' element={<ArticlesListPage/>} />
          <Route path='/articles/:articleId' element={<ArticlePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/create-account' element={<CreateAccountPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
