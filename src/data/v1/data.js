/* eslint-disable no-useless-escape */

import getstarted_statusserver from './getstarted/StatusServerCard.vue';
import router from "../../router"

const defaulted = {
    "label": "Permulaan",
    "command": () => { router.push('/docs/init'); },

};

const initDefault = {
    "init": [
        {
            "id": 1,
            "type": "docs",
            "value": "# Get Started\n---\n\n### 1. Konfigurasi Awal\nSemua perlu diawali dengan konfigurasi. Untuk konfigurasi package di bagian front-end website memerlukan:\n - Socket.io (Untuk chatting)\n - Laravel Echo (Untuk channel chatting)\n - Axios (Untuk request API)\n\nUntuk dibagian front-end mobile masih perlu di bicarakan dengan tim.\n\n### 2. Akses ke Server\nDikarenakan sisi server masih berada di lokal, komputer dari Backend Developer akan menjadi sebuah server untuk membantu percobaan API dan development aplikasi menggunakan metode tunneling. Link sisi server yang dapat diakses akan di share dibawah:\n\n<div class='table-responsive'>\n\n| URL |  Deskripsi |\n|--|--|\n| _https:\/\/laron-server-side.sharedwithexpose.com\/api\/v1\/..._ | Sisi server yang menangani request API. |\n| - | Sisi server yang menangani soal fitur chat. |\n{.table-documentation}\n\n<\/div>\n\n> _Server akan menyala ketika team development mengontak bagian Backend Developer._\n> _Server akan mati jika tidak digunakan lagi._\n{.quote-info}\n\n> _Jika server lokal merespon dengan lambat maka itu hal yang wajar, dikarenakan memakai metode tunneling yang gratis dan resource server lokal yang kurang memadai._\n{.quote-warning}\n\n### 3. Status Server\n\nAnda bisa mengecek status dari server apakah aktif atau sedang mati dibawah ini."
        },
        {
            "id": 2,
            "type": "components",
            "value": getstarted_statusserver
        }
    ],
}

export default {
    "sidebar": [ defaulted,
        {
            "label": "Autentikasi",
            "command": null,
            "items": [
                {
                    "label": "Tipe Pengguna",
                    "to": "\/docs\/auth\/typeuser"
                },
                {
                    "label": "Login",
                    "to": "\/docs\/auth\/login"
                },
                {
                    "label": "Register",
                    "to": "\/docs\/auth\/register"
                }
            ]
        },
        {
            "label": "Resource",
            "command": null,
            "items": [
                {
                    "label": "Penjelasan",
                    "to": "\/docs\/resource\/introducing"
                },
                {
                    "label": "User",
                    "to": "\/docs\/resource\/resource-user"
                }
            ]
        }
    ],
    "key": { ...initDefault, 
        "auth": {
            "typeuser": [
                {
                    "type": "docs",
                    "value": "# Tipe Pengguna\n---\n\nAplikasi Laron mempunyai 3 tipe pengguna yang akan mempengaruhi bisnis dari aplikasi ini. Setiap tipe pengguna mempunyai akses API yang berbeda sesuai dengan tipe pengguna. Tipe pengguna tersebut terdiri dari:\n\n- Pelanggan (_Customer_)\n- Admin (Pengelola dan Pemilik Bumdesa)\n- Produsen (_Producer_)\n\n### 1. Pelanggan\n\nPelanggan disini mempunyai fungsi untuk melihat produk, berkomunikasi dengan layanan bumdesa, dan membeli produk. Maksud dari berkomunikasi disini adalah pelanggan dapat bertanya soal stok atau bertanya lebih jauh lagi tentang produk yang pelanggan tertarik.\n\nUntuk mengakses API pelanggan memakai **https:\/laron-server-side.test\/api\/v1\/customers**\n\n### 2. Admin\n\nAdmin adalah pengelola tertinggi dari aplikasi Laron. Terdapat dua tipe admin, yaitu **Admin Pengelola** dan **Admin Bumdesa**. **Admin Pengelola** mempunyai fungsi untuk mengurus produk yang masuk dari UMKM atau produk desa dan berkomunikasi dengan pelanggan. **Admin Pengelola** juga dapat memasukkan produk dari UMKM ketika UMKM tersebut masih awam dengan teknologi. Sedangkan **Admin Bumdesa** hanya dapat membaca laporan pemasukan, laporan produk, dan pembuatan promosi.\n\nUntuk mengakses API pelanggan memakai **https:\/laron-server-side.test\/api\/v1\/admins**\n\n### 3. Produsen\n\nProdusen adalah penyedia produk yang akan menjual produk di aplikasi Laron lewat Bumdesa. Bumdesa akan mengurus produk yang masuk. Produsen hanya dapat melakukan pengajuan produk untuk di review Bumdesa, notifikasi penjualan produk, dan produk yang telah masuk di Bumdesa.\n\nUntuk mengakses API pelanggan memakai **https:\/laron-server-side.test\/api\/v1\/producers**\n\n### 4. Platform Aplikasi\n\n|  | Pelanggan (*customers*) | Admin (*admins*) | Produsen (*producers*) |\n|--|--|--|--|\n| **Website** | - | x | - |\n| **Mobile** | x | - | x |\n{.table-documentation}",
                    "id": "xKY0l1"
                }
            ],
            "login": [
                {
                    "type": "docs",
                    "value": "# Login\n---\n### 1. Penjelasan {.p-my-5}\n\nUntuk mengakses API Laron diperlukan sebuah token autentikasi dari server. Sisi klien dapat meminta token dengan menggunakan API autentikasi dari laron.\n\n### 2. Penggunaan {.p-my-5}\n\nAnda bisa mengaksesnya dengan metode seperti dibawah ini{.p-mb-4}",
                    "id": "g9Rs7S"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/admins\/login"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/customers\/login"
                        },
                        {
                            "title": "Produsen",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/producers\/login"
                        }
                    ],
                    "id": "Dyu1ml"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n_Belum Tersedia_"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n<div class='table-responsive'>\n\n| Nama | Sifat | Tipe Data | Deskripsi |\n|--|--|--|--|\n| email | Required | _string_ | Email dari pengguna\n| password | Required | _string_ | Password dari pengguna\n{.table-documentation}\n\n<\/div>"
                        },
                        {
                            "title": "Produsen",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n_Belum Tersedia_"
                        }
                    ],
                    "id": "kwghjb"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"user\": {\n    \"admin_id\": 1,\n    \"email\": \"eratozalan@gmail.com\",\n    \"email_verified_at\": \"2021-02-04T03:06:59.000000Z\"\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMmQ0NmI4ZjE5ZDE1ZmNmYTE5Zjg2NjEwZDFmMGMxZDgwMjA1ZjJiOTNmNzFmYWQ3NWJkNWYyMDVjYzcxNzQyOGYwZGZlYmJhOWJlMjkwOGYiLCJpYXQiOiIxNjEyOTI1ODc1LjExNjI1OSIsIm5iZiI6IjE2MTI5MjU4NzUuMTE2MjY4IiwiZXhwIjoiMTYyODU2NDI3NC43Njk0MDAiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JZlN56bXaghOCxnq-jhWi4X2hVaqQc8f31LkOXDRivXZ9k6M77CxhiCqRr_uEbYckXTS2L59MoLMyZlH3tOfG3-hM8Z8B32AAjez4cRIvfxqUGdB1YPreMmc_BVtT_5_Pxy18GwedBSms48d3QI0wUys4DlmQ0FBLB2NcvDPoI05Mt0Wfvrtr-kMMCErNYrobR9KrlnR_U6F9ovzL7apoHdyUrOsLYYWRIXVJ31EQxmL2Fd11ppWDIFgbGWqlLIi-cp_0PQvIrZKijatARhjzQU2iZF3aaevnyM_blFEKT6mfsKknZvVvaq7MGLf9LNA12aDxbB1ahZX65pC06KlH_zHhloDNb-OBAr_7qWbho6QJPMVgvO2Swy1HJe-28rxht5mgemqKR0UGu-3kI05PV5jXLB2tSdtAUEwtaMnLOEErc4g8nB6-x-UIT5i9tytcnJ7dJ22Ubby96lkTlteadq3WWlBopndNVnkTDvyPUEYJ4iQ0r7IOM6Q4VU1wlGS5wGfAasO7cC33i8taZQ1O5Qmhb492g86zXLanmMHylS_t46E08y9ujkaQfkSs-xTxIeq3G35x8g4V2wRlr-OFIR2j3Qlxr2MDzHOTLDdC68XytqcS-E-r8nQfekhRx3sqcdySeGYRk8nLa9sFOlmnABzY2iHhlaGpimvpCzynvU\"\n}\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"user\": {\n    \"customer_id\": 1,\n    \"email\": \"eratozassist@gmail.com\",\n    \"email_verified_at\": \"2021-02-04T03:06:59.000000Z\",\n    \"provider_userid\": null,\n    \"provider_token\": null,\n    \"provider_refresh\": null\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTNiMWRiNTczMjY1NDVjNjU4OWU4ZjM3MTYyZmRlMGJlYWNlNTI4NGFiYmNhZWY0NGYzMDAyYmY0Y2Q5ZjNmMzQwNTJlYTJhMzA5MzIxNDUiLCJpYXQiOiIxNjEyNDU1NzQ4Ljk4NTMwNSIsIm5iZiI6IjE2MTI0NTU3NDguOTg1MzE0IiwiZXhwIjoiMTYyODA5NDE0OC40NTMwOTEiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JYd_kee1_OZnQBIfzEKf0FxC-qXsuAO2cXhXNogqiSnYt8itIbQBoL30LuKVVuagB8Oyct2yf6C6ESX3BlqOEfP-uRqV0GBleig39lYvXVOITvPfaczvNTo99EVuBY7OHvEF_c6sT2gLF_E7JsUyh83bmnKFmmd4TZIXylvDBF4bRxuXVWZOpJBfWkgG8KOsWMd-q_4ebdbFmr5uJBSm2-mJX_ro4QIL_ofwLy-Mtfi5Th6ej8QspWeAP7EXZz6UmuE20bqmsiPV9Wy7t4RC9V1pPn9Sec461zo8mjLAb4-ru-h5NgvKHEJMfrxfslIKouDmK8lxsy12gayuvDEV6ksIaLlJDeEFDtfjYqHHsubSx1r7PQSb7k1ksTB8z_JyLp5h89HiMUGC1NYAm-K0kIGLS5A0GaHKeWK5aenAbxqr0oec71vMduJREqRxcLAhQr_1O5qrQ-KBic2E7o0pQw9xYBj9A_0_65SfEr5MjvzNGkOx7Y2_Olh6FMDHvc1Ni7Sa1BX7y_kD8ZHvsg7a-LCHRyRD7d5pxj_7n8IU9zIYk64hHwFc_V0LLFW98eXCbMAaLoWLeCR1Xs0dhnyKQneGEjN_ijwPAMRW1P7KRfDXdysE2IH6sBOQGfDxR3qGnONMeN5T_AnA_og2YqUwNBkya8orNWD7tY8-2Wl3xUs\"\n}\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n{\n\n}\n```"
                        }
                    ],
                    "id": "XHboZS"
                },
                {
                    "type": "docs",
                    "value": "### 3. Login Data {.p-my-5}\n\nAnda memerlukan data untuk login. Anda bisa memakai akun buatan dibawah ini: {.p-mb-4}",
                    "id": "NAe81w"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```\nEmail: eratozalan@gmail.com\nPassword: password"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```\nEmail: eratozassist@gmail.com\nPassword: password"
                        },
                        {
                            "title": "Produsen",
                            "value": "```\nBelum tersedia"
                        }
                    ],
                    "id": "7fZLAT"
                }
            ],
            "register": [
                {
                    "type": "docs",
                    "value": "# Register\n---\n### 1. Penjelasan {.p-my-5}\n\nJika pengguna belum mendaftar, maka beberapa API tidak dapat di akses. Maka dari itu pengguna perlu mendaftar dengan menggunakan API ini\n\n### 2. Penggunaan {.p-my-5}\n\nAnda bisa mengaksesnya dengan metode seperti dibawah ini {.p-mb-4}",
                    "id": "LpaKop"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/admins\/register"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/customers\/register"
                        },
                        {
                            "title": "Produsen",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/producers\/register"
                        }
                    ],
                    "id": "lvkRX8"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n_Belum Tersedia_"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n<div class=\"table-responsive\">\n\n| Nama | Sifat | Tipe Data | Deskripsi |\n|--|--|--|--|\n| name | Required | _string_ | Nama dari pengguna\n| email | Required | _string_ | Email dari pengguna\n| password | Required | _string_ | Password dari pengguna\n| password_confirmation | Required | _string_ | Password Konfirmasi dari pengguna\n| phone_number | Required | _string_ | No.Hp dari pengguna dengan format 62xxx, 8xxx, atau 08xxx\n{.table-documentation}\n\n<\/div>"
                        },
                        {
                            "title": "Produsen",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n_Belum Tersedia_"
                        }
                    ],
                    "id": "NQ0kw9"
                },
                {
                    "type": "docs",
                    "value": "**Response :**",
                    "id": "3s9C9Z"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n\n\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n\n\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n\n\n```"
                        }
                    ],
                    "id": "gsT5qB"
                }
            ]
        },
        "resource": {
            "introducing": [
                {
                    "type": "docs",
                    "value": "># Resource\n\nResource dalam server Laron adalah sebuah kontrol pada sebuah model di server Laron yang akan melakukan pekerjaan seperti membuat, mengupdate, menghapus, dan melihat (CRUD). Ketika Resource ingin di lihat, sisi klien dapat mentransformasi respon yang di inginkan dengan memakai fitur **Query Plugin** yang disediakan dari server kami. Terdapat resource yang hanya dapat dilihat dan hanya beberapa fitur yang bisa.\n\n> **Query Plugin** akan dijelaskan lebih lanjut di sesi selanjutnya.\n{.quote-info}\n\nUntuk sekarang Resource yang telah dibuat pada server Laron yaitu:\n\n- User\n- Location (Lokasi)\n- Product (Produk)\n- Brand (Brand)\n- Bumdesa\n- Profile (Setiap Role)",
                    "id": "NjgGTJ"
                }
            ],
            "resource-user": [
                {
                    "type": "docs",
                    "value": "# User (Pengguna)\n\nUser mempunyai fungsi vital yang berisi informasi soal data pengguna. Resource ini biasanya menangani fungsi-fungsi autentikasi dan mencari data-data pengguna untuk digunakan sebagai informasi.  Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n### 1. Mendapatkan User dengan ID dari User\nJika anda memerlukan informasi soal user yang sedang dicari. Ini adalah fungsi yang cocok untuk hal itu. User yang akan dikembalikan adalah data yang sesuai dengan ID yang ada di server.",
                    "id": "hFVJb6"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "GET",
                            "queryPlugin": "Only\/Except Column",
                            "url": "https:\/laron-server-side.test\/api\/v1\/users\/$id"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "GET",
                            "queryPlugin": "Only\/Except Column",
                            "url": "https:\/laron-server-side.test\/api\/v1\/users\/$id"
                        },
                        {
                            "title": "Produsen",
                            "method": "GET",
                            "queryPlugin": "Only\/Except Column",
                            "url": "https:\/laron-server-side.test\/api\/v1\/users\/$id"
                        }
                    ],
                    "id": "EMRaNq"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"email\": \"samiah.mansur@example.com\",\n    \"photo\": null,\n    \"customer_name\": \"Eli Wahyuni S.E.\",\n    \"created_at\": \"2021-02-24T08:23:25.000000Z\",\n    \"birthday\": \"2007-07-02\",\n    \"phone_number\": \"0907 5854 224\",\n    \"address\": \"Ds. Yosodipuro No. 122, Bandar Lampung 88303, Papua\",\n    \"urban\": \"Banjar\",\n    \"postal_code\": 87301,\n    \"rw\": \"092\",\n    \"rt\": \"867\",\n    \"user_id\": 10,\n    \"subdistrict_id\": 1001001\n  }\n}\n\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Eli Wahyuni S.E.\",\n    \"created_at\": \"2021-02-24T08:23:25.000000Z\",\n    \"address\": \"Ds. Yosodipuro No. 122, Bandar Lampung 88303, Papua\",\n    \"urban\": \"Banjar\",\n    \"postal_code\": 87301,\n    \"rw\": \"092\",\n    \"rt\": \"867\",\n    \"user_id\": 10,\n    \"subdistrict_id\": 1001001\n  }\n}\n\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Eli Wahyuni S.E.\",\n    \"created_at\": \"2021-02-24T08:23:25.000000Z\",\n    \"address\": \"Ds. Yosodipuro No. 122, Bandar Lampung 88303, Papua\",\n    \"urban\": \"Banjar\",\n    \"postal_code\": 87301,\n    \"rw\": \"092\",\n    \"rt\": \"867\",\n    \"user_id\": 10,\n    \"subdistrict_id\": 1001001\n  }\n}\n\n```"
                        }
                    ],
                    "id": "jxf7F4"
                },
                {
                    "type": "docs",
                    "value": "Variabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *email* | Email dari pengguna | User yang mempunyai data dan Admin |\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Semua Role |\n| *photo* | Link dari foto profil user | Semua Role |\n| *customer_name* (User tipe Customer) | Nama User | Semua Role |\n| *admin_name* (User tipe Admin) | Nama User | Semua Role |\n| *producer_name* (User tipe Producer) | Nama User | Semua Role |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Semua Role |\n| *address* | Alamat dari pengguna | User yang mempunyai data dan Admin |\n| *urban* | Kelurahan dari pengguna | User yang mempunyai data dan Admin |\n| *postal_code* | Kode pos dari pengguna | User yang mempunyai data dan Admin |\n| *rw* | RW dari pengguna | User yang mempunyai data dan Admin |\n| *rt* | RT dari pengguna | User yang mempunyai data dan Admin |\n| *user_id* | ID dari pengguna | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Semua Role |\n{.table-documentation}",
                    "id": "OHviTi"
                }
            ]
        }
    }
}
