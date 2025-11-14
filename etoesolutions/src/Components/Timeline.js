import styled from "styled-components";

const TimelineContainer = styled.div`
  margin: 3rem 0;
  position: relative;
  display: ${(props) => (props.$horizontal ? "flex" : "block")};
  justify-content: ${(props) =>
    props.$horizontal ? "space-between" : "flex-start"};
  align-items: ${(props) => (props.$horizontal ? "flex-start" : "stretch")};
  padding: ${(props) => (props.$horizontal ? "60px 0" : "0")};

  &::before {
    content: "";
    position: absolute;
    ${(props) =>
      props.$horizontal
        ? `
      top: 60px;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${props.theme.colors.primary},
        ${props.theme.colors.secondary},
        ${props.theme.colors.hover}
      );
    `
        : `
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(
        180deg,
        ${props.theme.colors.primary},
        ${props.theme.colors.secondary},
        ${props.theme.colors.hover}
      );
    `}
    z-index: 1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    padding: 0;
    margin: 2rem 0;
    position: relative;

    &::before {
      ${(props) =>
        props.$horizontal
          ? `
        content: "";
        position: absolute;
        left: 1.5rem;
        top: 0;
        bottom: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(
          180deg,
          ${props.theme.colors.primary},
          ${props.theme.colors.secondary},
          ${props.theme.colors.hover}
        );
      `
          : `
        left: 1.5rem;
      `}
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$horizontal ? "column" : "row")};
  align-items: ${(props) => (props.$horizontal ? "center" : "flex-start")};
  margin: ${(props) => (props.$horizontal ? "0" : "1.5rem 0")};
  position: relative;
  padding-left: ${(props) => (props.$horizontal ? "0" : "1.5rem")};
  min-height: ${(props) => (props.$horizontal ? "auto" : "120px")};
  flex: ${(props) => (props.$horizontal ? "1" : "none")};
  max-width: ${(props) => (props.$horizontal ? "250px" : "none")};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    max-width: 100%;
    width: 100%;
    margin: 1.5rem 0;
    padding-left: 1.5rem;
    min-height: auto;
  }
`;

const TimelineImage = styled.div`
  width: ${(props) => (props.$horizontal ? "80px" : "120px")};
  height: ${(props) => (props.$horizontal ? "80px" : "120px")};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px ${(props) => props.theme.colors.shadow};
  position: ${(props) => (props.$horizontal ? "relative" : "absolute")};
  ${(props) =>
    props.$horizontal
      ? `
    transform: translate(0, -50%);
    z-index: 2;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props.theme.colors.primary};
    margin-bottom: 1rem;
  `
      : `
    left: 0;
    top: 0;
    transform: translateX(-50%);
    z-index: 2;
    background: white;
    flex-shrink: 0;
  `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary}
    );
    border: 3px solid white;
    box-shadow: 0 2px 8px ${(props) => props.theme.colors.shadowHover};
    overflow: visible;
    position: absolute;
    left: 1.5rem;
    top: 0;
    transform: translateX(-50%);
    margin-bottom: 0;
    font-size: 0;

    img {
      display: none;
    }
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  max-width: ${(props) => (props.$horizontal ? "none" : "400px")};
  margin-left: ${(props) => (props.$horizontal ? "0" : "4rem")};
  margin-top: ${(props) => (props.$horizontal ? "-30px" : "0")};
  padding-top: ${(props) => (props.$horizontal ? "0" : "15px")};
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$horizontal ? "0.5rem" : "0")};
  text-align: ${(props) => (props.$horizontal ? "center" : "left")};

  .timeline-date,
  .timeline-label {
    font-size: ${(props) => (props.$horizontal ? "0.85rem" : "1rem")};
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
    margin-bottom: ${(props) => (props.$horizontal ? "0" : "0.3rem")};
    ${(props) => (props.$horizontal ? "letter-spacing: 0.06em;" : "")}
  }

  .timeline-title {
    font-size: ${(props) => (props.$horizontal ? "1.1rem" : "1.5rem")};
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
    margin-bottom: 0;
    line-height: 1.4;
    min-height: 2em;
  }

  .timeline-body {
    font-size: ${(props) => (props.$horizontal ? "0.95rem" : "inherit")};
    color: ${(props) => props.theme.colors.headerSubText};
    line-height: 1.55;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    margin-left: 2rem;
    max-width: 100%;
    padding-top: 0;
    margin-top: 0;
    text-align: left;

    .timeline-date,
    .timeline-label {
      font-size: 0.9rem;
    }

    .timeline-title {
      font-size: 1.2rem;
    }
  }
`;

function Timeline({ items, horizontal = false }) {
  return (
    <TimelineContainer $horizontal={horizontal}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.title || item.label || index}
          $horizontal={horizontal}
        >
          <TimelineImage $horizontal={horizontal}>
            {item.image ? (
              <img src={item.image} alt={item.title || item.label} />
            ) : (
              horizontal && index + 1
            )}
          </TimelineImage>
          <TimelineContent $horizontal={horizontal}>
            {item.date && <div className="timeline-date">{item.date}</div>}
            {item.label && <div className="timeline-label">{item.label}</div>}
            <div className="timeline-title">{item.title}</div>
            {item.body && <div className="timeline-body">{item.body}</div>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}

export default Timeline;
