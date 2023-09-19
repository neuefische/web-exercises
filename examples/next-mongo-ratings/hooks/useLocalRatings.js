import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

export default function useLocalRatings() {
  const [ratings, setRatings] = useLocalStorage("ratings", []);

  function addLocalRating({ pet_id, rating_id }) {
    setRatings([...ratings, { pet_id, rating_id }]);
  }

  function removeLocalRating(id) {
    setRatings(ratings.filter((x) => x.rating_id !== id));
  }

  function getLocalRating(id, allRatings) {
    const rating = ratings.find(({ pet_id }) => pet_id === id);
    if (!rating) {
      return;
    }
    return allRatings.find((x) => x._id === rating.rating_id);
  }

  function isPetRated(id) {
    return !!ratings.find(({ pet_id }) => pet_id === id);
  }

  return { addLocalRating, removeLocalRating, getLocalRating, isPetRated };
}
