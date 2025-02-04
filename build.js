const fs = require('fs');

// 创建包含环境变量的脚本
const envScript = `
window.ENV = {
    API_KEY: '${process.env.API_KEY}',
    BASE_URL: '${process.env.BASE_URL}'
};
`;

// 将脚本写入文件
fs.writeFileSync('env.js', envScript);
