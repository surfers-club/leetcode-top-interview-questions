const getThePalindrome = (s: string, left: number, right: number): string => {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left -= 1;
        right += 1;
    }

    return s.slice(left+1, right);
}


function longestPalindrome(s: string): string {
    let palindrome = '';

    for(let left = 0; left < s.length; left++) {
        const oddPalindrome = getThePalindrome(s, left, left);
        if(oddPalindrome.length > palindrome.length) {
            palindrome = oddPalindrome;
        }

        const evenPalindrome = getThePalindrome(s, left, left+1);
        if(evenPalindrome.length > palindrome.length) {
            palindrome = evenPalindrome;
        }
    }

    return palindrome;
};