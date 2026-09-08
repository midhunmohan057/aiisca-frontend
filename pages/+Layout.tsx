import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "@components/Navbar"; 
import { color } from "@utilities/index"; 
import "../src/index.css"; // Correct path relative to pages/ directory

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#333",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          },
          success: {
            iconTheme: {
              primary: color?.PRIMARY_THEME || "#010080", 
              secondary: "#fff",
            },
          },
        }}
      />
      
      <Navbar />
      
      <main className="px-4 md:px-8 lg:px-12 py-6">
        <div style={{ margin: 0 }}>
          {children}
        </div>
      </main>
    </React.Fragment>
  );
}