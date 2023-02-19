import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../Components/utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} color='#008000'
      sx={{backgroundColor: "#008000", color: '#008000'}}
      />
    <Typography variant="h6"  color="#fff" fontWeight="bold" sx={{marginLeft: '10px'}}>
    just4Study
    </Typography>
    </Link>
    {/* <SearchBar /> */}
  </Stack>
);

export default Navbar;