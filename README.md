# 🏃‍♂️ SPORTS STORE API

> Backend API cho hệ thống thương mại điện tử chuyên bán đồ thể thao

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18.x-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-orange.svg)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 MỤC LỤC

- [Tổng quan](#-tổng-quan)
- [Tính năng chính](#-tính-năng-chính)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cài đặt](#-cài-đặt)
- [Cấu hình](#-cấu-hình)
- [Chạy ứng dụng](#-chạy-ứng-dụng)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Deployment](#-deployment)
- [Testing](#-testing)

---

## 🎯 TỔNG QUAN

Sports Store API là backend RESTful API được xây dựng bằng Node.js, Express và MySQL, cung cấp đầy đủ các tính năng cho một hệ thống thương mại điện tử bán đồ thể thao.

### ✨ Điểm nổi bật

- ✅ RESTful API architecture
- ✅ JWT Authentication & Authorization
- ✅ Role-based Access Control (Customer & Admin)
- ✅ File upload với Multer
- ✅ Input validation với express-validator
- ✅ Secure password hashing với bcrypt
- ✅ Email notifications với Nodemailer
- ✅ Transaction support cho orders
- ✅ Comprehensive error handling

---

## 🚀 TÍNH NĂNG CHÍNH

### 👥 Authentication & User Management
- Đăng ký tài khoản mới
- Đăng nhập với JWT token
- Refresh token mechanism
- Quên mật khẩu & reset qua email
- Quản lý thông tin cá nhân
- Đổi mật khẩu

### 🛍️ Product Management
- Xem danh sách sản phẩm (hỗ trợ tìm kiếm, lọc, phân trang)
- Xem chi tiết sản phẩm
- Admin: CRUD sản phẩm
- Admin: Upload/xóa hình ảnh sản phẩm
- Admin: Quản lý tồn kho

### 🛒 Shopping Cart
- Thêm sản phẩm vào giỏ hàng
- Cập nhật số lượng
- Xóa sản phẩm khỏi giỏ
- Xóa toàn bộ giỏ hàng

### 📦 Order Management
- Tạo đơn hàng từ giỏ hàng
- Xem lịch sử đơn hàng
- Xem chi tiết đơn hàng
- Hủy đơn hàng (pending/processing)
- Admin: Quản lý tất cả đơn hàng
- Admin: Cập nhật trạng thái đơn hàng
- Admin: Thống kê đơn hàng

### 📂 Category Management
- Xem danh sách danh mục
- Xem chi tiết danh mục
- Hỗ trợ danh mục cha-con (nested categories)
- Admin: CRUD danh mục

---

## 🛠 CÔNG NGHỆ SỬ DỤNG

### Backend Core
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MySQL** - Relational database
- **MySQL2** - MySQL client cho Node.js

### Authentication & Security
- **jsonwebtoken** - JWT token generation
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **helmet** - Security headers
- **cors** - Cross-Origin Resource Sharing

### File Upload & Email
- **multer** - File upload middleware
- **nodemailer** - Email sending
- **uuid** - Unique ID generation

### Development Tools
- **dotenv** - Environment variables
- **morgan** - HTTP request logger
- **nodemon** - Auto-restart development server

---

## 📥 CÀI ĐẶT

### Yêu cầu hệ thống

- Node.js >= 18.x
- MySQL >= 8.0
- npm hoặc yarn

### Bước 1: Clone repository

```bash
git clone https://github.com/your-username/sports-store-backend.git
cd sports-store-backend
```

### Bước 2: Cài đặt dependencies

```bash
npm install
```

### Bước 3: Tạo database

```bash
# Đăng nhập MySQL
mysql -u root -p

# Tạo database
CREATE DATABASE sports_store;
USE sports_store;

# Import schema (file được cung cấp riêng)
source database/schema.sql;

# (Optional) Import sample data
source database/sample_data.sql;
```

### Bước 4: Cấu hình environment variables

```bash
cp .env.example .env
```

Chỉnh sửa file `.env` với thông tin của bạn.

---

## ⚙️ CẤU HÌNH

Tạo file `.env` trong thư mục root:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=sports_store
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this
JWT_EXPIRES_IN=7d
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRES_IN=30d

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=Sports Store <noreply@sportsstore.com>

# Frontend URL (for password reset links)
FRONTEND_URL=http://localhost:3000

# File Upload
MAX_FILE_SIZE=5242880
UPLOAD_PATH=./uploads/products
```

### 📧 Cấu hình Email (Gmail)

1. Đăng nhập Gmail
2. Bật 2-Step Verification
3. Tạo App Password: https://myaccount.google.com/apppasswords
4. Sử dụng App Password làm `EMAIL_PASSWORD` trong `.env`

---

## 🏃 CHẠY ỨNG DỤNG

### Development mode (với nodemon)

```bash
npm run dev
```

### Production mode

```bash
npm start
```

Server sẽ chạy tại: `http://localhost:5000`

---

## 📚 API DOCUMENTATION

### Base URL

```
http://localhost:5000/api
```

### Authentication

Hầu hết các API yêu cầu JWT token trong header:

```http
Authorization: Bearer <your_jwt_token>
```

---

## 🔐 AUTH APIs

### 1. Đăng ký tài khoản

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "full_name": "Nguyễn Văn A",
  "phone": "0123456789",
  "address": "123 Đường ABC, Quận 1, TP.HCM"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": 1,
      "email": "user@example.com",
      "full_name": "Nguyễn Văn A",
      "role": "customer"
    },
    "accessToken": "eyJhbGci...",
    "refreshToken": "eyJhbGci..."
  }
}
```

### 2. Đăng nhập

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 3. Refresh Token

```http
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGci..."
}
```

### 4. Quên mật khẩu

```http
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### 5. Reset mật khẩu

```http
POST /auth/reset-password
Content-Type: application/json

{
  "token": "uuid-token-from-email",
  "new_password": "newpassword123"
}
```

### 6. Xem thông tin cá nhân

```http
GET /auth/me
Authorization: Bearer <token>
```

### 7. Cập nhật thông tin

```http
PUT /auth/me
Authorization: Bearer <token>
Content-Type: application/json

{
  "full_name": "Nguyễn Văn B",
  "phone": "0987654321",
  "address": "456 Đường XYZ"
}
```

### 8. Đổi mật khẩu

```http
POST /auth/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "current_password": "oldpassword",
  "new_password": "newpassword123"
}
```

### 9. Đăng xuất

```http
POST /auth/logout
Authorization: Bearer <token>
```

---

## 🛍️ PRODUCTS APIs

### 1. Danh sách sản phẩm

```http
GET /products?page=1&limit=20&search=nike&category_id=1&min_price=100000&max_price=5000000&sort_by=price&sort_order=asc
```

**Query Parameters:**
- `page` (optional): Số trang, default = 1
- `limit` (optional): Số items/trang, default = 20
- `search` (optional): Tìm kiếm theo tên
- `category_id` (optional): Lọc theo danh mục
- `status` (optional): active, inactive, out_of_stock
- `min_price`, `max_price` (optional): Khoảng giá
- `sort_by` (optional): created_at, price, name
- `sort_order` (optional): asc, desc

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

### 2. Chi tiết sản phẩm

```http
GET /products/:slug
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Nike Air Max 270",
    "slug": "nike-air-max-270",
    "description": "...",
    "price": 2500000,
    "compare_price": 3000000,
    "stock_quantity": 50,
    "category_name": "Giày thể thao",
    "images": [
      {
        "id": 1,
        "image_url": "/uploads/products/image1.jpg",
        "is_primary": true
      }
    ]
  }
}
```

---

## 📂 CATEGORIES APIs

### 1. Danh sách danh mục

```http
GET /categories?is_active=true&parent_id=null
```

### 2. Chi tiết danh mục

```http
GET /categories/:slug
```

---

## 🛒 CART APIs

### 1. Xem giỏ hàng

```http
GET /cart
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": 1,
        "product_id": 5,
        "name": "Nike Air Max",
        "price": 2500000,
        "quantity": 2,
        "image": "/uploads/products/nike.jpg"
      }
    ],
    "summary": {
      "items_count": 2,
      "total_quantity": 3,
      "subtotal": 5000000
    }
  }
}
```

### 2. Thêm vào giỏ

```http
POST /cart/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "product_id": 5,
  "quantity": 2
}
```

### 3. Cập nhật số lượng

```http
PUT /cart/items/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "quantity": 3
}
```

### 4. Xóa sản phẩm

```http
DELETE /cart/items/:id
Authorization: Bearer <token>
```

### 5. Xóa toàn bộ giỏ

```http
DELETE /cart
Authorization: Bearer <token>
```

---

## 📦 ORDERS APIs

### 1. Tạo đơn hàng

```http
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
  "customer_name": "Nguyễn Văn A",
  "customer_phone": "0123456789",
  "customer_email": "user@example.com",
  "shipping_address": "123 Đường ABC, Quận 1, TP.HCM",
  "notes": "Giao giờ hành chính",
  "shipping_fee": 30000
}
```

### 2. Lịch sử đơn hàng

```http
GET /orders?status=pending&page=1&limit=10
Authorization: Bearer <token>
```

### 3. Chi tiết đơn hàng

```http
GET /orders/:order_number
Authorization: Bearer <token>
```

### 4. Hủy đơn hàng

```http
POST /orders/:order_number/cancel
Authorization: Bearer <token>
```

---

## 👨‍💼 ADMIN APIs

> ⚠️ Tất cả Admin APIs yêu cầu role='admin'

### Products Management

#### 1. Thêm sản phẩm

```http
POST /admin/products
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

category_id: 1
name: Nike Air Max 270
description: ...
price: 2500000
compare_price: 3000000
stock_quantity: 50
sku: NK-AM270-001
status: active
images: [file1, file2, file3]
```

#### 2. Cập nhật sản phẩm

```http
PUT /admin/products/:id
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Nike Air Max 270 Updated",
  "price": 2400000,
  "stock_quantity": 45
}
```

#### 3. Xóa sản phẩm

```http
DELETE /admin/products/:id
Authorization: Bearer <admin_token>
```

#### 4. Upload ảnh sản phẩm

```http
POST /admin/products/:id/images
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

images: [file1, file2]
is_primary: true (cho ảnh đầu tiên)
```

#### 5. Xóa ảnh

```http
DELETE /admin/products/images/:image_id
Authorization: Bearer <admin_token>
```

#### 6. Cập nhật tồn kho

```http
PATCH /admin/products/:id/stock
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "action": "increase",  // set, increase, decrease
  "quantity": 10
}
```

### Orders Management

#### 1. Danh sách đơn hàng

```http
GET /admin/orders?status=pending&search=ORD&from_date=2024-01-01&to_date=2024-12-31&page=1&limit=20
Authorization: Bearer <admin_token>
```

#### 2. Chi tiết đơn hàng

```http
GET /admin/orders/:order_number
Authorization: Bearer <admin_token>
```

#### 3. Cập nhật trạng thái

```http
PATCH /admin/orders/:order_number/status
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "status": "processing",  // pending, processing, shipping, completed, cancelled
  "notes": "Đã xác nhận đơn hàng"
}
```

#### 4. Thống kê

```http
GET /admin/orders/statistics
Authorization: Bearer <admin_token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total_orders": 1250,
    "pending_orders": 45,
    "processing_orders": 120,
    "shipping_orders": 80,
    "completed_orders": 980,
    "cancelled_orders": 25,
    "total_revenue": 245000000,
    "average_order_value": 196000
  }
}
```

### Categories Management

#### 1. Thêm danh mục

```http
POST /admin/categories
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Giày chạy bộ",
  "slug": "giay-chay-bo",
  "description": "Giày chuyên dụng cho chạy bộ",
  "image_url": "/uploads/categories/running.jpg",
  "parent_id": 1,
  "is_active": true,
  "display_order": 1
}
```

#### 2. Cập nhật danh mục

```http
PUT /admin/categories/:id
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "Giày chạy bộ Pro",
  "is_active": true
}
```

#### 3. Xóa danh mục

```http
DELETE /admin/categories/:id
Authorization: Bearer <admin_token>
```

---

## 🗄️ DATABASE SCHEMA

### Tổng quan

Database gồm **9 bảng chính**:

```
users                    → Người dùng (customers & admins)
password_resets          → Token reset mật khẩu
categories               → Danh mục sản phẩm (hỗ trợ nested)
products                 → Sản phẩm
product_images           → Hình ảnh sản phẩm (nhiều ảnh/sản phẩm)
cart_items               → Giỏ hàng
orders                   → Đơn hàng
order_items              → Chi tiết đơn hàng (snapshot)
order_status_history     → Lịch sử thay đổi trạng thái
```

### Quan hệ chính

```
users (1) ----< (N) orders
users (1) ----< (N) cart_items
categories (1) ----< (N) products
categories (1) ----< (N) categories [parent-child]
products (1) ----< (N) product_images
products (1) ----< (N) cart_items
products (1) ----< (N) order_items
orders (1) ----< (N) order_items
orders (1) ----< (N) order_status_history
```

### 📄 Chi tiết schema

Xem file `docs.md` để biết chi tiết đầy đủ về:
- Cấu trúc từng bảng
- Các constraints và indexes
- Enum values
- Business logic

---

## 🚀 DEPLOYMENT

### Deploy lên Railway (Backend + MySQL)

1. **Tạo tài khoản Railway**: https://railway.app

2. **Deploy từ GitHub**:
   - New Project → Deploy from GitHub repo
   - Chọn repository
   - Railway tự động detect Node.js

3. **Add MySQL Database**:
   - New → Database → Add MySQL
   - Railway tự động tạo `DATABASE_URL`

4. **Set Environment Variables**:
   ```
   NODE_ENV=production
   JWT_SECRET=your_production_secret
   JWT_REFRESH_SECRET=your_production_refresh_secret
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email
   EMAIL_PASSWORD=your-app-password
   FRONTEND_URL=https://your-frontend.netlify.app
   ```

5. **Import Database Schema**:
   - Connect MySQL bằng Railway CLI
   - Run: `mysql < database/schema.sql`

6. **Deploy**: Railway tự động build và deploy

### Deploy lên Render (Alternative)

1. Tạo tài khoản: https://render.com
2. New → Web Service
3. Connect GitHub repository
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add Environment Variables
7. Create PostgreSQL/MySQL database riêng

---

## 🧪 TESTING

### Test với Postman

1. Import Postman collection (được cung cấp riêng)
2. Set environment variables:
   ```
   base_url: http://localhost:5000/api
   access_token: <your_jwt_token>
   ```

### Manual Testing Flow

```bash
# 1. Đăng ký tài khoản
POST /auth/register

# 2. Đăng nhập
POST /auth/login
→ Lưu accessToken

# 3. Xem sản phẩm
GET /products

# 4. Thêm vào giỏ
POST /cart/items
Headers: Authorization: Bearer <token>

# 5. Xem giỏ hàng
GET /cart

# 6. Đặt hàng
POST /orders

# 7. Xem lịch sử
GET /orders
```

---

## 📝 ERROR HANDLING

API sử dụng HTTP status codes chuẩn:

- `200 OK`: Request thành công
- `201 Created`: Tạo resource thành công
- `400 Bad Request`: Validation error
- `401 Unauthorized`: Thiếu/sai token
- `403 Forbidden`: Không đủ quyền
- `404 Not Found`: Không tìm thấy resource
- `409 Conflict`: Duplicate entry
- `500 Internal Server Error`: Lỗi server

### Error Response Format

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

---

## 🔒 SECURITY

- ✅ Password hashing với bcrypt (salt rounds: 10)
- ✅ JWT với secret key mạnh
- ✅ HTTP-only cookies cho refresh tokens (optional)
- ✅ Helmet.js cho security headers
- ✅ CORS configuration
- ✅ Input validation & sanitization
- ✅ SQL injection protection (parameterized queries)
- ✅ File upload restrictions (type & size)
- ✅ Rate limiting (có thể thêm với express-rate-limit)

---

## 📂 PROJECT STRUCTURE

```
sports-store-backend/
├── src/
│   ├── config/              # Database, JWT, Multer config
│   ├── middleware/          # Auth, Admin, Validate, Error handlers
│   ├── routes/              # API routes
│   │   ├── auth.routes.js
│   │   ├── products.routes.js
│   │   ├── cart.routes.js
│   │   ├── orders.routes.js
│   │   └── admin/           # Admin routes
│   ├── controllers/         # Business logic
│   ├── models/              # Data access layer
│   ├── utils/               # Helper functions
│   ├── validators/          # Input validation rules
│   └── app.js               # Express app
├── uploads/                 # Uploaded files
│   └── products/
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── server.js                # Entry point
└── README.md
```

---

## 🤝 CONTRIBUTING

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 LICENSE

This project is licensed under the MIT License.

---

## 👨‍💻 AUTHOR

**Your Name**
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 ACKNOWLEDGMENTS

- Express.js documentation
- MySQL documentation
- JWT.io
- Node.js best practices

---

## 📞 SUPPORT

Nếu bạn gặp vấn đề, vui lòng:
1. Kiểm tra [Issues](https://github.com/yourusername/sports-store-backend/issues)
2. Tạo issue mới nếu chưa có
3. Liên hệ qua email: your.email@example.com

---

**⭐ Nếu project hữu ích, hãy cho một star nhé! ⭐**
