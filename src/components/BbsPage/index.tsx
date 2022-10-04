import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react";
import WritePage from "./WritePage";
import ContentsPage from "./ContentsPage";

const BreadcrumbContain = styled.div`
  position: absolute;
  padding-left: 90.5%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.h2`
  font-family: "Kanit", sans-serif;
`;

const Contain = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const BtnContain = styled.div`
  float: right;
`;

const BbsPage = (props: any) => {
  const [write, setWrite] = useState(false);
  const [contents, setContents] = useState(false);
  const [bbsData, setBbsData] = useState([
    {
      id: "",
      title: "",
      contents: "",
      register: "",
      date: "",
    },
  ]);

  // 게시물 불러오는 함수
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
        "http://localhost:8000/api/list",
        config
      );
      const data = response.data;
      setBbsData(
        data.map((item: any, index: string) => ({
          id: item.BOARD_ID,
          title: item.BOARD_TITLE,
          contents: item.BOARD_CONTENT,
          register: item.REGISTER_ID,
          date: moment(item.REGISTER_DATE).format("YYYY MM DD, H:mm:ss a"),
        }))
      );
    } catch (error) {
      //Failed to respond
      console.log(error);
    }
  };

  // 글 작성 페이지로 이동
  const changeWritePage = () => {
    setWrite(!write);
    window.scrollTo(0, 0);
  };

  // 제목 클릭 시 보여지는 글 내용 페이지
  const showContentsPage = () => {
    window.scrollTo(0, 0);
    setContents(!contents);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {write && !contents ? (
        <WritePage />
      ) : !write && contents ? (
        <ContentsPage bbsData={bbsData} />
      ) : (
        <div>
          <BreadcrumbContain>
            <Breadcrumb separator="/">
              <BreadcrumbItem>
                <BreadcrumbItemText>Home</BreadcrumbItemText>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbItemText>BBS</BreadcrumbItemText>
              </BreadcrumbItem>
            </Breadcrumb>
          </BreadcrumbContain>
          <Contain>
            <TableContainer padding={"20%"}>
              <Table variant="striped" colorScheme="gray" size="lg">
                <TableCaption placement="top">익명 게시판</TableCaption>
                <Thead>
                  <Tr>
                    {/* <Th>
                    <input type="checkbox" />
                  </Th> */}
                    <Th>No.</Th>
                    <Th>Title</Th>
                    <Th>Name</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {bbsData.map((item: any) => (
                    <Tr key={uuidv4()}>
                      {/* <Td>
                      <input type="checkbox" />
                    </Td> */}
                      <Td>{item.id}</Td>
                      <Td>
                        <button onClick={showContentsPage}>{item.title}</button>
                      </Td>
                      <Td>{item.register}</Td>
                      <Td>{item.date}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <BtnContain>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  onClick={changeWritePage}
                >
                  글쓰기
                </Button>
                {/* <Button
                colorScheme="teal"
                variant="ghost"
                onClick={changeWritePage}
              >
                수정
              </Button>
              <Button
                colorScheme="teal"
                variant="ghost"
                onClick={changeWritePage}
              >
                삭제
              </Button> */}
              </BtnContain>
              <Pagination
                defaultPageSize={5}
                pageSize={5}
                total={100}
                style={{ paddingTop: "1%" }}
              />
            </TableContainer>
          </Contain>
        </div>
      )}
    </div>
  );
};

export default BbsPage;
