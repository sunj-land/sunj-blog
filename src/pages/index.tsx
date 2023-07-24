import Head from 'next/head';
import PageLayout from '@/components/page-layout';
import UserInfo from '@/components/user-info';
import ArticleList from '@/components/article/article-list';

export default function Page() {
  return (
    <>
      <Head>
        <title>sunj land</title>
      </Head>
      <div className='flex justify-between'>
        <div className='mr-8 shrink grow basis-0 md:mr-4'>
          <ArticleList></ArticleList>
        </div>
        <div className='basis-[380px] hidden md:block'>
          <UserInfo></UserInfo>
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps() {
  console.log(process.env.DB_HOST);

  return {
    props: {},
  };
}
