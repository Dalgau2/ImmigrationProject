import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
const MyRating = () => {
  return (
    <Stack spacing={1}>
      <Rating
        sx={{ fontSize: "60px",color:"white" }}
        name="half-rating-read"
        defaultValue={5}
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Stack>
  );
};
export default MyRating;
