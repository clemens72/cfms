import { Metadata } from "next";
import React from "react";

// Optional metadata for the /festival route segment
export const metadata: Metadata = {
  title: "Columbus Folk Music Society | Festival",
  description: "Join us for the annual three-day Columbus Folk Festival!",
};

export default function FestivalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}