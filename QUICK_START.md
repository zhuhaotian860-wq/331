# ⚡ 快速配置指南 - 5分钟快速开始

## 第一步：修改所有联系方式

### 1. 微信ID（共1处）
搜索 `vision_photo2024` 替换为你的微信ID

```javascript
// 在 JavaScript 部分的 copyWechat() 函数
const wechatId = 'vision_photo2024'; // ← 改这里
```

### 2. 电话号码（共2处）
搜索 `010-8888-8888` 替换为你的电话

```html
<!-- HTML 部分 -->
<a href="tel:+86-10-8888-8888">  <!-- ← 改这里的电话号码 -->
<small>010-8888-8888</small>      <!-- ← 改这里的显示号码 -->
```

### 3. 邮箱（可选）
搜索 `contact@vision-photo.com` 替换为你的邮箱

---

## 第二步：修改公司基本信息

### 1. 公司名称（共3处）
搜索 `VISION` 替换为你的公司名称

```html
<!-- Logo -->
<div class="logo">VISION</div>

<!-- 页面标题 -->
<title>VISION - 高端摄影工作室</title>

<!-- 页脚 -->
<p>&copy; 2024 VISION 摄影工作室. 版权所有</p>
```

### 2. 公司口号（可选）
找到 Hero 部分：
```html
<h1>捕捉每一个精彩瞬间</h1>
<p>专业级摄影服务，为您记录最珍贵的时刻</p>
```

---

## 第三步：修改价格（可选）

### 基础套餐
```html
<div class="pricing-price">¥1,999</div>      <!-- ← 改价格 -->
<div class="pricing-period">4小时拍摄</div>  <!-- ← 改时长 -->
```

### 标准套餐
```html
<div class="pricing-price">¥3,999</div>      <!-- ← 改价格 -->
<div class="pricing-period">8小时拍摄</div>  <!-- ← 改时长 -->
```

### 高级套餐
```html
<div class="pricing-price">¥7,999</div>      <!-- ← 改价格 -->
<div class="pricing-period">全天拍摄</div>   <!-- ← 改时长 -->
```

---

## 第四步：修改社交媒体链接（页脚）

```html
<div class="social-links">
    <a href="#" title="微博">微</a>      <!-- ← 改为你的微博链接 -->
    <a href="#" title="微信">信</a>      <!-- ← 改为你的微信链接 -->
    <a href="#" title="小红书">小</a>    <!-- ← 改为你的小红书链接 -->
    <a href="#" title="抖音">抖</a>      <!-- ← 改为你的抖音链接 -->
    <a href="#" title="Instagram">I</a>  <!-- ← 改为你的 Instagram 链接 -->
</div>
```

---

## 🎨 进阶修改

### 添加真实作品图片

```html
<!-- 找到作品展示部分 -->
<div class="gallery-item">
    <div class="gallery-item-overlay">...</div>
</div>

<!-- 在 CSS 中添加背景图片 -->
<style>
.gallery-item:nth-child(1)::before { 
    background: url('path/to/your/image.jpg') !important;
    background-size: cover;
    background-position: center;
}
</style>
```

### 修改色彩主题

主要颜色变量位置：
```css
/* 黑色主题 */
#000          /* 主色 */
#fff          /* 背景色 */

/* 渐变色 */
#667eea 到 #764ba2  /* 紫色渐变 */
#f093fb 到 #f5576c  /* 粉色渐变 */
```

### 修改特色优势列表

```html
<ul class="feature-list">
    <li>经验丰富的专业团队</li>        <!-- ← 改这里 -->
    <li>最先进的摄影设备</li>          <!-- ← 改这里 -->
    <li>创意十足的拍摄方案</li>        <!-- ← 改这里 -->
    <li>快速高效的后期处理</li>        <!-- ← 改这里 -->
    <li>24小时贴心客服支持</li>        <!-- ← 改这里 -->
    <li>满意度保证退款政策</li>        <!-- ← 改这里 -->
</ul>
```

---

## 📝 修改项目类型（接单表单）

```html
<select required>
    <option value="">-- 请选择项目类型 --</option>
    <option value="wedding">婚礼摄影</option>      <!-- ← 修改 -->
    <option value="portrait">人像摄影</option>    <!-- ← 修改 -->
    <option value="commercial">商业摄影</option>  <!-- ← 修改 -->
    <!-- ... 继续修改其他选项 -->
</select>
```

---

## 🚀 立即上线（3步）

### 1️⃣ 上传到 GitHub
```bash
git init
git add .
git commit -m "初始提交"
git remote add origin https://github.com/你的用户名/vision-photo.git
git push -u origin main
```

### 2️⃣ 访问 Vercel
访问 https://vercel.com，使用 GitHub 登录

### 3️⃣ 部署
点击 "New Project" → 选择你的仓库 → "Deploy" → 完成！

**你的网站现在是在线的！** 🎉

---

## ✅ 上线前最后检查

- [ ] 微信 ID 已更新
- [ ] 电话号码已更新  
- [ ] 公司名称已更新
- [ ] 价格已更新（如需要）
- [ ] 社交媒体链接已更新
- [ ] 所有链接在浏览器中都能工作
- [ ] 在手机上看起来正常
- [ ] 表单可以填写和提交

---

## 💡 提示

**保存备份**：修改前建议保存原始文件的备份
```bash
cp index.html index.html.backup
```

**测试表单**：修改后立即在本地测试所有功能
```bash
python -m http.server 8000
# 然后访问 http://localhost:8000
```

**浏览器缓存**：上线后如果看不到更新，按 Ctrl+Shift+Del 清除缓存

---

**需要帮助？**查看 DEPLOYMENT.md 获取详细说明
