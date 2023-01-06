import {
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "1",
    navlink: "Home",
    title: "Home",
  },
  {
    id: "2",
    navlink: "Courses",
    title: "Courses",
  },
  {
    id: "3",
    navlink: "About",
    title: "About Us",
  },
];

export const courses = [
  {
    id: "1",
    icon1: star,
    icon2: send,
    title: "Python",
    desc: "Python is a high-level, interpreted, general-purpose programming language. It is a powerful language that is used for a wide range of applications, such as web development, data science, scientific computing, and artificial intelligence. Python code is easy to read and understand, making it a popular choice for beginners and experienced programmers alike. It also has a wide range of libraries and frameworks, making it suitable for a variety of tasks. In addition, Python has an active and supportive community, making it easy to find help when needed.",
    diff: "How hard?",
    diffContent:
      "Learning Python can be as easy or as difficult as you make it. It is a very powerful and versatile language, so depending on what you want to do with it, it can take a while to learn all of its features. However, with the right resources, dedication, and practice, anyone can learn Python.",
    code: "Code",
    codeContent: 'print("Hello World")',
  },
  {
    id: "2",
    icon1: star,
    icon2: send,
    title: "C++",
    desc: "C++ is a general-purpose programming language created by Bjarne Stroustrup in 1985. It is an extension of the C language and offers object-oriented features such as classes, inheritance, and polymorphism. C++ has a wide range of uses, including desktop applications, server applications, embedded systems, and game development. It is a compiled language, with a variety of compilers available for different platforms. C++ is known for its performance, scalability, and memory management.",
    diff: "How hard?",
    diffContent:
      "Learning C++ can be challenging for beginners, but with enough practice and dedication, it can become easier. C++ is a complex language that requires a strong understanding of object-oriented programming and the Standard Template Library. It is recommended to build your knowledge of the fundamentals of programming before diving into C++, such as data types, control flow, functions, and classes. With enough practice and dedication, you can become proficient in C++.",
    code: "Code",
    codeContent: 'cout << "Hello World" << Endl;',
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "1000+",
  },
  {
    id: "stats-2",
    title: "Courses",
    value: "2",
  },
  {
    id: "stats-3",
    title: "Tutorials",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/clise.ai",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/cliseai",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
