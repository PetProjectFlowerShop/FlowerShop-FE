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

//Post 4
import heroPost4 from '@/assets/images/blog/post4/imgHero_post4.webp';
import img1Post4 from '@/assets/images/blog/post4/img1-post4.webp';
import img2Post4 from '@/assets/images/blog/post4/img2-post4.webp';

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
      'Learn how to select the right flowers for  birthdays, romantic or everyday surprises. This guide helps match flowers to emotions and occasions.',
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
    title: 'How to keep flowers fresh',
    date: '14 february 2026',
    description:
      'Follow simple steps to extend the life of your bouquet and keep your flowers fresh and beautiful longer.',
    link: '/blog/3',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Fresh flowers can brighten up any space, and with a little care, you can enjoy your bouquet for longer. Here are a few simple tips to help keep your flowers fresh.',
        ],
      },
      {
        id: 'give-them-fresh-water',
        title: '1. Give them fresh water',
        content: [
          'Start with a clean vase and fresh, room-temperature water. Change the water every two days and rinse the vase before refilling it. Remove any leaves that sit below the water, as they can cause bacteria to build up.',
          'Before placing the flowers in the vase, trim about 1–2 cm from the bottom of each stem at an angle. This helps the flowers absorb water more easily.',
        ],
        imgURL: img1Post3,
      },
      {
        id: 'choose-the-right-place',
        title: '2. Choose the right place',
        content: [
          'Keep your bouquet away from direct sunlight, heaters, air conditioners, and strong drafts. A cool place with a stable room temperature is usually best.',
          'It is also better to keep flowers away from fruit. Ripening fruit releases ethylene gas, which can cause flowers to age faster.',
        ],
      },
      {
        id: 'take-care-of-your-bouquet',
        title: '3. Take care of your bouquet',
        content: [
          'Check your flowers regularly and remove wilted blooms or damaged leaves. If the stems start to look dry, trim them again when you change the water.',
          'With fresh water, clean stems, and the right location, your Floria bouquet can stay beautiful for longer.',
        ],
      },
    ],
  },
  {
    id: 4,
    imgURL: heroPost4,
    title: 'Most popular flowers',
    date: '15 february 2026',
    description:
      'Discover the flowers people love most and what makes them timeless and meaningful.',
    link: '/blog/4',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          "Flowers are one of the most thoughtful ways to celebrate a special moment, show appreciation, or simply brighten someone's day. While there are many beautiful varieties to choose from, some flowers remain especially popular because of their appearance, versatility, and timeless appeal.",
          'Here are some of the flowers that are most often chosen for bouquets and gifts.',
        ],
      },
      {
        id: 'roses',
        title: 'Roses',
        content: [
          'Roses are a timeless classic and one of the most popular flowers for bouquets. They come in a wide range of colors, each with its own character and meaning.',
          'From romantic red roses to soft pink and elegant white varieties, roses can suit almost any occasion, from birthdays and anniversaries to simple everyday gestures.',
        ],
        imgURL: img1Post4,
      },
      {
        id: 'tulips',
        title: 'Tulips',
        content: [
          'Tulips are known for their simple shape, bright colors, and fresh spring feel. They are a popular choice for both colorful arrangements and more minimal bouquets.',
          'Their versatility makes them suitable for birthdays, celebrations, romantic occasions, and thoughtful everyday gifts.',
        ],
      },
      {
        id: 'peonies',
        title: 'Peonies',
        content: [
          'Peonies are especially loved for their large, delicate blooms and soft appearance. Their romantic look makes them a popular choice for special occasions, particularly during their blooming season.',
          'They work beautifully on their own or combined with other flowers in a fuller bouquet.',
        ],
      },
      {
        id: 'lilies',
        title: 'Lilies',
        content: [
          'Lilies are known for their elegant shape and distinctive appearance. They can add a sophisticated touch to both simple and more elaborate arrangements.',
          'Because of their versatility, lilies are often chosen for birthdays, celebrations, and thoughtful gifts.',
        ],
      },
      {
        id: 'orchids',
        title: 'Orchids',
        content: [
          'Orchids stand out with their unusual shapes and elegant appearance. They are a popular choice for those looking for something a little different from a traditional bouquet.',
          'Their sophisticated look makes them suitable for birthdays, celebrations, and elegant gifts.',
        ],
        imgURL: img2Post4,
      },
      {
        id: 'choosing-the-right-flowers',
        title: 'Choosing the right flowers',
        content: [
          'There is no single right flower for every occasion. The best choice depends on the person, the occasion, and the feeling you want to express. Roses are a classic choice for romance, while tulips bring a fresh and cheerful touch. Peonies create a soft and elegant look, while sunflowers, lilies, and orchids each have their own distinctive character.',
          "At Floria, you can explore a variety of flowers and find a bouquet that feels right for the occasion. Whether you are celebrating something special or simply want to make someone's day a little brighter, there is always a flower worth choosing.",
        ],
      },
    ],
  },
  {
    id: 5,
    imgURL: heroPost5,
    title: 'Flowers for your home',
    date: '16 february 2026',
    description: 'Learn how to choose flowers that complement your interior.',
    link: '/blog/5',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Fresh flowers can instantly make a home feel warmer and more welcoming. Whether you place a small bouquet on the kitchen table or create a larger arrangement for the living room, flowers can add color, freshness, and personality to your space.',
        ],
      },
      {
        id: 'choosing-flowers-for-your-space',
        title: 'Choosing flowers for your space',
        content: [
          'The right flowers can complement the style and atmosphere of a room. Soft-colored roses and peonies can create a calm and elegant feel, while tulips and sunflowers can bring more color and energy to the space.',
          'Think about the size of the room, the colors already in it, and where you plan to place the bouquet. A simple arrangement can work beautifully on a bedside table, while a larger bouquet can become a focal point in a living room or dining area.',
        ],
        imgURL: img1Post5,
      },
      {
        id: 'flowers-for-every-room',
        title: 'Flowers for every room',
        content: [
          'Different rooms can benefit from different types of arrangements. A small bouquet of tulips can add a fresh touch to the kitchen, while roses or peonies can create a more elegant atmosphere in the living room or bedroom.',
          'You do not need a special occasion to bring flowers into your home. Even a simple seasonal bouquet can make an everyday space feel a little more special.',
        ],
      },
      {
        id: 'make-your-home-feel-more-personal',
        title: 'Make your home feel more personal',
        content: [
          'Flowers are an easy way to change the atmosphere of your home without making major changes to the interior. Try different flowers, colors, and arrangements to find what works best for your space.',
          'With Floria, you can choose a bouquet that matches your home, your style, or simply your mood.',
        ],
      },
    ],
  },
  {
    id: 6,
    imgURL: heroPost6,
    title: 'Why flowers make perfect gift',
    date: '16 february 2026',
    description: 'Explore why flowers remain one of the most meaningful and emotional gifts.',
    link: '/blog/6',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Finding a gift for someone is not always easy. Flowers are a simple choice, but they can still feel personal and thoughtful. A bouquet can mark an important occasion, express a feeling, or simply show someone that you were thinking about them.',
        ],
      },
      {
        id: 'a-gift-for-any-occasion',
        title: 'A gift for any occasion',
        content: [
          'One of the best things about flowers is their versatility. Roses can be a romantic gift, while tulips, peonies, or sunflowers can suit birthdays, celebrations, thank-you gestures, and many other occasions.',
          "You can also choose flowers based on someone's favorite colors or varieties, making even a simple bouquet feel more personal.",
        ],
        imgURL: img1Post6,
      },
      {
        id: 'they-make-an-impression',
        title: 'They make an impression',
        content: [
          'Unlike many gifts, flowers can immediately change the atmosphere of a room. A fresh bouquet adds color, fragrance, and a sense of occasion, even when there is no particular celebration.',
          'Flowers are also a way to give something that can be enjoyed in the moment and remembered afterwards.',
        ],
      },
      {
        id: 'sometimes-simple-is-better',
        title: 'Sometimes, simple is better',
        content: [
          "A gift does not always need to be complicated. Sometimes a beautiful bouquet is enough to make someone's day a little brighter.",
          'Whether you are celebrating something special or simply want to show that you care, flowers are a thoughtful gesture that never needs a complicated reason.',
        ],
      },
    ],
  },
  {
    id: 7,
    imgURL: heroPost7,
    title: 'Modern flower trends',
    date: '17 february 2026',
    description: 'Discover the latest styles and trends in floral design and bouquet arrangements.',
    link: '/blog/7',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Flower trends are becoming more natural, personal, and relaxed. Instead of perfectly arranged bouquets, people are increasingly choosing designs with a more effortless look, seasonal flowers, and colors that reflect their personal style.',
        ],
      },
      {
        id: 'natural-bouquets-and-seasonal-flowers',
        title: 'Natural bouquets and seasonal flowers',
        content: [
          'Loose, natural-looking bouquets have become a popular choice for those who prefer a less formal style. Flowers with different heights, shapes, and textures create an arrangement that feels fresh and effortless. Greenery and delicate seasonal blooms can add even more movement and character to the bouquet.',
          'Seasonal flowers are also an important part of modern arrangements. Choosing flowers that are naturally available during a particular season can make a bouquet feel more distinctive. Spring tulips, summer peonies, and autumn blooms each bring their own atmosphere and make it easier to create something that feels connected to the time of year.',
        ],
        imgURL: img1Post7,
      },
      {
        id: 'soft-colors-and-simple-combinations',
        title: 'Soft colors and simple combinations',
        content: [
          'Soft and natural shades such as white, cream, blush, peach, and light green remain popular for their calm and elegant appearance. Instead of combining many different colors, modern bouquets often focus on a simple palette with a few complementary shades.',
          'At the same time, bright flowers can still make a strong statement. A popular approach is to combine a neutral base with one or two more vibrant colors, creating a bouquet that feels modern without being overwhelming.',
        ],
      },
      {
        id: 'flowers-that-feel-personal',
        title: 'Flowers that feel personal',
        content: [
          "Modern flower trends are not only about appearance. There is a growing preference for bouquets that feel personal and suit the person receiving them. A smaller arrangement of someone's favorite flowers can be more meaningful than a large bouquet chosen simply because it looks impressive.",
          'Whether you prefer a loose seasonal arrangement, soft neutral colors, or a bright combination, there are no strict rules to follow. The best bouquet is one that fits your style and the occasion. At Floria, you can find different flowers and combinations to create a bouquet that feels right.',
        ],
      },
    ],
  },
  {
    id: 8,
    imgURL: heroPost8,
    title: 'Personalizing your bouquet',
    date: '18 february 2026',
    description: 'Learn how to choose flowers that complement your interior.',
    link: '/blog/8',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'A bouquet can be much more than a collection of beautiful flowers. Choosing the right colors, flowers, and details can make it feel personal and show that you put thought into the gift.',
        ],
      },
      {
        id: 'choose-flowers-that-mean-something',
        title: 'Choose flowers that mean something',
        content: [
          'One of the easiest ways to personalize a bouquet is to choose flowers that have a connection to the person receiving them. Their favorite flower, a meaningful color, or even a flower that reminds you of a special moment can make a simple arrangement feel more thoughtful.',
          'You can also consider the message you want to express. Roses can add a romantic touch, tulips can create a fresh and cheerful feeling, while peonies can make a bouquet feel soft and elegant. Combining flowers with different meanings can make the arrangement even more personal.',
        ],
        imgURL: img1Post8,
      },
      {
        id: 'make-it-feel-like-their-bouquet',
        title: 'Make it feel like their bouquet',
        content: [
          "The overall style of a bouquet can say just as much as the flowers themselves. Think about the person's personality and preferences when choosing between soft and neutral colors, bright seasonal flowers, or a more natural and relaxed arrangement.",
          'A personal bouquet does not have to be complicated. Sometimes a few carefully chosen flowers and a color combination you know they will love are enough. At Floria, you can explore different flowers and create a bouquet that feels personal to the person you are giving it to.',
        ],
      },
    ],
  },
  {
    id: 9,
    imgURL: heroPost9,
    title: 'Benefits of fresh flowers',
    date: '18 february 2026',
    description: 'Explore why flowers remain one of the most meaningful and emotional gifts.',
    link: '/blog/9',
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Fresh flowers can do more than add color to a room. A simple bouquet can change the atmosphere of a space, make an ordinary day feel a little more special, and bring a natural element into your home.',
        ],
      },
      {
        id: 'they-brighten-your-space',
        title: 'They brighten your space',
        content: [
          'One of the easiest ways to refresh a room is to add fresh flowers. Their colors, shapes, and natural textures can make a space feel warmer and more welcoming without changing the rest of the interior.',
          'Flowers can also add a seasonal touch to your home. Bright tulips in spring, peonies in summer, or a simple bouquet in soft neutral tones can change the atmosphere and complement your space throughout the year.',
        ],
        imgURL: img1Post9,
      },
      {
        id: 'they-make-everyday-moments-special',
        title: 'They make everyday moments special',
        content: [
          'You do not need a special occasion to enjoy fresh flowers. A small bouquet on the dining table, desk, or bedside table can make an ordinary day feel a little more thoughtful.',
          'Flowers can also be a simple way to show someone you care. Whether you are giving a bouquet as a gift or choosing one for your own home, fresh flowers bring a sense of warmth and beauty to everyday life.',
        ],
      },
    ],
  },
];
