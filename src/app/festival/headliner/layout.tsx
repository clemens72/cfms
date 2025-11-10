import { Metadata } from "next";
import React from "react";

// Optional metadata for the /festival route segment
export const metadata: Metadata = {
  title: "Columbus Folk Music Society | Richard Shindell",
  description: "Richard Shindell, headliner of the 2026 festival!",
};

export default function HeadlinerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}