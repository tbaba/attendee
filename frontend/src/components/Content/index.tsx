import { useQuery } from "@apollo/client";
import { Party } from '../models/Party';
import { GET_PARTIES_SUMMARY } from "../models/queries";
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
    {data.parties.map((party) => ( 
      <Summary party={party} key={party.id} />
    ))}
    </>
  )
}

export function useContent() {
  const { data, loading, error } = useQuery<{ parties: Party[] }>(GET_PARTIES_SUMMARY);

  return { data, loading, error };
}
