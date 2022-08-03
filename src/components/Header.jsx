import { AppBar, Box, Button, Toolbar} from "@mui/material";
import { Container } from "@mui/system";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../asset/image/logo1.png';

const Header = ({ logoLink }) => {

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        isLoggedIn: null,
        name: null,
        img: null,
    });

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser((s) => ({
                    ...s,
                    isLoggedIn: true,
                    name: user.displayName,
                    img: user.photoURL,
                }));
                console.log(user);
            }
        });
    }, []);

    const onSignOut = async () => {
        try {
            await signOut(getAuth());
            enqueueSnackbar('Terima Kasih Sudah Berkunjung', { variant: 'success' });
            navigate('/');
        } catch (error) {
            console.log('error : ', error);
        }
    }

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
                    {user.isLoggedIn ?
                        <Box>
                            <Button color="warning"  variant="contained"   onClick={() => navigate('/cari')}> Searching...</Button>&nbsp;
                            <Button color="success"  variant="contained"   onClick={onSignOut}> Logout</Button>
                            
                        </Box>
                        :
                        <Box></Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;