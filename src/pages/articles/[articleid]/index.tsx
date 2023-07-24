import React from 'react';
import ArticleContent from '@/components/article/article-content';
import { useRouter } from 'next/router';
import { getArticleData } from '@/utils/articles-util';
import { serialize } from 'next-mdx-remote/serialize';
import PageLayout from '@/components/page-layout';

export default function Page(props) {
  const router = useRouter();
  console.log('router: ', router.query, props);

  return (
    <div className='w-full pt-20'>
      <ArticleContent {...props}></ArticleContent>
    </div>
  );
}

// 通过query获取md文档内容传入
export async function getStaticProps(context) {
  const { params } = context;
  console.log('params: ', params, context.preview);
  // MDX text - can be from a local file, database, anywhere
  const mdData = await getArticleData(`${params.articleid}.mdx`);
  if (!mdData) {
    return {
      props: {
        content: '',
      },
    };
  }
  const mdxSource = await serialize(mdData.content);
  return { props: { ...mdData, source: mdxSource } };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { articleid: '123' },
      },
    ],
    fallback: 'blocking',
  };
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
