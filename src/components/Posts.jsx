import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import './Posts.css';
import { fetchPost } from '../actions';
import withAuth from '../hoc/withAuth';

const Posts = props => {
    const { match, posts, fetchPosts, user, loading } = props;

    useEffect(() => {
        fetchPosts(user.token, match.params.category);
    }, [fetchPosts, user.token, match.params.category]);

    return (
        <Layout>
            <div className="posts">
                <h2>Posts</h2>
                <h4>{match.params.category}</h4>
                {
                    loading ?
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">title</th>
                                    <th scope="col">author</th>
                                    <th scope="col">views</th>
                                    <th scope="col">recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map(post => (
                                        <tr key={post.id}>
                                            <th scope="row">{post.id}</th>
                                            <td><Link to={`/posts/${match.params.category}/${post.id}`}>{post.title}</Link></td>
                                            <td>{post.author}</td>
                                            <td>{post.views}</td>
                                            <td>{post.recommendation}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                }
            </div>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        posts: state.posts,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (token, category) => {
            dispatch(fetchPost(token, category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Posts));