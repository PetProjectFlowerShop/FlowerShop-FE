import image1 from '@/assets/images/blog/Post 1_Hero picture.webp';
import image2 from '@/assets/images/blog/blog 2.webp';
import image5 from '@/assets/images/blog/Post 2_Hero.webp';
import image6 from '@/assets/images/blog/blog8.webp';
import image8 from '@/assets/images/blog/Post 3 _Hero.webp';
import image9 from '@/assets/images/blog/blog5.webp';
import image10 from '@/assets/images/blog/Blog7.webp';
import image11 from '@/assets/images/blog/Blog 3.webp';
import image12 from '@/assets/images/blog/blog9.webp';
import type { Post } from '@/types/post';

export const postsData: Post[] = [
  {
    id: 1,
    imgURL: image5,
    title: 'Meaning of popular flowers',
    description: 'Discover the hidden meanings behind popular flowers and colors...',
    link: '/blog/1',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: '',
      },
    ],
  },
  {
    id: 2,
    imgURL: image8,
    title: 'How to keep flowers fresh',
    description: 'Follow simple steps to extend the life of your bouquet...',
    link: '/blog/2',
    sections: [
      {
        id: 'intro-2',
        title: 'Freshness tips',
        content: [
          'Changing water daily and trimming stems at an angle can double the life of your flowers.',
        ],
        imgURL: '',
      },
    ],
  },
  {
    id: 3,
    imgURL: image1,
    title: 'Choosing the right bouquet',
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
        imgURL:
          'https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=1000&auto=format&fit=crop',
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
        imgURL:
          'https://images.unsplash.com/photo-1508611311494-1a3ebc45ea0d?q=80&w=1000&auto=format&fit=crop',
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
  //second
  {
    id: 4,
    imgURL: image10,
    title: 'Most popular flowers',
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
        imgURL: '',
      },
    ],
  },
  {
    id: 5,
    imgURL: image11,
    title: 'Flowers for your home',
    description: 'Learn how to choose flowers that complement your interior.',
    link: '/blog/5',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: '',
      },
    ],
  },
  {
    id: 6,
    imgURL: image12,
    title: 'Why flowers make perfect gift',
    description: 'Explore why flowers remain one of the most meaningful and emotional gifts.',
    link: '/blog/6',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: '',
      },
    ],
  },
  {
    id: 7,
    imgURL: image2,
    title: 'Modern flower trends',
    description: 'Discover the latest styles and trends in floral design and bouquet arrangements.',
    link: '/blog/7',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: '',
      },
    ],
  },
  {
    id: 8,
    imgURL: image9,
    title: 'Personalizing your bouquet',
    description: 'Learn how to choose flowers that complement your interior.',
    link: '/blog/8',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: '',
      },
    ],
  },
  {
    id: 9,
    imgURL: image6,
    title: 'Benefits of fresh flowers',
    description: 'Explore why flowers remain one of the most meaningful and emotional gifts.',
    link: '/blog/9',
    sections: [
      {
        id: 'intro-1',
        title: 'The Language of Flowers',
        content: [
          'Every flower has a secret story. Discover what your bouquet is really saying...',
        ],
        imgURL: '',
      },
    ],
  },
];
