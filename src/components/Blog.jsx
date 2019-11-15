import React from 'react';
import Layout from './Layout';

const Blog = props => {
  const { match } = props;
  const category = match.params.category;
  return (
    <Layout>
      <div className="blog">
        <h2>Blog</h2>
        <h4>{category}</h4>
      </div>
    </Layout>
  );
}

export default Blog;