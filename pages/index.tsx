import Link from "next/link";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import ProfileImage from "../components/ProfileImage";

const Home = () => {
  return (
    <Layout title="Home">
      <ProfileImage />
      <Bio />
      <Link href="/blog">
        <a className="text-lg text-blue-500 font-bold text-center block uppercase">
          Blog
        </a>
      </Link>
    </Layout>
  );
};
export default Home;
