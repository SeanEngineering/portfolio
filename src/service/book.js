/** @format */

export const getBooks = async (searchTerms) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerms
        .split(' ')
        .join('+')}&maxResults=40`;
    const response = await fetch(url);
    const json = await response.json();
    return json.items;
};

export const cleanText = (inputString) => {
    return inputString.replace(/(<([^>]+)>)/gi, ' ').replace(/&quot;/gi, '"');
};
