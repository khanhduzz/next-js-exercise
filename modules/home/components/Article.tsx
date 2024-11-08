import Image from 'next/image';

type ArticleLink = {
    title: string;
    link: string;
}

type ArticleProps = {
    name: string;
    description: string;
    imageUrl: string;
    imageName: string;
    articleId?: number;
    articleLinks: ArticleLink[];
}

const Article = (article: ArticleProps) => {
    return (
        <>
            <article className="brick entry animate-this">
                <div className="entry-thumb">
                    <a href="single-standard.html" className="thumb-link">
                        <img src={article.imageUrl} alt={article.imageName} />
                    </a>
                </div>
                <div className="entry-text">
                    <div className="entry-header">
                        <div className="entry-meta">
                            <span className="cat-links">
                                {article.articleLinks.map(link => (
                                    <a key={link.title} href={link.link ?? '#'}>{link.title}</a>
                                ))}
                            </span>
                        </div>
                        <h1 className="entry-title"><a href="single-standard.html">{article.name}</a></h1>
                    </div>
                    <div className="entry-excerpt">
                        {article.description}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Article