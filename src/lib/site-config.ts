import { Metadata } from "next";

// =================================================================================
// 1. BASE CONFIGURATION
// =================================================================================

const BASE_URL = process.env.NEXT_PUBLIC_URL || "https://othakk.github.io";

export const siteConfig = {
  name: "Om Thakkar",
  username: "othakk",
  description: "CS student at UW-Madison. Founder @ Homey. Building things that matter.",
  url: BASE_URL,
  ogImage: "/og-image.png?v1",
  links: {
    linkedin: "https://www.linkedin.com/in/omthak",
    github: "https://github.com/othakk",
  },
};

// =================================================================================
// 2. METADATA GENERATOR
// =================================================================================

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  icons?: string | Array<any>;
  noIndex?: boolean;
}

export function constructMetadata({
  title = "Om Thakkar | Portfolio",
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s`,
    },
    description,

    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: "Om Thakkar",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: description,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    icons: {
      icon: icons,
      shortcut: icons,
      apple: icons,
    },

    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
