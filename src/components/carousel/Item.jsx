import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Divider, Rating, Typography } from "@mui/material";

const Item = ({ data }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ cursor: 'pointer', bgcolor: '#222831' }}
            onClick={() => navigate(`/movie/${data.id}`)}
        >
            <CardMedia
                component="img"
                height="400"
                image={`${data.thumb}`}
                alt="green iguana"
            />
            <CardContent>
                <Box>
                    <Rating size="small" name="read-only" value={data.vote_average / 10 * 5} readOnly />
                    <Divider sx={{ marginY: 0.2 }} />
                    <Typography variant="body1" noWrap> {data.original_title} </Typography>
                    <Typography variant="caption"> {data.release_date} </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Item;