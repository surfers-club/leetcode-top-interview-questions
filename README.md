# [💻 Top Interview Questions](https://leetcode.com/problem-list/top-interview-questions/)

## 참여 방법
1. 이 저장소를 fork 한다.
2. 생성된 원격 저장소에 자신의 이름으로 폴더를 생성한다.
3. LeetCode의 [Top Interview Questions](https://leetcode.com/problem-list/top-interview-questions/)를 풀고, 자신의 폴더 하위에 문제 이름으로 새로운 폴더를 생성한다.  
문제 내용을 담은 README.md 파일과 코드 파일을 추가한다.
4. 이 저장소로 Pull Request를 한다. (매주 월, 목 11:59:59 마감)
5. 다음 Pull Request를 올리기 전까지 다른 사람의 코드를 리뷰하고, 자신의 이전 PR을 머지한다.

## Pull Request 규칙
- 제목: `번호. 문제 이름 / 난이도 / 언어`  
   ex) `1. Two Sum / Easy / Python`
- 1명 이상의 Approve를 받아야 머지할 수 있다.

## LeetHub 활용하기
1. [LeetHub 수정본 저장소](https://github.com/Ahmed-Shukri02/LeetHub/tree/patch_1)에서 코드를 로컬에 받는다.
2. `scripts/leetcode.js`에서 아래와 같이 코드를 수정한다.

   ```diff
   diff --git a/scripts/leetcode.js b/scripts/leetcode.js
   index b1b104f..baf9235 100644
   --- a/scripts/leetcode.js
   +++ b/scripts/leetcode.js
   @@ -67,7 +67,7 @@ const upload = (
      cb = undefined,
   ) => {
      // To validate user, load user object from GitHub.
   -  const URL = `https://api.github.com/repos/${hook}/contents/${directory}/${filename}`;
   +  const URL = `https://api.github.com/repos/${hook}/contents/${저장소의 폴더명}/${directory}/${filename}`;
   
      /* Define Payload */
      let data = {
   @@ -137,7 +137,7 @@ const update = (
      prepend,
      cb = undefined,
   ) => {
   -  const URL = `https://api.github.com/repos/${hook}/contents/${directory}/README.md`;
   +  const URL = `https://api.github.com/repos/${hook}/contents/${저장소의 폴더명}/${directory}/README.md`;
   
      /* Read from existing file on GitHub */
      const xhr = new XMLHttpRequest();
   ```
3. 브라우저에서 chrome://extensions를 연다.
4. 개발자 모드 활성화 후 '압축해제 된 확장앱 설치'
5. LeetHub의 root 경로를 선택한다.
6. 주소창 오른쪽에 추가된 LeetHub 확장앱 아이콘을 클릭하고 아래와 같은 방법으로 fork한 저장소를 연동한다.
   > After installation, launch LeetHub.  
   > Click on "authorize with GitHub" button to automatically set up your account with LeetHub.  
   > Setup an existing/new repository with LeetHub (private by default) by clicking "Get Started" button.  
   > Begin Leetcoding! To view your progress, simply click on the extension!
7. LeetCode에서 문제를 풀고 submit을 누르면 fork한 저장소에 자동으로 커밋이 된다.