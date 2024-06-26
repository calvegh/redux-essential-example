import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionsButtons } from "./ReactionsButtons";
import { selectPostById } from "./postsSlice";

export const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector(state => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
        <ReactionsButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Editar Post
        </Link>
      </article>
    </section>
  );
};
