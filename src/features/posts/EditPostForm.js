import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { postUpdated } from "./postsSlice";
import { selectPostById } from "./postsSlice";

export const EditPostForm = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, postId)
  );

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    }
  };
  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          id="postTitle"
          name="postTitle"
          onChange={onTitleChange}
          placeholder="¿Qué sucede en tu cabeza?"
          type="text"
          value={title}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          onChange={onContentChange}
          value={content}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Guardar post
      </button>
    </section>
  );
};
