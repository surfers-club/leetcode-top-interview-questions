function longestCommonPrefix(strs: string[]): string {
    let index = 200;
    
    strs.forEach((str, index) => {
        index = Math.min(str.length, index);
    });
    
    for(let i = 0; i<index; i++) {
        let isEqual = true;
        let str = strs[0][i];
        
        for(let j = 1; j<strs.length; j++) {
            if(str !== strs[j][i]){
                return i === 0 ? "" : strs[0].slice(0, i);
            }
        }
    }
    
    return strs[0].slice(0, index);
};
