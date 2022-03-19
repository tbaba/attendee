import { gql } from "@apollo/client";

export const GET_PARTIES_SUMMARY = gql`
  query getPartiesSummary {
    parties {
      id
      title
      description
      started_at
    }
  }
`;

export const GET_PARTIES_CAROUSEL_ITEM = gql`
  query getPartiesCarouselItem {
    parties {
      id
      title
      started_at
    }
  }
`;
