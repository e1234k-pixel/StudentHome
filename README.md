# Smart Home Visit Management System - Phase 1

ระบบจัดการข้อมูลนักเรียนสำหรับงานเยี่ยมบ้าน พัฒนาด้วย `Next.js 15`, `TypeScript`, `Tailwind CSS`, `shadcn/ui`, `Supabase` และ `PostgreSQL`

## คุณสมบัติใน Phase 1

- Login ด้วย Google ผ่าน Supabase Auth
- รองรับ role `admin` และ `teacher`
- Dashboard แสดงสถิตินักเรียน
- จัดการนักเรียนแบบ CRUD
- Import ข้อมูลจากไฟล์ Excel (`.xlsx`, `.xls`)
- Responsive UI สำหรับ Desktop, Tablet และ Mobile

## โครงสร้างหลัก

- `app/` หน้าและ route ของระบบ
- `components/` UI และ component ใช้งานร่วมกัน
- `lib/` utility, auth, supabase client และ helper ด้านข้อมูล
- `hooks/` custom hooks ฝั่ง client
- `types/` TypeScript types ของฐานข้อมูล
- `supabase/` SQL schema และคู่มือตั้งค่า

## เริ่มต้นใช้งาน

1. ติดตั้ง package

```bash
npm install
```

2. สร้างไฟล์ `.env.local` จาก `.env.example`

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

3. รัน SQL ในไฟล์ `supabase/schema.sql` บน Supabase SQL Editor
4. เปิด Google Provider ใน Supabase ตามคู่มือ `supabase/setup-guide.md`
5. รันโปรเจกต์

```bash
npm run dev
```

6. เปิด `http://localhost:3000`

## เส้นทางหลัก

- `/login`
- `/dashboard`
- `/students`
- `/students/new`
- `/students/[id]`
- `/students/import`

## หมายเหตุ

- Phase 1 ยังไม่มี GPS, Route Planner, AI และ PDF Report
- Dashboard เพศชาย/หญิงคำนวณจากค่า `prefix`
- การ import ใช้ `student_code` เป็น key สำหรับ `upsert`
