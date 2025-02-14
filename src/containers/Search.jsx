import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useSnackbar } from "notistack";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../components/Body";
import Header from "../components/Header";
import Main from "../components/Main";
// import { auth } from "../firebase";
import logo from '../asset/image/logo1.png';

const Search = () => {


	const navigate = useNavigate()

	const [field, setField] = useState({
		email: '',
	});

	const submitRegistration = async (e) => {
		e.preventDefault();
		navigate("/search/"(field.email));
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
													label="Cari disini....."
													sx={{ input: { color: 'white' } }}
													type="text"
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

export default Search;