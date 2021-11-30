import userPosts from '../JasonData/posts.json';

const Posts = () => (
  <>
    {userPosts.map(({ title, body }) => (
      <div key={Math.random()}>
        <h2>{title}</h2>
        <p>
          {body}
        </p>
      </div>
    ))}
  </>
);

export default Posts;
