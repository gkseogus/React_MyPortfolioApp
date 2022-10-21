import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Collapse } from "antd";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import styled from "styled-components";

const BreadcrumbContain = styled.div`
  float: right;
  padding-right: 3.1%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.h2`
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

const { Panel } = Collapse;

const NoticePage = () => {
  const [noticeData, setNoticeData] = useState([
    {
      id: "",
      title: "",
      contents: "",
      date: "",
    },
  ]);

  // 공지사항 불러오는 함수
  const getList = async () => {
    axios.defaults.withCredentials = true;
    const config = {
      headers: {
        withCredentials: true,
      },
    };
    try {
      //Successful response
      const response = await axios.get(
        "http://localhost:8000/api/noticeList",
        config
      );
      const data = response.data;
      setNoticeData(
        data.map((item: any, index: string) => ({
          id: item.NOTICE_ID,
          title: item.NOTICE_TITLE,
          contents: item.NOTICE_CONTENT,
          date: moment(item.NOTICE_DATE).format("YYYY-MM-DD"),
        }))
      );
    } catch (error) {
      //Failed to respond
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <BreadcrumbContain>
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbItemText>Home</BreadcrumbItemText>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemText>Notice</BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      <Contain>
        <CenterContentsText>Release Notice</CenterContentsText>
        <Collapse bordered={false} defaultActiveKey={["1"]}>
          {noticeData.map((item: any) => (
            <Panel
              header={item.title}
              key={item.id}
              extra={<DateText>{item.date}</DateText>}
            >
              {item.contents}
            </Panel>
          ))}
        </Collapse>
      </Contain>
    </div>
  );
};

export default NoticePage;
