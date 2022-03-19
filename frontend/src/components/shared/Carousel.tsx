import React from "react";

export function Carousel({ children }: { children: React.ReactNode}) {
  return (
    <div className="carousel md:container md:mx-auto flex flex-row">
      {children}
    </div>
  )
}
