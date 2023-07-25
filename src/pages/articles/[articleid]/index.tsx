import React from 'react';
import ArticleContent from '@/components/article/article-content';
import { useRouter } from 'next/router';
import { getArticleData, getAllArticles } from '@/utils/articles-util';
import { serialize } from 'next-mdx-remote/serialize';
import PageLayout from '@/components/page-layout';
import Head from 'next/head';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';
import { remarkMark } from 'remark-mark-highlight';

import 'github-markdown-css/github-markdown.css';

export default function Page(props) {
  const router = useRouter();

  return (
    <div className='w-full py-20'>
      <Head>
        {/* <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css'
          integrity='sha512-Ya9H+OPj8NgcQk34nCrbehaA0atbzGdZCI2uCbqVRELgnlrh8vQ2INMnkadVMSniC54HChLIh5htabVuKJww8g=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        /> */}
      </Head>
      <ArticleContent {...props}></ArticleContent>
    </div>
  );
}

// 通过query获取md文档内容传入
export async function getStaticProps(context) {
  const { params } = context;
  // MDX text - can be from a local file, database, anywhere
  const mdData = await getArticleData(`${params.articleid}.mdx`);
  if (!mdData) {
    return {
      notFound: true,
    };
  }
  const mdxSource = await serialize(mdData.content, {
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkEmoji, remarkFootnotes, remarkMark],
      rehypePlugins: [rehypeRaw],
      format: 'mdx',
    },
    parseFrontmatter: false,
  });
  console.log('mdxSource------', mdxSource);
  return { props: { ...mdData, source: mdxSource } };
}

export async function getStaticPaths(context) {
  let { allArticles } = await getAllArticles();
  const paths = allArticles.map((item) => {
    return {
      params: {
        articleid: item.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
