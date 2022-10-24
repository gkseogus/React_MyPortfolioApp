# About The Project

포트폴리오 반응형 웹 사이트
( 모바일: 360 ~ 500px 까지 지원 )

# Feature List

1. 각종 sns 링크 연결
2. 'My Career' 에서 'more' 버튼 클릭 시 grid item 노출
3. 각 콘텐츠에 대한 carousel 적용
4. 'My SKILL' 에서 각 보유 스킬에 대한 숙련도 정보 노출
5. 'Career' 에서 커리어 로드맵 정보 노출
6. 낮,밤 모드 적용
7. 스크롤 탑 버튼 적용
8. 이메일 보내는 기능 적용
9. 게시판 글 쓰기 기능 적용
10. 공지사항 정보 노출

# Feature List Details

1. 우측 깃허브, 인스타, 커리어리 버튼을 클릭 시 해당 sns 나의 프로필 사이트로 이동한다.
2. 'My Career'의 수상경력 및 이력 사항이 'more' 버튼 클릭 시 노출되도록 하였다.
3. 'Home' 에서 'My Project' 목록에 대표적인 프로젝트 3가지를 carousel로 보여주게 하였다.
4. 'Project' 에서 모든 프로젝트를 carousel로 보여주게 하였다.
5. 'My SKILL' 에서 각 보유 스킬에 대한 숙련도 정보를 %로 노출 시켰으며 %에 따라 빨간색 바가 움직이도록 하였다. 또한 '?' 아이콘을 호버 시 숙련도 %에 대한 정보를 노출 시키도록 하였다.
6. 'Career' 에서 하단으로 스크롤 시 각 로드맵이 노출 되도록 하였다.
7. 우측 상단 달 또는 해 아이콘을 클릭 시 다크모드, 라이트모드를 사용할 수 있도록 하였다.
8. 모든 페이지에서 스크롤 하단 시 스크롤 탑 버튼이 노출 되며 클릭 시 스크롤이 최 상단으로 이동하도록 하였다.
9. 사용자가 이메일 제목, 내용, 이메일 주소, 보낼사람(드롭다운으로 선택) 을 적고 send 버튼을 클릭 시 보낼사람의 이메일 주소로 해당 내용이 전달되도록 하였다.
10. 사용자가 글 쓰기 버튼을 클릭하고 제목, 작성자, 내용을 적고 작성완료 버튼을 클릭 시 DB에 해당 내용을 저장 및 불러오도록 하였다.
11. 이때 사용자가 3가지의 인풋 칸 중 하나라도 빈 칸으로 제출한다면 toast로 경고 창을 띄우며 api 호출을 막는다.
12. 공시자항 페이지에서 각 릴리즈 버전, 날짜 별로 공지사항 내용을 확인 가능하게 하였다.

# Data

- Project carousel data

![Project carousel data](https://user-images.githubusercontent.com/76561461/190072756-518c2268-f602-49cf-bc30-56359ce2618e.png)

<br />

- Grid item data

![grid item data](https://user-images.githubusercontent.com/76561461/190072768-c5bfe421-d4b4-4eec-914d-9ce634141f05.png)

<br />

- mail data

![mailDB](https://user-images.githubusercontent.com/76561461/191895021-99f87fdd-bd53-4d60-b28b-5af01909388c.PNG)

<br />

- bbs data

![bbsDB](https://user-images.githubusercontent.com/76561461/193234693-7db0a200-0b2f-47d2-be59-2f93c54cceaf.PNG)

# Web Deployment

- AWS - Amplify

도메인 구축 및 테스트 서버, 운영 서버 분리

- Google 애널리틱스

사용자 성향 분석

# DB

- 구글 스프레드 시트

사용자의 이메일 정보(날짜, 보낸이의 이메일주소, 메일내용, 받는이의 메일주소, 메일제목 ) 저장

- MySQL

게시판의 정보(게시물번호, 제목, 작성자, 내용, 작성된 날짜) 저장

# Site

https://www.hdh-portfolio.com/
