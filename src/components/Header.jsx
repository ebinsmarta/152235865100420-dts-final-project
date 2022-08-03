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
                    <img src={logo} height="60" alt="Logo"/>
                    </Box>
                    <Box flexGrow="12">
                    <Button color="primary"   onClick={() => navigate('/home')}> Home </Button>
                    <Button color="primary"   onClick={() => navigate('/registration')}> Registrasi </Button>
                    <Button color="primary"   onClick={() => navigate('/login')}> Login </Button>
                    </Box>
                  
                    
                    <Box>
                    <Button color="warning"  variant="contained"   onClick={() => navigate('/cari')}> Searching</Button>
                    </Box>
                      
                        
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;