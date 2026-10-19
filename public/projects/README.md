# โฟลเดอร์รูปภาพของแต่ละโปรเจกต์ (Project Image Folders)

คุณสามารถนำรูปภาพแคปเจอร์หน้าจอ (Screenshots) หรือรูปกราฟิกมาวางในโฟลเดอร์ของแต่ละโปรเจกต์ได้เลย โดยแนะนำการตั้งชื่อดังนี้:

---

## กฎการตั้งชื่อรูปภาพง่ายๆ:
- **รูปภาพปก (ภาพใหญ่หน้าการ์ด):** ให้ตั้งชื่อว่า `cover.png` หรือ `cover.jpg` (หรือชื่ออะไรก็ได้ตามสะดวก)
- **รูปภาพย่อยๆ สำหรับกดดูใน Modal:** ตั้งชื่อตามต้องการ เช่น `1.png`, `2.png`, `3.png` หรือ `dashboard.png`, `map.png`

---

## รายชื่อโฟลเดอร์สำหรับแต่ละโปรเจกต์:

1. 📁 `public/projects/neocoare-ai/`
   - สำหรับโปรเจกต์: **NeoCoare AI (แอปตรวจเบาหวานขึ้นเท้าด้วย AI)**
   - ตัวอย่าง: `cover.png`, `camera_view.png`, `report_pdf.png`

2. 📁 `public/projects/pm25-dust-mission/`
   - สำหรับโปรเจกต์: **PBRU Dust Mission (ภารกิจพิชิตฝุ่น PM 2.5)**
   - *(ตอนนี้มีไฟล์ตัวอย่าง `map.png`, `activity.png`, `contact.png` บรรจุอยู่แล้ว)*

3. 📁 `public/projects/thai-woodwork/`
   - สำหรับโปรเจกต์: **Phetchaburi Thai Woodwork (ระบบร้านไม้ไทยดั้งเดิม)**
   - ตัวอย่าง: `cover.png`, `booking.png`, `chatbot.png`

4. 📁 `public/projects/camping-store/`
   - สำหรับโปรเจกต์: **Camping Gear Store (ระบบร้านค้าอุปกรณ์แคมป์)**
   - ตัวอย่าง: `cover.png`, `slip_check.png`, `admin_catalog.png`

5. 📁 `public/projects/axora-web/`
   - สำหรับโปรเจกต์: **Axora Web**
   - ตัวอย่าง: `cover.png`, `homepage.png`, `responsive.png`

6. 📁 `public/projects/medicare-alert/`
   - สำหรับโปรเจกต์: **MediCareAlert (ระบบแจ้งเตือนตารางยา)**
   - ตัวอย่าง: `cover.png`, `schedule.png`, `notification.png`

7. 📁 `public/projects/haunted-house/`
   - สำหรับโปรเจกต์: **Haunted House 2D (เกม 2D ด้วย Godot)**
   - ตัวอย่าง: `cover.png`, `gameplay.png`, `level_design.png`

8. 📁 `public/projects/pbru-activity/`
   - สำหรับโปรเจกต์: **PBRU Activity Portal (ระบบกิจกรรมนักศึกษา มรภ.เพชรบุรี)**
   - ตัวอย่าง: `cover.png`, `event_list.png`, `checkin.png`

---

## เมื่อก๊อปปี้รูปมาวางเสร็จแล้ว:
เปิดไฟล์ `src/data/projects.js` แล้วใส่พาธรูปตามโฟลเดอร์นั้นๆ ได้เลย เช่น:
```javascript
coverImage: "/projects/neocoare-ai/cover.png",
gallery: [
  "/projects/neocoare-ai/cover.png",
  "/projects/neocoare-ai/camera.png"
]
```
