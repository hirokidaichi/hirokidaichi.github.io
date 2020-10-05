
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
    codecopy("pre")
  });
  return (
    <section>
      <Markdown source={markdown} />
    </section>
  )
}

const ArticleList = ({ mediaTitle,data }:any) => {
  const list = data.map((e:any) => { 
    return (<li><a href={e.url}>{e.title}</a></li>)
  });
  return (
    <section>
      <h1> {mediaTitle} </h1>
      <ul>{list}</ul>
    </section>
  )
}

const IndexPage = ({ content,qiitaList,noteList} :any) => {

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/codecopy/umd/codecopy.min.css"></link>

      </Head>
      <Header />
      <div>
        <main>
          <Content markdown={content} />
          <ArticleList mediaTitle="Qiitaの記事一覧" data={qiitaList} />
          <ArticleList mediaTitle="noteの記事一覧" data={noteList} />
        </main>
      </div>
    </>
  );

}
import fs from 'fs';

const fsp = fs.promises;

const getQiitaArticles = async () => {
  const data = await (await fetch("https://qiita.com/api/v2/users/hirokidaichi/items?per_page=100")).json();
  return data.map((e:any) => ({ title: e.title, url: e.url }));
};

const getNoteArticles = async () => {
  const json = await (await fetch("https://note.com/api/v2/creators/hirokidaichi/contents?kind=note&page=1")).json();
  const contents = json.data.contents;

  return contents.map((e:any) => (
    { title: e.name, url: `https://note.com/hirokidaichi/${e.key}` }
  ));
};

const getMarkdown = async () => {
  return String(await fsp.readFile("./data/_index.md"));
};

export const getStaticProps = async () => { 
  const content = await getMarkdown();
  const qiitaList = await getQiitaArticles();
  const noteList = await getNoteArticles();

  return {
    props: { content,qiitaList ,noteList}
  }
}
export default IndexPage
