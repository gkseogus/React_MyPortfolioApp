import React from "react";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLine = () => {
  const { t } = useTranslation("");
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
          {t("careerContentTitle1")}
        </h3>
        <p style={{ color: "black" }}>{t("careerContent1")}</p>
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
          {t("careerContentTitle2")}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          {t("careerContentTitle2Sub")}
        </h4>
        <p style={{ color: "black", whiteSpace: "pre-wrap" }}>
          {t("careerContent2")}
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
          {t("careerContentTitle3")}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black", whiteSpace: "pre-wrap" }}
        >
          {t("careerContentTitle3Sub")}
        </h4>
        <p style={{ color: "black", whiteSpace: "pre-wrap" }}>
          {t("careerContent3")}
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
          {t("careerContentTitle4")}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          {t("careerContentTitle4Sub")}
        </h4>
        <p style={{ color: "black", whiteSpace: "pre-wrap" }}>
          {t("careerContent4")}
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
          {t("careerContentTitle5")}
        </h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{ color: "black" }}
        >
          {t("careerContentTitle5Sub")}
        </h4>
        <p style={{ color: "black", whiteSpace: "pre-wrap" }}>
          {t("careerContent5")}
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default React.memo(TimeLine);
