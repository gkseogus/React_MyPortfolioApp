import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Collapse, Pagination } from "antd";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import styled from "styled-components";
import noticeData from "./noticeData.json";

const BreadcrumbContain = styled.div`
  float: right;
  padding-right: 3.1%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.article`
  font-family: "Kanit", sans-serif;
`;

const CenterContentsText = styled.article`
  padding-bottom: 10%;
  text-align: center;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  @media screen and (max-width: 500px) {
    padding-top: 50%;
    padding-bottom: 20%;
    font-size: 20px;
    text-align: center;
  }
`;

const Contain = styled.div`
  padding: 15%;
`;

const DateText = styled.p`
  color: red;
`;

interface NoticeDataFace {
  NOTICE_ID: number;
  NOTICE_TITLE: string;
  NOTICE_CONTENT: string;
  NOTICE_DATE: string;
}

const NoticePage = () => {
  const { Panel } = Collapse;
  const pageSize: number = 10;
  const [minIndex, setMinIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState<number>(10);
  const [current, setCurrent] = useState<number>(0);
  const noticeList: Array<NoticeDataFace> = noticeData[0].notice;
  const { t } = useTranslation<string>("");

  /** Function to load announcement data */
  // const getList = async () => {
  //   axios.defaults.withCredentials = true;
  //   const config = {
  //     headers: {
  //       withCredentials: true,
  //     },
  //   };
  //   try {
  //     //Successful response
  //     const response = await axios.get(
  //       "http://localhost:8000/api/noticeList",
  //       config
  //     );
  //     const data = response.data;
  //     setMaxIndex(pageSize);
  //     setNoticeData(
  //       data.map((item: any, index: string) => ({
  //         id: item.NOTICE_ID,
  //         title: item.NOTICE_TITLE,
  //         contents: item.NOTICE_CONTENT,
  //         date: moment(item.NOTICE_DATE).format("YYYY-MM-DD"),
  //       }))
  //     );
  //   } catch (error) {
  //     //Failed to respond
  //     console.log(error);
  //   }
  // };

  /** Page Nation Event Handler */
  const handleChange = (page: number) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  return (
    <div>
      <BreadcrumbContain>
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbItemText>
              {t("noticeBreadcrumbItem1")}
            </BreadcrumbItemText>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemText>
              {t("noticeBreadcrumbItem2")}
            </BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      <Contain>
        <CenterContentsText>{t("noticeTitle")}</CenterContentsText>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          {noticeList
            .slice(0)
            .reverse()
            .map(
              (item: NoticeDataFace, index: number) =>
                index >= minIndex &&
                index < maxIndex && (
                  <Panel
                    header={item.NOTICE_TITLE}
                    key={item.NOTICE_ID}
                    extra={<DateText>{item.NOTICE_DATE}</DateText>}
                  >
                    {item.NOTICE_CONTENT}
                  </Panel>
                )
            )}
        </Collapse>
        <Pagination
          pageSize={pageSize}
          current={current}
          total={noticeList.length}
          onChange={handleChange}
          style={{
            marginTop: "10px",
            textAlign: "center",
            background: "white",
          }}
          size="small"
        />
      </Contain>
    </div>
  );
};

export default React.memo(NoticePage);
