import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchButton from "../../../images/Search.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  // position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

const SearchComp = () => {
  let [searchTxt, setSearchTxt] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("/////");
    navigate(`/products?search=${searchTxt}`);
  };
  return (
    <div className="search-container">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="search with desired products"
          onChange={(e) => setSearchTxt(e.target.value)}
          value={searchTxt}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <img
        src={SearchButton}
        className="search-button"
        alt="serch-button"
        onClick={handleClick}
      />
    </div>
  );
};

export default SearchComp;
