import { useQuery } from "@apollo/client";
import { Party } from "../models/Party";
import { GET_PARTIES_CAROUSEL_ITEM } from "../models/queries";
import { Carousel } from "../shared/Carousel";
import { CarouselItem } from "./Party/CarouselItem";
import { Summary } from "./Party/Summary";

export function Content() {
  const { data, loading, error } = useContent();
  if (error) {
    return null;
  }
  if (loading) {
    return <>Loading...</>;
  }
  if (data == null) {
    return null;
  }

  return (
    <>
      <Carousel>
        {data.parties.map((party) => (
          <CarouselItem party={party} key={`carousel-item-${party.id}`} />
        ))}
      </Carousel>
      <Summary />
    </>
  );
}

export function useContent() {
  const { data, loading, error } =
    useQuery<{ parties: Party[] }>(GET_PARTIES_CAROUSEL_ITEM);

  return { data, loading, error };
}
