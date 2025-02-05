// 引入 Node.js 的文件系统模块，用于文件操作
const fs = require('fs');

// 创建包含环境变量的脚本字符串
// 这段代码会生成一个将环境变量注入到 window.ENV 对象的 JavaScript 代码
const envScript = `
window.ENV = {
    // 从 process.env 获取 API_KEY 环境变量并注入
    API_KEY: '${process.env.API_KEY}',
    // 从 process.env 获取 BASE_URL 环境变量并注入
    BASE_URL: '${process.env.BASE_URL}'
};
`;

// 使用 writeFileSync 同步写入文件
// 将生成的环境变量脚本写入到 env.js 文件中
// 这个文件将被 index.html 引用
fs.writeFileSync('env.js', envScript);
