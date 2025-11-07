import BodyWrapper from "../../Components/BodyWrapper";
import TextBlock from "../../Components/TextBlock";
import SmallCardBoard from "../../Components/SmallCard";
import {
  FiDatabase,
  FiCloud,
  FiHome,
  FiServer,
  FiSettings,
} from "react-icons/fi";
import HighlightsGrid from "../../Components/HighlightsGrid";

function Cloud() {
  const cloudServices = [
    {
      icon: FiDatabase,
      title: "DBCS",
      subtitle: "Database Cloud Service",
      description:
        "업계 최고의 성능과 안전성을 지향하는 오라클 데이터베이스를 오직 오라클만이 제공할 수 있는 특화된 서비스와 유연한 가격 정책으로 제공합니다. 다양한 배포 선택사항을 통해 사용 사례에 적합한 비용과 기능 수준에서 시작하고, 이후 변화하는 요구사항에 유연하게 대응할 수 있습니다.",
    },
    {
      icon: FiCloud,
      title: "ATP",
      subtitle: "Autonomous Transaction Processing",
      description:
        "고성능 데이터베이스 운영과 보안의 복잡성을 제거하고, 미션 크리티컬 애플리케이션의 요구를 즉시 충족하도록 설계된 클라우드 데이터베이스 서비스입니다.",
    },
    {
      icon: FiHome,
      title: "ADW+OAC",
      subtitle: "Autonomous Data Warehouse & Oracle Analytics Cloud",
      description:
        "탄력적으로 확장되고 빠른 쿼리 성능을 제공하는 완전 자율형 데이터베이스로, 관리 부담 없이 손쉽게 사용할 수 있습니다. Oracle Analytics Cloud와 연계해 언제 어디서나 데이터를 빠르게 분석할 수 있습니다.",
    },
    {
      icon: FiServer,
      title: "OCI",
      subtitle: "Oracle Cloud Infrastructure",
      description:
        "퍼블릭 클라우드의 탄력성과 온프레미스 인프라의 제어·보안을 결합해 고성능·비용 효율적인 인프라 서비스를 제공합니다. 기존 업무는 물론 최신 클라우드 개발까지 지원하도록 설계되었습니다.",
    },
    {
      icon: FiSettings,
      title: "OMC",
      subtitle: "Oracle Management Cloud",
      description:
        "애플리케이션과 인프라 모니터링·관리를 자동화하여 인적 부담을 줄이고, 온프레미스부터 하이브리드·멀티 클라우드까지 폭넓은 환경을 통합적으로 운영할 수 있도록 지원합니다.",
    },
  ];

  const autonomousFeatures = [
    {
      title: "SELF-DRIVING",
      content:
        "몇 번의 클릭 만으로 손쉬운 Provisioning ∙ 보안, 모니터링, 백업, 복구, 문제 해결 ∙ 실행 중 자동으로 업그레이드 및 패치 ∙ 자체 튜닝을 위한 머신 러닝 적용",
    },
    {
      title: "SELF-SECURING",
      content:
        "외부 공격과 악의적 내부 사용자들로부터 자동으로 데이터베이스를 보호 ∙ 모든 데이터의 자동 암호화, Oracle Data Safe ∙ 자동 보안 패치",
    },
    {
      title: "SELF-REPAIRING",
      content:
        "모든 다운타임으로부터 자동화된 보호 ∙ AI를 이용해 전례 없는 수준의 신뢰성과 성능 제공 ∙ 95.995% 가용성",
    },
  ];

  return (
    <>
      <BodyWrapper pageTitle="클라우드" pageSubtitle="Oracle Cloud">
        <div>
          <TextBlock blockTitle="기술 지원 방식">
            <span>
              업계 최고의 성능과 안전성을 지향하는 오라클 데이터 베이스를 오직
              오라클만이 제공할 수 있는 특화된 서비스와 유연한 가격 정책으로
              제공하는 오라클 데이터베이스 클라우드 서비스입니다. 다양한 배포
              선택사항을 제공하며 이러한 선택사항을 통해 사용자의 사용 사례에
              적합한 비용 및 기능 수준에서 시작할 수 있으며, 이후 시간의 흐름에
              따른 요구사항의 변화에 맞출 수 있는 유연성을 확보하게 됩니다.
              이투이솔루션즈는 오라클의 협력사로서 20여 년간 축적한 오라클
              인프라 분야 전문성을 바탕으로 오라클 클라우드 파트너로서 최적화된
              클라우드 서비스를 제공합니다.
            </span>
            <SmallCardBoard cards={autonomousFeatures} />
          </TextBlock>

          <TextBlock blockTitle="Oracle Cloud 서비스">
            <HighlightsGrid items={cloudServices} columns={2} />
          </TextBlock>
        </div>
      </BodyWrapper>
    </>
  );
}

export default Cloud;
