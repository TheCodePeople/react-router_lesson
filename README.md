# React Router Hooks Lesson

in this lesson we're going to create a page that displays a list of posts and allows you to view individual post details. We'll cover the `useNavigate` and `useParams` hooks.

## Components

- **`NotFound`** Component

  We added a Return button to the `NotFound` component, the button will redirect the user to the home
  page.

  In this case, instead of using the `<Link/>` component to navigate the user to a given path,
  We use the `useNavigate` hook inside a function that handles the onClick event of the button.

  ```jsx
  import { useNavigate } from "react-router-dom";

  const NotFound = () => {
    const navigate = useNavigate();

    const handleReturnButton = () => {
      navigate("/");
    };

    return (
      <div>
        <h1>Not Found</h1>
        <p>Page is not found!</p>
        <button onClick={handleReturnButton}>Return</button>
      </div>
    );
  };

  export default NotFound;
  ```

- **`Posts`** Component

  We create a `Posts` component that displays a list of posts. It uses the `<Link />` component from react-router-dom to link to individual post details.

  We import the posts data from the `data.js` file, so that we can loop over them and display them.

  When We click on the `<Link />` component, we navigate the user to the post details page (`<PostDetails />`), with the id of the post.

  For example:
  `localhost:3000/posts/1`

  ```jsx
  import { Link } from "react-router-dom";

  import { posts } from "../data";

  const Posts = () => {
    return (
      <div className="posts-container">
        {data.map((post) => (
          <ul className="post-item" key={post.id}>
            <li className="post-item">
              <Link key={post.id} to={`/posts/${post.id}`}>
                {post.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    );
  };

  export default Posts;
  ```

- **`PostDetails`** Component

  The `PostDetails` component displays individual post details. It uses the `useParams` hook to retrieve the `id` parameter from the URL and fetches the corresponding post data.

  ```jsx
  import { useEffect, useState } from "react";
  import { useParams } from "react-router-dom";

  import { posts } from "../data";

  const PostDetails = () => {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {
      const result = posts.find((post) => post.id === parseInt(id));

      setPostInfo(result);
    }, [id]);

    if (!postInfo) {
      return;
    }

    return (
      <div>
        <h3>{postInfo.name}</h3>
        <p>{postInfo.content}</p>
      </div>
    );
  };

  export default PostDetails;
  ```

  Using the `useParams` hook, we retrieve the `id` of the post, Then We use the `useEffect` hook to find the post based on the `id`.

  We also check if the `postData` is null or undefined, and if so, we return without rendering anything, to avoid crashing the application.

- `App` Component

  We include the `Posts` & `PostDetails` to our routes.

  ```jsx
  <Routes>
    {/*  .... Other routes */}
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<PostDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  ```

  - `/posts` path displays the list of posts using the Posts component.
  - `/posts/:id` path displays individual post details using the `PostDetails` component, where `id` is the dynamic parameter.

- `Navbar` Component
  Add the Posts link to our navbar component

  ```jsx
  const Navbar = () => {
    return (
      <nav>
        <ul>
          {/* ... */}

          <li>
            <Link to="/posts">Posts</Link>
          </li>

          {/* ... */}
        </ul>
      </nav>
    );
  };
  ```

## Usage

1. Start your React application.
2. Navigate to `/posts` to see the list of posts.
3. Click on a post to view its details at `/posts/:id`.
4. Access a non-existing route to see the `NotFound` component.
