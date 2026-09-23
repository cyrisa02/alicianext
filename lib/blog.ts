// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllSlugs() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => name.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data,
    content,
  };
}