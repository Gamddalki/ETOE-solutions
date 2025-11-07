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
  gap: 5px;
`;

const Subtitle = styled.span`
  font-size: 0.8rem !important;
  color: ${(props) => props.theme.colors.overlay};
  line-height: 1.1 !important;
  text-align: left !important;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`;

const Body = styled.div`
  font-size: 0.95rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.headerSubText};
`;

function HighlightsGrid({ items, columns = 2 }) {
  return (
    <Grid $columns={columns}>
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <Card
            key={item.title}
            $hasImage={Boolean(item.image)}
            $hasIcon={Boolean(IconComponent)}
          >
            {item.image ? (
              <ImageWrap>
                <img src={item.image} alt={item.imageAlt || item.title} />
              </ImageWrap>
            ) : IconComponent ? (
              <IconWrap>
                <IconComponent size={item.iconSize || 22} />
              </IconWrap>
            ) : null}

            <Content>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
              <Title>{item.title}</Title>
              {item.description && <Body>{item.description}</Body>}
            </Content>
          </Card>
        );
      })}
    </Grid>
  );
}

export default HighlightsGrid;
