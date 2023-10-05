export function getAverageRating(ratings) {
  return (
    ratings.reduce((memo, { value }) => memo + value, 0) / ratings.length
  ).toFixed(1);
}
