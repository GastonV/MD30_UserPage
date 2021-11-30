import { Link, useParams } from 'react-router-dom';
import userPosts from '../JasonData/posts.json';
import PageNotFound from './PageNotFound';

const PostFilter = () => {
  const { id } = useParams<'id'>();
  const userWrittenPosts = userPosts.filter((post) => post.userId === +id!);
  if (userWrittenPosts.length < 1) {
    return <PageNotFound />;
  }
  return (
    <>
      <h1> Filtered Posts By User</h1>
      <Link to="/users">
        <button>Back</button>
      </Link>
      {
        userWrittenPosts.map(({ body, title }) => (
          <div key={Math.random()}>
            <h4>{title}</h4>
            <p>{body}</p>
          </div>
        ))
      }
    </>
  );
};
export default PostFilter;
