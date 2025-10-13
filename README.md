<div align="center">

# 🏆 BÁO CÁO ĐỒ ÁN TỐT NGHIỆP

## 🏃‍♂️ SPORTIFY HUB

### Website Thương Mại Điện Tử Chuyên Đồ Thể Thao

---

**👨‍🎓 Sinh viên thực hiện:** [Họ và tên]  
**🆔 Mã số sinh viên:** [MSSV]  
**📚 Lớp:** [Lớp]  
**🏫 Khoa:** Công nghệ Thông tin  
**👨‍🏫 Giảng viên hướng dẫn:** [Họ và tên GVHD]  
**📅 Năm học:** 2024-2025  
**⏱️ Thời gian thực hiện:** 8 tuần

</div>

---

## 📑 MỤC LỤC

1. [🎯 Tổng quan dự án](#1-🎯-tổng-quan-dự-án)
2. [📊 Phân tích thị trường](#2-📊-phân-tích-thị-trường)
3. [⚡ Tính năng cốt lõi (MVP)](#3-⚡-tính-năng-cốt-lõi-mvp)
4. [🗄️ Cơ sở dữ liệu](#4-🗄️-cơ-sở-dữ-liệu)
5. [📅 Kế hoạch 8 tuần](#5-📅-kế-hoạch-8-tuần)
6. [⚠️ Đánh giá rủi ro](#6-⚠️-đánh-giá-rủi-ro)
7. [🎯 Kết luận](#7-🎯-kết-luận)

---

## 1. 🎯 TỔNG QUAN DỰ ÁN

### 1.1. 🚀 Mục tiêu

> **🎯 Mục tiêu chính:** Xây dựng website thương mại điện tử chuyên bán đồ thể thao với công nghệ hiện đại, hoàn thành trong 8 tuần.

**📋 Mục tiêu cụ thể:**

- ✅ Phát triển website responsive với React.js
- ✅ Xây dựng backend API với Node.js + MySQL
- ✅ Triển khai các tính năng MVP cần thiết
- ✅ Deploy thành công lên cloud platform

### 1.2. 💡 Lý do chọn đề tài

<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">

**🏃‍♂️ Thị trường đồ thể thao Việt Nam đang bùng nổ:**

- 📈 Tăng trưởng **15-20%** mỗi năm
- 💰 Quy mô thị trường **~2.5 tỷ USD** (2023)
- 🛒 E-commerce tăng **25%** mỗi năm
- 🎯 Thiếu website chuyên ngành chất lượng

</div>

**🔍 Phân tích cơ hội:**

| Điểm mạnh của đối thủ     | Điểm yếu cần khai thác     |
| ------------------------- | -------------------------- |
| Shopee, Tiki: Traffic lớn | ❌ Thiếu chuyên môn tư vấn |
| Supersports: Uy tín       | ❌ Giao diện lỗi thời      |
| Decathlon: Chính hãng     | ❌ Khó tìm kiếm sản phẩm   |

### 1.3. 👥 Đối tượng người dùng và hướng sử dụng

#### 1.3.1. 🎯 Phân tích đối tượng người dùng

<table>
<tr>
<th>🛒 KHÁCH HÀNG (18-45 tuổi)</th>
<th>⚙️ QUẢN TRỊ VIÊN</th>
</tr>
<tr>
<td>
<strong>🏃‍♂️ Đặc điểm:</strong><br>
• Yêu thích thể thao<br>
• Thu nhập ổn định<br>
• Thường xuyên online<br><br>

<strong>🎯 Nhu cầu:</strong><br>
• Đồ thể thao chất lượng<br>
• Giá cả hợp lý<br>
• Tư vấn chuyên môn<br><br>

<strong>💭 Hành vi:</strong><br>
• So sánh giá cả<br>
• Đọc đánh giá<br>
• Quan tâm bảo hành

</td>
<td>
<strong>👨‍💼 Đặc điểm:</strong><br>
• Chủ shop/nhân viên<br>
• Sử dụng máy tính<br>
• Quản lý business<br><br>

<strong>📊 Nhu cầu:</strong><br>
• Quản lý sản phẩm<br>
• Theo dõi đơn hàng<br>
• Báo cáo doanh thu<br><br>

<strong>🔄 Hành vi:</strong><br>
• Cập nhật thường xuyên<br>
• Theo dõi metrics<br>
• Xử lý support

</td>
</tr>
</table>

#### 1.3.2. 📊 Phân khúc thị trường

```
🎯 PHÂN CHIA THEO ĐỘ TUỔI
┌─────────────────────────────────────────┐
│ 18-25 tuổi (40%) │ Học sinh, sinh viên │
│ 26-35 tuổi (35%) │ Người đi làm        │
│ 36-45 tuổi (25%) │ Gia đình có con     │
└─────────────────────────────────────────┘

💰 PHÂN CHIA THEO THU NHẬP
┌─────────────────────────────────────────┐
│ 5-15tr/tháng (40%) │ Giá < 500k        │
│ 15-30tr/tháng (45%)│ Giá 500k-2tr      │
│ >30tr/tháng (15%)  │ Giá > 2tr         │
└─────────────────────────────────────────┘
```

#### 1.3.3. 📝 Kịch bản sử dụng

<div style="background: linear-gradient(90deg, #e3f2fd 0%, #fff 100%); padding: 15px; border-radius: 8px; margin: 10px 0;">

**🛍️ Kịch bản 1: Khách hàng mua giày chạy bộ**

1. 🔍 Truy cập qua Google Search "giày chạy bộ"
2. 📱 Duyệt danh mục "Giày thể thao" → "Giày chạy bộ"
3. 🎯 Lọc theo thương hiệu (Nike, Adidas) và giá
4. 👀 Xem chi tiết sản phẩm, đọc mô tả
5. 🛒 Thêm vào giỏ hàng, kiểm tra thông tin
6. 📝 Đăng ký tài khoản hoặc đăng nhập
7. 📦 Nhập thông tin giao hàng, chọn COD
8. ✅ Đặt hàng thành công, nhận xác nhận

</div>

### 1.4. 🔧 Công nghệ sử dụng

<div style="display: flex; justify-content: space-between; gap: 20px;">

<div style="flex: 1; background: #f8f9fa; padding: 15px; border-radius: 8px;">

**🎨 FRONTEND**

- ⚛️ **React.js** - UI Library
- ⚡ **Vite** - Build tool nhanh
- 🛣️ **React Router** - Navigation
- 📡 **Axios** - HTTP client
- 🎭 **Material-UI** - UI Components

</div>

<div style="flex: 1; background: #f8f9fa; padding: 15px; border-radius: 8px;">

**🔧 BACKEND**

- 🟢 **Node.js** - Runtime
- 🚀 **Express.js** - Web framework
- 🗄️ **MySQL** - Database
- 🔐 **JWT** - Authentication
- 🔒 **Bcrypt** - Password hash

</div>

<div style="flex: 1; background: #f8f9fa; padding: 15px; border-radius: 8px;">

**☁️ DEPLOYMENT**

- 🌐 **Netlify/Vercel** - Frontend
- 🚂 **Railway/Render** - Backend
- 💾 **MySQL Cloud** - Database
- 🆓 **Free Tier** - Cost optimization

</div>

</div>

---

## 2. 📊 PHÂN TÍCH THỊ TRƯỜNG

### 2.1. 🌏 Tổng quan thị trường

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px;">

**📈 QUY MÔ THỊ TRƯỜNG**

- 💰 **Thị trường đồ thể thao VN:** ~2.5 tỷ USD (2023)
- 📊 **Tăng trưởng:** 15-20% mỗi năm
- 🛒 **E-commerce:** 25% tăng trưởng/năm
- 🎯 **Online market share:** Chỉ 15% (còn nhiều tiềm năng)

</div>

**🔥 Xu hướng thúc đẩy:**

| Yếu tố                             | Tác động                        |
| ---------------------------------- | ------------------------------- |
| 🦠 **Post-COVID Health Awareness** | Ý thức sức khỏe tăng mạnh       |
| 💪 **Fitness Culture**             | Phòng gym, yoga studio phổ biến |
| 📱 **Digital Shopping**            | Thói quen mua sắm online        |
| 🏃‍♂️ **Active Lifestyle**            | Xu hướng healthy lifestyle      |

### 2.2. ⚔️ Đối thủ cạnh tranh

<table style="width: 100%; border-collapse: collapse;">
<tr>
<th style="background: #e8f5e8; padding: 10px;">✅ ĐIỂM MẠNH ĐỐI THỦ</th>
<th style="background: #ffe8e8; padding: 10px;">❌ ĐIỂM YẾU CẦN KHAI THÁC</th>
</tr>
<tr>
<td style="padding: 10px; vertical-align: top;">
<strong>🛍️ Shopee, Lazada, Tiki:</strong><br>
• Lưu lượng truy cập khổng lồ<br>
• Hệ thống thanh toán đa dạng<br>
• Marketing budget lớn<br><br>

<strong>🏪 Supersports, Decathlon:</strong><br>
• Thương hiệu uy tín established<br>
• Sản phẩm chính hãng 100%<br>
• Có cửa hàng vật lý

</td>
<td style="padding: 10px; vertical-align: top;">
<strong>🎯 Cơ hội khai thác:</strong><br>
• ❌ Thiếu chuyên môn tư vấn thể thao<br>
• ❌ Giao diện chưa tối ưu cho sports<br>
• ❌ Khó tìm kiếm sản phẩm phù hợp<br>
• ❌ Không có community engagement<br>
• ❌ Thiếu tính năng so sánh chi tiết<br>
• ❌ UX/UI chưa modern
</td>
</tr>
</table>

**🎯 Chiến lược cạnh tranh:**

- 🔍 **Niche market focus** - Tập trung thể thao chuyên sâu
- 💡 **Expert consultation** - Tư vấn từ chuyên gia
- 🎨 **Superior UX** - Trải nghiệm người dùng tốt hơn
- ⚡ **Fast & responsive** - Performance optimization

---

## 3. ⚡ TÍNH NĂNG CỐT LÕI (MVP)

---

## MỤC LỤC

1. [Tổng quan dự án](#1-tổng-quan-dự-án)
2. [Phân tích thị trường](#2-phân-tích-thị-trường)
3. [Tính năng cốt lõi (MVP)](#3-tính-năng-cốt-lõi-mvp)
4. [Cơ sở dữ liệu](#4-cơ-sở-dữ-liệu)
5. [Kế hoạch 8 tuần](#5-kế-hoạch-8-tuần)
6. [Đánh giá rủi ro](#6-đánh-giá-rủi-ro)
7. [Kết luận](#7-kết-luận)

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

### 4.1. Sơ đồ ERD mới (7 bảng)

```
users (1) ----< (n) orders
orders (1) ----< (n) order_items
products (1) ----< (n) order_items

categories (1) ----< (n) products
brands (1) ----< (n) products
products (1) ----< (n) product_attributes
attributes (1) ----< (n) product_attributes
```

### 4.2. Bảng dữ liệu (7 bảng tối ưu cho tìm kiếm)

#### 4.2.1. Bảng users (Người dùng)

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

#### 4.2.2. Bảng categories (Danh mục sản phẩm)

```sql
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    image_url VARCHAR(500),
    parent_id INT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES categories(id)
);
```

**Giải thích:**

- `name`: Tên danh mục (VD: "Giày chạy bộ", "Áo thun thể thao")
- `slug`: URL-friendly name (VD: "giay-chay-bo", "ao-thun-the-thao")
- `parent_id`: Danh mục cha (hỗ trợ danh mục con)
- `is_active`: Trạng thái hiển thị

#### 4.2.3. Bảng brands (Thương hiệu)

```sql
CREATE TABLE brands (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    logo_url VARCHAR(500),
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Giải thích:**

- `name`: Tên thương hiệu (VD: "Nike", "Adidas", "Puma")
- `slug`: URL-friendly name
- `logo_url`: Logo thương hiệu

#### 4.2.4. Bảng products (Sản phẩm chính)

```sql
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    sku VARCHAR(100) UNIQUE,
    price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2) NULL,
    description TEXT,
    short_description VARCHAR(500),
    image_url VARCHAR(500),
    gallery_images JSON,
    category_id INT NOT NULL,
    brand_id INT NOT NULL,
    stock INT DEFAULT 0,
    min_stock INT DEFAULT 5,
    weight DECIMAL(8, 2),
    dimensions VARCHAR(100),
    is_active BOOLEAN DEFAULT TRUE,
    is_featured BOOLEAN DEFAULT FALSE,
    meta_title VARCHAR(255),
    meta_description VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (brand_id) REFERENCES brands(id),
    INDEX idx_category (category_id),
    INDEX idx_brand (brand_id),
    INDEX idx_price (price),
    INDEX idx_active (is_active)
);
```

**Giải thích:**

- `sku`: Mã sản phẩm duy nhất
- `sale_price`: Giá khuyến mãi (nếu có)
- `gallery_images`: JSON array chứa nhiều ảnh
- `category_id`, `brand_id`: Liên kết với bảng categories và brands
- `is_featured`: Sản phẩm nổi bật
- `meta_title`, `meta_description`: SEO

#### 4.2.5. Bảng attributes (Thuộc tính sản phẩm)

```sql
CREATE TABLE attributes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    type ENUM('text', 'number', 'boolean', 'select', 'multi_select') NOT NULL,
    unit VARCHAR(20),
    is_filterable BOOLEAN DEFAULT TRUE,
    is_searchable BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_filterable (is_filterable)
);
```

**Giải thích:**

- `name`: Tên thuộc tính (VD: "Màu sắc", "Kích thước", "Chất liệu")
- `type`: Loại dữ liệu
- `unit`: Đơn vị (VD: "cm", "kg", "inch")
- `is_filterable`: Có thể dùng để lọc không
- `display_order`: Thứ tự hiển thị

#### 4.2.6. Bảng product_attributes (Giá trị thuộc tính của sản phẩm)

```sql
CREATE TABLE product_attributes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    attribute_id INT NOT NULL,
    value VARCHAR(255) NOT NULL,
    numeric_value DECIMAL(10, 2) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (attribute_id) REFERENCES attributes(id),
    UNIQUE KEY unique_product_attribute (product_id, attribute_id),
    INDEX idx_product (product_id),
    INDEX idx_attribute (attribute_id),
    INDEX idx_value (value),
    INDEX idx_numeric_value (numeric_value)
);
```

**Giải thích:**

- `product_id`: ID sản phẩm
- `attribute_id`: ID thuộc tính
- `value`: Giá trị dạng text (VD: "Đỏ", "XL", "Cotton")
- `numeric_value`: Giá trị dạng số (VD: 42 cho size giày, 1.5 cho cân nặng kg)

### 4.3. Ví dụ dữ liệu mẫu

#### 4.3.1. Dữ liệu mẫu cho attributes

```sql
INSERT INTO attributes (name, slug, type, unit, is_filterable, display_order) VALUES
('Màu sắc', 'color', 'select', NULL, TRUE, 1),
('Kích thước', 'size', 'select', NULL, TRUE, 2),
('Chất liệu', 'material', 'select', NULL, TRUE, 3),
('Cân nặng', 'weight', 'number', 'gram', FALSE, 4),
('Thương hiệu', 'brand', 'select', NULL, TRUE, 5),
('Giới tính', 'gender', 'select', NULL, TRUE, 6),
('Loại thể thao', 'sport_type', 'multi_select', NULL, TRUE, 7);
```

#### 4.3.2. Ví dụ sản phẩm "Giày chạy bộ Nike Air Max"

```sql
-- Thêm vào bảng products
INSERT INTO products (name, slug, sku, price, category_id, brand_id, stock)
VALUES ('Nike Air Max 270', 'nike-air-max-270', 'NK-AM270-001', 2500000, 1, 1, 50);

-- Thêm các thuộc tính
INSERT INTO product_attributes (product_id, attribute_id, value) VALUES
(1, 1, 'Đen'),        -- Màu sắc
(1, 2, '42'),          -- Size
(1, 3, 'Synthetic'),   -- Chất liệu
(1, 5, 'Nike'),        -- Thương hiệu
(1, 6, 'Nam'),         -- Giới tính
(1, 7, 'Chạy bộ,Gym'); -- Loại thể thao
```

### 4.4. Lợi ích của thiết kế mới

#### 4.4.1. Tìm kiếm nâng cao

```sql
-- Tìm giày chạy bộ Nike, màu đen, size 42-44
SELECT DISTINCT p.* FROM products p
JOIN product_attributes pa1 ON p.id = pa1.product_id
JOIN product_attributes pa2 ON p.id = pa2.product_id
JOIN product_attributes pa3 ON p.id = pa3.product_id
JOIN brands b ON p.brand_id = b.id
WHERE b.name = 'Nike'
  AND pa1.attribute_id = 1 AND pa1.value = 'Đen'
  AND pa2.attribute_id = 2 AND pa2.value IN ('42', '43', '44')
  AND pa3.attribute_id = 7 AND pa3.value LIKE '%Chạy bộ%';
```

#### 4.4.2. Bộ lọc động (Dynamic Filters)

```sql
-- Lấy tất cả màu sắc có sẵn trong danh mục "Giày thể thao"
SELECT DISTINCT pa.value as color_name, COUNT(*) as product_count
FROM product_attributes pa
JOIN products p ON pa.product_id = p.id
JOIN categories c ON p.category_id = c.id
WHERE c.name = 'Giày thể thao'
  AND pa.attribute_id = 1  -- Màu sắc
  AND p.is_active = TRUE
GROUP BY pa.value
ORDER BY product_count DESC;
```

#### 4.4.3. Tính năng so sánh sản phẩm

```sql
-- So sánh thuộc tính của 2 sản phẩm
SELECT
  p.name as product_name,
  a.name as attribute_name,
  pa.value as attribute_value
FROM products p
JOIN product_attributes pa ON p.id = pa.product_id
JOIN attributes a ON pa.attribute_id = a.id
WHERE p.id IN (1, 2)  -- So sánh sản phẩm ID 1 và 2
ORDER BY p.id, a.display_order;
```

#### 4.4.4. Ưu điểm chính

✅ **Linh hoạt**: Dễ dàng thêm thuộc tính mới mà không cần thay đổi cấu trúc bảng

✅ **Hiệu suất**: Index được tối ưu cho các truy vấn tìm kiếm phức tạp

✅ **Bộ lọc động**: Tự động sinh bộ lọc dựa trên dữ liệu có sẵn

✅ **Mở rộng**: Hỗ trợ nhiều loại dữ liệu (text, số, boolean, multi-select)

✅ **SEO**: Slug và meta tags cho từng danh mục/sản phẩm

✅ **Quản lý**: Admin có thể quản lý thuộc tính độc lập với sản phẩm

#### 4.2.7. Bảng orders (Đơn hàng)

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

#### 4.2.8. Bảng order_items (Chi tiết đơn hàng)

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

## 5. KẾ HOẠCH 8 TUẦN

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

## 6. ĐÁNH GIÁ RỦI RO

### 6.1. Rủi ro kỹ thuật

| Rủi ro                     | Mức độ     | Giải pháp                                  |
| -------------------------- | ---------- | ------------------------------------------ |
| Thiếu kinh nghiệm React.js | Trung bình | Follow tutorial, sử dụng component library |
| Database design phức tạp   | Thấp       | Đơn giản hóa, tham khảo best practices     |
| API integration issues     | Trung bình | Test thường xuyên với Postman              |
| Deployment problems        | Thấp       | Sử dụng platform có documentation tốt      |

### 6.2. Rủi ro thời gian

| Giai đoạn | Rủi ro vượt thời hạn | Giải pháp                             |
| --------- | -------------------- | ------------------------------------- |
| Tuần 1-2  | Thấp                 | Setup đơn giản, nhiều tutorial        |
| Tuần 3-4  | Trung bình           | Ưu tiên API cốt lõi trước             |
| Tuần 5-6  | Cao                  | Sử dụng UI template, bỏ tính năng phụ |
| Tuần 7-8  | Trung bình           | Deploy sớm, fix bug sau               |

### 6.3. Rủi ro chất lượng

**Biện pháp đảm bảo chất lượng:**

- ✅ Test mỗi tính năng ngay sau khi code xong
- ✅ Code review (tự review hoặc nhờ bạn)
- ✅ User testing với 2-3 người thân
- ✅ Responsive testing trên nhiều thiết bị

### 6.4. Kế hoạch dự phòng

**Nếu vượt quá timeline:**

**Tuần 5-6 (Frontend):**

- Bỏ advanced search → chỉ giữ search cơ bản
- Bỏ filter phức tạp → chỉ filter theo category
- Sử dụng template UI có sẵn

**Tuần 7-8 (Testing & Deployment):**

- Ưu tiên các bug critical
- Bỏ qua bug UI nhỏ
- Deploy MVP trước, cải tiến sau

---

## 7. KẾT LUẬN

### 7.1. Tóm tắt dự án

Dự án "Sportify Hub" là một website thương mại điện tử chuyên bán đồ thể thao được phát triển trong 8 tuần với công nghệ hiện đại. Dự án tập trung vào việc tạo ra một MVP có đầy đủ tính năng cốt lõi để người dùng có thể mua sắm online một cách thuận tiện.

### 7.2. Kỳ vọng kết quả

**Về mặt kỹ thuật:**

- ✅ Website responsive chạy ổn định trên mọi thiết bị
- ✅ Database được thiết kế tối ưu với EAV model
- ✅ Backend APIs đầy đủ và secure
- ✅ Frontend user-friendly với React.js

**Về mặt chức năng:**

- ✅ Người dùng có thể đăng ký, đăng nhập
- ✅ Duyệt và tìm kiếm sản phẩm dễ dàng
- ✅ Đặt hàng và thanh toán COD
- ✅ Admin quản lý được sản phẩm và đơn hàng

**Về mặt học tập:**

- ✅ Nắm vững full-stack web development
- ✅ Hiểu về database design và optimization
- ✅ Kinh nghiệm triển khai dự án thực tế
- ✅ Kỹ năng quản lý thời gian và dự án

### 7.3. Hướng phát triển tương lai

**Phase 2 (3-6 tháng sau):**

- Tích hợp thanh toán online (VNPay, MoMo)
- Thêm tính năng review và rating
- Mobile app với React Native
- Admin dashboard nâng cao với analytics

**Phase 3 (6-12 tháng sau):**

- AI recommendation system
- Chat support tự động
- Inventory management system
- Multi-vendor marketplace

### 7.4. Đánh giá tổng thể

Dự án có scope vừa phải, phù hợp với thời gian 8 tuần và trình độ sinh viên. Tech stack được chọn phổ biến và có nhiều tài liệu hỗ trợ. Database design chuyên nghiệp, có thể mở rộng tốt trong tương lai.

**Điểm mạnh:** Thiết thực, tập trung vào MVP, timeline rõ ràng
**Điểm cần cải thiện:** Có thể thêm tính năng phân tích thị trường sâu hơn

**Tổng đánh giá:** Đây là một dự án đồ án tốt nghiệp chất lượng cao! 🏆

Chắc chắn rồi! Dựa trên báo cáo đồ án "Sportify Hub" chi tiết và kế hoạch 8 tuần, đây là cách phân chia vai trò (role) chi tiết và hiệu quả cho một team 4 người.

Mô hình này được thiết kế để mỗi người có một lĩnh vực chuyên trách chính, đồng thời vẫn có sự linh hoạt để hỗ trợ lẫn nhau, đảm bảo dự án tiến triển suôn sẻ.

Mô hình phân chia vai trò

    Team Lead & Full-stack Developer: Chịu trách nhiệm tổng thể, kết nối Frontend và Backend, và đảm bảo tiến độ.

    Backend Lead Developer: Chuyên trách xây dựng và quản lý toàn bộ server, API và cơ sở dữ liệu.

    Frontend Lead Developer: Chuyên trách xây dựng giao diện người dùng và trải nghiệm phía khách hàng.

    UI/UX Designer & QA Tester: Chịu trách nhiệm thiết kế giao diện và đảm bảo chất lượng cuối cùng của sản phẩm.

Chi tiết nhiệm vụ cho từng vai trò

1. Vai trò: Team Lead & Full-stack Developer

Người này là "đầu tàu" của dự án, có cái nhìn bao quát và là người ra quyết định cuối cùng khi có vấn đề.

    Nhiệm vụ chính:

        Quản lý tiến độ chung của dự án, đảm bảo team đi đúng kế hoạch 8 tuần.

        Thiết kế kiến trúc tổng thể của dự án (cách Frontend và Backend giao tiếp).

        Phụ trách việc tích hợp API từ Backend vào Frontend.

        Giải quyết các vấn đề kỹ thuật phức tạp hoặc các "blockers" mà thành viên khác gặp phải.

        Phụ trách chính việc triển khai (deploy) sản phẩm.

    Công việc chi tiết theo tuần:

        Tuần 1: Cùng cả team setup project. Thiết lập kho chứa code (GitHub repository), quy tắc làm việc (branching model). Hoạch định kiến trúc hệ thống.

        Tuần 2-3: Hỗ trợ Backend Lead review API. Bắt đầu xây dựng các service/hàm gọi API ở phía Frontend.

        Tuần 4-6: Nhiệm vụ cốt lõi: Tích hợp các API (sản phẩm, giỏ hàng, đặt hàng) mà Backend đã làm vào các trang mà Frontend đã xây dựng.

        Tuần 7: Hỗ trợ tích hợp API cho trang Admin. Bắt đầu chuẩn bị môi trường để deploy.

        Tuần 8: Phụ trách chính việc deploy Backend và Frontend. Viết tài liệu hướng dẫn cài đặt (README.md) và tổng hợp báo cáo.

    Kỹ năng cần thiết: Giao tiếp tốt, quản lý thời gian, Git, kiến thức vững cả React.js và Node.js, giải quyết vấn đề.

    Công cụ: Git/GitHub, Trello/Notion (để quản lý task), Vercel, Railway.

2. Vai trò: Backend Lead Developer

Người này là chủ sở hữu của toàn bộ hệ thống server và dữ liệu.

    Nhiệm vụ chính:

        Thiết kế và triển khai cơ sở dữ liệu (MySQL).

        Xây dựng toàn bộ các API RESTful theo yêu cầu.

        Xử lý logic xác thực người dùng (Đăng ký, Đăng nhập, JWT).

        Đảm bảo hiệu suất và bảo mật cho server.

    Công việc chi tiết theo tuần:

        Tuần 1: Setup project Node.js (Express.js). Thiết kế và tạo các bảng trong database MySQL dựa trên sơ đồ ERD.

        Tuần 2: Nhiệm vụ cốt lõi: Xây dựng hoàn chỉnh API Authentication (Đăng ký, Đăng nhập, mã hóa mật khẩu, tạo JWT).

        Tuần 3-3.5: Nhiệm vụ cốt lõi: Xây dựng toàn bộ API CRUD cho Sản phẩm và Đơn hàng. Xây dựng middleware để bảo vệ các route cho admin.

        Tuần 4-7: Hỗ trợ Frontend team tích hợp API, sửa lỗi API nếu có. Tối ưu hóa các câu lệnh truy vấn database.

        Tuần 8: Phối hợp với Team Lead để deploy backend. Đảm bảo server hoạt động ổn định trên môi trường thật.

    Kỹ năng cần thiết: Node.js, Express.js, MySQL, thiết kế REST API, kiến thức về bảo mật (bcrypt, JWT).

    Công cụ: VS Code, Postman/Insomnia (để test API), MySQL Workbench.

3. Vai trò: Frontend Lead Developer

Người này chịu trách nhiệm biến các thiết kế thành một trang web sống động và mượt mà.

    Nhiệm vụ chính:

        Xây dựng cấu trúc thư mục cho dự án React.js.

        Tạo các components có thể tái sử dụng (Button, Card, Input...).

        Xây dựng giao diện cho tất cả các trang người dùng (Trang chủ, Sản phẩm, Giỏ hàng, Thanh toán...).

        Quản lý trạng thái của ứng dụng (ví dụ: thông tin người dùng đăng nhập, các sản phẩm trong giỏ hàng).

    Công việc chi tiết theo tuần:

        Tuần 1: Setup project React.js (Vite), cài đặt Tailwind CSS, React Router.

        Tuần 4: Nhiệm vụ cốt lõi: Dựng layout chính (Header, Footer) và các trang tĩnh (Đăng nhập, Đăng ký). Cấu hình routing cho toàn bộ website.

        Tuần 5: Nhiệm vụ cốt lõi: Xây dựng Trang danh sách sản phẩm và Trang chi tiết sản phẩm. Xây dựng chức năng giỏ hàng (Cart Context/State).

        Tuần 6: Xây dựng Trang thanh toán (Checkout) và Trang lịch sử đơn hàng, thông tin cá nhân.

        Tuần 7: Xây dựng giao diện cho các trang quản trị (Admin Dashboard): Quản lý sản phẩm, Quản lý đơn hàng.

        Tuần 8: Cùng team sửa các lỗi giao diện cuối cùng, tối ưu responsive.

    Kỹ năng cần thiết: React.js (Hooks, Context API), HTML/CSS, Tailwind CSS, Javascript (ES6+), làm việc với API (Axios).

    Công cụ: VS Code, React Dev Tools (trên trình duyệt).

4. Vai trò: UI/UX Designer & QA Tester

Vai trò này đảm bảo sản phẩm vừa đẹp, dễ sử dụng, vừa chạy đúng chức năng và không có lỗi.

    Nhiệm vụ chính:

        Giai đoạn đầu: Thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX) cho website.

        Giai đoạn sau: Kiểm thử (test) toàn bộ các chức năng, tìm lỗi (bug) và báo cáo cho team.

        Viết tài liệu hướng dẫn sử dụng và chuẩn bị slide thuyết trình.

    Công việc chi tiết theo tuần:

        Tuần 1: Nhiệm vụ cốt lõi: Sử dụng Figma (hoặc công cụ tương tự) để vẽ wireframe và mockup cho các trang chính đã nêu trong kế hoạch. Chọn màu sắc, font chữ.

        Tuần 2-4: Hoàn thiện thiết kế chi tiết. Chuẩn bị các tài nguyên (icon, ảnh) cho Frontend team. Bắt đầu viết các kịch bản kiểm thử (Test Cases).

        Tuần 5-6: Nhiệm vụ cốt lõi: Bắt đầu kiểm thử các luồng chức năng của người dùng (mua sắm, thanh toán). Test trên nhiều trình duyệt và kích thước màn hình (responsive).

        Tuần 7: Kiểm thử kỹ lưỡng các chức năng của trang Admin. Ghi nhận lại các lỗi và báo cáo chi tiết (lỗi gì, cách tái hiện, ảnh chụp màn hình).

        Tuần 8: Kiểm thử lần cuối trên môi trường đã deploy. Viết tài liệu hướng dẫn sử dụng, hoàn thiện báo cáo và slide thuyết trình.

    Kỹ năng cần thiết: Sử dụng công cụ thiết kế (Figma), tư duy logic, tỉ mỉ, cẩn thận, khả năng viết báo cáo rõ ràng.

    Công cụ: Figma, Trello (để báo cáo bug), các trình duyệt web khác nhau (Chrome, Firefox).
