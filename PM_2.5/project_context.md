# 🌍 ภารกิจพิชิตฝุ่น PM 2.5 (PBRU Dust Mission)

## 1. Project Overview (ภาพรวมโปรเจกต์)
- **ผู้พัฒนา:** นักศึกษาชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี (PBRU)
- **จุดประสงค์ระบบ:** เว็บไซต์แอปพลิเคชันสำหรับติดตามและบริหารจัดการข้อมูลฝุ่น PM 2.5 ประกอบด้วยหน้า Front-end สำหรับประชาชนทั่วไป (แสดงค่าฝุ่น แผนที่ คลังความรู้ กิจกรรม) และระบบ Back-end สำหรับผู้ดูแลระบบ (Dashboard สถิติ จัดการจุดติดตั้ง และ Audit Logs)

## 2. Tech Stack (เทคโนโลยีที่ใช้)
**⚠️ กฎเหล็ก: ห้ามใช้ Framework ใดๆ (เช่น Bootstrap, Tailwind, Laravel, Vue) โดยเด็ดขาด**
- **Front-end:** HTML5, CSS3 (Custom CSS เขียนเองทั้งหมด 100%), JavaScript (Vanilla JS, Fetch API)
- **Back-end:** PHP (Procedural style / Native)
- **Database:** MySQL (MariaDB)
- **External Libraries (อนุญาตให้ใช้เฉพาะตัวที่กำหนด):**
  - `Leaflet.js`: แผนที่แบบ Interactive
  - `Chart.js`: กราฟวิเคราะห์สถิติฝุ่นและผู้เข้าชม
  - `SweetAlert2`: แจ้งเตือน Pop-up (Alert/Confirm)
  - `Flatpickr`: ปฏิทินเลือกวันที่ (Custom Datepicker)
- **APIs:** Open-Meteo API (สภาพอากาศ/ค่าฝุ่น), Nominatim API (แปลงพิกัดเป็นชื่อสถานที่)

## 3. UI/UX & Design System (ระบบการออกแบบ)
- **Typography:** ฟอนต์ `Prompt` (Google Fonts) ทั้งระบบ
- **Icons:** `Material Symbols Rounded`
- **Aesthetic (สไตล์การออกแบบ):** เน้นความโมเดิร์น, Glassmorphism, UI/UX สไตล์ Gen Z, ขอบมน (border-radius: 10px - 20px), มีพื้นที่ว่าง (Whitespace) ที่เหมาะสม ไม่ใช้เส้นขอบที่ดูทื่อ
- **Color Palette:**
  - ฟ้า/น้ำเงิน (Primary/Info): `#0ea5e9`, `#0284c7`, พื้นหลัง `#f0f9ff`
  - เขียว (Success/Good AQI): `#10b981`, `#22c55e`, พื้นหลัง `#f0fdf4`
  - ส้ม/เหลือง (Warning/Moderate AQI): `#f59e0b`, `#ea580c`
  - แดง (Danger/Bad AQI): `#ef4444`, `#dc2626`
  - เทา (Text/Background): `#1e293b` (หัวข้อ), `#64748b` (เนื้อหา), `#f8fafc` (พื้นหลังเว็บ)

## 4. Directory Structure (โครงสร้างโฟลเดอร์)
- `/public` : หน้าเว็บสำหรับผู้ใช้งานทั่วไป (index.php, knowledge.php, map.php, activity.php)
  - `/components` : ไฟล์ Header, Footer
- `/sys_backend_PM` : ระบบหลังบ้านสำหรับ Admin
  - `/components` : ไฟล์ Sidebar
  - หน้าต่างๆ เช่น dashboard.php, manage_knowledge.php, manage_sensors.php, admin_logs.php
- `/config` : ไฟล์ตั้งค่า เช่น `PM_connect.php`
- `/assets` : ไฟล์ CSS (`style.css`), รูปภาพ, วิดีโอ
- `/uploads` : ไฟล์แนบที่อัปโหลดเข้าสู่ระบบ แยกตามหมวดหมู่ (events, knowledge, sensors, videos)

## 5. Database Schema (โครงสร้างฐานข้อมูล)
- `admins`: ผู้ดูแลระบบ (id, username, password_hash)
- `sensors`: จุดตรวจวัด (id, district_id, location_name, latitude, longitude, status)
- `knowledge_hub` / `knowledge_categories`: คลังความรู้
- `events`: กิจกรรม (title, event_date, description, image_path)
- `contacts`: ข้อความติดต่อจากหน้าบ้าน
- `visitor_stats`: สถิติผู้เข้าชมรายวัน
- `admin_logs`: ประวัติการทำงานของแอดมิน (admin_id, action_type, action_detail, created_at)

## 6. Strict Coding Rules (กฎการเขียนโค้ดที่ต้องปฏิบัติตาม)
1. **Responsive Design (Mobile-First):** 
   - ใช้ `@media (max-width: 992px)` สำหรับ Tablet และ Mobile โดยปรับ Header เป็น Hamburger Menu
   - ปรับ Grid/Flex ให้ตกบรรทัดอย่างสวยงาม ห้ามมีตารางหรือรูปภาพทะลุจอ
2. **Custom UI Elements:**
   - **Dropdown:** ห้ามใช้แท็ก `<select>` แบบเดิมในระบบหลังบ้าน ให้สร้างเป็น Custom Dropdown ด้วย `<div>` และ JS เสมอ
   - **Datepicker:** ห้ามใช้ `<input type="date">` แบบเพียว ให้ครอบด้วย `Flatpickr` เสมอ
   - **File Input:** ตกแต่งปุ่มอัปโหลดด้วยคลาส `.pbru-file-input` ให้เป็นเส้นประเสมอ
3. **Backend Security:**
   - ใช้ `mysqli_real_escape_string()` เสมอก่อนนำค่าจาก `$_POST` หรือ `$_GET` ลง DB
   - ทุกครั้งที่มีการแก้ไขฐานข้อมูล (Insert, Update, Delete) ให้เรียกใช้ฟังก์ชัน `saveAdminLog()` ทันทีเพื่อเก็บ Audit Logs