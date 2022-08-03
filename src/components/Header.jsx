import { AppBar, Box, Button, Toolbar} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import logo from '../asset/image/logo1.png';

const Header = ({ logoLink }) => {

    
    const navigate = useNavigate();
    // const [ setUser] = useState({
    //     isLoggedIn: null,
    //     name: null,
    //     img: null,
    // });

    

    
    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box flexGrow="1">
                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            Resep MasakanKU
                        </Typography> */}

                        {/* <Button color="warning" variant="contained"  >Resep</Button><Button color="success" variant="contained"  >Kuy</Button> */}
                    <img src={logo} height="60" alt="Logo"/>
                    </Box>
                    
                    <Box>
                    <Button color="warning"   onClick={() => navigate('/cari')}> Pencarian... </Button>
                            
                        </Box>
                        <Button color="warning" variant="contained"  onClick={() => navigate('/login')}> Login </Button>
                        
                        <Box></Box>
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;