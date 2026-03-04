console.log(pp("abcd"));

function pp(str) {
    if (str.length <= 1) {return str;}
    return str.charAt(str.length - 1) + pp(str.substring(0, str.length - 1));
}

