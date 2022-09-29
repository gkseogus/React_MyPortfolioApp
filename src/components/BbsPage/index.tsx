import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
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
} from "@chakra-ui/react";
import WritePage from "./WritePage";

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

const BtnContain = styled.div`
  float: right;
`;

const BbsPage = () => {
  const [write, setWrite] = useState(false);
  const [bbsData, setBbsData] = useState([
    {
      id: "",
      title: "",
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
      const response = await axios.get("http://localhost:8000/list", config);
      const data = response.data;
      for (let i = 0; i < data.length; i++) {
        console.log("test1", data[i].BOARD_ID);
        const id = data[i].BOARD_ID;
        const title = data[i].BOARD_TITLE;
        const register = data[i].REGISTER_ID;
        const date = moment(data[i].REGISTER_DATE).format(
          "YYYY MM DD, H:mm:ss a"
        );
        setBbsData([
          {
            ...bbsData,
            id: id,
            title: title,
            register: register,
            date: date,
          },
        ]);
      }
    } catch (error) {
      //Failed to respond
      console.log(error);
    }
  };

  // 컴포넌트 변경 함수
  const changeWritePage = () => {
    setWrite(!write);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      {write ? (
        <WritePage />
      ) : (
        <Contain>
          <TableContainer padding={"20%"}>
            <Table variant="striped" colorScheme="gray" size="lg">
              <TableCaption placement="top">게시판</TableCaption>
              <Thead>
                <Tr>
                  <Th>
                    <input type="checkbox" />
                  </Th>
                  <Th>번호</Th>
                  <Th>제목</Th>
                  <Th>작성자</Th>
                  <Th>작성일</Th>
                </Tr>
              </Thead>
              <Tbody>
                {bbsData.map((item: any) => (
                  <Tr>
                    <Td>
                      <input type="checkbox" />
                    </Td>
                    <Td>{item.id}</Td>
                    <Td>{item.title}</Td>
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
              <Button
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
              </Button>
            </BtnContain>
          </TableContainer>
        </Contain>
      )}
    </div>
  );
};

export default BbsPage;
