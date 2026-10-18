import type { Post } from '@/types/post';

//Post 1
import heroPost1 from '@/assets/images/blog/post1/imgHero_post1.webp';
import img1Post1 from '@/assets/images/blog/post1/img1-post1.webp';
import img2Post1 from '@/assets/images/blog/post1/img2-post1.webp';
import img3Post1 from '@/assets/images/blog/post1/img3-post1.webp';

//Post 2
import heroPost2 from '@/assets/images/blog/post2/imgHero_post2.webp';
import img1Post2 from '@/assets/images/blog/post2/img1-post2.webp';
import img2Post2 from '@/assets/images/blog/post2/img2-post2.webp';

//Post 3
import heroPost3 from '@/assets/images/blog/post3/imgHero_post3.webp';
import img1Post3 from '@/assets/images/blog/post3/img1-post3.webp';
// import img2Post3 from '@/assets/images/blog/post3/img2-post3.webp';

//Post 4
import heroPost4 from '@/assets/images/blog/post4/imgHero_post4.webp';
import img1Post4 from '@/assets/images/blog/post4/img1-post4.webp';

//Post 5
import heroPost5 from '@/assets/images/blog/post5/imgHero_post5.webp';
import img1Post5 from '@/assets/images/blog/post5/img1-post5.webp';

//Post 6
import heroPost6 from '@/assets/images/blog/post6/imgHero_post6.webp';
import img1Post6 from '@/assets/images/blog/post6/img1-post6.webp';

//Post 7
import heroPost7 from '@/assets/images/blog/post7/imgHero_post7.webp';
import img1Post7 from '@/assets/images/blog/post7/img1-post7.webp';

//Post 8
import heroPost8 from '@/assets/images/blog/post8/imgHero_post8.webp';
import img1Post8 from '@/assets/images/blog/post8/img1-post8.webp';

//Post 9
import heroPost9 from '@/assets/images/blog/post9/imgHero_post9.webp';
import img1Post9 from '@/assets/images/blog/post9/img1-post9.webp';

export const postsData: Post[] = [
  {
    id: 1,
    imgURL: heroPost1,
    title: 'Choosing the right bouquet',
    date: '14 february 2026',
    description:
      'Learn how to select the right flowers for birthdays, romantic or everyday surprises. This guide helps match flowers to emotions and occasions.',
    link: '/blog/1',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Flowers have a unique way of expressing emotions when words are not enough. Whether you are celebrating a joyful occasion, showing appreciation, or simply bringing beauty into someone’s day, the right bouquet can make the moment truly special.',
        ],
        imgURL: img1Post1,
      },
      {
        id: 'consider-the-occasion',
        title: 'Consider the occasion',
        content: [
          'The occasion is one of the most important factors when choosing a bouquet. Different moments call for different styles, colors, and types of flowers.',
          'For romantic occasions such as anniversaries or dates, classic flowers like roses, peonies, or ranunculus are perfect choices. Soft tones such as red, blush pink, or white create an elegant and emotional impression.',
          'For birthdays, brighter and more cheerful flowers work beautifully. Tulips, gerberas, sunflowers, or mixed seasonal bouquets bring energy and joy to the celebration.',
          'For more formal occasions, such as congratulations or professional gifts, neutral and elegant arrangements are ideal. White lilies, orchids, or minimalist bouquets in soft tones feel refined and appropriate.',
        ],
      },
      {
        id: 'think-about-the-person',
        title: 'Think about the person',
        content: [
          'A bouquet becomes even more meaningful when it reflects the personality and preferences of the person receiving it.',
          'If they love soft and romantic aesthetics, choose delicate flowers in pastel shades. If they prefer modern and bold styles, go for minimalist bouquets or strong color contrasts.',
        ],
        imgURL: img2Post1,
      },
      {
        id: 'choose-the-right-colors',
        title: 'Choose the right colors',
        content: [
          'Color plays a powerful role in how a bouquet feels. Soft pastel colors create a calm, romantic, and elegant mood. Bright colors feel joyful, energetic, and celebratory. White and neutral tones create a timeless, minimalist look that suits almost any occasion.',
        ],
      },
      {
        id: 'consider-the-style',
        title: 'Consider the style of the bouquet',
        content: [
          'Bouquets come in many different styles, from classic round arrangements to modern, organic designs.',
          'Compact, structured bouquets feel elegant and formal. Loose, natural arrangements feel modern and effortless. Mono-bouquets made with a single type of flower feel minimalist and refined.',
        ],
      },
      {
        id: 'seasonal-flowers',
        title: 'When in doubt, choose seasonal flowers',
        content: [
          'Seasonal flowers are often the freshest and most vibrant option. They reflect the natural beauty of the current moment and tend to last longer. Seasonal arrangements also feel more authentic and unique.',
          'Florists carefully select flowers that work well together in color, texture, and longevity, ensuring a balanced and beautiful result.',
        ],
      },
      {
        id: 'make-it-personal',
        title: 'Make it personal',
        content: [
          'Adding a personal touch can make your bouquet even more meaningful. A handwritten note, a carefully chosen color palette, or selecting flowers with symbolic meaning shows extra thought and care. Even a simple bouquet becomes unforgettable when it feels personal.',
        ],
      },
      {
        id: 'final-thoughts',
        title: 'Final thoughts',
        content: [
          'Choosing the right bouquet is about more than just appearance — it’s about emotion, intention, and connection. By considering the occasion, the person, the colors, and the meaning behind the flowers, you can create a gift that truly speaks from the heart.',
          'At FLORIA, every bouquet is designed to help you celebrate life’s moments and express what matters most — beautifully, naturally, and with care.',
        ],
        imgURL: img3Post1,
      },
    ],
  },
  {
    id: 2,
    imgURL: heroPost2,
    title: 'Meaning of popular flowers',
    date: '14 february 2026',
    description:
      'Discover the hidden meanings behind popular flowers and colors, and how each bloom can express feelings without words.',
    link: '/blog/2',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Choosing flowers is not always just about color or appearance. Different flowers have been associated with particular feelings and occasions for centuries, which can make a bouquet feel more personal and thoughtful.',
          'Here are some of the most popular flowers and the meanings traditionally associated with them.',
        ],
      },
      {
        id: 'roses-love-and-affection',
        title: 'Roses: love and affection',
        content: [
          'Roses are one of the most familiar symbols of love and affection, but their meaning can vary depending on their color. Red roses are traditionally associated with love and passion, while pink roses express admiration, appreciation, and gratitude. White roses are often connected with purity and sincerity, and yellow roses traditionally represent friendship and happiness.',
          'Because of their versatility, roses are a classic choice for many occasions. They work beautifully for anniversaries and romantic celebrations, but can also be given for birthdays, thank-you gestures, or simply as a thoughtful way to show someone you care.',
        ],
        imgURL: img1Post2,
      },
      {
        id: 'tulips-love-and-new-beginnings',
        title: 'Tulips: love and new beginnings',
        content: [
          'Tulips have a simple, elegant appearance and are closely associated with spring and renewal. Red tulips are traditionally linked to love, while yellow tulips are often associated with cheerful thoughts and happiness. Their fresh appearance also makes them a natural choice for celebrating new beginnings.',
          'Tulips work well for birthdays, congratulations, spring occasions, and everyday gifts.',
        ],
      },
      {
        id: 'peonies-romance-and-good-fortune',
        title: 'Peonies: romance and good fortune',
        content: [
          'Peonies are known for their large, delicate blooms and romantic appearance. They are traditionally associated with love, happiness, prosperity, and good fortune.',
          'Their soft and elegant look makes peonies especially popular for romantic occasions, weddings, anniversaries, and special celebrations.',
        ],
        imgURL: img2Post2,
      },
      {
        id: 'which-flowers-should-you-choose',
        title: 'Which flowers should you choose?',
        content: [
          'The meaning of a flower can be a useful starting point when choosing a bouquet, especially when you want your gift to express something specific. Roses are a classic choice for expressing love and affection, while tulips can represent love, warmth, and new beginnings. Peonies are often associated with romance, happiness, and good fortune, making them a thoughtful choice for someone special.',
          "There are no strict rules when it comes to flower symbolism. Personal preferences can be just as important as traditional meanings. Someone's favorite flower, a particular color, or a flower connected to a shared memory can make a bouquet feel much more personal and meaningful.",
        ],
      },
      {
        id: 'a-bouquet-with-a-meaning',
        title: 'A bouquet with a meaning',
        content: [
          'Flowers do not need a complicated message behind them. Sometimes a simple bouquet is enough to show that you care, celebrate an important moment, or make an ordinary day feel a little more special.',
          'At Floria, you can choose flowers based not only on how they look, but also on the feeling you want your bouquet to convey.',
        ],
      },
    ],
  },
  {
    id: 3,
    imgURL: heroPost3,
    title: 'Choosing the right bouquet',
    date: '14 february 2026',
    description:
      'Learn how to select the right flowers for birthdays, romantic or everyday surprises.',
    link: '/blog/3',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          "Flowers have a unique way of expressing emotions when words are not enough. Whether you are celebrating a joyful occasion, showing appreciation, or simply bringing beauty into someone's day, the right bouquet can make the moment truly special.",
        ],
        imgURL: img1Post3,
      },
      {
        id: 'consider-the-occasion',
        title: 'Consider the occasion',
        content: [
          'The occasion is one of the most important factors when choosing a bouquet. Different moments call for different styles, colors, and types of flowers.',
          'For romantic occasions such as anniversaries or dates, classic flowers like roses, peonies, or ranunculus are perfect choices. Soft tones such as red, blush pink, or white create an elegant and emotional impression.',
          'For birthdays, brighter and more cheerful flowers work beautifully. Tulips, gerberas, sunflowers, or mixed seasonal bouquets bring energy and joy to the celebration.',
          'For more formal occasions, such as congratulations or professional gifts, neutral and elegant arrangements are ideal. White lilies, orchids, or minimalist bouquets in soft tones feel refined and appropriate.',
        ],
      },
      {
        id: 'think-about-the-person',
        title: 'Think about the person',
        content: [
          'A bouquet becomes even more meaningful when it reflects the personality and preferences of the person receiving it.',
          'If they love soft and romantic aesthetics, choose delicate flowers in pastel shades. If they prefer modern and bold styles, go for minimalist bouquets or strong color contrasts.',
        ],
        imgURL: '',
      },
      {
        id: 'choose-the-right-colors',
        title: 'Choose the right colors',
        content: [
          'Color plays a powerful role in how a bouquet feels. Soft pastel colors create a calm, romantic, and elegant mood. Bright colors feel joyful, energetic, and celebratory. White and neutral tones create a timeless, minimalist look that suits almost any occasion.',
        ],
      },
      {
        id: 'consider-the-style',
        title: 'Consider the style of the bouquet',
        content: [
          'Bouquets come in many different styles, from classic round arrangements to modern, organic designs. Compact, structured bouquets feel elegant and formal. Loose, natural arrangements feel modern and effortless. Mono-bouquets made with a single type of flower feel minimalist and refined.',
        ],
      },
      {
        id: 'seasonal-flowers',
        title: 'When in doubt, choose seasonal flowers',
        content: [
          'Seasonal flowers are often the freshest and most vibrant option. They reflect the natural beauty of the current moment and tend to last longer. Seasonal arrangements also feel more authentic and unique.',
          'Florists carefully select flowers that work well together in color, texture, and longevity, ensuring a balanced and beautiful result.',
        ],
      },
      {
        id: 'make-it-personal',
        title: 'Make it personal',
        content: [
          'Adding a personal touch can make your bouquet even more meaningful. A handwritten note, a carefully chosen color palette, or selecting flowers with symbolic meaning shows extra thought and care. Even a simple bouquet becomes unforgettable when it feels personal.',
        ],
      },
      {
        id: 'final-thoughts',
        title: 'Final thoughts',
        content: [
          'Choosing the right bouquet is about emotion, intention, and connection. By considering the occasion and the meaning behind the flowers, you can create a gift that truly speaks to the heart.',
          "At FLORIA, every bouquet is designed to help you celebrate life's moments and express what matters most.",
        ],
      },
    ],
  },
  {
    id: 4,
    imgURL: heroPost4,
    title: 'Most popular flowers',
    date: '14 february 2026',
    description:
      'Discover the flowers people love most and what makes them timeless and meaningful.',
    link: '/blog/4',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: img1Post4,
      },
    ],
  },
  {
    id: 5,
    imgURL: heroPost5,
    title: 'Flowers for your home',
    date: '14 february 2026',
    description: 'Learn how to choose flowers that complement your interior.',
    link: '/blog/5',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: img1Post5,
      },
    ],
  },
  {
    id: 6,
    imgURL: heroPost6,
    title: 'Why flowers make perfect gift',
    date: '14 february 2026',
    description: 'Explore why flowers remain one of the most meaningful and emotional gifts.',
    link: '/blog/6',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: img1Post6,
      },
    ],
  },
  {
    id: 7,
    imgURL: heroPost7,
    title: 'Modern flower trends',
    date: '14 february 2026',
    description: 'Discover the latest styles and trends in floral design and bouquet arrangements.',
    link: '/blog/7',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: img1Post7,
      },
    ],
  },
  {
    id: 8,
    imgURL: heroPost8,
    title: 'Personalizing your bouquet',
    date: '14 february 2026',
    description: 'Learn how to choose flowers that complement your interior.',
    link: '/blog/8',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: img1Post8,
      },
    ],
  },
  {
    id: 9,
    imgURL: heroPost9,
    title: 'Benefits of fresh flowers',
    date: '14 february 2026',
    description: 'Explore why flowers remain one of the most meaningful and emotional gifts.',
    link: '/blog/9',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: img1Post9,
      },
    ],
  },
];
