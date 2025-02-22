const books = {"lord-rings":{"title":"The Lord of the Rings","description":"An epic fantasy story...","category":"Fantasy"}};
const common = {"readMore":"Read more"};
const status = {"original":"Original","automatic":"Automatic Translation","revised":"Revised"};
const messages = {"originalMessage":"Content of this chapter based on the original Spanish text.","automaticMessage":"This chapter has been automatically translated from the Spanish original. It has not yet undergone human review. If you would like to help with the review, contact us by clicking here.","revisedMessage":"This chapter has undergone human review and translation from the original Spanish text. If it still needs corrections, contact us by clicking here."};
const en = {
  books,
  common,
  "tableOfContents.onThisPage": "On this chapter",
  "tableOfContents.overview": "Beginning",
  status,
  messages,
};

export { books, common, en as default, messages, status };
