import styled from "styled-components";
import BodyWrapper from "../../Components/BodyWrapper";

const TimelineContainer = styled.div`
  margin: 3rem 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      180deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.hover}
    );
  }

  @media (max-width: 768px) {
    margin: 2rem 0;

    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  margin: 4rem 0;
  position: relative;
  padding-left: 1.5rem;

  @media (max-width: 768px) {
    margin: 2rem 0;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TimelineImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 20px ${(props) => props.theme.colors.shadow};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: white;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
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
    left: 20px;
    top: 50%;
    transform: translate(-50%, -50%);

    img {
      display: none;
    }
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  max-width: 400px;
  margin-left: 4rem;

  .timeline-date {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .timeline-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    margin-left: 2rem;
    max-width: 100%;

    .timeline-date {
      font-size: 0.9rem;
    }

    .timeline-title {
      font-size: 1.2rem;
    }
  }
`;

function Etoe() {
  const etoeTimeline = [
    {
      title: "IBK기업은행 통합 유지 보수 계약 체결",
      image: "/img/ibk.jpg",
      date: "2025년 10월",
    },
    {
      title: "Oracle MP(Managed Partner) 선정",
      image: "/img/oracle.png",
      date: "2006년 9월",
    },
    {
      title: "이투이솔루션즈(주) 설립",
      image: "/img/speclogo.png",
      date: "2004년 2월",
    },
  ];

  return (
    <>
      <BodyWrapper
        pageTitle="이투이솔루션즈(주)"
        pageSubtitle="ETOE solutions co. LTD."
      >
        <span>
          이투이솔루션즈는 데이터 매니지먼트(Data Management), 데이터
          아키텍처(DA, Data Architecture), 데이터 웨어하우스(EDW, Enterprise
          Data Warehouse), 성능 진단 및 고도화 컨설팅 분야에 있어서 최고의 전문
          인력을 갖추고 있으며, 수많은 프로젝트를 통해 쌓은 경험과 지식으로
          고객의 데이터베이스 활용과 글로벌 경쟁력 강화를 위해 최고의 기술력과
          서비스를 제공하고 있습니다. 앞으로도 고객과 더불어, 처음부터 끝까지
          완결된 서비스를 제공하여 성공적인 정보시스템 구축과 운영에 도움이 되는
          동반자로 함께 하겠습니다.
        </span>

        <TimelineContainer>
          {etoeTimeline.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineImage className="timeline-image">
                <img src={item.image} alt={item.title} />
              </TimelineImage>
              <TimelineContent className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </BodyWrapper>
    </>
  );
}

export default Etoe;
