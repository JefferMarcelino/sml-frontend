import samoraLang from "/samoralang-logo.svg";
import "./index.css";

const Header = () => {
  return (
    <header id="header">
      <div className="wrapper">
        <nav>
          <ul>
            <li>Documentação</li>
            <li>Exemplos</li>
            <li>Playground</li>
          </ul>
        </nav>
        <div className="logo">
          <img src={samoraLang} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;