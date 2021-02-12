/**@jsxImportSource @emotion/core jsx */
import { css } from "@emotion/core";

function AnchorImage({ src, alt, href }) {
    return (
        <a
            href={href ? href : "#"}
            css={css`
                margin: 0 1.5rem;
            `}
        >
            <img src={src} alt={alt} />
        </a>
    );
}

export function SocialTabs() {
    return (
        <section>
            <AnchorImage src="icon-facebook.svg" alt="facebook" />
            <AnchorImage src="icon-pinterest.svg" alt="pinterest" />
            <AnchorImage src="icon-instagram.svg" alt="instagram" />
        </section>
    );
}
