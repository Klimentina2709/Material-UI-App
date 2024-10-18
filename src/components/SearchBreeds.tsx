import { TextField } from "@mui/material";

interface Props {
  search: string;
  setSearchTerm: (term: string) => void;
}

const Search = ({ search, setSearchTerm }: Props) => {
  return (
    <TextField
      label="Search Breeds"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
