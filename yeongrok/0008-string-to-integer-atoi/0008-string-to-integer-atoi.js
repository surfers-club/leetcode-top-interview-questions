/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    
    let i = 0;
    let v = "";

    for (let i = 0; i < s.length; i++) {
        if (i === 0 && /\+|\-/.exec(s[i])) v += s[i];
        else if (!/[0-9]/.exec(s[i])) break;
        else v += s[i];
    }

    v = Number(v) || 0;
    
    if (v < Math.pow(2, 31) * -1) return Math.pow(2, 31) * -1;
    else if (v >= Math.pow(2, 31)) return Math.pow(2, 31) - 1;
    return v;
};
