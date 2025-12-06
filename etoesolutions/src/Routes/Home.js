import { useMemo, useCallback } from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BackgroundVid = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  width: 100%;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const BackgroundTitle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.homeOverlay};

  h1 {
    text-align: center;
    font-size: 55px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.header};
    @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 45px;
    }
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 30px;
    }
  }

  h3 {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.header};
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 15px;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.header};
  opacity: 0.9;
  display: inline-flex;

  svg {
    width: 22px;
    height: 22px;
    display: block;
  }
`;

const IntroSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  padding: 120px 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 120px 70px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 100px 30px;
  }
`;

const IntroGrid = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  transform: translateY(20px);
  opacity: 0;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 10px;
  }
`;

const IntroIcon = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin: 0 auto;
`;

const IntroTitle = styled.h3`
  margin: 0;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 20px;
  }
`;

const IntroContent = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.headerSubText};
`;

const NumSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.black};
  padding: 40px 300px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 80px 70px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 80px 30px;
  }
`;

const NumGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 16px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const NumCard = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(20px);
  opacity: 0;
  padding: 50px 30px;
  background-color: white;
  border-left: 10px solid ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 20px;
  }
`;

const NumValue = styled.div`
  display: flex;
  align-items: baseline;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  line-height: 1;
  font-variant-numeric: tabular-nums;

  .number {
    font-size: 65px;
    font-weight: 700;
    min-width: 2ch; /* prevent layout shift during count-up */
  }

  .plus {
    font-size: 45px;
    font-weight: 700;
    opacity: 0;
    transform: translateY(-30px);
    margin-left: 2px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    .number {
      font-size: 50px;
    }
    .plus {
      font-size: 35px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    .number {
      font-size: 30px;
    }
    .plus {
      font-size: 25px;
      transform: translateY(-10px);
      margin-left: 0;
    }
  }
`;

const NumLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;

const NumDesc = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

const OracleSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  padding: 100px 2rem;
  img {
    width: 150px;
  }
  h2 {
    font-size: 25px;
    font-weight: 600;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 100px 70px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 50px 30px;
    h2 {
      font-size: 15px;
    }
  }
`;

const INTRO_ITEMS = [
  {
    icon: "/img/database.png",
    title: "Database",
    content:
      "Oracle Advanced Technical Support (DBMS 설치, 정기점검, 장애처리, 데이터 복구 등)을 체계적이고 안정적으로 지원",
  },
  {
    icon: "/img/databaseperformance.png",
    title: "Performance Tuning",
    content:
      "데이터베이스 성능 진단 및 분석을 통한 고도화 (파티션 및 인덱스 개선, SQL 튜닝 등)와 최적화 설계 제공",
  },
  {
    icon: "/img/dba.png",
    title: "DBA",
    content:
      "전문 DBA의 데이터베이스 관리 및 운영, 모니터링과 더불어 백업 및 복구 전략 수립, 관리 및 운영 지침서 등 문서 제공",
  },
  {
    icon: "/img/datamigration.png",
    title: "Data Migration",
    content:
      "이행 환경 분석 및 전략 수립, 데이터 모델 및 데이터 분석, 매핑 및 검증 항목 정의를 바탕으로 이행/검증 프로그램 개발 및 테스트를 통해 안정적인 마이그레이션 진행",
  },
];

const NUM_ITEMS = [
  {
    label: "Years",
    value: 20,
    desc: "20년 이상 축적된 노하우와 검증된 기술력으로 안정적인 데이터베이스 운영과 혁신적인 솔루션 제공",
  },
  {
    label: "Projects",
    value: 100,
    desc: "100개 이상의 프로젝트 수행 경험을 통해 축적된 실전 역량과 맞춤형 최적화 지원",
  },
  {
    label: "Customers",
    value: 100,
    desc: "100여 고객사가 신뢰한 안정적인 서비스와 지속적인 파트너십으로 장기적 지원",
  },
];

const NUM_TARGETS = [20, 100, 100];

function Home() {
  const heroRef = useRef(null);
  const indicatorRef = useRef(null);
  const introSectionRef = useRef(null);
  const numSectionRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);
  const plusRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const createRevealAnimation = (elements, trigger, options = {}) => {
      const { duration = 0.9, start = "top 70%", stagger = 0.15 } = options;
      const targets = Array.from(elements || []);
      if (!targets.length || !trigger) return;

      return gsap.fromTo(
        targets,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger,
            start,
          },
        }
      );
    };

    // Hero titles load fade-in using heroRef's h1 children (animate together)
    const heroTitles = heroRef.current
      ? heroRef.current.querySelectorAll("h1")
      : [];
    if (heroTitles && heroTitles.length) {
      gsap.fromTo(
        heroTitles,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
      );
    }

    // Scroll indicator bounce
    if (indicatorRef.current) {
      gsap.to(indicatorRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "sine.inOut",
      });
    }

    // Intro cards reveal on scroll (scoped)
    const introCtx = gsap.context(() => {
      const introCards = introSectionRef.current
        ? introSectionRef.current.querySelectorAll(".intro-card")
        : [];
      createRevealAnimation(introCards, introSectionRef.current, {
        duration: 0.8,
        start: "top 75%",
        stagger: 0.12,
      });
    }, introSectionRef);

    // Number cards reveal and count-up (scoped)
    const numCtx = gsap.context(() => {
      createRevealAnimation(cardRefs.current, numSectionRef.current, {
        duration: 0.9,
        start: "top 70%",
        stagger: 0.15,
      });

      if (numberRefs.current && numberRefs.current.length) {
        ScrollTrigger.create({
          trigger: numSectionRef.current,
          start: "top 70%",
          once: true,
          onEnter: () => {
            NUM_TARGETS.forEach((target, index) => {
              const numberEl = numberRefs.current[index];
              const plusEl = plusRefs.current[index];
              const counter = { val: 0 };
              gsap.to(counter, {
                val: target,
                duration: 2,
                ease: "none",
                onUpdate: () => {
                  const value = Math.round(counter.val);
                  if (numberEl) numberEl.textContent = String(value);
                },
                onComplete: () => {
                  if (plusEl) {
                    gsap.to(plusEl, {
                      opacity: 1,
                      scale: 1,
                      duration: 0.4,
                      ease: "back.out(2)",
                    });
                  }
                },
              });
            });
          },
        });
      }
    }, numSectionRef);

    return () => {
      introCtx.revert();
      numCtx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleScrollDown = useCallback(() => {}, []);

  const introItems = useMemo(() => INTRO_ITEMS, []);
  const numItems = useMemo(() => NUM_ITEMS, []);

  // reset ref arrays before rendering
  cardRefs.current = [];
  numberRefs.current = [];
  plusRefs.current = [];

  return (
    <>
      <BackgroundVid>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/img/main-background.png"
        >
          <source src="/img/mainBackground.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <BackgroundTitle ref={heroRef}>
          <h1>미래에 대한 설레임을</h1>
          <h1>이투이와 함께</h1>
          <h3>ETOE solutions co. LTD.</h3>
        </BackgroundTitle>

        <ScrollIndicator
          ref={indicatorRef}
          onClick={handleScrollDown}
          aria-label="Scroll"
        >
          <FaChevronDown />
        </ScrollIndicator>
      </BackgroundVid>

      <IntroSection ref={introSectionRef} className="intro-section">
        <IntroGrid>
          {introItems.map((item) => (
            <IntroCard key={item.title} className="intro-card">
              <IntroIcon src={item.icon} alt={item.title} />
              <IntroTitle>{item.title}</IntroTitle>
              <IntroContent>{item.content}</IntroContent>
            </IntroCard>
          ))}
        </IntroGrid>
      </IntroSection>

      <NumSection ref={numSectionRef}>
        <NumGrid>
          {numItems.map((item, idx) => (
            <NumCard
              key={item.label}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <NumValue>
                <span
                  className="number"
                  ref={(el) => (numberRefs.current[idx] = el)}
                >
                  0
                </span>
                <span
                  className="plus"
                  ref={(el) => (plusRefs.current[idx] = el)}
                >
                  +
                </span>
              </NumValue>
              <NumLabel>{item.label}</NumLabel>
              <NumDesc>{item.desc}</NumDesc>
            </NumCard>
          ))}
        </NumGrid>
      </NumSection>

      <OracleSection>
        <img src="/img/oracle.png" alt="Oracle MP(Managed Partner)"></img>
        <h2>Oracle MP(Managed Partner)</h2>
      </OracleSection>
    </>
  );
}

export default Home;
