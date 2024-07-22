import React from "react";
import "../../styles/ClientLayout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="client-container">
      <h1 className="main-title">Todo List</h1>
      <main>{children}</main>
    </section>
  );
}
