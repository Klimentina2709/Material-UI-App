import { Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Breed } from "../types";
import SingleBreed from "./SingleBreed";
import Search from "./SearchBreeds";

export default function Breeds() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    axios(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`, {
      headers: {
        "x-api-key":
          "live_EdlJFuMLRoMsQzv7bH5jUSLnNAuc9zCuPflHCY0a49PriyJPr7C9FhNbCqBMuiXJ",
      },
    }).then((response) => {
      setBreeds((prevBreeds) => {
        const updatedBreeds = [...prevBreeds, ...response.data];
        const uniqueBreeds = updatedBreeds.filter(
          (breed, index, self) =>
            index === self.findIndex((b) => b.id === breed.id)
        );
        return uniqueBreeds;
      });
    });
  }, [page]);

  useEffect(() => {
    if (searchValue) {
      const filtered = breeds.filter((breed) =>
        breed.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredBreeds(filtered);
    } else {
      setFilteredBreeds(breeds);
    }
  }, [searchValue, breeds]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container fixed>
      <Typography sx={{ margin: "20px 0" }} variant="h4">
        Breeds
      </Typography>
      <Search search={searchValue} setSearchTerm={setSearchValue} />

      {filteredBreeds.map((breed) => (
        <SingleBreed key={breed.id} breed={breed} />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        <Button
          sx={{ width: "auto" }}
          variant="contained"
          onClick={loadMore}
          disabled={!!searchValue}
        >
          Show more
        </Button>
      </Box>
    </Container>
  );
}
