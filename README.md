# [๐ป Top Interview Questions](https://leetcode.com/problem-list/top-interview-questions/)

## ์ฐธ์ฌ ๋ฐฉ๋ฒ
1. ์ด ์ ์ฅ์๋ฅผ fork ํ๋ค.
2. ์์ฑ๋ ์๊ฒฉ ์ ์ฅ์์ ์์ ์ ์ด๋ฆ์ผ๋ก ํด๋๋ฅผ ์์ฑํ๋ค.
3. LeetCode์ [Top Interview Questions](https://leetcode.com/problem-list/top-interview-questions/)๋ฅผ ํ๊ณ , ์์ ์ ํด๋ ํ์์ ๋ฌธ์  ์ด๋ฆ์ผ๋ก ์๋ก์ด ํด๋๋ฅผ ์์ฑํ๋ค.  
๋ฌธ์  ๋ด์ฉ์ ๋ด์ README.md ํ์ผ๊ณผ ์ฝ๋ ํ์ผ์ ์ถ๊ฐํ๋ค.
4. ์ด ์ ์ฅ์๋ก Pull Request๋ฅผ ํ๋ค. (๋งค์ฃผ ์, ๋ชฉ 11:59:59 ๋ง๊ฐ)
5. ๋ค์ Pull Request๋ฅผ ์ฌ๋ฆฌ๊ธฐ ์ ๊น์ง ๋ค๋ฅธ ์ฌ๋์ ์ฝ๋๋ฅผ ๋ฆฌ๋ทฐํ๊ณ , ์์ ์ ์ด์  PR์ ๋จธ์งํ๋ค.

## Pull Request ๊ท์น
- ์ ๋ชฉ: `๋ฒํธ. ๋ฌธ์  ์ด๋ฆ / ๋์ด๋ / ์ธ์ด`  
   ex) `1. Two Sum / Easy / Python`
- 1๋ช ์ด์์ Approve๋ฅผ ๋ฐ์์ผ ๋จธ์งํ  ์ ์๋ค.

## LeetHub ํ์ฉํ๊ธฐ
1. [LeetHub ์์ ๋ณธ ์ ์ฅ์](https://github.com/Ahmed-Shukri02/LeetHub/tree/patch_1)์์ ์ฝ๋๋ฅผ ๋ก์ปฌ์ ๋ฐ๋๋ค.
2. `scripts/leetcode.js`์์ ์๋์ ๊ฐ์ด ์ฝ๋๋ฅผ ์์ ํ๋ค.

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
   +  const URL = `https://api.github.com/repos/${hook}/contents/${์ ์ฅ์์ ํด๋๋ช}/${directory}/${filename}`;
   
      /* Define Payload */
      let data = {
   @@ -137,7 +137,7 @@ const update = (
      prepend,
      cb = undefined,
   ) => {
   -  const URL = `https://api.github.com/repos/${hook}/contents/${directory}/README.md`;
   +  const URL = `https://api.github.com/repos/${hook}/contents/${์ ์ฅ์์ ํด๋๋ช}/${directory}/README.md`;
   
      /* Read from existing file on GitHub */
      const xhr = new XMLHttpRequest();
   ```
3. ๋ธ๋ผ์ฐ์ ์์ chrome://extensions๋ฅผ ์ฐ๋ค.
4. ๊ฐ๋ฐ์ ๋ชจ๋ ํ์ฑํ ํ '์์ถํด์  ๋ ํ์ฅ์ฑ ์ค์น'
5. LeetHub์ root ๊ฒฝ๋ก๋ฅผ ์ ํํ๋ค.
6. ์ฃผ์์ฐฝ ์ค๋ฅธ์ชฝ์ ์ถ๊ฐ๋ LeetHub ํ์ฅ์ฑ ์์ด์ฝ์ ํด๋ฆญํ๊ณ  ์๋์ ๊ฐ์ ๋ฐฉ๋ฒ์ผ๋ก forkํ ์ ์ฅ์๋ฅผ ์ฐ๋ํ๋ค.
   > After installation, launch LeetHub.  
   > Click on "authorize with GitHub" button to automatically set up your account with LeetHub.  
   > Setup an existing/new repository with LeetHub (private by default) by clicking "Get Started" button.  
   > Begin Leetcoding! To view your progress, simply click on the extension!
7. LeetCode์์ ๋ฌธ์ ๋ฅผ ํ๊ณ  submit์ ๋๋ฅด๋ฉด forkํ ์ ์ฅ์์ ์๋์ผ๋ก ์ปค๋ฐ์ด ๋๋ค.