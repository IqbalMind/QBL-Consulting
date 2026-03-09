import { useEffect } from "react";

/**
 * useSEO — lightweight per-page SEO hook.
 * Sets document.title and updates (or creates) the meta description tag.
 * Optionally sets a noindex tag for pages like 404.
 */
export default function useSEO({ title, description, noindex = false }) {
    useEffect(() => {
        // Title
        if (title) document.title = title;

        // Meta description
        let meta = document.querySelector("meta[name='description']");
        if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
        }
        if (description) meta.content = description;

        // Noindex
        let robots = document.querySelector("meta[name='robots']");
        if (noindex) {
            if (!robots) {
                robots = document.createElement("meta");
                robots.name = "robots";
                document.head.appendChild(robots);
            }
            robots.content = "noindex, nofollow";
        }

        // Cleanup: restore default on unmount
        return () => {
            document.title = "QBL Consulting — Enterprise Business Solutions Indonesia";
            if (meta) meta.content = "QBL Consulting is Indonesia's premier enterprise advisory firm delivering Business Strategy, Digital Transformation, and Operations Excellence.";
            if (noindex && robots) robots.content = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
        };
    }, [title, description, noindex]);
}
