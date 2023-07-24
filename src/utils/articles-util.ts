import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'articles');

export function getAllArticles() {
  let files = fs.readdirSync(postsDirectory);
  console.log('files: ', files);
}

export async function getArticleData(fileName) {
  try {
    const filePath = path.join(postsDirectory, fileName);
    let fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const postSlug = fileName.replace(/\md$/, '');
    const postData = {
      slug: postSlug,
      ...data,
      content,
    };
    return postData;
  } catch (err) {
    return false;
  }
}
