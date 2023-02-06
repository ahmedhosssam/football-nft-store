import githubLogo from '../../imgs/github-mark.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div>Made By Ahmed Hossam</div>
      <a href="https://github.com/ahmedhosssam">
        <img src={githubLogo} alt="Github" />
      </a>
    </footer>
  );
};

export default Footer;
