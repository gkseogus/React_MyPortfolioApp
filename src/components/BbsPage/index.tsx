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
  useToast,
} from "@chakra-ui/react";
import "antd/dist/antd.css";
import { Pagination, Input } from "antd";
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

// Debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

const BbsPage = (props: any) => {
  const pageSize = 5;
  const [bbsData, setBbsData] = useState([
    {
      id: "",
      title: "",
      contents: "",
      register: "",
      date: "",
    },
  ]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [contents, setContents] = useState(false);
  const [checkedList, setCheckedList] = useState([{}]);
  const [write, setWrite] = useState(false);
  const toast = useToast();
  const [current, setCurrent] = useState(0);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const debounceVal = useDebounce(searchKeyword, 400);

  // Get board data function
  const getBbsList = async () => {
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

  // Search value
  const searchVal = bbsData.filter(
    (i) =>
      !debounceVal || i.title.toUpperCase().includes(debounceVal.toUpperCase())
  );

  /** Function that takes you to the content page of the article when you click on the title */
  const showContentsPage = () => {
    window.scrollTo(0, 0);
    setContents(!contents);
  };

  /** Check box full selection function */
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray: any[] = [];
      searchVal.forEach((el: { id: any }) => idArray.push(el.id));
      setCheckedList(idArray);
    } else {
      setCheckedList([]);
    }
  };

  /** Checkbox Single Select Function */
  const handleSingleCheck = (checked: boolean, id: {}) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckedList((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckedList(checkedList.filter((el) => el !== id));
    }
  };

  /** Functions that go to the writing page */
  const handleWrite = () => {
    setWrite(!write);
    window.scrollTo(0, 0);
  };

  /** List delete function */
  const handleDelete = async () => {
    if (checkedList.length === 1) {
      toast({
        title: "삭제할 게시물을 선택해 주세요.",
        position: "top-right",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    let boardIdList = "";
    checkedList.forEach((v: any) => {
      boardIdList += `'${v}',`;
    });
    try {
      //Successful response
      await axios.post("http://localhost:8000/api/boardDelete", {
        boardIdList: boardIdList.substring(0, boardIdList.length - 1),
      });
      toast({
        title: "성공적으로 게시물을 삭제했습니다.",
        position: "top-right",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log(checkedList);
      setCheckedList([{}]);
      getBbsList();
    } catch (error) {
      //Failed to respond
      console.log("write error", error);
    }
  };

  // pagination event handler
  const handlePageNation = (page: number) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  useEffect(() => {
    getBbsList();
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
                <TableCaption
                  placement="top"
                  fontSize={30}
                  paddingBottom={"5%"}
                >
                  Anonymous board
                  <Input.Group compact>
                    <Input.Search
                      allowClear
                      style={{ width: "40%", paddingTop: "5%", float: "right" }}
                      placeholder="Search for title"
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                  </Input.Group>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>
                      <input
                        type="checkbox"
                        name="select-all"
                        onChange={(e) => handleAllCheck(e.target.checked)}
                        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                        checked={
                          checkedList.length === searchVal.length ? true : false
                        }
                      />
                    </Th>
                    <Th textAlign={"center"}>No.</Th>
                    <Th textAlign={"center"}>Title</Th>
                    <Th textAlign={"center"}>Name</Th>
                    <Th textAlign={"center"}>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {searchVal.map(
                    (item: any, index: number) =>
                      index >= minIndex &&
                      index < maxIndex && (
                        <Tr key={uuidv4()}>
                          <Td textAlign={"center"}>
                            <input
                              type="checkbox"
                              onChange={(e) =>
                                handleSingleCheck(e.target.checked, item.id)
                              }
                              checked={
                                checkedList.includes(item.id) ? true : false
                              }
                            ></input>
                          </Td>
                          <Td textAlign={"center"}>{item.id}</Td>
                          <Td textAlign={"left"}>
                            <button onClick={showContentsPage}>
                              {item.title}
                            </button>
                          </Td>
                          <Td textAlign={"left"}>{item.register}</Td>
                          <Td textAlign={"left"}>{item.date}</Td>
                        </Tr>
                      )
                  )}
                </Tbody>
              </Table>
              <Pagination
                pageSize={pageSize}
                current={current}
                total={bbsData.length}
                onChange={handlePageNation}
                style={{ marginTop: "10px", float: "left" }}
                size="small"
              />
              <BtnContain>
                <Button
                  colorScheme="messenger"
                  variant="ghost"
                  onClick={handleWrite}
                >
                  Write
                </Button>
                <Button
                  colorScheme="messenger"
                  variant="ghost"
                  onClick={handleDelete}
                >
                  Delete
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
