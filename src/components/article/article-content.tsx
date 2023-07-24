import MDXPreview from '../mdx-preview';

export default function ArticleContent(props) {
  console.log('props: ', props);
  return <MDXPreview {...props}></MDXPreview>;
}
