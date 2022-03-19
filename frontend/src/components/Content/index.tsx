import { useQuery } from "@apollo/client";
import { Party } from "../models/Party";
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
    <div className="md:container md:mx-auto flex flex-row">
      {data.parties.map((party) => (
        <Summary party={party} key={party.id} />
      ))}
    </div>
  );
}

export function useContent() {
  const { data, loading, error } =
    useQuery<{ parties: Party[] }>(GET_PARTIES_SUMMARY);

  return { data, loading, error };
}
