import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  Breadcrumb,
  BreadcrumbItem,
  TableContainer,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import WritePage from "./WritePage";
import ContentsPage from "./ContentsPage";

const Contain = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const BtnContain = styled.div`
  float: right;
`;

const BreadcrumbContain = styled.div`
  position: absolute;
  padding-left: 91.75%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.h2`
  font-family: "Kanit", sans-serif;
`;

const BbsPage = (props: any) => {
  const pageSize = 5;
  const [write, setWrite] = useState(false);
  const [contents, setContents] = useState(false);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [current, setCurrent] = useState(0);
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
        "http://localhost:8000/api/boardList",
        config
      );
      const data = response.data;
      setMaxIndex(pageSize);
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

  // 제목 클릭 시 보여지는 글 내용 페이지
  const showContentsPage = () => {
    window.scrollTo(0, 0);
    setContents(!contents);
  };

  // 글 작성 페이지로 이동
  const changeWritePage = () => {
    setWrite(!write);
    window.scrollTo(0, 0);
  };

  // 페이지 네이션 이벤트 핸들러
  const handleChange = (page: number) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
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
            <BreadcrumbItemText>BBS</BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      {write && !contents ? (
        <WritePage />
      ) : !write && contents ? (
        // 추후에 id 값을 타이틀 클릭 시 해당 타이틀의 id 값으로 변경해야 됨
        <ContentsPage bbsData={bbsData} id={14} />
      ) : (
        <div>
          <Contain>
            <TableContainer padding={"20%"}>
              <Table variant="striped" colorScheme="gray" size="lg">
                <TableCaption placement="top" fontSize={30}>
                  Anonymous board
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Title</Th>
                    <Th>Name</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {bbsData.map(
                    (item: any, index: number) =>
                      index >= minIndex &&
                      index < maxIndex && (
                        <Tr key={uuidv4()}>
                          <Td>{item.id}</Td>
                          <Td>
                            <button onClick={showContentsPage}>
                              {item.title}
                            </button>
                          </Td>
                          <Td>{item.register}</Td>
                          <Td>{item.date}</Td>
                        </Tr>
                      )
                  )}
                </Tbody>
              </Table>
              <Pagination
                pageSize={pageSize}
                current={current}
                total={bbsData.length}
                onChange={handleChange}
                style={{ marginTop: "10px", float: "left" }}
                size="small"
              />
              <BtnContain>
                <Button
                  colorScheme="messenger"
                  variant="ghost"
                  onClick={changeWritePage}
                >
                  글쓰기
                </Button>
              </BtnContain>
            </TableContainer>
          </Contain>
        </div>
      )}
    </div>
  );
};

export default BbsPage;
