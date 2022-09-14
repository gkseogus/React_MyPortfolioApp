import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
  return (
    <VerticalTimeline lineColor="red">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#fff", color: "red" }}
        contentArrowStyle={{ borderRight: "7px solid  red" }}
        date="2014 - 2016"
        iconStyle={{ background: "black", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ color: "black" }}
        >
          학교명: 장안중학교
        </h3>
        <p style={{ color: "black" }}>
          프로그래밍에 대해 잘 알지 못했던 시절.
          <br /> 프로게이머를 존경했다.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#fff", color: "red" }}
        contentArrowStyle={{ borderRight: "7px solid  red" }}
        date="2017 - 2019"
        iconStyle={{ background: "black", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ color: "black" }}
        >
          학교명: 중화고등학교
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          전공: 이과
        </h4>
        <p style={{ color: "black" }}>
          외삼촌이 프로게이머 이셨다가 프로그래머로 전향하셨는데 이 이유 때문에
          프로그래밍에 흥미를 느끼게 되었다.
          <br />
          <br />
          아두이노를 사용해 드론 자동화 조종 프로그램을 간단히 구현하였다.
          <br />
          <br />
          기능: 조이스틱의 버튼을 사용할 필요 없이 이착륙이 가능한 기능.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#fff", color: "red" }}
        contentArrowStyle={{ borderRight: "7px solid  red" }}
        date="2019 - 2022"
        iconStyle={{ background: "black", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ color: "black" }}
        >
          학교명: 한림대학교
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          주전공: 빅데이터 <br />
          부전공: 스마트iot
        </h4>
        <p style={{ color: "black" }}>
          <br /> 1학년 : 본격적으로 프로그래밍에 대해 이론을 배우기 시작한
          단계였으며 이론을 중점으로 간단한 코드를 작성하였다.
          <br />
          <br />
          2학년: 세미 프로젝트를 진행 해 '코로나 확진자 정보 사이트'를
          구축하였다.
          <br />
          <br />
          3학년: 동아리 회장을 진행함 으로써 학우들을 모아 팀을 만들었고
          '추계종합학술대회'에 나가 인공지능 분야로 우수논문합격 및 장려상을
          받았다.
          <br />
          <br />
          4학년: 인턴쉽 및 취업활동을 진행
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#fff", color: "red" }}
        contentArrowStyle={{ borderRight: "7px solid  red" }}
        date="2022.01.03 - 2022.06.31"
        iconStyle={{ background: "red", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ color: "black" }}
        >
          회사: 에이치나인
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          부서명: R & D (인턴쉽)
        </h4>
        <p style={{ color: "black" }}>
          학교를 다니면서 한 학기 동안 인턴쉽을 진행하였다.
          <br />
          <br />
          1월 ~ 2월: js,ts,react의 세미나를 진행하였다.
          <br />
          <br />
          3월 ~ 3월 중순: 자사 출퇴근 시스템의 ui 문서를 받아 문서 토대로
          시스템을 React, Redux로 클론 코딩 하였다.
          <br />
          <br />
          4월 ~ 5월: LG 경영연구원 홈페이지의 QA를 진행하였다.
          <br />
          <br />
          6월 ~ 7월: LG 리서치 인프라 홈페이지의 QA를 진행하였다.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#fff", color: "red" }}
        contentArrowStyle={{ borderRight: "7px solid  red" }}
        date="2022.08.07 ~"
        iconStyle={{ background: "red", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ color: "black" }}
        >
          회사명: 진진시스템
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          부서명: 시스템개발부 (정직원)
        </h4>
        <p style={{ color: "black" }}>현재진행형</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
