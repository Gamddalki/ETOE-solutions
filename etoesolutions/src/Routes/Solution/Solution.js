import BodyWrapper from "../../Components/BodyWrapper";
import TextBlock from "../../Components/TextBlock";
import SmallCardBoard from "../../Components/SmallCard";
import Timeline from "../../Components/Timeline";

function Solution() {
  const supportFeatures = [
    {
      title: "24x7x365",
      content:
        "2시간 이내 응답 / 온사이트(On-site), 전화, 이메일 등 고객사의 상황에 적합한 채널 판단 후 서비스 제공",
    },
    {
      title: "서비스",
      content:
        "설치, 업그레이드, 튜닝, 장애 지원, 정기 점검 (버그 리포트 및 주요 변경 사항 공유)",
    },
    {
      title: "부가 서비스",
      content: "운영 매뉴얼 제공, 모니터링 제공, 비상 연락망 체제 지원",
    },
  ];

  const process = [
    {
      label: "01. 현황 진단",
      title: "핵심 이슈 파악",
      body: "데이터 수집, 인터뷰, 로그 분석을 통해 성능·보안·운영 측면의 리스크를 구조적으로 도출합니다.",
    },
    {
      label: "02. 설계 & 계획",
      title: "로드맵 수립",
      body: "비즈니스 목표와 예산을 반영하여 최적의 기술 대안을 도출하고, 실행 우선순위를 정의합니다.",
    },
    {
      label: "03. 실행",
      title: "전담팀 투입",
      body: "전문 엔지니어가 직접 튜닝·마이그레이션·자동화 구축을 수행하며, 단계별 품질 검증을 병행합니다.",
    },
    {
      label: "04. 운영 고도화",
      title: "지속 관리",
      body: "정기 점검, 모니터링, 교육을 통해 조직 내 운영 역량을 강화하고, 성과 지표를 주기적으로 점검합니다.",
    },
  ];

  return (
    <>
      <BodyWrapper pageTitle="기술지원" pageSubtitle="Technical Support">
        <div>
          <span>
            이투이솔루션즈는 오라클 인프라 솔루션 분야 최고의 파트너(Oracle
            Partner Forum Korea Partner of the Year - Autonomous Database
            수상)로 온프레미스(On-premise)와 클라우드(Cloud)를 아우르는 인프라
            시스템 컨설팅을 합니다. 2백여 고객사 경험을 바탕으로 고객의
            요구사항을 정확히 파악하여, 기업의 비즈니스 변화에 신속하게 대응
            가능한 인프라 시스템을 설계하고 세팅합니다.
          </span>
          <TextBlock firstBlock>
            <span>
              제품 설치 후 무상 보증기간 동안 시스템 업그레이드, 모니터링,
              버그리포트 작성, 장애 지원 등의 기술 지원 서비스가 제공됩니다.
              무상 보증기간 완료 시점부터는 연 단위의 별도 유지 보수 계약을 통해
              최적화된 기술 지원 서비스를 제공합니다.
            </span>
            <SmallCardBoard cards={supportFeatures} />
          </TextBlock>

          <TextBlock blockTitle="기술 지원 방식">
            <Timeline items={process} horizontal />
          </TextBlock>
        </div>
      </BodyWrapper>
    </>
  );
}

export default Solution;
