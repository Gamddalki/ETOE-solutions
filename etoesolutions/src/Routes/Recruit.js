import { memo, useMemo } from "react";
import BodyWrapper from "../Components/BodyWrapper";
import CardBoard from "../Components/CardBoard";

const RECRUIT_CARDS = [
  {
    title: "기본을 지키는 사람",
    image: "/img/basic.png",
    content: (
      <>
        <span>
          <b>함께 배워가며 성장하는 동료</b> <br />
          겸손히 경청하고 서로의 개성을 존중해요.
        </span>
        <span>
          <b>신뢰로 연결된 팀플레이어</b>
          <br />
          작은 약속도 지키며 책임감을 행동으로 보여줘요.
        </span>
      </>
    ),
  },
  {
    title: "준비된 사람",
    image: "/img/ready.png",
    content: (
      <>
        <span>
          <b>오라클과 함께 역량을 키우는 전문가</b>
          <br />
          산업의 흐름을 이해하고, 기술로 가치를 만들어요.
        </span>
        <span>
          <b>넓은 시야로 미래를 설계하는 인재</b> <br />
          빠르게 변화하는 국내 IT 환경 속에서 전략적으로 일해요.
        </span>
      </>
    ),
  },
  {
    title: "도전하는 사람",
    image: "/img/trial.png",
    content: (
      <>
        <span>
          <b>변화를 기회로 만드는 인재</b> <br />
          새로운 기술과 방법을 기꺼이 시도해요.
        </span>
        <span>
          <b>긍정의 힘으로 함께 가는 동반자</b> <br />
          어려움 속에서도 웃음을 잃지 않아요.
        </span>
      </>
    ),
  },
];

function Recruit() {
  const recruitCards = useMemo(() => RECRUIT_CARDS, []);

  return (
    <BodyWrapper pageTitle="우리가 함께하고 싶은 사람" pageSubtitle="">
      <span>
        이투이솔루션즈는 투철한 서비스 정신을 바탕으로 고객 감동을 실현하는
        회사가 되고자 끊임없이 노력하고 있습니다. Data Management, 데이터
        아키텍처(DA), EDW, 성능 진단 및 고도화 컨설팅 분야에 있어서 최고의 전문
        인력을 갖추고 있으며, 수많은 프로젝트를 통해 쌓은 경험과 지식으로 고객의
        데이터베이스 활용과 글로벌 경쟁력 강화를 위해 최고의 기술력과 서비스를
        제공하고 있습니다. 우리의 여정에 함께할 사람을 찾습니다.
      </span>
      <CardBoard cards={recruitCards} />
    </BodyWrapper>
  );
}

export default memo(Recruit);
