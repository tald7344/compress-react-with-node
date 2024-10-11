import { useState } from "react";
import { useHistory } from 'react-router-dom';

const NewBlog = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Talal');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const submitHandle = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {title, body, author};
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog)
    }).then(res => {
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="new-blog">
      <div className="container">
        <h2 className="mt-5">Create New Blog</h2>
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <label className="form-label">Blog Title</label>
            <input 
                type="text" 
                className="form-control" 
                id="title" 
                placeholder="Type Blog Title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Blog Body</label>
            <textarea 
                className="form-control" 
                id="body" 
                placeholder="Type Blog Body" 
                value={body}
                onChange={(e) => setBody(e.target.value)}>
            </textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Blog Author</label>
            <select 
              className="form-select" 
              aria-label="select author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}>
              <option value="talal">Talal</option>
              <option value="yara">Yara</option>
            </select>
          </div>
          {!isPending && <button className="btn btn-primary">Add Blog</button>}
          {isPending && <button className="btn btn-primary disabled">Adding...</button>}
        </form>
      </div>
    </div>
  );
}

export default NewBlog;