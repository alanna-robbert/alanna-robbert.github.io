import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="wrap footer">
      <p>&copy; {new Date().getFullYear()} Alanna Robbert</p>
      <SocialLinks />
    </footer>
  );
}

export default Footer;
