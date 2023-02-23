import './App.css';
import GithubUsers from './Github/GithubUsers';
import About from './Github/pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <a href="/"> Home </a> 
     <a href="/about"> About </a>
      <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<About />} />
      <Route exact path="/about" element={<GithubUsers title="Title" description="Discriptions" url="https://api.github.com/users" />} />
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
