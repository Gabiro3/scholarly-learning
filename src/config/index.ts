import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for astra a ai powered website builder suggest something unique and catchy don't use the same words of ai powered website builder give a unique name
        default: "Scholarly - Virtual learning platform",
        template: `%s | Scholarly`
    },
    description: "Scholarly is an online platform designed to help university students collaborate seamlessly on assignments, group projects, and discussions using text, audio, and video chat.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Scholarly - Virtual learning platform",
        description: "Scholarly is an online platform designed to help university students collaborate seamlessly on assignments, group projects, and discussions using text, audio, and video chat.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Scholarly - Virtual learning platform",
        description: "Scholarly is an online platform designed to help university students collaborate seamlessly on assignments, group projects, and discussions using text, audio, and video chat.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://scholarly-learning.vercel.app"),
};
