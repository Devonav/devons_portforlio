import React from "react";
import { Helmet } from "react-helmet-async";

interface MetaComponentProps {
  pageTitle: string;
  pageDescription: string;
  pageImage?: string;
}

const MetaComponent: React.FC<MetaComponentProps> = ({
  pageTitle,
  pageDescription,
  pageImage = "/og-image.png",
}) => {
  const fullTitle = pageTitle === "Home" ? "Portfolio" : `${pageTitle} | Portfolio`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
    </Helmet>
  );
};

export default MetaComponent;