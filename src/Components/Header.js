import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
const Header = () => {
  const countOfItems = useSelector((state) => state.cart.length);
  return (
    <header className="header-top">
      <ul>
        <li>
          <SearchIcon />
        </li>
        <li>
          <PersonOutlinedIcon />
        </li>
        <li className="badge">
          <ShoppingCartOutlinedIcon />
          {countOfItems > 0 ? (
            <span className="badge-count">{countOfItems}</span>
          ) : null}
        </li>
      </ul>
    </header>
  );
};
export default Header;
