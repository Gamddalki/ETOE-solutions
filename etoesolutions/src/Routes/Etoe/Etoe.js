import styled from "styled-components";
import BodyWrapper from "../../Components/BodyWrapper";
import Timeline from "../../Components/Timeline";
import TextBlock from "../../Components/TextBlock";
import CustomerLogos from "../../Components/CustomerLogos";

function Etoe() {
  const etoeTimeline = [
    {
      title: "IBK기업은행 통합 유지 보수 계약 체결",
      image: "/img/ibk.jpg",
      date: "2025년 10월",
    },
    {
      title: "KB국민은행 더 케이프로젝트 국외전산 차세대프로젝트 참여",
      image: "/img/kb.jpg",
      date: "2019년 5월",
    },
    {
      title: "GSITM GS리테일 편의점 신상품분류체계구축 프로젝트 수행",
      image: "/img/gsitm.png",
      date: "2018년 5월",
    },
    {
      title: "인천공항 3단계 경비보안 프로젝트 컨설팅 참여",
      image: "/img/incheon.jpg",
      date: "2016년 11월",
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

  const TimelineBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  const customerLogos = [
    { path: "/img/ibk.jpg", name: "IBK" },
    { path: "/img/ibklife.png", name: "IBK Life" },
    { path: "/img/ibksystem.webp", name: "IBK System" },
    { path: "/img/deutsch.png", name: "Deutsch" },
    { path: "/img/globalfm.png", name: "Global FM" },
    { path: "/img/sku.png", name: "SKU" },
    { path: "/img/starcredit.png", name: "Star Credit" },
    { path: "/img/gm.webp", name: "GM" },
    { path: "/img/guc.png", name: "GUC" },
    { path: "/img/hsu.jpg", name: "HSU" },
    { path: "/img/ycb.jpg", name: "YCB" },
    { path: "/img/iy.svg", name: "IY" },
    { path: "/img/jeil.webp", name: "Jeil" },
    { path: "/img/mirae.webp", name: "Mirae" },
    { path: "/img/osb.png", name: "OSB" },
    { path: "/img/pureun.png", name: "Pureun" },
    { path: "/img/kb.jpg", name: "KB" },
    { path: "/img/kdb.svg", name: "KDB" },
    { path: "/img/koreaexim.svg", name: "Korea Exim" },
    { path: "/img/kspo.png", name: "KSPO" },
    { path: "/img/samhwa.webp", name: "Samhwa" },
    { path: "/img/gsitm.png", name: "GSITM" },
    { path: "/img/incheon.jpg", name: "인천공항" },
    { path: "/img/samsung.png", name: "Samsung" },
    { path: "/img/sk.png", name: "SK" },
    { path: "/img/woori.svg", name: "Woori" },
    { path: "/img/mjrk.png", name: "MJRK" },
  ];

  return (
    <>
      <BodyWrapper
        pageTitle="이투이솔루션즈(주)"
        pageSubtitle="ETOE solutions co. LTD."
      >
        <div>
          <span>
            이투이솔루션즈는 데이터 매니지먼트(Data Management), 데이터
            아키텍처(DA, Data Architecture), 데이터 웨어하우스(EDW, Enterprise
            Data Warehouse), 성능 진단 및 고도화 컨설팅 분야에 있어서 최고의
            전문 인력을 갖추고 있으며, 수많은 프로젝트를 통해 쌓은 경험과
            지식으로 고객의 데이터베이스 활용과 글로벌 경쟁력 강화를 위해 최고의
            기술력과 서비스를 제공하고 있습니다. 앞으로도 고객과 더불어,
            처음부터 끝까지 완결된 서비스를 제공하여 성공적인 정보시스템 구축과
            운영에 도움이 되는 동반자로 함께 하겠습니다.
          </span>
          <TimelineBlock>
            <Timeline items={etoeTimeline} />
          </TimelineBlock>
          <TextBlock blockTitle="이투이솔루션즈(주) 주요 고객사">
            <CustomerLogos logos={customerLogos} />
          </TextBlock>
        </div>
      </BodyWrapper>
    </>
  );
}

export default Etoe;
