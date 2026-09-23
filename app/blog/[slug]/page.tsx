// app/blog/[slug]/page.tsx
import { getAllSlugs, getArticleBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.frontmatter.title,
    description: article.frontmatter.description,
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <article>
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {article.frontmatter.title}
            </h1>
            <time className="text-gray-400 text-sm">
              {new Date(article.frontmatter.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          {/* Rendu du contenu MDX adapté au thème sombre */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">
            <MDXRemote source={article.content} />
          </div>
        </article>
      </main>
    </div>
  );
}