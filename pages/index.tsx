import { QuoteArticle, Slides, StandardArticle } from "@/modules/home/components";
import AudioArticle from "@/modules/home/components/AudioArticle";
import Article from "@/modules/home/components/Article";
import GalleryArticle from "@/modules/home/components/GalleryArticle";
import FormatLinkArticle from "@/modules/home/components/FormatLinkArticle";

import imageProp1 from '@/common/images/thumbs/shutterbug.jpg';
import imageProp2 from '@/common/images/thumbs/usaf-rocket.jpg';
import imageProp3 from '@/common/images/thumbs/diagonal-pattern.jpg';
import imageProp4 from '@/common/images/thumbs/lighthouse.jpg';
import imageProp5 from '@/common/images/thumbs/liberty.jpg';
import FormatVideoArticle from "@/modules/home/components/FormatVideoArticle";
import Script from "next/script";

const articleProp1 = {
  name: "Photography Skills Can Improve Your Graphic Design",
  description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
  imageUrl: imageProp1.src,
  imageName: "Shutterbug",
  articleLinks: [
    { title: "Photography", link: '#' },
    { title: "html", link: "#" }
  ]
}

const articleProp2 = {
  name: "The 10 Golden Rules of Clean Simple Design.",
  description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
  imageUrl: imageProp2.src,
  imageName: "USAF rocket",
  articleLinks: [
    { title: "Branding", link: '#' },
    { title: "Mockup", link: "#" }
  ]
}

const articleProp3 = {
  name: "You Can See Patterns Everywhere.",
  description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
  imageUrl: imageProp3.src,
  imageName: "Pattern",
  articleLinks: [
    { title: "Design", link: '#' },
    { title: "UI", link: "#" }
  ]
}

const articleProp4 = {
  name: "Breathtaking Photos of Lighthouses.",
  description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
  imageUrl: imageProp4.src,
  imageName: "Lighthouse",
  articleLinks: [
    { title: "Photography", link: '#' },
    { title: "Design", link: "#" }
  ]
}

const articleProp5 = {
  name: "Designing With Black and White.",
  description: "Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo...",
  imageUrl: imageProp5.src,
  imageName: "Liberty",
  articleLinks: [
    { title: "Branding", link: '#' },
    { title: "html", link: "#" }
  ]
}

export default function Home() {
  return (
    <>
      <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            <div className="grid-sizer"></div>
            <Slides />
            <StandardArticle />
            <AudioArticle />
            <QuoteArticle />
            <Article {...articleProp1}/>
            <Article {...articleProp2}/>
            <GalleryArticle />
            <FormatLinkArticle />
            <Article {...articleProp3}/>
            <FormatVideoArticle />
            <Article {...articleProp4}/>
            <Article {...articleProp5}/>
          </div>
        </div>

        <div className="row">
          <nav className="pagination">
            <span className="page-numbers prev inactive">Prev</span>
            <span className="page-numbers current">1</span>
            <a href="#" className="page-numbers">2</a>
            <a href="#" className="page-numbers">3</a>
            <a href="#" className="page-numbers">4</a>
            <a href="#" className="page-numbers">5</a>
            <a href="#" className="page-numbers">6</a>
            <a href="#" className="page-numbers">7</a>
            <a href="#" className="page-numbers">8</a>
            <a href="#" className="page-numbers">9</a>
            <a href="#" className="page-numbers next">Next</a>
          </nav>
        </div>
      </section>
    </>
  );
}
