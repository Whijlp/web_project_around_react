import vector from "../../images/Vector.png";
const Header = () => {
  return (
    <header className="header">
      <img className="header__image" src={vector} alt="Logo" />
      <div className="header__line"></div>
    </header>
  );
};
export default Header;
