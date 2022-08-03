import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSnackbar } from "notistack";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";
import Header from "../components/Header";
import Main from "../components/Main";
import { auth } from "../firebase";
import logo from '../asset/image/logo1.png';

const Registration = () => {

	const { enqueueSnackbar } = useSnackbar();
	const navigate = useNavigate()

	const [field, setField] = useState({
		email: '',
		password: '',
	});

	const submitRegistration = async (e) => {
		e.preventDefault();

		try {
			const user = await signInWithEmailAndPassword(auth, field.email, field.password);
			if (user) {
				enqueueSnackbar('Hallo, Selamat datang di ResepQ', { variant: 'success' });
				navigate("/home");
			}
		} catch (error) {
			enqueueSnackbar('Oops, kombinasi email dan password salah', { variant: 'info' });
		}
	}

	return (
		<Fragment>
			<Body>
				<Header />
				<Main>
					<Grid container justifyContent="center">
						<Grid item xs={12} sm={6} md={8}>
							<Box my={6}>
								<Card sx={{ bgcolor: '#222831' }} component="form" onSubmit={submitRegistration}>
									<Box p={2}>
										<Box my={3}>
											<Box>
												<Typography variant="h6" component="h1" align="center"> Pencarian</Typography>
												<center><img src={logo} height="120" alt="Logo"/></center>												
											</Box>
											<Box>
												<TextField
													margin="dense"
													fullWidth
													variant="filled"
													label="Ketik disini....."
													sx={{ input: { color: 'white' } }}
													type="email"
													onChange={(e) => setField((s) => ({ ...s, email: e.target.value }))}
												/>
												
											</Box>
											<Box mt={5}>
												<Button color="warning" variant="contained" fullWidth type="submit" onClick={() => navigate('/search')}> Search... </Button>
												
												</Box>
										</Box>
									</Box>
								</Card>
							</Box>
						</Grid>
					</Grid>
				</Main>
			</Body>
		</Fragment>
	)
}

export default Registration;