import styled from "styled-components";
import BodyWrapper from "../../Components/BodyWrapper";
import TextBlock from "../../Components/TextBlock";
import ExternalLinkButton from "../../Components/ExternalLinkButton";

const SubSection = styled.div`
  margin: 10px 20px 0px 20px;
  color: ${(props) => props.theme.colors.headerSubText};

  div {
    margin: 0px 10px 0px 10px;
  }
`;

function Database() {
  return (
    <>
      <BodyWrapper pageTitle="데이터베이스" pageSubtitle="Oracle Database">
        <div>
          <TextBlock>
            <span>
              Oracle Database는 온프레미스 및 클라우드 모두에서 업계 최고의
              성능, 확장성, 안정성 및 보안을 제공하는 솔루션입니다.
            </span>
            <SubSection>
              <span>• 제품</span>
              <div>
                <span>
                  Oracle Database Enterprise Edition
                  <br />
                  Oracle Database Standard Edition 2
                </span>
              </div>
            </SubSection>
            <SubSection>
              <span>• 옵션</span>
              <div>
                <span>
                  Oracle Real Application Cluster, Oracle Active Service Guard,
                  Oracle Partitioning, Oracle Tuning Pack, Oracle Diagnostics
                  Pack, Oracle Advanced Security, Oracle Multitenant, Oracle
                  Advanced Compression, Oracle Real Application Testing
                </span>
              </div>
            </SubSection>
          </TextBlock>
          <ExternalLinkButton
            name="데이터베이스 알아보기"
            link="https://www.oracle.com/kr/database/what-is-database/"
          ></ExternalLinkButton>
          <ExternalLinkButton
            name="데이터 웨어하우스 알아보기"
            link="https://www.oracle.com/kr/database/what-is-a-data-warehouse/"
          ></ExternalLinkButton>
          <ExternalLinkButton
            name="클라우드 보안 알아보기"
            link="https://www.oracle.com/kr/security/cloud-security/what-is-cloud-security/"
          ></ExternalLinkButton>

          <TextBlock blockTitle="Oracle Exadata">
            <span>
              Oracle Exadata는 Oracle Database를 실행하기에 가장 적합합니다.
              온프레미스, Cloud at Customer 및 Oracle Cloud 배포를 통해 비용을
              최대 40%까지 낮추고 디지털 혁신을 촉진하며 다른 솔루션보다 최대
              3배 빠른 실행 속도를 제공합니다.
            </span>
          </TextBlock>
          <ExternalLinkButton
            name="더 알아보기"
            link="https://www.oracle.com/kr/engineered-systems/exadata/"
          ></ExternalLinkButton>
          <TextBlock blockTitle="Oracle GoldenGate">
            <span>
              Oracle GoldenGate는 고 가용성, 재해 복구 및 제로 다운 타임
              마이그레이션을 위해 기존 데이터 이동 솔루션보다 최대 6배 빠르게
              데이터를 복제하여 비즈니스 연속성을 제공합니다. 시스템 성능에
              영향을 주지 않고 이기종 소스와 대상 간에 데이터를 동기화합니다.
            </span>
          </TextBlock>
          <ExternalLinkButton
            name="더 알아보기"
            link="https://www.oracle.com/kr/integration/goldengate/"
          ></ExternalLinkButton>
        </div>
      </BodyWrapper>
    </>
  );
}

export default Database;
