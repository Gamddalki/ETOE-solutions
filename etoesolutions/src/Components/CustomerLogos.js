import styled from "styled-components";
import { memo } from "react";

const GRID_COLUMNS = {
  desktop: "repeat(auto-fill, minmax(120px, 1fr))",
  mobile: "repeat(auto-fill, minmax(50px, 1fr))",
};

const LOGO_HEIGHT = {
  desktop: "35px",
  mobile: "30px",
};

const LOGO_IMAGE_MAX_HEIGHT = "30px";

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: ${GRID_COLUMNS.desktop};
  gap: 30px;
  margin-top: 30px;
  padding: 20px 0;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 20px;
    margin-top: 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-top: 15px;
    grid-template-columns: ${GRID_COLUMNS.mobile};
    gap: 15px;
  }
`;

const LogoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${LOGO_HEIGHT.desktop};

  img {
    max-width: 100%;
    max-height: ${LOGO_IMAGE_MAX_HEIGHT};
    width: auto;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    height: ${LOGO_HEIGHT.mobile};
  }
`;

function CustomerLogos({ logos }) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <LogosGrid>
      {logos.map((logo, index) => {
        const logoKey = logo.id || logo.path || `logo-${index}`;
        const logoAlt = logo.name || "고객사 로고";

        return (
          <LogoItem key={logoKey}>
            <img
              src={logo.path}
              alt={logoAlt}
              loading="lazy"
              decoding="async"
            />
          </LogoItem>
        );
      })}
    </LogosGrid>
  );
}

export default memo(CustomerLogos);
