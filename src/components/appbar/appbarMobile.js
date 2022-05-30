import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";



export default function AppbarMobile({matches}) {

    return(
      <AppbarContainer>
<IconButton>
    <MenuIcon />
</IconButton>
<img src="/images/banner/lvmm.png" width={'50px'} height={'50px'} alignItems={'center'}></img>
<AppbarHeader textAlign={"center"} variant="h4">
    Lassie Vogue Mania
</AppbarHeader>
<IconButton>
    <SearchIcon />
</IconButton>
<Actions matches={matches}/>
      </AppbarContainer>
    );    
}