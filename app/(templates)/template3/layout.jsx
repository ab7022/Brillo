// Layout.js
import React from "react";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={"min-w-screen"}>
       {children}
      </body>
    </html>
  );
}
