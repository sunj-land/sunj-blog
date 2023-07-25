import { useState } from 'react';
import Link from 'next/link';
import PageLayout from '@/components/page-layout';
import { getAllArticles } from '@/utils/articles-util';

export default function Page({ articles = [] }) {
  return (
    <>
      <div className='pl-20 mt-20 border-box'>
        {articles.map((item) => (
          <div className='w-full mb-8' key={item.id}>
            <Link
              href={`/articles/${item.slug}`}
              className='text-lg font-medium hover:text-blue-400'
            >
              {item.title}
            </Link>
            <div className='flex justify-start my-2'>
              {item?.tags?.map((tagItem) => (
                <div className='tag' key={tagItem}>
                  {tagItem}
                </div>
              ))}
            </div>
            <div className='text-gray-400'>{item.date}</div>
          </div>
        ))}
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps() {
  let res = await getAllArticles();
  return {
    props: {
      articles: res?.allArticles || [],
    },
  };
}
