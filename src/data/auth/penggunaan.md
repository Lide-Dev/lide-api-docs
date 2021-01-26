
# Autentikasi
---
### 1. Penjelasan {.p-my-5}

Untuk mengakses API Laron diperlukan sebuah token autentikasi dari server. Sisi klien dapat meminta token dengan menggunakan API autentikasi dari laron.

### 2. Penggunaan {.p-my-5}

Anda bisa mengaksesnya dengan metode seperti dibawah ini{.p-mb-4}

- **Method** : POST
- **Query Plugin** :  -
- **URL**: _https:/laron-server-side.test/api/v1/$user/login_
{.p-mb-4}

> _Untuk $user disini adalah tipe user yang dijelaskan pada dokumentasi **Tipe User**_
{.quote-info}

**Data yang bisa dikirim:** {.p-mb-4}

<div class="table-responsive">

| Nama | Sifat | Tipe Data | Deskripsi |
|--|--|--|--|
| email | Required | _string_ | Email dari pengguna
| password | Required | _string_ | Password dari pengguna
{.table-documentation}

</div>

**Contoh:**

1. Website

   ```javascript
   axios.post(
      "https:/laron-server-side.test/api/v1/$user/login",
      { email : "example@email.com", password: "blabla" }
   );
   ```  

2. Mobile

-

