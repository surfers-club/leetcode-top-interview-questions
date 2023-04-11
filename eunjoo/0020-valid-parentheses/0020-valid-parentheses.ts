function isValid(s: string): boolean {
    const braketMap = {'(' : ')', '{' : '}', '[' : ']'};
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(['(', '{', '['].includes(s[i])) {
            stack.push(braketMap[s[i]]);
        } else if(stack.pop() !== s[i]) {
            return false;
        }
    }

    return !stack.length;
};
