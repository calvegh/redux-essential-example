import React from "react";
import { Link, useParams } from "react-router-dom";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionsButtons } from "./ReactionsButtons";
import { Spinner } from "../../components/Spinner";
import { useGetPostQuery } from "../api/apiSlice";

export const SinglePostPage = () => {
  const { postId } = useParams();
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  let content;
  if (isFetching) {
    content = <Spinner text="Loading" />;
  } else if (isSuccess) {
    content = (
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
    );
  } else {
    content = <h2>Post not found!</h2>;
  }
  return <section>{content}</section>;
};
