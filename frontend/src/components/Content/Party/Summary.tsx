import { Party } from "../../models/Party";

export function Summary({ party }: { party: Party }) {
  return (
    <div className="party" key={party.id}>
      <header>
        <h2>{party.title}</h2>
      </header>
      <section>
        {party.description}
      </section>
      <footer>
        {party.startedAt}
      </footer>
    </div>
  );
}
