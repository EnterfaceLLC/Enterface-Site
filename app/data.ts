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

type CaseStudy = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type MediaWork = {
  name: string
  description: string
  link: string
  image: string
  id: string
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
    link: '/projects/mobile-munch',
    image:
      '/project_assets/mMLogo.png',
    id: 'project1',
  },
  {
    name: 'Fiesta Connect App',
    description: 'A mobile app that aims to digitally connect the Topeka community with the cultural tradition, Fiesta Mexicana.',
    link: '/projects/fiesta-connect',
    image:
      '/project_assets/fCLogo.png',
    id: 'project2',
  },
  {
    name: 'Wovn App',
    description: 'A digital hub built to weave together local entrepreneurs, resources, and community support to create a stronger local economy.',
    link: '/projects/wovn',
    image:
      '/project_assets/WOVN.png',
    id: 'project3',
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    name: 'ΛΟΓΟΣ (Logos)',
    description:
      'An experimental mobile app, exploring the concept of sharing weekly sermons, bible scriptures, and more.',
    link: '/case-studies/logos-app',
    image: '/project_assets/LogoCover.png',
    id: 'case-1',
  },
]

export const MEDIA_WORK: MediaWork[] = [
  {
    name: 'El Zócalo Menu — enMotions',
    description:
      'Food photography featuring El Zócalo, a Topeka-based Mexican food truck.',
    link: '/media/el-zocalo-menu',
    image: '/project_assets/birriaRamen.jpg',
    id: 'media-1',
  },
  // {
  //   name: 'mobile Munch Brand Photography',
  //   description:
  //     'Brand photography and lifestyle imagery produced for the mobile Munch app across Topeka events and festivals.',
  //   link: '/media/mobile-munch-brand',
  //   image: '/project_assets/mMunch16.9.png',
  //   id: 'media-2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Rogelio Zamora Jr.',
    title: 'Founder, Full Stack Developer',
    start: '2021',
    end: 'Present',
    link: '/team/rogelio-zamora',
    id: 'work1',
  },
  {
    company: 'Jorge F. Hernandez',
    title: 'Lead Cinematographer',
    start: '2022',
    end: 'Present',
    link: '/team/jorge-hernandez',
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
