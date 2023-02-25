function lengthOfLongestSubstring(s: string): number {
    let startIndex = 0;
    let endIndex = 0;

    let characters = new Set();
    let longestLength = 0;

    while(endIndex < s.length) {
        if(characters.has(s[endIndex])) {
            characters.delete(s[startIndex]);
            startIndex++; 
        } else {
            characters.add(s[endIndex]);
            endIndex++;
            longestLength = Math.max(longestLength, characters.size);
        }
    }
    return longestLength;
};