# Tipe Pengguna
---

Aplikasi Laron mempunyai 3 tipe pengguna yang akan mempengaruhi bisnis dari aplikasi ini. Setiap tipe pengguna mempunyai akses API yang berbeda sesuai dengan tipe pengguna. Tipe pengguna tersebut terdiri dari:

- Pelanggan (_Customer_)
- Admin (Pengelola dan Pemilik Bumdesa)
- Produsen (_Producer_)

### 1. Pelanggan

Pelanggan disini mempunyai fungsi untuk melihat produk, berkomunikasi dengan layanan bumdesa, dan membeli produk. Maksud dari berkomunikasi disini adalah pelanggan dapat bertanya soal stok atau bertanya lebih jauh lagi tentang produk yang pelanggan tertarik.

### 2. Admin

Admin adalah pengelola tertinggi dari aplikasi Laron. Terdapat dua tipe admin, yaitu **Admin Pengelola** dan **Admin Bumdesa**. **Admin Pengelola** mempunyai fungsi untuk mengurus produk yang masuk dari UMKM atau produk desa dan berkomunikasi dengan pelanggan. **Admin Pengelola** juga dapat memasukkan produk dari UMKM ketika UMKM tersebut masih awam dengan teknologi. Sedangkan **Admin Bumdesa** hanya dapat membaca laporan pemasukan, laporan produk, dan pembuatan promosi.

### 3. Produsen

Produsen adalah penyedia produk yang akan menjual produk di aplikasi Laron lewat Bumdesa. Bumdesa akan mengurus produk yang masuk. Produsen hanya dapat melakukan pengajuan produk untuk di review Bumdesa, notifikasi penjualan produk, dan produk yang telah masuk di Bumdesa.

### 4. Platform Aplikasi

|  | Pelanggan | Admin | Produsen |
|--|--|--|--|
| **Website** | - | x | - |
| **Mobile** | x | - | x |
{.table-documentation}


