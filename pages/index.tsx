
import Markdown from "react-markdown";
import Head from "next/head";


import { useEffect } from "react";

const Header = () => (
  <header>
    <div className="intro">
      <div className="profile"></div>
      <div className="name">広木 大地 ( Daichi Hiroki )</div>
      <div className="job">Software Engineer / Engineering Manager / Organization Architect</div>
    </div>
  </header>
)


const codecopy = require("codecopy");

const Content = ({  markdown }:any) => {
  useEffect(() => {
    console.log("helloworld");
    codecopy("pre")
  });
  return (
    <div>
      <main>
        <section>
          <Markdown source={markdown} />
        </section>
      </main>
    </div>
  )
}


const IndexPage = ({ content} :any) => {

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/codecopy/umd/codecopy.min.css"></link>
      </Head>
      <Header />
      <Content markdown={content}/>
    </>
  );

}
import fs from 'fs';

const fsp = fs.promises;

export const getStaticProps = async() => { 
  const content = String(await fsp.readFile("./data/_index.md"));
  return {
    props: { content }
  }
}
export default IndexPage
