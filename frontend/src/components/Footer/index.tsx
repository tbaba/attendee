import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-3 mb:mx-auto">
      <div className="flex justify-center">
        <Link to="/about">About</Link>
      </div>
      <div className="flex justify-center">
        Copyright 2022 tbaba.
      </div>
    </footer>
  );
}
