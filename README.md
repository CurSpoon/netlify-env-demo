# Netlify Environment Variables Demo

一个简单的演示项目，展示如何在 Netlify 部署的网站中正确使用和访问环境变量。

---

## 项目介绍

本项目演示了在 Netlify 托管的静态网站中设置和使用环境变量的最佳实践。项目包含必要的配置文件和基本的前端代码，适合作为学习 Netlify 环境变量使用的参考示例。

---

## 功能特性

- ✨ **安全地处理环境变量**  
  使用构建脚本将环境变量注入项目，确保在源代码中不直接暴露敏感信息。
- 🔒 **基本的安全头配置**  
  配置了 Netlify 的 `_headers` 文件，包含基本的内容安全策略（CSP），防止点击劫持等安全威胁。
- 📝 **环境变量展示界面**  
  在主页面中展示部分环境变量内容，便于调试和验证。
- 🛠️ **自动化环境变量注入脚本**  
  提供构建脚本 `build.js`，自动生成环境变量配置文件。

---

## 项目结构

```plaintext
netlify-env-demo/
├── index.html   # 主页面，展示环境变量
├── build.js     # 构建脚本，用于生成环境变量文件
├── _headers     # Netlify 安全头配置
└── README.md    # 项目文档
```

---

## 使用说明

### 1. 克隆项目

使用 Git 克隆项目到本地：

```bash
git clone https://github.com/CurSpoon/netlify-env-demo.git
cd netlify-env-demo
```

### 2. 配置 Netlify 环境变量

在 Netlify 后台配置以下环境变量：

- `API_KEY`
- `BASE_URL`

### 3. 部署到 Netlify

- 连接你的 GitHub 仓库到 Netlify。
- 配置构建命令：  
  ```bash
  node build.js
  ```
- 设置发布目录：`/`（项目根目录）

### 4. 本地开发

#### 4.1 创建 `.env` 文件

在项目根目录下创建 `.env` 文件，并配置环境变量：

```env
API_KEY=your-api-key
BASE_URL=your-base-url
```

#### 4.2 运行构建脚本

执行以下命令生成环境变量文件：

```bash
node build.js
```

#### 4.3 启动本地服务器

使用你喜欢的本地服务器（如 [http-server](https://www.npmjs.com/package/http-server)）启动项目进行调试。

---

## 安全考虑

- **构建时注入环境变量**  
  环境变量在构建时注入，不会直接暴露在源代码中。
- **基本的内容安全策略**  
  通过 `_headers` 文件配置 CSP，有效防止点击劫持等常见攻击。
- **额外的安全措施**  
  建议在生产环境中进一步完善安全配置，如使用 HTTPS、完善防火墙设置等。

**注意：**  
- 切勿将实际的 API 密钥提交到代码仓库中。
- 确保在 Netlify 后台正确配置所有必要的环境变量。
- 定期更新项目依赖和安全配置，防范已知漏洞。

---

## 贡献

欢迎提交 Issue 和 Pull Request 来改进此演示项目。如果你有任何建议或改进意见，请随时贡献你的力量。

---

## 许可

本项目采用 [MIT License](LICENSE) 开源许可，详细信息请参阅 LICENSE 文件。
以上就是完善后的 `README.md`，希望能对你有所帮助！
