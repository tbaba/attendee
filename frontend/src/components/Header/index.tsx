import React from "react";
import { Link } from "react-router-dom";
import { UserStatus } from "./UserStatus";

export function Header() {
  return (
    <header className="md:container md:mx-auto py-3 mb-3 flex justify-between">
      <h1 className="text-3xl font-bold underline">
        <Link to="/">Attendee</Link>
      </h1>
      <UserStatus />
    </header>
  );
}
