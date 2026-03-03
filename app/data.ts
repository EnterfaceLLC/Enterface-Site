type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'mobile Munch App',
    description:
      'Topeka\'s number one food truck finder mobile app, built to help you explore the best food trucks in Topeka.',
    // link: 'https://pro.motion-primitives.com/',
    link: 'https://play.google.com/store/apps/details?id=com.dotenterface.mobileMunch&pcampaignid=web_share',
    image:
      '/project_assets/mMunch.png',
    id: 'project1',
  },
  {
    name: 'Fiesta Connect App',
    description: 'A mobile app that aims to digitally connect the Topeka community with the cultural tradition, Fiesta Mexicana.',
    link: 'https://motion-primitives.com/',
    image:
      '/project_assets/mMunch16.9.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Rogelio Zamora Jr.',
    title: 'Founder, Full Stack Developer',
    start: '2023',
    end: 'Present',
    link: 'https://www.linkedin.com/in/rogelio-zamora-jr',
    id: 'work1',
  },
  {
    company: 'Jorge F. Hernandez',
    title: 'Lead Cinematographer',
    start: '2023',
    end: 'Present',
    link: 'https://www.linkedin.com/in/jorge-hernandez',
    id: 'work2',
  },
  // {
  //   company: 'Freelance',
  //   title: 'Front-end Developer',
  //   start: '2017',
  //   end: 'Present',
  //   link: 'https://ibelick.com',
  //   id: 'work3',
  // },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The Beginning of mobile Munch',
    description: 'Every great project has a beginning. Here\'s the story of how mobile Munch came to be.',
    link: '/blog/the-beginning-of-mobile-munch',
    uid: 'blog-1',
  },
  {
    title: 'Munch Rewards Case Study',
    description:
      'Exploring the integration of a reward system in mobile Munch!',
    link: '/blog/munch-rewards-case-study',
    uid: 'blog-2',
  },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
  // {
  //   title: 'How to Export Metadata from MDX for Next.js SEO',
  //   description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
  //   link: '/blog/example-mdx-metadata',
  //   uid: 'blog-4',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [

  {
    label: 'Facebook',
    link: 'https://www.facebook.com/dotEnterface',
  },
  {
    label: 'X',
    link: 'https://x.com/Dot_Enterface',
  },

  {
    label: 'Instagram',
    link: 'https://www.instagram.com/mobilemunchapp/',
  },
  {
    label: 'Github',
    link: 'https://github.com/EnterfaceLLC',
  },
]

export const EMAIL = 'dotenterface@gmail.com'
