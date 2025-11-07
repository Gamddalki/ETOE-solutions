import styled from "styled-components";
import BodyWrapper from "../../Components/BodyWrapper";
import {
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiAlertTriangle,
  FiCpu,
  FiLayers,
} from "react-icons/fi";
import HighlightsGrid from "../../Components/HighlightsGrid";

const TwoColumn = styled.div`
  display: flex;
  gap: 48px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 40px;
    width: 100%;
    align-items: center;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    gap: 10px;
  }
`;

const ImageBox = styled.div`
  flex: 1 1 320px;
  min-width: 260px;
  max-width: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 4px 24px ${(props) => props.theme.colors.shadow};
    object-fit: cover;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    max-width: 100%;
    align-items: center;
    img {
      width: 100%;
      height: 300px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    img {
      height: 200px;
    }
  }
`;

const TextBox = styled.div`
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function Consulting() {
  const highlights = [
    {
      icon: FiUsers,
      title: "전담팀 기반 서비스",
      description:
        "고객 비즈니스와 운영 환경을 빠르게 파악하는 전담 PM과 전문 컨설턴트 팀이 상시 대응합니다.",
    },
    {
      icon: FiTrendingUp,
      title: "시스템 가용성 극대화",
      description:
        "제품 영역별 전문가의 정밀 진단을 통해 병목을 제거하고, 안정적인 성능을 설계합니다.",
    },
    {
      icon: FiShield,
      title: "사전 예방 중심 운영",
      description:
        "버전 관리·보안 패치 정책을 체계화하여 장애를 사전에 차단하고 운영 리스크를 최소화합니다.",
    },
    {
      icon: FiAlertTriangle,
      title: "신속한 장애 대응",
      description:
        "전담 및 후선 조직이 이중으로 지원하여 장애 발생 시 골든타임 내에 문제를 해결합니다.",
    },
    {
      icon: FiLayers,
      title: "맞춤형 서비스 패키지",
      description:
        "온프레미스·클라우드 혼합 환경을 고려한 최적의 컨설팅 패키지를 단계별로 구성합니다.",
    },
    {
      icon: FiCpu,
      title: "지속 가능한 기술 전수",
      description:
        "최신 기술 트렌드와 운영 노하우를 내재화할 수 있도록 교육과 코칭을 병행합니다.",
    },
  ];

  return (
    <>
      <BodyWrapper pageTitle="컨설팅" pageSubtitle="Technical Consulting">
        <span>
          이투이솔루션즈는 온프레미스(On-premise)와 클라우드(Cloud)의 복합적인
          컨설팅을 제공합니다. 2백여 고객사 경험을 바탕으로 고객의 요구사항을
          정확히 파악하여, 기업의 비즈니스 변화에 신속하게 대응 가능한 인프라
          시스템을 설계하고 세팅합니다. 그리고 다양한 형태의 맞춤용 서비스
          항목을 기반으로, 고객사의 환경과 업무를 이해하는 전담팀에 의해 고객의
          다양한 요구와 문제점을 신속히 해결하며, 효과적인 기술 전수를 통해
          고객만족도 향상 및 자체 운영 능력을 배양합니다. 또한 당사의 서비스를
          계획, 구성하고 수행, 관리 및 전담팀 운영을 총괄하는 전담 매니저에 의해
          일관성 있는 서비스(Pro-Active Management Services)를 제공합니다. 실무
          경험이 풍부한 컨설턴트가 제공하는 다양한 데이터베이스 컨설팅이 고객의
          데이터를 정확하고 우수한 정보로 만들어 줄 것입니다.
        </span>
        <TwoColumn>
          <ImageBox>
            <img src="/img/consulting.jpg" alt="컨설팅" />
          </ImageBox>
          <TextBox>
            <HighlightsGrid items={highlights} />
          </TextBox>
        </TwoColumn>
      </BodyWrapper>
    </>
  );
}

export default Consulting;
