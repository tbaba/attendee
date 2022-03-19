import { Party } from "../../models/Party";

export function Summary({ party }: { party: Party }) {
  return (
    <div className="p-3 mr-2.5 bg-box-background text-box-background-text basis-1/4 rounded-lg" key={party.id}>
      <header>
        <h2 className="text-lg font-semibold">{party.title}</h2>
      </header>
      <footer>
        {party.startedAt}
      </footer>
    </div>
  );
}
