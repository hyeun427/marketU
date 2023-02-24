### ✨ 마켓U

### 💌 목차

1. 실행방법
2. 기술스택
3. 페이지 구성

## 실행방법

yarn install ⇒ yarn dev

### 🎨 Figma 목업 & 디자인 작업

<img src="./readme/0.figma.png" alt="피그마">

- Figma 를 이용하여 웹페이지 전반을 디자인했습니다.

### 🛠 사용 기술 스택

- Html
- Css
- React
- Next.js
- Typescript
- Javascript
- Apollo Client
- Graphql
- Git
- Google Cloud Platform

### 🖥 페이지 구성

#### 1. Main

<img src="/readme/1.main.gif" alt="메인">

> 좋아요와 찜하기 수가 많은 게시물 TOP4를 메인페이지에서 확인 할 수 있습니다.

- 각각 item을 클릭하면 해당 게시물로 이동합니다.
- 전체보기를 클릭하면 해당 게시판의 모든 게시글을 확인 할 수 있습니다.

#### 2. Login & SignUp

<img src="/readme/2.logIn.gif" alt="로그인">

> 헤더의 메뉴를 통해 로그인으로 이동할 수 있습니다.

- 이메일과 비밀번호 유효성 검사를 통해 올바른 형식만 로그인이 가능합니다.

<img src="/readme/3.singIn.gif" alt="회원가입">

- 이메일과 비밀번호 유효성 검사를 통해 올바른 형식만 회원가입이 가능합니다.

#### 3. Market(중고 상품 거래)

<img src="/readme/4.market_list_write.gif" alt="마켓1">

> 중고마켓 게시글 리스트와 상품등록 페이지입니다.

- 무한스크롤로 이전 게시글을 모두 보여줍니다.
- 회원은 상품을 직접 올리고, 수정 및 삭제를 할 수 있습니다. 비회원 유저는 상품을 등록할 수 없도록 페이지에 권한 분기 되어있습니다.
- 상품 내용 작성에 React Quill 웹 에디터를 적용하였습니다.
- 이미지 등록의 경우, 10MB 이상 사진 파일과 jpg, jpeg, png 이외의 파일은 업로드 할 수 없도록 검증을 합니다.
- yup을 사용하여 잘못된 입력값이 들어올 경우 에러를 띄우고 버튼을 비활성화 시켰습니다.

<img src="/readme/5.market_detail_user.gif" alt="마켓2">

> 중고마켓 게시글 상세보기 입니다.
> 비회원도 게시글 확인은 가능하지만 구매는 하지 못하도록 권한 분기가 되어있습니다.

<img src="/readme/6.market_pick_mypagepick.gif" alt="마켓3">

> 회원의 경우, 찜하기를 할 수 있으며, 마이페이지에서 찜한 상품 확인이 가능합니다.

<img src="/readme/12.mypage_buy_mypage_buylist.gif" alt="마켓4">

> 회원의 경우, 상품을 구매할 수 있습니다.
> 구매한 상품은 마이페이지-구매한 상품에서 확인 할 수 있습니다.

- kakao-map과 daum-post-code가 적용되어 있습니다.
- pick(찜하기)기능이 있습니다.
- 작성자와 로그인한 유저가 다를 경우 수정, 삭제 버튼이 보이지 않습니다.
- 작성자가 본인의 상품을 구매할 수 없습니다.

#### 4. Commutnity(자유게시판)

<img src="/readme/7.community_list_search.gif" alt="커뮤1">

> 커뮤니티 리스트 페이지 입니다.

- 커뮤니티 게시판 목록에서 페이지네이션 기능을 구현하였습니다.
- 제목으로 게시글을 검색할 수 있습니다. debouncing이 적용되어있습니다.

<img src="/readme/8.community_write_detail.gif" alt="커뮤2">

> 커뮤니티 게시글 등록하기와 상세보기 페이지입니다.
> 게시글 등록은 회원만 가능하고, 게시글 보기는 비회원도 이용이 가능합니다.

<img src="/readme/9.community_update.gif" alt="커뮤3">

> 커뮤니티 게시글 수정 페이지입니다.
> 게시글 작성자만 수정 및 삭제 버튼이 보이도록 하였습니다.

- 회원만 게시글을 등록, 수정 및 삭제 할 수 있도록 권한을 분기하였습니다.
- react-player 적용으로 유튜브 동영상 업로드가 가능합니다.
- kakao-map과 daum-post-code가 적용되어 있습니다.
- 툴팁으로 등록한 주소를 띄웁니다.
- 게시글의 좋아요와 싫어요 기능이 있습니다.

<img src="/readme/10.community_comment_all.gif" alt="커뮤4">

- 댓글을 작성 할 수 있습니다.
- 댓글 수정, 삭제 시 모달을 띄워 비밀번호를 입력받아 비밀번호가 일치할 경우에만 수정, 삭제가 가능합니다.
- 별점을 줄 수 있습니다.

#### 5. Mypage

<img src="/readme/13.mypage.gif" alt="마이페이지1">

- 마이페이지에서 포인트 충전, 찜한 상품, 구매한 상품, 판매한 상품을 확인할 수 있습니다.

<img src="/readme/11.mypage_charge_alert.gif" alt="마이페이지2">

- 마이페이지 충전하기 버튼을 클릭하면 아임포트를 통해 포인트를 충전할 수 있습니다.

### 📱 media query 반응형 작업

**[web] min-width: 992px**

<img src="/readme/14.media_desktop.gif" alt="반응형1">

**[tablet] (min-width: 576px) and (max-width: 991px)**

<img src="/readme/15.media_tablet.gif" alt="반응형2">

**[mobile](max-width: 575px)**
<img src="/readme/16.media_phone.gif" alt="반응형3">
