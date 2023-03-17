function isMatch(s: string, p: string): boolean {
    if(p.includes('*') || p.includes('.')) {
        const match = s.match(p);
        if(match) {
            return match[0] == s;
        }
    }

    return s == p;
};