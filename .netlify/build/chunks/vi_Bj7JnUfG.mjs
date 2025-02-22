const status = {"original":"Nguyên bản","automatic":"Dịch tự động","revised":"Đã hiệu đính"};
const messages = {"originalMessage":"Nội dung của chương này dựa trên văn bản gốc tiếng Tây Ban Nha.","automaticMessage":"Chương này đã được dịch tự động từ bản gốc tiếng Tây Ban Nha. Nó chưa được con người kiểm tra. Nếu bạn muốn giúp đỡ kiểm tra, hãy liên hệ với chúng tôi bằng cách nhấp vào đây.","revisedMessage":"Chương này đã được con người kiểm tra và dịch từ văn bản gốc tiếng Tây Ban Nha. Nếu vẫn cần chỉnh sửa, hãy liên hệ với chúng tôi bằng cách nhấp vào đây."};
const vi = {
  "tableOfContents.onThisPage": "Trên chương này",
  "tableOfContents.overview": "Bắt đầu",
  status,
  messages,
};

export { vi as default, messages, status };
