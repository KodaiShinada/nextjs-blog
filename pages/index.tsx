import Head from "next/head"
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kodai Shinada's Blog</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/tangerine_1f34a.png"
        />
      </Head>
      <main>Hello! My name is Kodai.</main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
