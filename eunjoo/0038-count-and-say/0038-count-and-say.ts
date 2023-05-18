function countAndSay(n: number): string {
    let ans = '1';

    for(let i = 1; i < n; i++) {
        let curr = '';
        let cnt = 1;

        for(let j = 0; j < ans.length; j++) {
            if(ans[j] === ans[j+1]) {
                cnt++;
            } else {
                curr += cnt + ans[j];
                cnt = 1;
            }
        }
        ans = curr;
    }
    
    return ans;
};
