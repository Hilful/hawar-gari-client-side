import React, { useEffect, useState } from "react";
import "./Blog.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://blooming-ocean-85691.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="blog_bg">
        <h1 className=" fw-bold contactTitle">NEWS</h1>
      </div>
      <div className="width">
        <div className="blog-bg"></div>
        {/* blogs details stars here */}
        <div className="row container  mx-auto mt-5">
          <div className="col-lg-10">
            {blogs.map((blog) => (
              <Fade bottom key={blog._id}>
                <div className="card mb-5">
                  <div className="img-hover-zoom image">
                    <img
                      className="card-img-top"
                      src={blog.img}
                      alt="Card cap"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p>
                      {blog.name} {blog.blog} {blog.comment}
                    </p>
                    <p className="card-text">{blog.desc}</p>
                    <Link to="/blog" className="btn btn-outline-dark">
                      Read More
                    </Link>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
