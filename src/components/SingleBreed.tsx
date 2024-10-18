import { Button, Card, CardContent, Typography } from "@mui/material";
import { Breed } from "../types";
import { Link } from "react-router-dom";

interface Props {
  breed: Breed;
}

export default function SingleBreed({ breed }: Props) {
  return (
    <Card sx={{ margin: "20px 0" }}>
      <CardContent>
        <Typography variant="h5">{breed.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {breed.description}
        </Typography>

        <Button
          sx={{ margin: "10px 0", padding: "0" }}
          size="small"
          component={Link}
          to={`/images/${breed.id}`}
        >
          View images
        </Button>
      </CardContent>
    </Card>
  );
}
