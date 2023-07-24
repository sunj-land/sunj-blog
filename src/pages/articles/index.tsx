import { useState } from 'react';
import PageLayout from '@/components/page-layout';

export default function Page(props: any) {
  let [count, setCount] = useState(0);
  return (
    <>
      <div>文章列表</div>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};
