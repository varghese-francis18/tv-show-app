import { StarFill, Star, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  const starList = [];
  const fullStars = Math.floor(rating);
  const halfStars = rating - parseInt(rating);
  const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);
  for (let i = 1; i <= fullStars; i++) {
    starList.push(<StarFill key={`star-fill` + i} />);
  }
  if (halfStars) {
    starList.push(<StarHalf key={`star-half` + halfStars} />);
  }
  for (let i = 1; i <= emptyStars; i++) {
    starList.push(<Star key={`star-empty` + i} />);
  }
  return <div>{starList}</div>;
}
