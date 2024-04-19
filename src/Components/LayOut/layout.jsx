import { Box } from "@mui/material"
import NavigationBar from "../ImmigrationNav/NavBar"
import { Outlet } from "react-router"
const LayoutOfImmigration=()=>{
    return(
        <Box className="Container">
          <Box className="header">
            <NavigationBar/>
          </Box>
          <Box className="outlet" sx={{minHeight:"80vh"}}>
            <Outlet/>
          </Box>
          <Box className="footer">
        
          </Box>
        </Box>
    )
}
export default LayoutOfImmigration