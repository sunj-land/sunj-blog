import { useState } from 'react';
import PageLayout from '@/components/page-layout';

export default function Page(props: any) {
  console.log('props: ', props);
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello,about</h1>
      <div>count -- {count}</div>
      <div onClick={() => setCount(count + 1)}>add</div>
      <ul>
        {props?.list?.map((item: any) => (
          <li key={item.id}>name---{item.name}</li>
        ))}
      </ul>
    </>
  );
}

Page.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps() {
  return {
    props: {},
  };
}
