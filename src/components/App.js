import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog.js"; // assuming default export

function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <About
        image="https://example.com/logo.png"
        about="Welcome to my blog on cool topics!"
      />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App