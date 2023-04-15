function generateParenthesis(n: number): string[] {
    const ans = [];

    const dfs = (left: number, right: number, str: string) => {
        if(str.length === n * 2) {
            ans.push(str);
            return;
        }
        if(left < n) {
            dfs(left + 1, right, str + '(');
        }
        if(right < left) {
            dfs(left, right + 1, str + ')');
        }
    }
    
    dfs(0, 0, '');
    return ans;
};
