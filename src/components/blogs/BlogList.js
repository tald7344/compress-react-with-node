import { Link } from "react-router-dom";

const Blogs = ({blogs, title}) => {

  return (
    <div className="row">
      <h2 className="mb-3">{ title }</h2>
      {blogs.map((blog) => (
        <div className="col-12 col-sm-10 col-md-8 mx-auto" key={blog.id}>
          <div className="card  mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={ blog.thumbnail } className="w-100 h-100 rounded-start" alt={ blog.title } />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <Link to={`/blog/${blog.id}`}>
                    <h5 className="card-title">{ blog.title }</h5>
                  </Link>
                  <p className="card-text">{ blog.description }</p>
                  <p className="card-text"><small className="text-muted">Price : { blog.price }</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;