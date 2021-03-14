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
            "order_content": 1,
            "items": [
                {
                    "label": "Tipe Pengguna",
                    "to": "\/docs\/auth\/typeuser",
                    "order_content": 1
                },
                {
                    "label": "Login",
                    "to": "\/docs\/auth\/login",
                    "order_content": 2
                },
                {
                    "label": "Register",
                    "to": "\/docs\/auth\/register",
                    "order_content": 3
                }
            ]
        },
        {
            "label": "Resource",
            "command": null,
            "order_content": 2,
            "items": [
                {
                    "label": "Penjelasan",
                    "to": "\/docs\/resource\/introducing",
                    "order_content": 1
                },
                {
                    "label": "User",
                    "to": "\/docs\/resource\/resource-user",
                    "order_content": 2
                },
                {
                    "label": "Location",
                    "to": "\/docs\/resource\/resource-location",
                    "order_content": null
                },
                {
                    "label": "Bumdesa",
                    "to": "\/docs\/resource\/resource-bumdesa",
                    "order_content": null
                },
                {
                    "label": "Brand",
                    "to": "\/docs\/resource\/resource-brand",
                    "order_content": null
                },
                {
                    "label": "Product",
                    "to": "\/docs\/resource\/resource-product",
                    "order_content": null
                }
            ]
        },
        {
            "label": "Query Plugin",
            "command": null,
            "order_content": 3,
            "items": [
                {
                    "label": "Penjelasan",
                    "to": "\/docs\/query_plugin\/introduction",
                    "order_content": 1
                },
                {
                    "label": "Conditional",
                    "to": "\/docs\/query_plugin\/conditional",
                    "order_content": 2
                },
                {
                    "label": "Sorting",
                    "to": "\/docs\/query_plugin\/sort",
                    "order_content": 3
                },
                {
                    "label": "Only\/Except",
                    "to": "\/docs\/query_plugin\/only_except",
                    "order_content": 4
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
                    "id": "SHX2bf"
                }
            ],
            "login": [
                {
                    "type": "docs",
                    "value": "# Login\n---\n### 1. Penjelasan {.p-my-5}\n\nUntuk mengakses API Laron diperlukan sebuah token autentikasi dari server. Sisi klien dapat meminta token dengan menggunakan API autentikasi dari laron.\n\n### 2. Penggunaan {.p-my-5}\n\nAnda bisa mengaksesnya dengan metode seperti dibawah ini{.p-mb-4}",
                    "id": "zmHHBW"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/admins\/login",
                            "authorization": "*"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/login",
                            "authorization": "*"
                        },
                        {
                            "title": "Produsen",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/producers\/login",
                            "authorization": "*"
                        }
                    ],
                    "id": "7cMZ6z"
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
                    "id": "O110JR"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"user\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"created_at\": \"2021-02-28T05:31:46.064835Z\",\n    \"location_id\": 1,\n    \"address\": \"Ds. Baranang Siang Indah No. 41, Tasikmalaya 82877, Jambi\",\n    \"urban\": \"Batu\",\n    \"postal_code\": 42150,\n    \"rw\": \"201\",\n    \"rt\": \"080\",\n    \"user_id\": 1,\n    \"subdistrict_id\": 1001001\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzYxNDZiNjNlYjMwNDBkNGZiYTI5MzQyZTMyY2Q5ZGNjYmRiMGEzNzE4MjViNTRjMTE5MDdmNjk3ODBkM2Y4YTlhMDE5MGU4NDdlZTg4YzEiLCJpYXQiOiIxNjE0NDkwMzA1Ljg0NTMwOSIsIm5iZiI6IjE2MTQ0OTAzMDUuODQ1MzE4IiwiZXhwIjoiMTYzMDEyODcwNS4xMzg0NjQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PwKiHt7xXOtuRYoJjyznYvu71bpEwwcji0MuIraqcdoLavghi5PL_1AHRTBS0FbiO1JevGD73uEn-FFeK844efFGKT0Dx15gynG485IL1OmPa8mnz3nOLrA06Uwkx3JyHKLXeG-morD2Vyz_WRWyPMOuPZEp-erLiuK87aB12733gE-CgRUAze7Cd4AWOYVlBj75kAcLWNopmFbxhp56GgLDtqkWBihEZRBBIvotYb0jT-7XGdwuFa9MJA8-61XnyLBp8rt2-cNDlYHmVZyY2JIpPicVlm3Z0_y1wpmO01B54tc2pPz2rywv6LPyvijOkBvGU8Yn1LUS_DKdrCFSjYZCF4c2Aavb0P59LczbHcrWV1aexo3xK_lKMvU3GlLvkLIWY_uCtHNfB1gYkXrGXPFohd1gSzoeLiXar-lLVqvjZ1H6Wv6lt9E2Da_BIguLbWwdaFGop8R0hobLJ0voERBF_cCMIcVVNAH4lSaI4Eqhxe_70LGs1WBK2XyhjTiK7E8UlxbAb6vS8k-4bfbs6eS0av02S7vA1WdKc7lvLL5ipaJO4CJAEnXv06-jM5cuqxYRim-Q-gs9HafQo_Z1dLTggBltH-9PQ8WSFOMXYVQh86eE58gtIyrzGqRK_I6W96hbYgBZWg3n_vYJvCDifGshUcT96OzajLSwTzpopKQ\"\n}\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"user\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Herlandro Tri B\",\n    \"created_at\": null,\n    \"location_id\": 13,\n    \"address\": \"Psr. Yos No. 895, Metro 90430, Sumut\",\n    \"urban\": \"Madiun\",\n    \"postal_code\": 42897,\n    \"rw\": \"015\",\n    \"rt\": \"805\",\n    \"user_id\": 13,\n    \"subdistrict_id\": 1001001\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDIwODYxYmEwNTBiOWE1YTA0Nzc3OGQxYzZhYmI1NWVkODkyZGE4NDRmZjE3ZjU5YmFhOGFjMTMzOGQwMzZiZDhiNDQzNWUxYTZkZmM2NGEiLCJpYXQiOiIxNjE0NDkwNjY3Ljg5ODcwOSIsIm5iZiI6IjE2MTQ0OTA2NjcuODk4NzE0IiwiZXhwIjoiMTYzMDEyOTA2Ny41NDM2NjIiLCJzdWIiOiIxMyIsInNjb3BlcyI6W119.FW3g4NkzNcGo8qXaKFaq1teRf70qn8dW2a0aeUlnT1v4PUA8MIISrlrYMoHCy5XK462EWBU4o9y1BE7On0p8ixEqccVpOXDEQOwjC8H5xj2GXnGNCgWuIcjQueWjArDO3hcD5MSlI6dlWBp7b5rq8gyUlCmUWIYkJyzWosbvuNRUvBMJh1yryTXXX_HGhacix9VgsSjwuQH7rYUSeKwUByRYU4ESttoMFEBaXccGnpNj3g-UOCgIOY-iodB6QzsV1Qm86WojmHLLHztwcLp5VTUwBzcDWZlUOmcX0HCvQEOs0syp-fb994LsnXz7IcSmqXIltNGrIfr5IDuO4tlB9bdPTJQi-71HV4JWuLCQp1fTUlJmUbuxHB1EeOYN-3BhNO7JAIG9iSu2oz0qRO4mRmLzZ7lr2vaJKx4MmTe2bfEdCGRwwzJJnd7_N6-LWHMYS7FpuFIWpXE-QiCCLLsH0_i0I7mgZS3H7cpWu8vxTr7uldsxoBCSPTX_eZzxofYygeBBkS5D2OYUsowe3GJZA_oSeyuoYFiJu64IBemc2z6ZMjzEHRR2bes8Px5CEKy5mC0O8F_JvwB0nD8vHAjBa_KtNafh-5naZ0zKIIIVt9yxAzF_l8z199iXY79T3sEAsCVJnt1XDCBd0ug35jxzQ8gWLa6YNryT4NRJ3pDBAbA\"\n}\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n\n{\n  \"user\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"producer_name\": \"Banawi Suwarno\",\n    \"created_at\": \"2021-02-28T05:46:56.000000Z\",\n    \"location_id\": 14,\n    \"address\": \"Jln. Orang No. 400, Batam 50792, Maluku\",\n    \"urban\": \"Yogyakarta\",\n    \"postal_code\": 54554,\n    \"rw\": \"085\",\n    \"rt\": \"430\",\n    \"user_id\": 14,\n    \"subdistrict_id\": 1001001\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzkxYTE4NjdiMjFmNmI5MGY1OTQ5MTU1MGRiYTg4OTBiMjJjYmEzNmUzNGRmZTgwYjQxYmIzMjNiYWJkMzIyZGZkZWU3Njg4ZGVlODg3NzgiLCJpYXQiOiIxNjE0NDkxMjU3LjU1NDI0OSIsIm5iZiI6IjE2MTQ0OTEyNTcuNTU0MjYwIiwiZXhwIjoiMTYzMDEyOTY1Ny4yNjY3NjciLCJzdWIiOiIxNCIsInNjb3BlcyI6W119.CGEOOZmQLkvlLMaG5GOWbmJh0wTA1Kn0dd11uH1AQtMTl0OH6Ykxf0YMDPDj5p7bSTk27w6iNgJV9_cJsShONT3Ki4lgaHYG6zEkiOEcs6939DWsJyCc_-I4UgbUDvZsw8DDQrAX8TY87rLKZzgNzMRSuz4A1_V9uyM_07qtoou-zDYPnI8aceS7MFBUXWf43OWzS9GCx1WybZJjIWR54JRS4_CKK4WW_6f6Tqp4sNstPFOt4apPKEo0YremQcUv7VqTTpTML09N5r3dp8IbRg2lYIuwxv4vrORvoz6NXHXhEMPqG0LR4bKtHtyRK7mp8kZEGuA0qeIzHdsURojDTzMQsw53jRqr9Xh1OjwoOsFKybHhDPBRPtIFSIfWMgSx4TtiseOsmyeVxyMCe2tcicjkflSuQgUfns2FUCF1ZhDp_O8iGTtibskdyNq1IOrs1veuQRw0FPrXaLI-tUlPPkPKyI_PvSZpHp7TWQJ17n9-KKRrmi6sS68Knq6fvXgqrtIzfJkwLjN_IfYGqvCH2y0S-sVmFflBqMpRvlvbE7WIb4GFa0X0X7UPiLGGLOLybSU4Tdn8XxCxA9-LaGhvBa2mmHHaxKncRJ7YLx7Nj0eFlpckKK6kcs5L07HzoNy-2o-XErhmHM9pIWhF3LEDoN7oJ21fnsglI_k8A1mhP_g\"\n}\n\n```"
                        }
                    ],
                    "id": "DxCQwO"
                },
                {
                    "type": "docs",
                    "value": "Untuk data response buat User resource di login bisa dilihat di Resource User.\n\n### 3. Login Data {.p-my-5}\n\nAnda memerlukan data untuk login. Anda bisa memakai akun buatan dibawah ini: {.p-mb-4}",
                    "id": "5CVqxV"
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
                            "value": "```\nEmail: eratozproyek1@gmail.com\nPassword: password"
                        }
                    ],
                    "id": "r0aydG"
                }
            ],
            "register": [
                {
                    "type": "docs",
                    "value": "# Register\n---\n### 1. Penjelasan {.p-my-5}\n\nJika pengguna belum mendaftar, maka beberapa API tidak dapat di akses. Maka dari itu pengguna perlu mendaftar dengan menggunakan API ini. \n\nUntuk pengguna yang ingin mendaftar menjadi Admin, diperlukan akses ke Pemilik Aplikasi Laron untuk mendaftar menjadi admin dari Bumdesa.\n\n### 2. Penggunaan {.p-my-5}\n\nAnda bisa mengaksesnya dengan metode seperti dibawah ini {.p-mb-4}",
                    "id": "ndWeez"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/admins\/register",
                            "authorization": "Pemilik Aplikasi Laron"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/register",
                            "authorization": "* (Semua Role dan User yang tidak login)"
                        },
                        {
                            "title": "Produsen",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/producers\/register",
                            "authorization": "* (Semua Role dan User yang tidak login)"
                        }
                    ],
                    "id": "GZC4a8"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *name* | string | Nama dari pengguna | Diperlukan, Maksimal 70 karakter |\n| *phone_number* | string | Nomor telepon pengguna | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *birthday* | string | Tanggal lahir dari pengguna | Diperlukan, Maksimal hingga hari ini |\n| *gender* | string | Gender dari pengguna | Diperlukan, Menerima nilai \"M\" dan \"F\" (M = Laki-laki, F = Perempuan) |\n| *address* | string | Alamat pengguna | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari pengguna | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari pengguna | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari pengguna | Diperlukan, Sesuai kode kecamatan pada server |\n| *bumdesa_id* | integer | ID dari Bumdesa yang telah terdaftar pada server Laron | Diperlukan, Sesuai ID Bumdesa pada server |\n| *photo* | file | Foto dari pengguna | Opsional, Maksimal 1MB, Ekstensi PNG\/JPG\/BMP |\n{.table-documentation}"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *name* | string | Nama dari pengguna | Diperlukan, Maksimal 70 karakter |\n| *phone_number* | string | Nomor telepon pengguna | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *name* | string | Nama dari pengguna | Diperlukan, Maksimal 70 karakter |\n| *phone_number* | string | Nomor telepon pengguna | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *birthday* | string | Tanggal lahir dari pengguna | Diperlukan, Maksimal hingga hari ini |\n| *gender* | string | Gender dari pengguna | Diperlukan, Menerima nilai \"M\" dan \"F\" (M = Laki-laki, F = Perempuan) |\n| *address* | string | Alamat pengguna | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari pengguna | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari pengguna | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari pengguna | Diperlukan, Sesuai kode kecamatan pada server |\n| *bumdesa_id* | integer | ID dari Bumdesa yang telah terdaftar pada server Laron | Diperlukan, Sesuai ID Bumdesa pada server |\n| *brand_name* | string | Nama dari brand produsen yang ingin didaftarkan | Diperlukan, Maksimal 70 karakter |\n| *brand_photo* | file | Logo\/Icon dari brand produsen yang ingin didaftarkan | Diperlukan, Maksimal 1MB, Ekstensi PNG\/JPG\/BMP  |\n| *brand_description* | string | Nama dari brand produsen yang ingin didaftarkan | Diperlukan, Maksimal 500 karakter |\n| *photo* | file | Foto dari pengguna | Opsional, Maksimal 1MB, Ekstensi PNG\/JPG\/BMP |\n\n{.table-documentation}"
                        }
                    ],
                    "id": "fvweQj"
                },
                {
                    "type": "docs",
                    "value": "**Response :**",
                    "id": "KMA2vQ"
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
                    "id": "6OHlZc"
                }
            ]
        },
        "resource": {
            "introducing": [
                {
                    "type": "docs",
                    "value": "# Resource\n<hr\/>\n\nResource dalam server Laron adalah sebuah kontrol pada sebuah model di server Laron yang akan melakukan pekerjaan seperti membuat, mengupdate, menghapus, dan melihat (CRUD). Ketika Resource ingin di lihat, sisi klien dapat mentransformasi respon yang di inginkan dengan memakai fitur **Query Plugin** yang disediakan dari server kami. Terdapat resource yang hanya dapat dilihat dan hanya beberapa fitur yang bisa.\n\n> **Query Plugin** akan dijelaskan lebih lanjut di sesi selanjutnya.\n{.quote-info}\n\nUntuk sekarang Resource yang telah dibuat pada server Laron yaitu:\n\n- User (Seluruh User Role, Termasuk Profil)\n- Location (Lokasi Penyimpanan untuk Customer)\n- Product (Produk)\n- Brand (Brand)\n- Bumdesa\n\nResource pun jika ingin dilihat di terdapat dua tipe balasan yaitu **Single Resource Response** dan **Collection Resource Response** (Koleksi). Masing-masing mempunyai balasan\/response yang berbeda-beda. Penjelasan lebih lanjut, sebagai berikut:\n\n### 1. Single Resource Response\n<hr\/>\n\nTipe balasan ini akan dikirimkan ke sisi klien ketika klien meminta resource secara spesifik ID dari resource tersebut. Data yang akan dikirim ke sisi klien hanya satu data spesifik yang dicari. Biasanya **Query Plugin** yang bisa digunakan pada tipe balasan ini hanyalah Only\/Except. Contoh:",
                    "id": "pwJrr3"
                },
                {
                    "type": "docs",
                    "value": "```JS\n{\n      \"data\":{\n          \/\/Data single resource response\n      }\n}\n```",
                    "id": "xKEhre"
                },
                {
                    "type": "docs",
                    "value": "### 2. Collection Resource Response\n<hr\/>\n\nTipe balasan ini akan dikirimkan ke sisi klien ketika klien meminta resource yang memerlukan data yang banyak. Data yang akan dikirim ke sisi klien tergantung pada data yang diminta ke server dan akan dibagi-bagi sesuai limit yang diberikan. Limit bawaan dari server adalah 10 data per request. Pembagian data terdapat dua metode yaitu **Pagination** dan **Cursor**. Pagination biasanya digunakan pada Web dan Cursor biasanya digunakan di Web ataupun Mobile untuk memakai Infinite Scroll. Biasanya **Query Plugin** yang bisa digunakan mencakup semua. Contoh balasan dari tipe ini:",
                    "id": "oP6VjJ"
                },
                {
                    "type": "codePlatform",
                    "value": [
                        "```js\n\/\/For Cursor Pagination\n\nStill not available. Future update.\n```",
                        "```javascript\n{\n  \"data\": [\n    {\n      \/\/Data Collection Resource Response.\n    }\n  ],\n  \"meta\": {\n    \"total_item\": 98,  \/\/total keseluruhan item yang didapatkan dari server\n    \"per_page\": 10,  \/\/limit per item dari part (page) pembagian pagination data\n    \"last_page\": 10,  \/\/part (page) terakhir dari pembagian pagination data\n    \"current_page\": 1,  \/\/part (page) pembagian pagination data yang di akses\n    \"next_url\": \"...\",  \/\/url untuk ke pagination data selanjutnya\n    \"prev_url\": \"...\",  \/\/url untuk ke pagination data sebelumnya\n  }\n}\n```"
                    ],
                    "id": "TXwKJD"
                }
            ],
            "resource-user": [
                {
                    "type": "docs",
                    "value": "# User (Pengguna)\n<hr\/>\n\nUser mempunyai fungsi vital yang berisi informasi soal data pengguna. Resource ini biasanya menangani fungsi-fungsi autentikasi dan mencari data-data pengguna untuk digunakan sebagai informasi.  Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [ Mendapatkan User dengan ID dari User ]( #mendapatkan-user-dengan-id-dari-user )\n\n### Mendapatkan User dengan ID dari User\n<hr\/>\n\nJika anda memerlukan informasi soal user yang sedang dicari. Ini adalah fungsi yang cocok untuk hal itu. User yang akan dikembalikan adalah data yang sesuai dengan ID yang ada di server.\n\n> Perlu diketahui bahwa setiap role mempunyai endpoint masing-masing untuk resource ini. Permisalan, ketika anda melakukan pencarian ID dengan role user Customer pada endpoint Admin, response yang dikirim akan menjadi *Not Found* karena resource Customer tidak ada di resource Admin.\n{.quote-warning}",
                    "id": "FEOtSy"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "GET",
                            "queryPlugin": "Only\/Except Column",
                            "url": "https:\/\/server.laron.id\/api\/v1\/admins\/ {ID Admin}",
                            "authorization": "Semua Role Admin."
                        },
                        {
                            "title": "Pelanggan",
                            "method": "GET",
                            "queryPlugin": "Only\/Except Column",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/ {ID Customer}",
                            "authorization": "Semua Role Admin, Customer."
                        },
                        {
                            "title": "Produsen",
                            "method": "GET",
                            "queryPlugin": "Only\/Except Column",
                            "url": "https:\/\/server.laron.id\/api\/v1\/producers\/ {ID Produsen}",
                            "authorization": "Semua Role Admin, Produsen."
                        }
                    ],
                    "id": "J0gI6L"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"email\": \"eratozassist@gmail.com\",\n    \"photo\": null,\n    \"customer_name\": \"Herlandro Tri B\",\n    \"created_at\": null,\n    \"birthday\": \"1999-09-10\",\n    \"phone_number\": null,\n    \"location\": {\n      \"location_id\": 13,\n      \"address\": \"Gg. Tubagus Ismail No. 806, Batu 10762, Maluku\",\n      \"urban\": \"Tanjung Pinang\",\n      \"postal_code\": 99277,\n      \"rw\": \"785\",\n      \"rt\": \"751\",\n      \"user_id\": 13,\n      \"subdistrict_id\": 1001001\n    }\n  }\n}\n\n```\n\nVariabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *email* | Email dari pengguna | User yang mempunyai data dan Admin |\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Semua Role |\n| *photo* | Link dari foto profil user | Semua Role |\n| *customer_name* (User tipe Customer) | Nama User | Semua Role |\n| *admin_name* (User tipe Admin) | Nama User | Semua Role |\n| *producer_name* (User tipe Producer) | Nama User | Semua Role |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Semua Role |\n| *address* | Alamat dari pengguna | User yang mempunyai data dan Admin |\n| *urban* | Kelurahan dari pengguna | User yang mempunyai data dan Admin |\n| *postal_code* | Kode pos dari pengguna | User yang mempunyai data dan Admin |\n| *rw* | RW dari pengguna | User yang mempunyai data dan Admin |\n| *rt* | RT dari pengguna | User yang mempunyai data dan Admin |\n| *user_id* | ID dari pengguna | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Eli Wahyuni S.E.\",\n    \"created_at\": \"2021-02-24T08:23:25.000000Z\",\n    \"address\": \"Ds. Yosodipuro No. 122, Bandar Lampung 88303, Papua\",\n    \"urban\": \"Banjar\",\n    \"postal_code\": 87301,\n    \"rw\": \"092\",\n    \"rt\": \"867\",\n    \"user_id\": 10,\n    \"subdistrict_id\": 1001001\n  }\n}\n\n```\n\nVariabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *email* | Email dari pengguna | User yang mempunyai data dan Admin |\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Semua Role |\n| *photo* | Link dari foto profil user | Semua Role |\n| *customer_name* (User tipe Customer) | Nama User | Semua Role |\n| *admin_name* (User tipe Admin) | Nama User | Semua Role |\n| *producer_name* (User tipe Producer) | Nama User | Semua Role |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Semua Role |\n| *location* | Koleksi dari lokasi penyimpanan Customer (Lebih lengkapnya ada pada Resource Location) | User yang mempunyai data dan Admin |\n| *user_id* | ID dari pengguna | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"email\": \"eratozassist@gmail.com\",\n    \"photo\": null,\n    \"customer_name\": \"Herlandro Tri B\",\n    \"created_at\": null,\n    \"birthday\": \"1999-09-10\",\n    \"phone_number\": null,\n    \"location\": {\n      \"location_id\": 13,\n      \"address\": \"Gg. Tubagus Ismail No. 806, Batu 10762, Maluku\",\n      \"urban\": \"Tanjung Pinang\",\n      \"postal_code\": 99277,\n      \"rw\": \"785\",\n      \"rt\": \"751\",\n      \"user_id\": 13,\n      \"subdistrict_id\": 1001001\n    }\n  }\n}\n\n```\n\nVariabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *email* | Email dari pengguna | User yang mempunyai data dan Admin |\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Semua Role |\n| *photo* | Link dari foto profil user | Semua Role |\n| *customer_name* (User tipe Customer) | Nama User | Semua Role |\n| *admin_name* (User tipe Admin) | Nama User | Semua Role |\n| *producer_name* (User tipe Producer) | Nama User | Semua Role |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Semua Role |\n| *address* | Alamat dari pengguna | User yang mempunyai data dan Admin |\n| *urban* | Kelurahan dari pengguna | User yang mempunyai data dan Admin |\n| *postal_code* | Kode pos dari pengguna | User yang mempunyai data dan Admin |\n| *rw* | RW dari pengguna | User yang mempunyai data dan Admin |\n| *rt* | RT dari pengguna | User yang mempunyai data dan Admin |\n| *user_id* | ID dari pengguna | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Semua Role |\n{.table-documentation}"
                        }
                    ],
                    "id": "Gh9iQp"
                }
            ],
            "resource-location": [
                {
                    "type": "docs",
                    "value": "# Location (Lokasi)\n<hr\/>\n\nLokasi adalah salah satu resource penyimpanan alamat **Customer** yang bisa digunakan untuk mengganti alamat pengiriman customer dengan instan. Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [ Mendapatkan Koleksi Lokasi melalui User ID ]( #mendapatkan-koleksi-lokasi-melalui-user-id )\n\n### 1. Mendapatkan Koleksi Lokasi melalui User ID\n<hr\/>\n\nJika anda memerlukan informasi alamat **Customer** yang sedang dicari atau ingin **Customer** melihat penyimpanan alamatnya, Ini adalah fungsi yang cocok untuk hal itu. Koleksi lokasi yang akan dikembalikan adalah data yang sesuai penyimpanan dari User ID yang ada di server. Setiap **Customer** mempunyai alamat yang bernama **\"Home\"** yang berarti itu adalah alamat asli dari **Customer**.\n\n> Koleksi lokasi hanya bisa dilakukan untuk User ID dengan Role **Customer** {.quote-warning}",
                    "id": "8Ueo82"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "GET",
                            "queryPlugin": "Only\/Except",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/ { ID Customer } \/locations",
                            "authorization": "Semua Role Admin dan Customer"
                        },
                        {
                            "title": "Produsen",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        }
                    ],
                    "id": "LtGVVg"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Tidak ada."
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"data\": [\n    {\n      \"location_id\": 12,\n      \"location_name\": \"Home\",\n      \"address\": \"Kpg. Sukajadi No. 891, Tebing Tinggi 26210, Riau\",\n      \"urban\": \"Administrasi Jakarta Utara\",\n      \"postal_code\": 91160,\n      \"rw\": \"074\",\n      \"rt\": \"940\",\n      \"user_id\": 12,\n      \"subdistrict_id\": 1001001\n    }\n  ],\n  \"meta\": {\n    \"total_item\": 1,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": null,\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "Tidak ada"
                        }
                    ],
                    "id": "ETs5Vr"
                }
            ],
            "resource-bumdesa": [
                {
                    "type": "docs",
                    "value": "# Bumdesa\n<hr\/>\n\nBumdesa adalah salah satu resource yang akan mengelola produk, mengelola produsen, customer service, dan masih banyak lagi. Ini adalah titik tengah antara produsen dan customer. Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [Mendapatkan Bumdesa secara Spesifik ID](#mendapatkan-bumdesa-secara-spesifik-id)\n- [Mendapatkan Koleksi Bumdesa](#mendapatkan-koleksi-bumdesa)\n- [Membuat Bumdesa](#membuat-bumdesa)\n- [Mengubah Data Bumdesa](#mengubah-data-bumdesa)\n\n### Mendapatkan Bumdesa secara Spesifik ID\n\nJika anda ingin menampilkan salah satu **bumdesa** secara spesifik dengan ID **bumdesa**, Ini adalah fungsi yang cocok untuk hal itu.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ ID Bumdesa ]",
                    "id": "R2n86o"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh response:\n\n```json\n{\n   \"data\": [\n    {\n      \"account_number\": 121931024819, \/\/Akan muncul ketika di akses Role Owner Laron & Owner Bumdesa.\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"81234567890\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"created_at\": null,\n      \"subdistrict_id\": 13025013\n    },\n}\n```\n\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *account_number* | Rekening dari Bumdesa | Pemilik Bumdesa dan Pemilik Aplikasi |\n| *bumdesa_id* | ID dari Bumdesa tersebut | Semua Role |\n| *bumdesa_name* | Nama dari Bumdesa | Semua Role |\n| *phone_number* | Nomor telepon Bumdesa | Semua Role |\n| *address* | Alamat Bumdesa | Semua Role |\n| *urban* | Kelurahan dari Bumdesa | Semua Role |\n| *postal_code* | Kode pos dari Bumdesa | Semua Role |\n| *rw* | RW dari pengguna | Semua Role |\n| *rt* | RT dari pengguna | Semua Role |\n| *created_at* | Tanggal bergabung Bumdesa | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari Bumdesa | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Contoh response:\n\n```json\n\n\n```\n\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *bumdesa_id* | ID dari Bumdesa tersebut | Semua Role |\n| *bumdesa_name* | Nama dari Bumdesa | Semua Role |\n| *phone_number* | Nomor telepon Bumdesa | Semua Role |\n| *address* | Alamat Bumdesa | Semua Role |\n| *urban* | Kelurahan dari Bumdesa | Semua Role |\n| *postal_code* | Kode pos dari Bumdesa | Semua Role |\n| *rw* | RW dari pengguna | Semua Role |\n| *rt* | RT dari pengguna | Semua Role |\n| *created_at* | Tanggal bergabung Bumdesa | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari Bumdesa | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "Contoh response:\n\n```json\n\n\n```\n\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *bumdesa_id* | ID dari Bumdesa tersebut | Semua Role |\n| *bumdesa_name* | Nama dari Bumdesa | Semua Role |\n| *phone_number* | Nomor telepon Bumdesa | Semua Role |\n| *address* | Alamat Bumdesa | Semua Role |\n| *urban* | Kelurahan dari Bumdesa | Semua Role |\n| *postal_code* | Kode pos dari Bumdesa | Semua Role |\n| *rw* | RW dari pengguna | Semua Role |\n| *rt* | RT dari pengguna | Semua Role |\n| *created_at* | Tanggal bergabung Bumdesa | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari Bumdesa | Semua Role |\n{.table-documentation}"
                        }
                    ],
                    "id": "QGQOgO"
                },
                {
                    "type": "docs",
                    "value": "### Mendapatkan Koleksi Bumdesa\n<hr\/>\n\nJika anda ingin menampilkan seluruh **Bumdesa** atau ingin memfilter beberapa **Bumdesa**, Ini adalah fungsi yang cocok untuk hal itu.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Only\/Except, Sorting.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa",
                    "id": "YkWeBe"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh response:\n\n```json\n{\n  \"data\": [\n    {\n      \"account_number\": 121931024819, \/\/Akan muncul ketika di akses Role Owner Laron & Owner Bumdesa.\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"81234567890\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"created_at\": null,\n      \"subdistrict_id\": 13025013\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 4,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/laron-server-side.test\\\/api\\\/v1\\\/bumdesa?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Contoh response:\n\n```json\n{\n  \"data\": [\n    {\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"81234567890\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"created_at\": null,\n      \"subdistrict_id\": 13025013\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 4,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/laron-server-side.test\\\/api\\\/v1\\\/bumdesa?page=2\",\n    \"prev_url\": null\n  }\n}\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "Contoh response:\n\n```json\n{\n  \"data\": [\n    {\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"81234567890\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"created_at\": null,\n      \"subdistrict_id\": 13025013\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 4,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/laron-server-side.test\\\/api\\\/v1\\\/bumdesa?page=2\",\n    \"prev_url\": null\n  }\n}\n```"
                        }
                    ],
                    "id": "sVWX0A"
                },
                {
                    "type": "docs",
                    "value": "### Membuat Bumdesa\n<hr\/>\n\nJika terdapat sebuah Bumdesa yang ingin mendaftar ke aplikasi, fungsi ini sangatlah tepat untuk melakukan itu. Ini hanya bisa dilakukan oleh pemilik aplikasi Laron. Jadi pastikan untuk proposal atau perijinan terlebih dahulu ke pemilik aplikasi.",
                    "id": "CYxCYk"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "POST",
                            "queryPlugin": "-",
                            "url": "http:\/\/server.laron.id\/api\/v1\/bumdesa",
                            "authorization": "Owner Laron"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        },
                        {
                            "title": "Produsen",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        }
                    ],
                    "id": "Q1BLzm"
                },
                {
                    "type": "docs",
                    "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *account_number* | string | Rekening dari Bumdesa | Diperlukan, 8-12 Digit, Input numerik |\n| *bumdesa_name* | string | Nama dari Bumdesa | Diperlukan, Unik, Maksimal 254 karakter |\n| *phone_number* | string | Nomor telepon Bumdesa | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *address* | string | Alamat Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari Bumdesa | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari Bumdesa | Diperlukan, Sesuai kode kecamatan pada server |\n{.table-documentation}\n\n**Contoh Response:**\n\nResponse JSON:\n\n```json\n{\n\t\"bumdesa_name\":\"Bumdesa Nologatenss\",\n\t\"phone_number\":\"08173188221\",\n\t\"account_number\":\"123456789\",\n\t\"address\":\"3219 Huntz Lane\",\n\t\"urban\":\"Ngaglik\",\n\t\"postal_code\":\"98313\",\n\t\"rw\":\"002\",\n\t\"rt\":\"010\",\n\t\"subdistrict_id\":1001001\n}\n```\n\nResponse Header:\n\n- Location : https:\/\/server.laron.co.id\/api\/v1\/bumdesa\/8\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "Fi4ALp"
                },
                {
                    "type": "docs",
                    "value": "### Mengubah Data Bumdesa\n<hr\/>\n\nJika terdapat sebuah Bumdesa yang ingin diubah data profil atau data lainnya ke aplikasi, fungsi ini sangatlah tepat untuk melakukan itu. Ini hanya bisa dilakukan oleh pemilik aplikasi Laron dan pemilik Bumdesa.",
                    "id": "KKp29g"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "PUT\/PATCH",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ ID Bumdesa ]",
                            "authorization": "Pemilik Aplikasi Laron dan Pemilik Bumdesa"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        },
                        {
                            "title": "Produsen",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        }
                    ],
                    "id": "EQ38Eu"
                },
                {
                    "type": "docs",
                    "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *account_number* | string | Rekening dari Bumdesa | Diperlukan, 8-12 Digit, Input numerik |\n| *bumdesa_name* | string | Nama dari Bumdesa | Diperlukan, Unik, Maksimal 254 karakter |\n| *phone_number* | string | Nomor telepon Bumdesa | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *address* | string | Alamat Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari Bumdesa | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari Bumdesa | Diperlukan, Sesuai kode kecamatan pada server |\n{.table-documentation}\n\n**Contoh Response:**\n\nResponse JSON:\n\n```json\n{\n\t\"bumdesa_name\":\"Bumdesa Nologatenss\",\n\t\"phone_number\":\"08173188221\",\n\t\"account_number\":\"123456789\",\n\t\"address\":\"3219 Huntz Lane\",\n\t\"urban\":\"Ngaglik\",\n\t\"postal_code\":\"98313\",\n\t\"rw\":\"002\",\n\t\"rt\":\"010\",\n\t\"subdistrict_id\":1001001\n}\n```\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "vGf0FI"
                }
            ],
            "resource-brand": [
                {
                    "type": "docs",
                    "value": "# Brand\n<hr\/>\n\nBrand adalah salah satu resource yang mempunyai informasi badan usaha dari produsen. Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [Mengambil Data Brand secara Spesifik melalui ID Brand](#mengambil-data-brand-secara-spesifik-melalui-id-brand)\n- [Mengambil Koleksi Data Brand](#mengambil-koleksi-data-brand)\n\n### Mengambil Data Brand secara Spesifik melalui ID Brand\n<hr\/>\n\nJika anda ingin mencari secara spesifik Brand yang anda inginkan di seluruh Bumdesa maka anda dapat menggunakan fungsi\/endpoint ini.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ ID Brand ]",
                    "id": "UEd9vP"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"data\": {\n    \"brand_id\": 1,\n    \"brand_name\": \"CV Rahayu\",\n    \"photo\": \"brandtest.jpg\",\n    \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n    \"bumdesa_id\": 1,\n    \"producer_id\": 1,\n    \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n  }\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *brand_id* | ID dari Brand tersebut | Semua Role |\n| *brand_name* | Nama dari Bumdesa | Semua Role |\n| *photo* | Foto Icon\/Logo dari Brand | Semua Role |\n| *description* | Deskripsi Brand | Semua Role |\n| *bumdesa_id* | ID Bumdesa untuk Brand yang di ikuti | Semua Role |\n| *producer_id* | Produsen yang memiliki Brand tersebut | Semua Admin |\n| *created_at* | Tanggal pembuatan Brand tersebut | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"data\": {\n    \"brand_id\": 1,\n    \"brand_name\": \"CV Rahayu\",\n    \"photo\": \"brandtest.jpg\",\n    \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n    \"bumdesa_id\": 1,\n    \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n  }\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *brand_id* | ID dari Brand tersebut | Semua Role |\n| *brand_name* | Nama dari Bumdesa | Semua Role |\n| *photo* | Foto Icon\/Logo dari Brand | Semua Role |\n| *description* | Deskripsi Brand | Semua Role |\n| *bumdesa_id* | ID Bumdesa untuk Brand yang di ikuti | Semua Role |\n| *created_at* | Tanggal pembuatan Brand tersebut | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n{\n  \"data\": {\n    \"brand_id\": 1,\n    \"brand_name\": \"CV Rahayu\",\n    \"photo\": \"brandtest.jpg\",\n    \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n    \"bumdesa_id\": 1,\n    \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n  }\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *brand_id* | ID dari Brand tersebut | Semua Role |\n| *brand_name* | Nama dari Bumdesa | Semua Role |\n| *photo* | Foto Icon\/Logo dari Brand | Semua Role |\n| *description* | Deskripsi Brand | Semua Role |\n| *bumdesa_id* | ID Bumdesa untuk Brand yang di ikuti | Semua Role |\n| *created_at* | Tanggal pembuatan Brand tersebut | Semua Role |\n{.table-documentation}"
                        }
                    ],
                    "id": "Ln5qsA"
                },
                {
                    "type": "docs",
                    "value": "### Mengambil Koleksi Data Brand\n<hr\/>\n\nJika anda ingin menampilkan koleksi Brand, anda bisa menggunakan fungsi ini.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands",
                    "id": "LUiZWw"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"data\": [\n    {\n      \"brand_id\": 1,\n      \"brand_name\": \"CV Rahayu\",\n      \"photo\": \"brandtest.jpg\",\n      \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n      \"bumdesa_id\": 1,\n      \"producer_id\": 1,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 24,\n    \"per_page\": 10,\n    \"last_page\": 3,\n    \"current_page\": 1,\n    \"next_url\": \"https:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/brands?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"data\": [\n    {\n      \"brand_id\": 1,\n      \"brand_name\": \"CV Rahayu\",\n      \"photo\": \"brandtest.jpg\",\n      \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n      \"bumdesa_id\": 1,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 24,\n    \"per_page\": 10,\n    \"last_page\": 3,\n    \"current_page\": 1,\n    \"next_url\": \"https:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/brands?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n{\n  \"data\": [\n    {\n      \"brand_id\": 1,\n      \"brand_name\": \"CV Rahayu\",\n      \"photo\": \"brandtest.jpg\",\n      \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n      \"bumdesa_id\": 1,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 24,\n    \"per_page\": 10,\n    \"last_page\": 3,\n    \"current_page\": 1,\n    \"next_url\": \"https:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/brands?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        }
                    ],
                    "id": "6WZk9r"
                }
            ],
            "resource-product": [
                {
                    "type": "docs",
                    "value": "# Product\n<hr\/>\nProduct adalah resource yang mengelola produk-produk dari beberapa produsen yang diurus oleh Bumdesa. Produk perlu di review untuk masuk ke aplikasi tersebut. Terdapat tiga tipe produk review:\n\n- Diterima (approved)\n- Ditolak (not_approved)\n- Sedang di review (on_review)\n\nFungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [Mendapatkan Produk secara Spesifik ID](#mendapatkan-produk-secara-spesifik-id)\n- [Mendapatkan Koleksi Produk](#mendapatkan-koleksi-produk)\n- [Mendapatkan Koleksi Produk secara Spesifik dengan ID Brand](#mendapatkan-koleksi-produk-secara-spesifik-dengan-id-brand)\n- [Mendapatkan Koleksi Produk secara Spesifik dengan ID Bumdesa](#mendapatkan-koleksi-produk-secara-spesifik-dengan-id-bumdesa)\n- [Membuat Produk](#membuat-bumdesa)\n- [Mengubah Data Produk](#mengubah-data-bumdesa)\n\n### Mendapatkan Produk secara Spesifik ID\n<hr\/>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\/ [ ID Products ]\n\nContoh Response:\n\n```json\n{\n  \"product_name\": \"Baju Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"Long\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [\n        {\n          \"min_value\": 4,\n          \"max_value\": null,\n          \"value\": 3,\n          \"expired_at\": \"2021-05-26\",\n          \"promo_type\": \"buy_one_get_one\"\n        }\n  ],\n  \"tags\": [\n     \"baju\"\n  ]\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *product_id* | ID dari produk tersebut | Semua Role |\n| *product_name* | Nama dari produk | Semua Role |\n| *min_purchase* | Minimal pembelian dalam satuan unit | Semua Role |\n| *price* | Harga produk | Semua Role |\n| *stock* | Stok dari produk tersebut | Semua Role |\n| *description* | Deskripsi produk | Semua Role |\n| *brand_id* | Brand yang mempunyai produk | Semua Role |\n| *is_preorder* | Informasi preorder dari produk | Semua Role |\n| *review_status* | Status review dari produk | Semua Role |\n| *promo* | Promo yang ada pada produk | Semua Role |\n| *created_at* | Tanggal pembuatan produk tersebut | Semua Role |\n| *updated_at* | Tanggal perubahan dari produk tersebut | Semua Role |\n{.table-documentation}\n\n### Mendapatkan Koleksi Produk\n<hr\/>\n\nProduk dapat di klasifikasi dengan **QP - Custom Conditional** yang tersedia di resource ini.\n\nCustom Conditional yang tersedia:\n|Nama|Nilai yang Dibolehkan|Deskripsi|\n|--|--|--|\n|category| culinary, fashion, art, service | Klasifikasi menurut kategori produk.<br>- Jika anda ingin hanya kuliner terlihat saja pada response menggunakan \"culinary\". -<br>- Untuk kerajinan menggunakan \"art\".<br>- Untuk jasa menggunakan \"service\". |\n|review_status|approved,  not_approved, on_review| Klasifikasi menurut status review produk.<br>- Jika ingin memperlihatkan produk yang telah diterima menggunakan nilai \"approved\". <br>- Untuk produk yang ditolak menggunakan \"not_approved\".<br>- Untuk produk yang ingin di review memakai \"on_review\" |\n{.table-documentation}\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Sorting, Only\/Except, Custom Conditional.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\n\nContoh Response:\n\n```json\n{\n  \"data\": [\n    {\n      \"product_id\": 34,\n      \"product_name\": \"Snack Vero Porro Voluptas.\",\n      \"min_purchase\": \"4.00\",\n      \"price\": 39000,\n      \"stock\": 52,\n      \"perishable\": true,\n      \"bookable\": false,\n      \"short_description\": \"Facilis laborum et blanditiis et. Saepe qui eos et incidunt aperiam unde id. Et sapiente saepe nesciunt ut voluptates libero rerum.\",\n      \"long_description\": \"Quia est voluptatem quos voluptatem consequatur sapiente et. Officia non qui dolorem placeat vel. Ea quisquam minima rem minima in.\",\n      \"brand_id\": 5,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\",\n      \"updated_at\": \"2021-03-08T07:20:58.000000Z\",\n      \"is_preorder\": false,\n      \"review_status\": \"on_review\",\n      \"product_category\": \"culinary\",\n      \"unit\": \"paket\",\n      \"promo\": [\n        {\n          \"min_value\": 55028,\n          \"max_value\": 130018,\n          \"value\": 20,\n          \"expired_at\": null,\n          \"promo_type\": \"discount\"\n        }\n      ],\n      \"tags\": [\n        \"laborum\"\n      ]\n    }, ...\n  ],\n  \"meta\": {\n    \"total_item\": 165,\n    \"per_page\": 10,\n    \"last_page\": 17,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/products?custom%21category=culinary&page=2\",\n    \"prev_url\": null\n  }\n```\n\n### Mendapatkan Koleksi Produk secara Spesifik dengan ID Brand\n<hr>\nFungsi ini dipakai ketika anda ingin memfilter produk menurut ID Brand yang di inginkan.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Sorting, Only\/Except, Custom Conditional.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ID Brand] \/products\n\n### Mendapatkan Koleksi Produk secara Spesifik dengan ID Bumdesa\n<hr>\nFungsi ini dipakai ketika anda ingin memfilter produk menurut ID Bumdesa yang di inginkan.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Sorting, Only\/Except, Custom Conditional.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ID Bumdesa] \/products",
                    "id": "Sos8Tp"
                },
                {
                    "type": "docs",
                    "value": "### Membuat Produk\n\nAnda dapat membuat produk melalui API dari **Produsen\/Brand** ataupun dari **Admin**. Perbedaan dari akses role tersebut adalah, jika anda membuat produk dengan role **Admin** maka, produk tidak memerlukan review lagi. Sebaliknya, ketika anda memasukkan produk melalui role **Produsen** maka perlu adanya review terlebih dahulu ke **Admin**. Terdapat satuan unit juga pada membuat produk. Satuan unit di klasifikasikan secara kategori produk, antara lain:\n\n|Kategori|Nilai yang dibolehkan|\n|--|--|\n|culinary (Kuliner)|kilogram, gram, ons, ikat, biji, paket, porsi, bungkus|\n|fashion (Fashion)|set, paket, buah|\n|art (Kerajinan)|set, paket, biji|\n|service (Jasa)|hari, jam, tiket, malam, tiket|\n{.table-documentation}\n\nTerdapat juga promo yang tersedia di produk yaitu:\n- discount (Diskon)\n\n  Promo bersifat potongan persentase harga item yang dibeli.\n- buy_one_get_one (Beli satu gratis satu)\n  \n  Promo bersifat mendapatkan gratis item baru ketika kondisi dari promo tersebut tercapai.\n- free_shipping (Gratis Ongkir)\n  \n  Promo bersifat mendapatkan gratis pengiriman barang ketika kondisi dari promo tersebut tercapai.\n\nSpesifikasi Request:\n- **Method** : POST\n- **Query Plugin** : -\n- **Authorization** : Semua Admin atau Produsen\/Brand\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *product_name* | string | Nama dari produk tersebut | Diperlukan, Maksimal 254 karakter |\n| *min_purchase* | numeric | Minimal pembelian menurut satuan unit produk | Diperlukan, Maksimal 1000000 |\n| *price* | integer | Harga dari produk | Diperlukan, Minimal 1 |\n| *stock* | integer | Stok pada produk | Diperlukan |\n| *description* | string | Deskripsi dari produk | Diperlukan, Teks, Minimal 1 karakter, Maksimal 700 karakter |\n| *brand_id* | integer | ID dari Brand pemilik produk | Diperlukan jika *producer_id* tidak di isi |\n| *producer_id* | integer | ID dari Brand pemilik produk | Diperlukan jika *brand_id* tidak di isi |\n| *unit* | string | Satuan unit dari produk | Diperlukan, Sesuai kategori satuan unit yang telah dijelaskan |\n| *product_category* | string | Kategori produk | Diperlukan, Hanya menerima kategori yang telah dijelaskan|\n| *is_preorder* | boolean | Status jika produk bersifat pre-order | Diperlukan |\n| *perishable* | boolean | Status produk dapat mudah kadaluarsa | Diperlukan jika kategori kuliner dipilih |\n| *bookable* | boolean | Status produk dapat di booking | Diperlukan jika kategori jasa dipilih |\n| *tags* | array\/string | Sub kategori produk | Opsional, Jika string maka bentuknya \"tag1\",\"tag2\" |\n| *promo* | array| Promo yang ada pada produk | Opsional, Maksimal 3 Promo, Format akan di contohkan dibawah. |\n{.table-documentation}\n\n**Contoh Request Body**\n```json\n{\n\t\"product_name\":\"Baju Saltiga\",\n\t\"min_purchase\":\"1\",\n\t\"price\":\"100000\",\n\t\"stock\":\"10\",\n\t\"description\":\"lorem ipsum\",\n\t\"brand_id\":\"1\",\n\t\"unit\":\"buah\",\n\t\"is_preorder\":false,\n\t\"product_category\":\"fashion\",\n\t\"tags\":[\"baju\",\"trend\"],\n\t\"promo\":[\n\t\t{\n\t\t\t\"type\":\"discount\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":500000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"max\":1000000, \/\/Maksimal Harga Diskon yang dibolehkan (Opsional)\n\t\t\t\"value\":50 \/\/Persentase Diskon (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"buy_one_get_one\", \/\/Tipe Promo (Diperlukan) \n\t\t\t\"min\":3, \/\/Minimal pembelian item untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Kuantitas barang yang gratis (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"free_shipping\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":100000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Beri nilai satu jika ingin aktif (Diperlukan)\n\t\t}\n\t]\n}\n```\n\n**Contoh Response:**\n\nResponse JSON:\n\n```json\n\n{\n  \"product_name\": \"Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"lorem ipsum\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [],\n  \"tags\": [\n    \"baju\"\n  ]\n}\n\n```\n\nResponse Header:\n\n- Location : https:\/\/server.laron.co.id\/api\/v1\/products\/ [ID Produk Terbaru]\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid.",
                    "id": "3O9QD6"
                },
                {
                    "type": "docs",
                    "value": "### Mengubah Data Produk\n\nSpesifikasi Request:\n- **Method** : PUT\/PATCH\n- **Query Plugin** : Only\/Except.\n- **Authorization** : Semua Admin dan Produsen\/Brand\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\/ [ ID Products ]\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *product_name* | string | Nama dari produk tersebut | Diperlukan, Maksimal 254 karakter |\n| *min_purchase* | numeric | Minimal pembelian menurut satuan unit produk | Diperlukan, Maksimal 1000000 |\n| *price* | integer | Harga dari produk | Diperlukan, Minimal 1 |\n| *stock* | integer | Stok pada produk | Diperlukan |\n| *description* | string | Deskripsi dari produk | Diperlukan, Teks, Minimal 1 karakter, Maksimal 700 karakter |\n| *unit* | string | Satuan unit dari produk | Diperlukan, Sesuai kategori satuan unit yang telah dijelaskan |\n| *product_category* | string | Kategori produk | Diperlukan, Hanya menerima kategori yang telah dijelaskan|\n| *is_preorder* | boolean | Status jika produk bersifat pre-order | Diperlukan |\n| *perishable* | boolean | Status produk dapat mudah kadaluarsa | Diperlukan jika kategori kuliner dipilih |\n| *bookable* | boolean | Status produk dapat di booking | Diperlukan jika kategori jasa dipilih |\n| *tags* | array\/string | Sub kategori produk | Opsional, Jika string maka bentuknya \"tag1\",\"tag2\" |\n| *promo* | array| Promo yang ada pada produk | Opsional, Maksimal 3 Promo, Format akan di contohkan dibawah. |\n{.table-documentation}\n\n**Contoh Request Body**\n```json\n{\n\t\"product_name\":\"Baju Saltiga\",\n\t\"min_purchase\":\"1\",\n\t\"price\":\"100000\",\n\t\"stock\":\"10\",\n\t\"description\":\"lorem ipsum\",\n\t\"unit\":\"buah\",\n\t\"is_preorder\":false,\n\t\"product_category\":\"fashion\",\n\t\"tags\":[\"baju\",\"trend\"],\n\t\"promo\":[\n\t\t{\n\t\t\t\"type\":\"discount\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":500000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"max\":1000000, \/\/Maksimal Harga Diskon yang dibolehkan (Opsional)\n\t\t\t\"value\":50 \/\/Persentase Diskon (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"buy_one_get_one\", \/\/Tipe Promo (Diperlukan) \n\t\t\t\"min\":3, \/\/Minimal pembelian item untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Kuantitas barang yang gratis (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"free_shipping\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":100000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Beri nilai satu jika ingin aktif (Diperlukan)\n\t\t}\n\t]\n}\n```\n\n**Contoh Response:**\n\nResponse JSON:\n\n```json\n\n{\n  \"product_name\": \"Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"lorem ipsum\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [],\n  \"tags\": [\n    \"baju\"\n  ]\n}\n\n```\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid.",
                    "id": "Ntm3cn"
                }
            ]
        },
        "query_plugin": {
            "introduction": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Query Plugin\n\nQuery Plugin (QP) adalah sebuah fitur untuk melakukan pengambilan data layaknya sedang men-query sebuah data SQL pada permintaan sisi klien dengan query parameter GET. Sebutan ini hanya ada pada pengunaan proses request di server Laron.",
                    "id": "sEzrlI"
                }
            ],
            "conditional": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Conditional\nQP bagian ini berfungsi untuk memfilter data dengan memakai kondisi yang disediakan resource tersebut. Terdapat dua tipe conditional, yaitu\n- Column Conditional\n  \n  Tipe Conditional ini akan memfilter kolum memakai operator yang tersedia pada resource. Pengunaannya akan digunakan operator yang disediakan, dipisah dengan karakter \"!\" dan ditutup dengan nama kolom yang ingin kita kondisikan. Terdapat macam-macam operator, yaitu:\n  \n| Operator | Fungsi |Contoh\n|--|--|--|\n| **e** | Operator ini akan bekerja layaknya operator *equal* yang akan membenarkan jika dua nilai yang sama|e!is_email_verified|\n| **ne** | Operator ini akan bekerja layaknya operator *not equal* yang akan membenarkan jika dua nilai yang tidak sama|ne!is_email_verified|\n| **gt** | Operator ini akan bekerja layaknya operator *greater than* yang akan membenarkan jika nilai yang dicari lebih besar|gt!age|\n| **lt** | Operator ini akan bekerja layaknya operator *less than* yang akan membenarkan jika nilai yang dicari lebih kecil|lt!age|\n| **gte** | Operator ini akan bekerja layaknya operator *greater than & equal* yang akan membenarkan jika nilai yang dicari lebih besar dan sama dengan itu|gte!price|\n| **lte** | Operator ini akan bekerja layaknya operator *less than & equal* yang akan membenarkan jika nilai yang dicari lebih kecil|lte!price|\n| **bw** | Operator ini akan bekerja layaknya operator *between* yang akan membenarkan jika nilai yang dicari diantara dengan nilai yang di inputkan|bw!created_at|\n| **nbw** | Operator ini akan bekerja layaknya operator *not between* yang akan membenarkan jika nilai yang dicari tidak ada diantara dengan nilai yang di inputkan|nbw!created_at|\n| **fl** | Operator ini akan bekerja layaknya operator *search* yang akan mencari kata-kata didepan dari kata yang di inputkan|fl!name|\n| **ll** | Operator ini akan bekerja layaknya operator *search* yang akan mencari kata-kata dibelakang dari kata yang di inputkan|fl!name|\n| **fll** | Operator ini akan bekerja layaknya operator *search* yang akan mencari kata-kata diantara dua sisi dari kata yang di inputkan|fll!name|\n {.table-documentation}\n \n  Salah satu contoh:",
                    "id": "HOa0Iw"
                },
                {
                    "order_content": "2",
                    "type": "codePlatform",
                    "value": [
                        "```kotlin\n  \/\/ With Retrofit Kotlin.\n\n @GET(\"...\")\n    fun getUserProfile(\n            @Header(\"Authorization\") token: String,\n            @Query(\"eq!is_email_verified\") is_email_verified: Boolean,\n            @Query(\"bw!created_at\") created_at: String\n            ): Deferred<JSONArray>\n\n```",
                        "```javascript\n\/\/ With Axios\n\nconst params = {\n  \"eq!is_email_verified\": true,\n  \"bw!created_at\":\"21-10-2020,30-10-2020\",\n};\n\nconst res = await axios.get('https:\/\/.....', { params });\n\n```"
                    ],
                    "id": "1lRXqF"
                },
                {
                    "order_content": "3",
                    "type": "docs",
                    "value": "- Resource Conditional\n  \n  Tipe kondisi ini biasanya telah disiapkan oleh resource tersebut. Resource Conditional lebih praktis karena anda tidak perlu menggunakan operator dan kolom yang banyak nantinya di query parameter. Biasanya pengunaannya dengan menggunakan kata \"custom\" di ikuti dengan karakter \"!\" dan ditutupi dengan nama Resource Conditional tersebut.\n  \n  Contoh: custom!active_user pada Resource User",
                    "id": "yqbc1D"
                }
            ],
            "sort": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Sorting\nMengurutkan data tidak akan susah dengan QP ini. Anda hanya tinggal menulis di query parameter dan menggunakan kata \"sort\" dibagian key query. Isi nilai dari sort nantinya adalah nama kolom yang tersedia pada resource. Jika nilai sort berisi karakter \"-\" sebelum nama kolom, maka kolom tersebut akan di urutkan secara **descending**. Jika anda ingin mengurutkan secara **ascending** maka hapus karakter \"-\".\n\nContoh:",
                    "id": "gb5mSP"
                },
                {
                    "order_content": "2",
                    "type": "codePlatform",
                    "value": [
                        "```kotlin\n\n  \/\/ With Retrofit Kotlin.\n\n @GET(\"...\")\n    fun getUserProfile(\n            @Header(\"Authorization\") token: String,\n            @Query(\"sort\") sort: String,\n            ): Deferred<JSONArray>\n\n```",
                        "```javascript\n\/\/ With Axios\n\nconst params = {\n  \/\/Ascending\n  \"sort\": \"age\",\n  \/\/Descending\n  \"sort\": \"-age\",\n};\n\nconst res = await axios.get('https:\/\/.....', { params });\n\n```"
                    ],
                    "id": "J5nEF5"
                }
            ],
            "only_except": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Only \/ Except\n\nQP ini berguna untuk menseleksi kolom apa saja yang akan dikirimkan ke sisi klien. Ini akan mengurangi besar data dari respon balasan sisi server karena hanya beberapa kolom saja yang dibutuhkan. Only \/ Except menseleksi semua key balasan. Pengunaannya hanya memakai kata \"only\" atau \"except\" di key query parameter dan nilainya adalah key balasan sisi server yang disediakan pada resource yang di inginkan.\n\nSeperti pada katanya saja, Only akan menyeleksi kolom yang di inputkan pada nilai query parameter dengan key \"only\". Sebaliknya, Except akan menghilangkan kolom yang di inputkan pada nilai query parameter dengan key \"except\".\n\n> Perlu diketahui bahwa key \"only\" dan \"except\" tidak boleh digunakan secara bersamaan.\n{.quote-warning}",
                    "id": "0rU1lX"
                },
                {
                    "order_content": "2",
                    "type": "codePlatform",
                    "value": [
                        "```kotlin\n\n  \/\/ With Retrofit Kotlin.\n\n @GET(\"...\")\n    fun getUserProfile(\n            @Header(\"Authorization\") token: String,\n            @Query(\"only\") sort: String,\n            ): Deferred<JSONArray>\n\n```",
                        "```javascript\n\/\/ With Axios\n\nconst params = {\n  \/\/Only\n  \"only\": \"age,name\",\n  \/\/Except\n  \"except\": \"age\",\n  \/\/Pilih salah satu.\n};\n\nconst res = await axios.get('https:\/\/.....', { params });\n\n```"
                    ],
                    "id": "MnDxu3"
                }
            ]
        }
    }
}
