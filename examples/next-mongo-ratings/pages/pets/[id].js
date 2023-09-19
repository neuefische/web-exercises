import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import Flex from "@/components/Layout/Flex";
import Column from "@/components/Layout/Column";
import Card from "@/components/Layout/Card";
import Loader from "@/components/Layout/Loader";
import Rating from "@/components/Rating";
import RatingForm from "@/components/Forms/RatingForm";
import ActionButton from "@/components/Layout/ActionButton";
import useRatings from "@/hooks/useLocalRatings";
import { getAverageRating } from "@/lib/utils";
import { createRating, removeRating } from "@/lib/api";

const RatingsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export default function Pet() {
  const [isRequesting, setRequesting] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const {
    data: pet,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/pets/${id}` : null);
  const { getLocalRating, removeLocalRating, addLocalRating } = useRatings();

  if (!pet || isLoading) {
    return <Loader />;
  }

  const { name, type, species, age, image, ratings } = pet;

  const userRating = getLocalRating(id, ratings);

  async function onDeleteRating() {
    setRequesting(true);
    try {
      await removeRating({
        pet_id: id,
        rating_id: userRating._id,
      });
      removeLocalRating(userRating._id);
      mutate();
    } catch (error) {
      console.log("Pet:onDeleteRating", error);
      alert("Error deleting rating");
    }
    setRequesting(false);
  }

  async function onSubmit(data) {
    setRequesting(true);
    try {
      const rating = await createRating({
        id: pet._id,
        ...data,
      });
      addLocalRating({ pet_id: pet._id, rating_id: rating._id });
      mutate();
    } catch (error) {
      console.log("Pet:onSubmit", error);
      alert("Error submitting rating!");
    }
    setRequesting(false);
  }

  return (
    <Column width="700px" padding="1rem">
      <Card padding="2rem" direction="column" gap="3rem">
        <Flex as="header" direction="column" gap="1.5rem">
          <Flex as="h1" justifyContent="space-between" flex={1}>
            <span>
              {name}, {age}y
            </span>
          </Flex>
          <Flex direction="column" justifyContent="center" gap=".25rem">
            <strong style={{ textTransform: "capitalize" }}>{type}</strong>
            <span>{species}</span>
          </Flex>

          <span
            role="img"
            aria-label="Pet picture"
            style={{ fontSize: "10rem", alignSelf: "center" }}
          >
            {image}
          </span>
        </Flex>
        {!userRating ? (
          <RatingForm pet={pet} onSubmit={onSubmit} disabled={isRequesting} />
        ) : (
          <Flex as="section" direction="column">
            <h2>Your Rating</h2>
            <p>
              You already rated {name} with{" "}
              <strong>{userRating.value}/5</strong>.
            </p>
            <ActionButton disabled={isRequesting} onClick={onDeleteRating}>
              Undo
            </ActionButton>
          </Flex>
        )}
        <Flex as="section" direction="column">
          <h2>
            Ratings ({getAverageRating(ratings)} / 5), {ratings.length} ratings
          </h2>
          <RatingsList>
            {ratings
              .filter((x) => x._id !== userRating?._id)
              .map((rating) => (
                <li key={rating._id}>
                  <Rating {...rating} rated />
                </li>
              ))}
          </RatingsList>
        </Flex>
      </Card>
    </Column>
  );
}
