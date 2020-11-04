import { InferGetStaticPropsType } from "next";
import styles from "../styles/Blog.module.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="p-8 container mx-auto">
      <h2 className={styles.heading}>Blogs</h2>
      <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-4">
        {posts.map(({ id, title, body }) => (
          <div key={id} className={styles.blog_wrapper}>
            <h3 className={styles.blog_title}>{title}</h3>
            <p className={styles.blog_text}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};
