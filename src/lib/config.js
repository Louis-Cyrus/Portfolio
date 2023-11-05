import { SiGithub, SiLinkedin } from 'react-icons/si';
import { TbLetterM } from 'react-icons/tb';

export const GITHUB_USERNAME = 'Louis-Cyrus';

export const EMAIL = 'louiscyrus.sanjabi@gmail.com';

export const FULL_NAME = 'Louis-Cyrus Sanjabi';

export const SOCIAL_NETWORKS = [
  {
    url: "https://www.malt.fr/profile/louiscyrussanjabi",
    name: "Malt",
    icon: <TbLetterM />,
  },
  {
    url: 'https://www.linkedin.com/in/louis-cyrus-sanjabi/',
    name: 'Linkedin',
    icon: <SiLinkedin />,
  },
  {
    url: 'https://github.com/Louis-Cyrus',
    name: 'Github',
    icon: <SiGithub />,
  },
];
