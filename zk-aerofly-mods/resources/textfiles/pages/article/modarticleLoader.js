const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const articleID = urlParams.get("modarticleid");
const articleData = getModArticle(parseInt(articleID));