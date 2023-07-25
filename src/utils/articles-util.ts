import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'articles');

function compareDate(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const timestamp1 = date1.getTime();
  const timestamp2 = date2.getTime();

  return timestamp1 > timestamp2 ? 1 : -1;
}

export async function getAllArticles() {
  let files = fs.readdirSync(postsDirectory);
  let list = await Promise.all(
    files.map(async (fileName) => {
      try {
        const filePath = path.join(postsDirectory, fileName);
        let fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);
        const postSlug = fileName.replace(/\.(md|mdx)$/, '');
        const postData = {
          slug: postSlug,
          ...data,
        };
        return postData;
      } catch (err) {
        return false;
      }
    })
  );
  list = list.sort(compareDate);
  let allArticles = [],
    categories = {};
  list.forEach((item) => {
    item.category = item.category || 'other';
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push({
      ...item,
    });
    allArticles.push(item);
  });

  return {
    allArticles,
    categories,
  };
}

export async function getArticleData(fileName) {
  try {
    const filePath = path.join(postsDirectory, fileName);
    let fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const postSlug = fileName.replace(/\.(md|mdx)$/, '');
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
