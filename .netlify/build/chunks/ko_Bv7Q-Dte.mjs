const status = {"original":"원본","automatic":"자동 번역","revised":"수정됨"};
const messages = {"originalMessage":"이 장의 내용은 스페인어 원문을 기반으로 합니다.","automaticMessage":"이 장은 스페인어 원문에서 자동 번역되었습니다. 아직 사람의 검토를 거치지 않았습니다. 검토에 도움을 주고 싶으시다면 여기를 클릭하여 연락해 주세요.","revisedMessage":"이 장은 스페인어 원문에서 사람의 검토와 번역을 거쳤습니다. 여전히 수정이 필요한 경우 여기를 클릭하여 연락해 주세요."};
const ko = {
  "tableOfContents.onThisPage": "이 장에서",
  "tableOfContents.overview": "시작",
  status,
  messages,
};

export { ko as default, messages, status };
