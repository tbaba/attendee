import { gql } from "@apollo/client";

export const GET_PARTIES_SUMMARY = gql`
  query getPartiesSummary {
    parties {
      id
      title
      started_at
    }
  }
`;
