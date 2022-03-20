import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PARTIES_SUMMARY } from "../../models/queries";
import { Party } from "../../models/Party";

export function Summary() {
  const { data, loading, error } = useSummary();
  if (error) {
    return null;
  }
  if (loading) {
    return <>Loading...</>;
  }
  if (data == null) {
    return null;
  }
  const { parties } = data;

  return (
    <div className="party-summaries mt-5 container  md:mx-auto">
      <div className="border-b mb-2">
        <h2 className="text-xl font-semibold">最新のDJイベント一覧</h2>
      </div>
      {parties.map((party) => (
        <SummaryItem party={party} key={`summary-item-${party.id}`} />
      ))}
    </div>
  );
}

function SummaryItem({ party }: { party: Party }) {
  return (
    <article className="rounded bg-box-background-thin mb-3 p-3 mx-auto w-8/12">
      <div className="flex justify-between">
        <div>
          <header>
            <h1 className="text-lg">{party.title}</h1>
          </header>
          <section>{party.description}</section>
        </div>
        <div>
          <img src="picture" className="h-full" />
        </div>
      </div>
    </article>
  );
}

export function useSummary() {
  const { data, loading, error } =
    useQuery<{ parties: Party[] }>(GET_PARTIES_SUMMARY);

  return { data, loading, error };
}
