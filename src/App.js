import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { PostsList } from "./features/posts/postsList";
import "./App.css";
import { AddPostForm } from "./features/posts/AddPostForm";
import { SinglePostPage } from "./features/posts/SinglePostPage";
import { EditPostForm } from "./features/posts/EditPostForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PostsList />
                <AddPostForm />
              </>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
