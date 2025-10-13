web demo at: https://nhom1ooad.w3spaces.com/
web demo using node.js: https://store-management-ojw9.onrender.com

# BÁO CÁO ĐỒ ÁN - SPORTIFY HUB

## Website Thương Mại Điện Tử Đồ Thể Thao (8 tuần)

**Sinh viên thực hiện:** [Họ và tên]  
**Mã số sinh viên:** [MSSV]  
**Lớp:** [Lớp]  
**Khoa:** Công nghệ Thông tin  
**Giảng viên hướng dẫn:** [Họ và tên GVHD]  
**Năm học:** 2024-2025

---

## MỤC LỤC

1. [Tổng quan dự án](#1-tổng-quan-dự-án)
2. [Tính năng cốt lõi (MVP)](#2-tính-năng-cốt-lõi-mvp)
3. [Cơ sở dữ liệu](#3-cơ-sở-dữ-liệu)
4. [Kế hoạch 8 tuần](#4-kế-hoạch-8-tuần)
5. [Giao diện chính](#5-giao-diện-chính)
6. [Chi phí](#6-chi-phí)
7. [Rủi ro & Giải pháp](#7-rủi-ro--giải-pháp)
8. [Tiêu chí thành công](#8-tiêu-chí-thành-công)
9. [Kết luận](#9-kết-luận)

---

## 1. TỔNG QUAN DỰ ÁN

### 1.1. Mục tiêu

- Xây dựng website thương mại điện tử chuyên bán đồ thể thao
- Áp dụng công nghệ web hiện đại (React.js + Node.js)
- Hoàn thành trong 8 tuần với tính năng cốt lõi

### 1.2. Lý do chọn đề tài

Thị trường đồ thể thao tại Việt Nam đang phát triển mạnh mẽ với tốc độ tăng trưởng 15-20% mỗi năm. Các trang thương mại điện tử tổng hợp như Shopee, Lazada tuy có mặt hàng thể thao nhưng chưa chuyên sâu, thiếu tính năng tư vấn chuyên môn. Điều này tạo ra cơ hội cho một website chuyên biệt về đồ thể thao.

### 1.3. Đối tượng người dùng và hướng sử dụng

#### 1.3.1. Phân tích đối tượng người dùng

**Đối tượng chính (Primary Users):**

**1. Người mua hàng (Khách hàng) - 18-45 tuổi:**

- **Đặc điểm:** Yêu thích thể thao, có thu nhập ổn định
- **Thói quen:** Thường mua sắm online, sử dụng smartphone và laptop
- **Nhu cầu:** Tìm kiếm đồ thể thao chất lượng với giá hợp lý
- **Hành vi:** So sánh giá, đọc đánh giá, quan tâm đến chính sách bảo hành

**2. Người quản trị (Admin):**

- **Đặc điểm:** Chủ cửa hàng hoặc nhân viên quản lý
- **Thói quen:** Sử dụng máy tính để quản lý business
- **Nhu cầu:** Quản lý sản phẩm, đơn hàng hiệu quả
- **Hành vi:** Cập nhật thông tin thường xuyên, theo dõi doanh số

**Đối tượng phụ (Secondary Users):**

**3. Người dùng tiềm năng:**

- **Đặc điểm:** Chưa có thói quen mua đồ thể thao online
- **Nhu cầu:** Tìm hiểu sản phẩm, so sánh giá
- **Hành vi:** Duyệt web, xem thông tin chi tiết trước khi quyết định

#### 1.3.2. Hướng đối tượng sử dụng website

**Mục tiêu chính:**

- **70% khách hàng cá nhân** mua đồ thể thao cho cá nhân/gia đình
- **20% khách hàng doanh nghiệp** (phòng gym, câu lạc bộ thể thao)
- **10% đại lý/reseller** mua số lượng lớn

**Phân khúc thị trường:**

**1. Theo độ tuổi:**

- **18-25 tuổi (40%):** Học sinh, sinh viên - Quan tâm giá cả, xu hướng
- **26-35 tuổi (35%):** Người đi làm - Quan tâm chất lượng, thương hiệu
- **36-45 tuổi (25%):** Gia đình có con - Mua cho cả gia đình

**2. Theo mức thu nhập:**

- **Phân khúc bình dân (40%):** 5-15 triệu/tháng - Giá dưới 500k
- **Phân khúc trung cấp (45%):** 15-30 triệu/tháng - Giá 500k-2 triệu
- **Phân khúc cao cấp (15%):** >30 triệu/tháng - Giá >2 triệu

**3. Theo sở thích thể thao:**

- **Gym/Fitness (30%):** Quần áo tập, giày thể thao, phụ kiện
- **Chạy bộ (25%):** Giày chạy, áo chạy, đồng hồ thể thao
- **Bóng đá (20%):** Giày đá bóng, áo đấu, bóng
- **Cầu lông (15%):** Vợt, giày, quần áo chuyên dụng
- **Khác (10%):** Bơi lội, tennis, yoga, etc.

#### 1.3.3. Kịch bản sử dụng (User Scenarios)

**Kịch bản 1: Khách hàng mua giày chạy bộ**

1. Truy cập website qua Google Search "giày chạy bộ"
2. Duyệt danh mục "Giày thể thao" > "Giày chạy bộ"
3. Lọc theo thương hiệu (Nike, Adidas) và khoảng giá
4. Xem chi tiết sản phẩm, đọc mô tả
5. Thêm vào giỏ hàng, kiểm tra thông tin
6. Đăng ký tài khoản (nếu chưa có) hoặc đăng nhập
7. Nhập thông tin giao hàng, chọn thanh toán COD
8. Đặt hàng thành công, nhận email xác nhận

**Kịch bản 2: Admin quản lý sản phẩm**

1. Đăng nhập vào trang admin
2. Vào mục "Quản lý sản phẩm"
3. Thêm sản phẩm mới: nhập tên, giá, mô tả, upload ảnh
4. Kiểm tra và publish sản phẩm
5. Theo dõi đơn hàng mới, cập nhật trạng thái

**Kịch bản 3: Khách hàng doanh nghiệp**

1. Liên hệ qua form contact để được tư vấn
2. Duyệt sản phẩm theo số lượng lớn
3. Đặt hàng với giá ưu đãi (thỏa thuận riêng)
4. Thanh toán chuyển khoản, giao hàng tận nơi

### 1.4. Phạm vi đề tài

Đề tài tập trung vào việc xây dựng một website thương mại điện tử hoàn chỉnh với các tính năng cơ bản nhất cần thiết cho một cửa hàng online. Dự án sẽ được thực hiện trong thời gian 8 tuần với mục tiêu tạo ra một sản phẩm MVP (Minimum Viable Product) có thể vận hành được.

**Các chức năng chính bao gồm:**

- Hệ thống đăng ký, đăng nhập người dùng
- Hiển thị và quản lý sản phẩm
- Giỏ hàng và thanh toán cơ bản
- Quản lý đơn hàng
- Trang quản trị đơn giản

**Công nghệ sử dụng:**

#### Frontend

- **React.js:** Library JavaScript phổ biến cho UI
- **Vite:** Build tool nhanh cho React
- **React Router:** Routing cho single page application
- **Axios:** HTTP client cho API calls
- **Material-UI/Ant Design:** Component library cho UI

#### Backend

- **Node.js:** Runtime JavaScript cho server
- **Express.js:** Framework web đơn giản, linh hoạt
- **MySQL:** Cơ sở dữ liệu quan hệ
- **JWT:** Authentication token
- **Bcrypt:** Mã hóa mật khẩu

#### Hosting & Deployment

- **Frontend:** Netlify / Vercel (Free tier)
- **Backend:** Railway / Render (Free tier)
- **Database:** MySQL (Cloud hoặc local)

---

## 2. PHÂN TÍCH THỊ TRƯỜNG

### 2.1. Tổng quan thị trường thể thao Việt Nam

Thị trường đồ thể thao tại Việt Nam đang trải qua giai đoạn tăng trưởng mạnh mẽ với mức tăng 15-20% mỗi năm. Theo báo cáo của Hiệp hội Thể thao Việt Nam, giá trị thị trường đạt khoảng 2.5 tỷ USD năm 2023.

**Những yếu tố thúc đẩy:**

- Ý thức về sức khỏe ngày càng tăng cao sau đại dịch COVID-19
- Xu hướng healthy lifestyle trong giới trẻ
- Sự phát triển của các phòng gym, yoga studio
- Tăng trưởng thương mại điện tử 25%/năm

**Cơ hội thị trường:**

- Thị trường online chiếm chỉ 15% tổng thị trường thể thao
- Thiếu website chuyên ngành uy tín, chất lượng
- Nhu cầu tư vấn chuyên môn cao nhưng ít được đáp ứng

### 2.2. Phân tích đối thủ cạnh tranh

**Các trang thương mại điện tử tổng hợp:**

---

## 3. TÍNH NĂNG CỐT LÕI (MVP)

### 3.1. Khách hàng (Customer)

#### ✅ Tính năng BẮT BUỘC

**Quản lý tài khoản:**

- Đăng ký tài khoản (email + password)
- Đăng nhập / Đăng xuất
- Quên mật khẩu (reset qua email - optional)
- Xem và cập nhật thông tin cá nhân

**Duyệt sản phẩm:**

- Xem danh sách sản phẩm (grid layout)
- Xem chi tiết sản phẩm (ảnh, giá, mô tả)
- Tìm kiếm sản phẩm theo tên
- Lọc sản phẩm theo danh mục

**Mua hàng:**

- Thêm sản phẩm vào giỏ hàng
- Xóa/cập nhật số lượng trong giỏ hàng
- Xem tổng tiền
- Đặt hàng với thông tin giao hàng
- Thanh toán COD (Cash on Delivery)
- Xem lịch sử đơn hàng

#### ❌ Tính năng BỎ QUA (có thể thêm sau)

- Thanh toán online (VNPay, MoMo, Stripe)
- Đánh giá và review sản phẩm
- Wishlist (danh sách yêu thích)
- Chat support trực tiếp
- Email notifications tự động
- Tìm kiếm nâng cao với filter phức tạp
- So sánh sản phẩm
- Thông báo push notifications

### 3.2. Quản trị viên (Admin)

#### ✅ Tính năng BẮT BUỘC

**Quản lý sản phẩm:**

- Thêm sản phẩm mới
- Sửa thông tin sản phẩm
- Xóa sản phẩm
- Upload ảnh sản phẩm
- Quản lý tồn kho

**Quản lý đơn hàng:**

- Xem danh sách đơn hàng
- Xem chi tiết đơn hàng
- Cập nhật trạng thái đơn hàng
  - Chờ xác nhận
  - Đang xử lý
  - Đang giao hàng
  - Hoàn thành
  - Đã hủy

#### ❌ Tính năng BỎ QUA

- Thống kê doanh thu chi tiết
- Báo cáo theo thời gian
- Quản lý khách hàng phức tạp
- Quản lý nhân viên
- Quản lý kho hàng nâng cao
- Export dữ liệu

---

## 4. CỞ SỞ DỮ LIỆU

### 4.1. Sơ đồ ERD đơn giản

```
users (1) ----< (n) orders

orders (1) ----< (n) order_items

products (1) ----< (n) order_items
```

### 3.2. Bảng dữ liệu (4 bảng chính)

#### 3.2.1. Bảng users (Người dùng)

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    role ENUM('customer', 'admin') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Giải thích:**

- `id`: Mã người dùng (tự động tăng)
- `email`: Email đăng nhập (duy nhất)
- `password`: Mật khẩu đã mã hóa (bcrypt)
- `full_name`: Họ và tên
- `phone`: Số điện thoại
- `address`: Địa chỉ giao hàng
- `role`: Vai trò (khách hàng hoặc admin)

#### 3.2.2. Bảng products (Sản phẩm)

```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    image_url VARCHAR(500),
    category VARCHAR(100),
    stock INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

**Giải thích:**

- `id`: Mã sản phẩm
- `name`: Tên sản phẩm
- `price`: Giá (VNĐ)
- `description`: Mô tả chi tiết
- `image_url`: Link ảnh sản phẩm
- `category`: Danh mục (giày, quần áo, phụ kiện...)
- `stock`: Số lượng tồn kho

#### 3.2.3. Bảng orders (Đơn hàng)

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'processing', 'shipping', 'completed', 'cancelled') DEFAULT 'pending',
    shipping_address TEXT NOT NULL,
    phone VARCHAR(20) NOT NULL,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

**Giải thích:**

- `id`: Mã đơn hàng
- `user_id`: Mã người đặt hàng (liên kết với bảng users)
- `total_amount`: Tổng tiền
- `status`: Trạng thái đơn hàng
- `shipping_address`: Địa chỉ giao hàng
- `phone`: Số điện thoại liên hệ
- `notes`: Ghi chú đơn hàng

#### 3.2.4. Bảng order_items (Chi tiết đơn hàng)

```sql
CREATE TABLE order_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

**Giải thích:**

- `id`: Mã chi tiết đơn hàng
- `order_id`: Mã đơn hàng (liên kết với bảng orders)
- `product_id`: Mã sản phẩm (liên kết với bảng products)
- `quantity`: Số lượng mua
- `price`: Giá tại thời điểm mua

---

## 4. KẾ HOẠCH 8 TUẦN

### Tuần 1: Setup & Design (Thiết lập & Thiết kế)

**Backend:**

- Cài đặt Node.js, npm
- Khởi tạo project Express.js
- Cài đặt MySQL, tạo database
- Setup biến môi trường (.env)

**Frontend:**

- Cài đặt Node.js, Vite
- Khởi tạo React project
- Setup Tailwind CSS
- Setup React Router

**Design:**

- Vẽ wireframe 6 trang chính (giấy hoặc Figma đơn giản)
- Chọn color scheme cho website
- Tìm ảnh minh họa cho sản phẩm

**Deliverable:** Project structure, database schema, wireframes

---

### Tuần 2: Backend Authentication (Xác thực người dùng)

**Tasks:**

- Tạo model User
- API đăng ký (POST /api/auth/register)
  - Validate input
  - Hash password với bcrypt
  - Lưu vào database
- API đăng nhập (POST /api/auth/login)
  - Kiểm tra email/password
  - Tạo JWT token
  - Return token + user info
- Middleware xác thực JWT

**Test:**

- Test với Postman/Insomnia
- Đăng ký user mới thành công
- Đăng nhập với thông tin đúng
- Đăng nhập với thông tin sai (báo lỗi)

**Deliverable:** Authentication APIs hoạt động

---

### Tuần 3-3.5: Backend Core APIs (APIs cốt lõi)

**Week 3: Product APIs**

- GET /api/products - Lấy danh sách sản phẩm
- GET /api/products/:id - Lấy chi tiết sản phẩm
- POST /api/products - Thêm sản phẩm (admin only)
- PUT /api/products/:id - Sửa sản phẩm (admin only)
- DELETE /api/products/:id - Xóa sản phẩm (admin only)
- Upload ảnh sản phẩm (multer)

**Week 3.5: Order & Cart APIs**

- POST /api/orders - Tạo đơn hàng
- GET /api/orders - Lấy danh sách đơn hàng (user's orders)
- GET /api/orders/:id - Chi tiết đơn hàng
- PUT /api/orders/:id/status - Cập nhật trạng thái (admin only)

**Test:**

- CRUD sản phẩm hoàn chỉnh
- Tạo đơn hàng với nhiều sản phẩm
- Tính tổng tiền đúng

**Deliverable:** Complete backend APIs

---

### Tuần 4: Frontend Setup (Thiết lập giao diện)

**Setup:**

- Tạo folder structure
  ```
  src/
  ├── components/    # Các component tái sử dụng
  ├── pages/         # Các trang chính
  ├── services/      # API calls
  ├── context/       # React Context (auth, cart)
  └── utils/         # Helper functions
  ```

**Tạo components:**

- Header (Logo, Navigation, Cart icon)
- Footer
- ProductCard (Hiển thị thông tin sản phẩm)

**Tạo pages:**

- HomePage (Trang chủ với banner)
- LoginPage (Form đăng nhập)
- RegisterPage (Form đăng ký)

**Setup routing:**

```javascript
/ - Home
/login - Login
/register - Register
/products - Product List
/products/:id - Product Detail
/cart - Shopping Cart
/checkout - Checkout
/orders - Order History
/admin - Admin Dashboard
```

**Deliverable:** Basic navigation works

---

### Tuần 5: Product Pages (Trang sản phẩm)

**Product List Page:**

- Hiển thị grid sản phẩm (4 cột)
- Mỗi card hiển thị: ảnh, tên, giá, nút "Thêm vào giỏ"
- Tìm kiếm sản phẩm (search bar)
- Filter theo category (sidebar)
- Pagination (10 sản phẩm/trang)

**Product Detail Page:**

- Ảnh sản phẩm lớn
- Tên, giá, mô tả
- Input số lượng
- Nút "Thêm vào giỏ hàng"
- Sản phẩm liên quan (optional)

**Shopping Cart:**

- Danh sách sản phẩm trong giỏ
- Tăng/giảm số lượng
- Xóa sản phẩm
- Tổng tiền
- Nút "Thanh toán"

**Cart Context:**

- Lưu giỏ hàng trong React Context
- Persist với localStorage

**Deliverable:** Complete shopping flow

---

### Tuần 6: Checkout & User Profile (Thanh toán & Hồ sơ)

**Checkout Page:**

- Form thông tin giao hàng
  - Họ tên
  - Số điện thoại
  - Địa chỉ
  - Ghi chú
- Review sản phẩm trong giỏ
- Tổng tiền
- Nút "Đặt hàng"
- Sau khi đặt hàng: Chuyển đến trang "Đơn hàng thành công"

**Order History Page:**

- Danh sách đơn hàng của user
- Mỗi đơn hiển thị: Mã đơn, ngày, tổng tiền, trạng thái
- Click vào xem chi tiết đơn hàng

**User Profile Page:**

- Hiển thị thông tin cá nhân
- Form cập nhật thông tin
- Nút đổi mật khẩu (optional)

**Deliverable:** Complete customer features

---

### Tuần 7: Admin Dashboard & Testing (Quản trị & Kiểm thử)

**Admin Dashboard:**

- Protected route (chỉ admin mới vào được)
- Sidebar menu:
  - Quản lý sản phẩm
  - Quản lý đơn hàng

**Quản lý sản phẩm:**

- Bảng danh sách sản phẩm
- Form thêm sản phẩm mới
- Form sửa sản phẩm
- Nút xóa sản phẩm (confirm trước khi xóa)

**Quản lý đơn hàng:**

- Bảng danh sách đơn hàng
- Filter theo trạng thái
- Chi tiết đơn hàng
- Dropdown cập nhật trạng thái

**Testing:**

- Test toàn bộ flow: Đăng ký → Đăng nhập → Mua hàng → Xem đơn hàng
- Test admin: Thêm/sửa/xóa sản phẩm, cập nhật đơn hàng
- Fix bugs tìm thấy
- Responsive testing (mobile, tablet)

**Deliverable:** Complete admin panel, bug-free website

---

### Tuần 8: Deployment & Final Polish (Triển khai & Hoàn thiện)

**Backend Deployment (Railway/Render):**

```bash
# Tạo account Railway
# Push code lên GitHub
# Connect GitHub repo với Railway
# Set environment variables:
  - DATABASE_URL
  - JWT_SECRET
  - PORT
# Deploy
```

**Frontend Deployment (Netlify/Vercel):**

```bash
# Build production
npm run build

# Deploy lên Netlify (drag & drop build folder)
# Hoặc connect với GitHub repo

# Set environment variable:
  - VITE_API_URL (URL backend đã deploy)
```

**Final Testing:**

- Test website trên URL thật
- Test tất cả tính năng một lần cuối
- Fix critical bugs
- Optimization nhỏ (lazy loading images)

**Documentation:**

- README.md với hướng dẫn cài đặt
- API documentation đơn giản
- User guide (nếu cần)

**Deliverable:** Live website + documentation

---

## 5. GIAO DIỆN CHÍNH

### 5.1. Trang chủ (Home Page)

**Layout:**

```
┌─────────────────────────────────┐
│  Header (Logo | Menu | Cart)    │
├─────────────────────────────────┤
│  Hero Banner (Slider)           │
├─────────────────────────────────┤
│  Sản phẩm nổi bật (Grid 4 cols) │
├─────────────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

**Chức năng:**

- Banner quảng cáo chính (có thể static image)
- Hiển thị 8-12 sản phẩm nổi bật
- Click vào sản phẩm → Trang chi tiết

---

### 5.2. Danh sách sản phẩm (Product List)

**Layout:**

```
┌─────────────────────────────────┐
│  Header                         │
├──────┬──────────────────────────┤
│ Side │  Search Bar              │
│ bar  ├──────────────────────────┤
│      │  Product Grid            │
│ Fil  │  ┌───┬───┬───┬───┐      │
│ ter  │  │ 1 │ 2 │ 3 │ 4 │      │
│      │  ├───┼───┼───┼───┤      │
│ Cate │  │ 5 │ 6 │ 7 │ 8 │      │
│ gory │  └───┴───┴───┴───┘      │
│      │  Pagination              │
├──────┴──────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

**Chức năng:**

- Filter theo category (sidebar)
- Search bar tìm kiếm
- Grid sản phẩm 4 cột
- Pagination

---

### 5.3. Chi tiết sản phẩm (Product Detail)

**Layout:**

```
┌─────────────────────────────────┐
│  Header                         │
├──────────┬──────────────────────┤
│          │  Tên sản phẩm        │
│  Image   │  Giá: 2,500,000đ     │
│  Gallery │                      │
│          │  Mô tả...            │
│          │                      │
│          │  Số lượng: [- 1 +]   │
│          │  [Thêm vào giỏ]      │
├──────────┴──────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

**Chức năng:**

- Ảnh sản phẩm (có thể zoom - optional)
- Thông tin chi tiết
- Chọn số lượng
- Nút thêm vào giỏ hàng

---

### 5.4. Giỏ hàng (Shopping Cart)

**Layout:**

```
┌─────────────────────────────────┐
│  Header                         │
├─────────────────────────────────┤
│  GIỎ HÀNG CỦA BẠN               │
├─────────────────────────────────┤
│  ┌─────────────────────────┐   │
│  │ [Img] Product Name      │   │
│  │ Giá: 500,000đ           │   │
│  │ Số lượng: [- 2 +] [Xóa] │   │
│  └─────────────────────────┘   │
│  ┌─────────────────────────┐   │
│  │ [Img] Product Name      │   │
│  │ ...                     │   │
│  └─────────────────────────┘   │
├─────────────────────────────────┤
│  Tổng cộng: 1,000,000đ          │
│  [Tiếp tục mua] [Thanh toán]    │
├─────────────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

**Chức năng:**

- Danh sách sản phẩm trong giỏ
- Thay đổi số lượng
- Xóa sản phẩm
- Tính tổng tiền tự động

---

### 5.5. Thanh toán (Checkout)

**Layout:**

```
┌─────────────────────────────────┐
│  Header                         │
├─────────────────────────────────┤
│  THÔNG TIN GIAO HÀNG            │
│  ┌─────────────────────────┐   │
│  │ Họ tên: [_________]     │   │
│  │ SĐT: [_________]        │   │
│  │ Địa chỉ: [_________]    │   │
│  │ Ghi chú: [_________]    │   │
│  └─────────────────────────┘   │
├─────────────────────────────────┤
│  ĐƠN HÀNG                       │
│  Product 1 x 2  = 1,000,000đ    │
│  Product 2 x 1  = 500,000đ      │
│  ────────────────────────────   │
│  Tổng cộng: 1,500,000đ          │
├─────────────────────────────────┤
│  [Quay lại] [Đặt hàng]          │
├─────────────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

**Chức năng:**

- Form thông tin giao hàng
- Review đơn hàng
- Nút đặt hàng

---

### 5.6. Admin Dashboard

**Layout:**

```
┌─────────────────────────────────┐
│  Header (Admin Panel)           │
├──────┬──────────────────────────┤
│ Side │  QUẢN LÝ SẢN PHẨM        │
│ bar  ├──────────────────────────┤
│      │  [Thêm sản phẩm mới]     │
│ - SP │  ┌──────────────────┐    │
│ - ĐH │  │ Table: ID | Tên  │    │
│      │  │ Giá | [Sửa][Xóa]│    │
│      │  └──────────────────┘    │
├──────┴──────────────────────────┤
│  Footer                         │
└─────────────────────────────────┘
```

**Chức năng:**

- Sidebar menu: Sản phẩm, Đơn hàng
- Table quản lý
- Form thêm/sửa

---

## 6. CHI PHÍ

### 6.1. Chi phí $0 cho MVP

| Hạng mục          | Chi phí | Ghi chú                          |
| ----------------- | ------- | -------------------------------- |
| Frontend Hosting  | $0      | Netlify/Vercel free tier         |
| Backend Hosting   | $0      | Railway/Render free tier         |
| Database          | $0      | MySQL trên cloud free hoặc local |
| Domain            | $0      | Sử dụng subdomain miễn phí       |
| SSL Certificate   | $0      | Let's Encrypt / Hosting tích hợp |
| Development Tools | $0      | VS Code, Git, Postman đều free   |

**Tổng chi phí: $0**

### 6.2. Chi phí nếu muốn nâng cấp (sau MVP)

| Hạng mục         | Chi phí/tháng | Ghi chú                     |
| ---------------- | ------------- | --------------------------- |
| Domain .com      | ~$1-2         | Namecheap, GoDaddy          |
| Hosting nâng cấp | ~$5-10        | Nếu traffic tăng            |
| Database cloud   | ~$5-15        | Nếu cần performance cao hơn |
| CDN (Cloudinary) | ~$0-20        | Tùy lượng ảnh               |

---
