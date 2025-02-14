import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, Button, CardMedia, Divider, Typography } from "@mui/material";

const Item = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#222831' }}
            onClick={() => navigate(`/resep/${data.key}`)}
        >
            <CardMedia
                component="img"
                height="400"
                image={`${data.thumb}`}
                alt="resep background"
            />
            <CardContent>
                <Box>
                <Typography variant="body1"> {data.title} </Typography>
                    <Divider sx={{ marginY: 0.2 }} />
                    <Button color="success" variant="contained" fullWidth type="submit" > Waktu : {data.times} </Button><br></br>
                    <Button color="warning" variant="contained" fullWidth type="submit"> Jumlah: {data.portion} </Button>
                    <Button color="primary" variant="contained" fullWidth type="submit"> Proses: {data.dificulty}</Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Item;