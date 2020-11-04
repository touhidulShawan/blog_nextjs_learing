import Head from "next/head";

interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto max-w-2xl">{children}</main>
    </>
  );
};

export default Layout;
