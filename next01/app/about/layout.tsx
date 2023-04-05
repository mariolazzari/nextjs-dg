import React from "react";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>About navbar</nav>
      <main>{children}</main>
    </>
  );
};

export default AboutLayout;
