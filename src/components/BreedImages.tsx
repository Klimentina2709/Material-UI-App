import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Images } from "../types";
import { Grid, Card, CardMedia } from "@mui/material";

export default function BreedImages() {
  const { id } = useParams<{ id: string }>();
  const [images, setImages] = useState<Images[]>([]);

  useEffect(() => {
    axios(
      `https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=10`,
      {
        headers: {
          "x-api-key":
            "live_EdlJFuMLRoMsQzv7bH5jUSLnNAuc9zCuPflHCY0a49PriyJPr7C9FhNbCqBMuiXJ",
        },
      }
    ).then((response) => {
      setImages(response.data);
    });
  }, [id]);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Breed Images
      </Typography>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={`${image.url}?width=300&height=300&fit=crop&auto=format`}
                alt={`Breed Image ${image.id}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
