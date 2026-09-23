// app/blog/page.tsx
import Link from 'next/link';
import { getAllSlugs, getArticleBySlug } from '@/lib/blog';

export default function BlogIndex() {
  const slugs = getAllSlugs();
  const articles = slugs.map((slug) => getArticleBySlug(slug));
  
  // Tri par date décroissante
  articles.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return (
    <div className="bg-[#0A0A0A] text-gray-300 antialiased min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Blog
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link 
              key={article.slug} 
              href={`/blog/${article.slug}`}
              className="block p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-600 transition-colors"
            >
              <h2 className="text-xl font-bold text-white mb-2">
                {article.frontmatter.title}
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                {new Date(article.frontmatter.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-300 line-clamp-3">
                {article.frontmatter.description}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}