export type ProfileLink = {
  label: 'Portfolio' | 'Linkedin' | 'Github' | 'Instagram' | 'Email Me';
  caption: string;
  href: string | null;
};

// Replace these placeholders with your own details.
export const profile = {
  name: 'Kris Delgado',
  initials: 'KD',
  tagline: 'Always exploring something new.',
  bio: 'Quick connect',
};

// Replace null with a quoted URL, e.g. 'https://github.com/your-username'.
// Unconfigured links are disabled so visitors never land on a fake profile.
export const links: ProfileLink[] = [
  { label: 'Portfolio', caption: 'Selected work & projects', href: '/Portfolio-Site/portfolio/' },
  { label: 'Linkedin', caption: 'Let’s connect professionally', href: 'https://www.linkedin.com/in/krisjanndelgado/' },
  { label: 'Github', caption: 'Code & experiments', href: 'https://github.com/Ciridi' },
  { label: 'Instagram', caption: 'Instagram Art Account', href: 'https://www.instagram.com/thundersqueaks/' },
  { label: 'Email Me', caption: 'Reach me directly!', href: 'mailto:krisjann.delgado@gmail.com' },
];
