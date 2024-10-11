import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://dummyjson.com/products/' + id);
  return (
    <div className="blog-details">
      <div className="container">
        <h2 className="my-5">Blog Details with Id : { id }</h2>
        {error && <div className="alert alert-danger text-center">{ error }</div>}
        {isPending && <div className="my-5"><h3>Loading...</h3></div>}
        {blog && (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={ blog.thumbnail } className="w-100 h-100 rounded-start" alt={ blog.title } />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start">
                  <h5 className="card-title">{ blog.title }</h5>
                  <p className="card-text">{ blog.description }</p>
                  <p className="card-text mb-0"><small className="text-muted">Price : { blog.price }</small></p>
                  <p className="card-text mb-0"><small className="text-muted">brand : { blog.brand }</small></p>
                  <p className="card-text"><small className="text-muted">Category : { blog.category }</small></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDetails;