import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Header = () => {
  return (
    <header className="header-top">
      <ul>
        <li>
          <SearchIcon />
        </li>
        <li>
          <PersonOutlinedIcon />
        </li>
        <li>
          <ShoppingCartOutlinedIcon />
        </li>
      </ul>
    </header>
  );
};
export default Header;
