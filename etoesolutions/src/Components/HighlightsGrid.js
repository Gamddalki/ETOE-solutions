import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.$columns},
    minmax(220px, 1fr)
  );
  gap: 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$hasImage ? "column" : "row")};
  gap: 18px;
  align-items: ${(props) => (props.$hasImage ? "flex-start" : "flex-start")};
  background: #fff;
  padding: ${(props) => (props.$hasImage ? "25px" : "20px")};
  border: 1px solid ${(props) => props.theme.colors.border};
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 100%;
    padding: 20px auto;
  }
`;

const IconWrap = styled.div`
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(26, 60, 111, 0.08);
  color: ${(props) => props.theme.colors.primary};
`;

const ImageWrap = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(26, 60, 111, 0.05);

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.span`
  color: ${(props) => props.theme.colors.overlay};
  font-size: 15px !important;
  line-height: 1.2 !important;
  text-align: left !important;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 13px !important;
  }
`;

const Title = styled.h4`
  margin: 0;
  font-size: ${(props) => (props.$hasSubtitle ? "22px" : "18px")} !important;
  font-weight: 500 !important;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: ${(props) => (props.$hasSubtitle ? "18px" : "15px")} !important;
  }
`;

const Body = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.headerSubText};

  a {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
      text-decoration: underline;
    }
  }
`;

function HighlightsGrid({ items, columns = 2 }) {
  return (
    <Grid $columns={columns}>
      {items.map((item) => {
        const IconComponent = item.icon;
        const hasImage = !!item.image;
        const hasIcon = !!IconComponent;

        return (
          <Card key={item.title} $hasImage={hasImage}>
            {hasImage ? (
              <ImageWrap>
                <img src={item.image} alt={item.imageAlt || item.title} />
              </ImageWrap>
            ) : hasIcon ? (
              <IconWrap>
                <IconComponent size={item.iconSize || 22} />
              </IconWrap>
            ) : null}

            <Content>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
              <Title $hasSubtitle={!!item.subtitle}>{item.title}</Title>
              {item.description && <Body>{item.description}</Body>}
            </Content>
          </Card>
        );
      })}
    </Grid>
  );
}

export default HighlightsGrid;
