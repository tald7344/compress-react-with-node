import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/global/Navbar';
import Home from './components/Home';
import NewBlog from './components/blogs/NewBlog';
import BlogDetails from './components/blogs/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/blog/create"><NewBlog /></Route>
            <Route path="/blog/:id"><BlogDetails /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
