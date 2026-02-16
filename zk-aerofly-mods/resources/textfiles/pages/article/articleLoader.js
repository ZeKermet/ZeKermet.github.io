const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const articleID = urlParams.get("articleid");
const articleData = getArticle(parseInt(articleID));