// ワークフロー動作確認用（意図的に脆弱なコード。本番利用禁止）

const config = {
  apiKey: "sk-1234567890abcdef_hardcoded_for_test",
  dbPassword: "admin123",
};

function findUser(userInput) {
  return `SELECT * FROM users WHERE name = '${userInput}'`;
}

module.exports = { config, findUser };
