import githubLogo from '../../imgs/github-mark-white.svg';

const Footer = () => {
  return (
    <footer>
      <div>Made By Ahmed Hossam</div>
      <a href="https://github.com/ahmedhosssam">
        <img src={githubLogo} alt="Github" />
      </a>
    </footer>
  );
};

export default Footer;
