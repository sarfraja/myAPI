import './App.css';
import GithubUsers from './Github/GithubUsers';

function App() {
  return (
    <div className="App">
      <GithubUsers title="Title" description="Discriptions" url="https://api.github.com/users" />
    </div>
  );
}

export default App;
