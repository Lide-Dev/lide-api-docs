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
                    "label": "Product - Part 1",
                    "to": "\/docs\/resource\/resource-product-1",
                    "order_content": null
                },
                {
                    "label": "Product - Part 2",
                    "to": "\/docs\/resource\/resource-product-2",
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
        },
        {
            "label": "Resource Support",
            "command": null,
            "order_content": 4,
            "items": [
                {
                    "label": "Penjelasan",
                    "to": "\/docs\/res-support\/introduction",
                    "order_content": null
                },
                {
                    "label": "Regional",
                    "to": "\/docs\/res-support\/regional",
                    "order_content": null
                },
                {
                    "label": "Kategori Produk",
                    "to": "\/docs\/res-support\/product-categories",
                    "order_content": null
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
                    "id": "1HbjeR"
                }
            ],
            "login": [
                {
                    "type": "docs",
                    "value": "# Login\n---\n### 1. Penjelasan {.p-my-5}\n\nUntuk mengakses API Laron diperlukan sebuah token autentikasi dari server. Sisi klien dapat meminta token dengan menggunakan API autentikasi dari laron.\n\n### 2. Penggunaan {.p-my-5}\n\nAnda bisa mengaksesnya dengan metode seperti dibawah ini{.p-mb-4}",
                    "id": "JRYwWk"
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
                    "id": "sYnu3J"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n<div class='table-responsive'>\n\n| Nama | Sifat | Tipe Data | Deskripsi |\n|--|--|--|--|\n| email | Required | _string_ | Email dari pengguna\n| password | Required | _string_ | Password dari pengguna\n{.table-documentation}\n\n<\/div>"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n<div class='table-responsive'>\n\n| Nama | Sifat | Tipe Data | Deskripsi |\n|--|--|--|--|\n| email | Required | _string_ | Email dari pengguna\n| password | Required | _string_ | Password dari pengguna\n{.table-documentation}\n\n<\/div>"
                        },
                        {
                            "title": "Produsen",
                            "value": "**Data yang bisa dikirim:** {.p-mb-4}\n\n<div class='table-responsive'>\n\n| Nama | Sifat | Tipe Data | Deskripsi |\n|--|--|--|--|\n| email | Required | _string_ | Email dari pengguna\n| password | Required | _string_ | Password dari pengguna\n{.table-documentation}\n\n<\/div>"
                        }
                    ],
                    "id": "yGweKJ"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "```json\n{\n  \"user\": {\n    \/\/Sama seperti Resource User. Penjelasan lebih lanjut ada di Dokumentasi Resource User.\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzYxNDZiNjNlYjMwNDBkNGZiYTI5MzQyZTMyY2Q5ZGNjYmRiMGEzNzE4MjViNTRjMTE5MDdmNjk3ODBkM2Y4YTlhMDE5MGU4NDdlZTg4YzEiLCJpYXQiOiIxNjE0NDkwMzA1Ljg0NTMwOSIsIm5iZiI6IjE2MTQ0OTAzMDUuODQ1MzE4IiwiZXhwIjoiMTYzMDEyODcwNS4xMzg0NjQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PwKiHt7xXOtuRYoJjyznYvu71bpEwwcji0MuIraqcdoLavghi5PL_1AHRTBS0FbiO1JevGD73uEn-FFeK844efFGKT0Dx15gynG485IL1OmPa8mnz3nOLrA06Uwkx3JyHKLXeG-morD2Vyz_WRWyPMOuPZEp-erLiuK87aB12733gE-CgRUAze7Cd4AWOYVlBj75kAcLWNopmFbxhp56GgLDtqkWBihEZRBBIvotYb0jT-7XGdwuFa9MJA8-61XnyLBp8rt2-cNDlYHmVZyY2JIpPicVlm3Z0_y1wpmO01B54tc2pPz2rywv6LPyvijOkBvGU8Yn1LUS_DKdrCFSjYZCF4c2Aavb0P59LczbHcrWV1aexo3xK_lKMvU3GlLvkLIWY_uCtHNfB1gYkXrGXPFohd1gSzoeLiXar-lLVqvjZ1H6Wv6lt9E2Da_BIguLbWwdaFGop8R0hobLJ0voERBF_cCMIcVVNAH4lSaI4Eqhxe_70LGs1WBK2XyhjTiK7E8UlxbAb6vS8k-4bfbs6eS0av02S7vA1WdKc7lvLL5ipaJO4CJAEnXv06-jM5cuqxYRim-Q-gs9HafQo_Z1dLTggBltH-9PQ8WSFOMXYVQh86eE58gtIyrzGqRK_I6W96hbYgBZWg3n_vYJvCDifGshUcT96OzajLSwTzpopKQ\"\n}\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "```json\n{\n  \"user\": {\n    \/\/Sama seperti Resource User. Penjelasan lebih lanjut ada di Dokumentasi Resource User.\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzYxNDZiNjNlYjMwNDBkNGZiYTI5MzQyZTMyY2Q5ZGNjYmRiMGEzNzE4MjViNTRjMTE5MDdmNjk3ODBkM2Y4YTlhMDE5MGU4NDdlZTg4YzEiLCJpYXQiOiIxNjE0NDkwMzA1Ljg0NTMwOSIsIm5iZiI6IjE2MTQ0OTAzMDUuODQ1MzE4IiwiZXhwIjoiMTYzMDEyODcwNS4xMzg0NjQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PwKiHt7xXOtuRYoJjyznYvu71bpEwwcji0MuIraqcdoLavghi5PL_1AHRTBS0FbiO1JevGD73uEn-FFeK844efFGKT0Dx15gynG485IL1OmPa8mnz3nOLrA06Uwkx3JyHKLXeG-morD2Vyz_WRWyPMOuPZEp-erLiuK87aB12733gE-CgRUAze7Cd4AWOYVlBj75kAcLWNopmFbxhp56GgLDtqkWBihEZRBBIvotYb0jT-7XGdwuFa9MJA8-61XnyLBp8rt2-cNDlYHmVZyY2JIpPicVlm3Z0_y1wpmO01B54tc2pPz2rywv6LPyvijOkBvGU8Yn1LUS_DKdrCFSjYZCF4c2Aavb0P59LczbHcrWV1aexo3xK_lKMvU3GlLvkLIWY_uCtHNfB1gYkXrGXPFohd1gSzoeLiXar-lLVqvjZ1H6Wv6lt9E2Da_BIguLbWwdaFGop8R0hobLJ0voERBF_cCMIcVVNAH4lSaI4Eqhxe_70LGs1WBK2XyhjTiK7E8UlxbAb6vS8k-4bfbs6eS0av02S7vA1WdKc7lvLL5ipaJO4CJAEnXv06-jM5cuqxYRim-Q-gs9HafQo_Z1dLTggBltH-9PQ8WSFOMXYVQh86eE58gtIyrzGqRK_I6W96hbYgBZWg3n_vYJvCDifGshUcT96OzajLSwTzpopKQ\"\n}\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n{\n  \"user\": {\n    \/\/Sama seperti Resource User. Penjelasan lebih lanjut ada di Dokumentasi Resource User.\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzYxNDZiNjNlYjMwNDBkNGZiYTI5MzQyZTMyY2Q5ZGNjYmRiMGEzNzE4MjViNTRjMTE5MDdmNjk3ODBkM2Y4YTlhMDE5MGU4NDdlZTg4YzEiLCJpYXQiOiIxNjE0NDkwMzA1Ljg0NTMwOSIsIm5iZiI6IjE2MTQ0OTAzMDUuODQ1MzE4IiwiZXhwIjoiMTYzMDEyODcwNS4xMzg0NjQiLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.PwKiHt7xXOtuRYoJjyznYvu71bpEwwcji0MuIraqcdoLavghi5PL_1AHRTBS0FbiO1JevGD73uEn-FFeK844efFGKT0Dx15gynG485IL1OmPa8mnz3nOLrA06Uwkx3JyHKLXeG-morD2Vyz_WRWyPMOuPZEp-erLiuK87aB12733gE-CgRUAze7Cd4AWOYVlBj75kAcLWNopmFbxhp56GgLDtqkWBihEZRBBIvotYb0jT-7XGdwuFa9MJA8-61XnyLBp8rt2-cNDlYHmVZyY2JIpPicVlm3Z0_y1wpmO01B54tc2pPz2rywv6LPyvijOkBvGU8Yn1LUS_DKdrCFSjYZCF4c2Aavb0P59LczbHcrWV1aexo3xK_lKMvU3GlLvkLIWY_uCtHNfB1gYkXrGXPFohd1gSzoeLiXar-lLVqvjZ1H6Wv6lt9E2Da_BIguLbWwdaFGop8R0hobLJ0voERBF_cCMIcVVNAH4lSaI4Eqhxe_70LGs1WBK2XyhjTiK7E8UlxbAb6vS8k-4bfbs6eS0av02S7vA1WdKc7lvLL5ipaJO4CJAEnXv06-jM5cuqxYRim-Q-gs9HafQo_Z1dLTggBltH-9PQ8WSFOMXYVQh86eE58gtIyrzGqRK_I6W96hbYgBZWg3n_vYJvCDifGshUcT96OzajLSwTzpopKQ\"\n}\n```"
                        }
                    ],
                    "id": "DtLddX"
                },
                {
                    "type": "docs",
                    "value": "Untuk data response buat User resource di login bisa dilihat di Resource User.\n\n### 3. Dummy Login Data {.p-my-5}\n\nAnda memerlukan data untuk login. Anda bisa memakai akun buatan dibawah ini: {.p-mb-4}",
                    "id": "vcYo4z"
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
                    "id": "XkFgLU"
                }
            ],
            "register": [
                {
                    "type": "docs",
                    "value": "# Register\n---\n### 1. Penjelasan {.p-my-5}\n\nJika pengguna belum mendaftar, maka beberapa API tidak dapat di akses. Maka dari itu pengguna perlu mendaftar dengan menggunakan API ini. \n\nUntuk pengguna yang ingin mendaftar menjadi Admin, diperlukan akses ke Pemilik Aplikasi Laron untuk mendaftar menjadi admin dari Bumdesa.\n\n### 2. Penggunaan {.p-my-5}\n\nAnda bisa mengaksesnya dengan metode seperti dibawah ini {.p-mb-4}",
                    "id": "8sldNO"
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
                    "id": "EICfC5"
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
                            "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *email* | string | Email dari pengguna | Diperlukan |\n| *password* | string | Password dari pengguna | Diperlukan, Minimal 8 Karakter |\n| *password_confirmation* | string | Konfirmasi password dari pengguna | Diperlukan, Minimal 8 Karakter, Sama dengan nilai *password* |\n| *name* | string | Nama dari pengguna | Diperlukan, Maksimal 70 karakter |\n| *phone_number* | string | Nomor telepon pengguna | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *name* | string | Nama dari pengguna | Diperlukan, Maksimal 70 karakter |\n| *phone_number* | string | Nomor telepon pengguna | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *birthday* | string | Tanggal lahir dari pengguna | Diperlukan, Maksimal hingga hari ini |\n| *gender* | string | Gender dari pengguna | Diperlukan, Menerima nilai \"M\" dan \"F\" (M = Laki-laki, F = Perempuan) |\n| *address* | string | Alamat pengguna | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari pengguna | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari pengguna | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari pengguna | Diperlukan, Sesuai kode kecamatan pada server |\n| *bumdesa_id* | integer | ID dari Bumdesa yang telah terdaftar pada server Laron | Diperlukan, Sesuai ID Bumdesa pada server |\n| *brand_name* | string | Nama dari brand produsen yang ingin didaftarkan | Diperlukan, Maksimal 70 karakter |\n| *brand_photo* | file | Logo\/Icon dari brand produsen yang ingin didaftarkan | Diperlukan, Maksimal 1MB, Ekstensi PNG\/JPG\/BMP  |\n| *brand_description* | string | Nama dari brand produsen yang ingin didaftarkan | Diperlukan, Maksimal 500 karakter |\n| *photo* | file | Foto dari pengguna | Opsional, Maksimal 1MB, Ekstensi PNG\/JPG\/BMP |\n\n{.table-documentation}"
                        }
                    ],
                    "id": "lwLLPA"
                },
                {
                    "type": "docs",
                    "value": "**Response :**",
                    "id": "z6IYod"
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
                            "value": "```json\n{\n  \"user\": {\n    \"is_email_verified\": false,\n    \"photo\": null,\n    \"customer_name\": \"Herlandro\",\n    \"birthday\": null,\n    \"phone_number\": \"628173188221\",\n    \"email\": \"saassdssadayaa@gmail.com\"\n  },\n  \"accessToken\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2UwNDM4Y2RhYmJiZTNlYTVmNGMyNjAyYTJlNzRjYWI0MzRiNWIwZTY2YjEwZjU2NWM1MGQ2N2U1MTI0NDhhYmUzMmViZGYzMmYxYmFhM2UiLCJpYXQiOiIxNjE1NzA3OTU2LjA2NTQ5NiIsIm5iZiI6IjE2MTU3MDc5NTYuMDY1NTc2IiwiZXhwIjoiMTYzMTYwNTU1NS44MzI1NDYiLCJzdWIiOiI0OCIsInNjb3BlcyI6W119.q1tB26v6xQzUvOHRDkMYRRSiYc_jWHGPgAtNhVxhYgnQI5e0NVMYd4zbyRa9pqflp2ycQ2Ntjoo9RmPvFVb6taigI8BfwYenWOhBPqQPYJCpVSyN-RJ0_5n25r6fpOQlR5Ibga3FhIR3SD8t5by0RDL8zyoqIIgEacjkA7wdO6L3qbck8Ma3zxYQsgLXjqQfbKDeOrwe9osTRFe-BMIoSIQlgFZ4dgygdCNEqhp41ZH0P7C1bnpEZ7gpRVWscTIQ8-zHY-Q-d62Vg-s3WRktnShR3fAGI9Kg6LVoJnbd5fQv25C-MluQbJ-NAPwo5hpA_Df9b8t8ndMuF7KxhoKSq4wc3PL6-YGGwoBrQISqWLGIAhz0W0k2zkf4b6m6uDH0oatSLIZeSx3nCk4ue4k16vwiBOUm81sLIAKCAv6RDb1gU9etqcyWvaJOk8kclBcei-volFB5ObrBdmld_ncge-z_W5FtITKXVBjmFaWKT4Y8s4NGM8KMn5emoeECR4FIfobKmSXJkHmmDmNK3Ce9ps00KOALA-bZhwkYClqFpM6aVktuecPwTcsQla916i9pw0Zhs4TztPaQ5wur1qQ6RmwJTP-alByivfdx0UMDuWll1YptPRTJ-6qSCQBRK5GXrfoGzPt7bFAwyJlkTp4fY0lIw_pomPX2bvlBjOA7C6g\"\n}\n\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n\n\n```"
                        }
                    ],
                    "id": "ezEEmq"
                }
            ]
        },
        "resource": {
            "introducing": [
                {
                    "type": "docs",
                    "value": "# Resource\n<hr\/>\n\nResource dalam server Laron adalah sebuah kontrol pada sebuah model di server Laron yang akan melakukan pekerjaan seperti membuat, mengupdate, menghapus, dan melihat (CRUD). Ketika Resource ingin di lihat, sisi klien dapat mentransformasi respon yang di inginkan dengan memakai fitur **Query Plugin** yang disediakan dari server kami. Terdapat resource yang hanya dapat dilihat dan hanya beberapa fitur yang bisa.\n\n> **Query Plugin** akan dijelaskan lebih lanjut di sesi selanjutnya.\n{.quote-info}\n\nUntuk sekarang Resource yang telah dibuat pada server Laron yaitu:\n\n- User (Seluruh User Role, Termasuk Profil)\n- Location (Lokasi Penyimpanan untuk Customer)\n- Product (Produk)\n- Brand (Brand)\n- Bumdesa\n\nResource pun jika ingin dilihat di terdapat dua tipe balasan yaitu **Single Resource Response** dan **Collection Resource Response** (Koleksi). Masing-masing mempunyai balasan\/response yang berbeda-beda. Penjelasan lebih lanjut, sebagai berikut:\n\n### 1. Single Resource Response\n<hr\/>\n\nTipe balasan ini akan dikirimkan ke sisi klien ketika klien meminta resource secara spesifik ID dari resource tersebut. Data yang akan dikirim ke sisi klien hanya satu data spesifik yang dicari. Biasanya **Query Plugin** yang bisa digunakan pada tipe balasan ini hanyalah Only\/Except. Contoh:",
                    "id": "sg3fnY"
                },
                {
                    "type": "docs",
                    "value": "```JS\n{\n      \"data\":{\n          \/\/Data single resource response\n      }\n}\n```",
                    "id": "HcgcVN"
                },
                {
                    "type": "docs",
                    "value": "### 2. Collection Resource Response\n<hr\/>\n\nTipe balasan ini akan dikirimkan ke sisi klien ketika klien meminta resource yang memerlukan data yang banyak. Data yang akan dikirim ke sisi klien tergantung pada data yang diminta ke server dan akan dibagi-bagi sesuai limit yang diberikan. Limit bawaan dari server adalah 10 data per request. Pembagian data terdapat dua metode yaitu **Pagination** dan **Cursor**. Pagination biasanya digunakan pada Web dan Cursor biasanya digunakan di Web ataupun Mobile untuk memakai Infinite Scroll. Biasanya **Query Plugin** yang bisa digunakan mencakup semua. Contoh balasan dari tipe ini:",
                    "id": "R7F8lz"
                },
                {
                    "type": "codePlatform",
                    "value": [
                        "```js\n\/\/For Cursor Pagination\n\nStill not available. Future update.\n```",
                        "```javascript\n{\n  \"data\": [\n    {\n      \/\/Data Collection Resource Response.\n    }\n  ],\n  \"meta\": {\n    \"total_item\": 98,  \/\/total keseluruhan item yang didapatkan dari server\n    \"per_page\": 10,  \/\/limit per item dari part (page) pembagian pagination data\n    \"last_page\": 10,  \/\/part (page) terakhir dari pembagian pagination data\n    \"current_page\": 1,  \/\/part (page) pembagian pagination data yang di akses\n    \"next_url\": \"...\",  \/\/url untuk ke pagination data selanjutnya\n    \"prev_url\": \"...\",  \/\/url untuk ke pagination data sebelumnya\n  }\n}\n```"
                    ],
                    "id": "17pspx"
                }
            ],
            "resource-user": [
                {
                    "type": "docs",
                    "value": "# User (Pengguna)\n<hr\/>\n\nUser mempunyai fungsi vital yang berisi informasi soal data pengguna. Resource ini biasanya menangani fungsi-fungsi autentikasi dan mencari data-data pengguna untuk digunakan sebagai informasi.  Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [ Mendapatkan User dengan ID dari User ]( #mendapatkan-user-dengan-id-dari-user )\n- [ Mengubah Data User ]( #mengubah-data-user )\n- [ Menghapus Data User ]( #menghapus-data-user )\n- [ Ban dan Unban Data User ]( #ban-dan-unban-data-user )\n\n### Mendapatkan User dengan ID dari User\n<hr\/>\n\nJika anda memerlukan informasi soal user yang sedang dicari. Ini adalah fungsi yang cocok untuk hal itu. User yang akan dikembalikan adalah data yang sesuai dengan ID yang ada di server.\n\n> Perlu diketahui bahwa setiap role mempunyai endpoint masing-masing untuk resource ini. Permisalan, ketika anda melakukan pencarian ID dengan role user Customer pada endpoint Admin, response yang dikirim akan menjadi *Not Found* karena resource Customer tidak ada di resource Admin.\n{.quote-warning}",
                    "id": "nhPZ2R"
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
                    "id": "dy09W0"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"admin_name\": \"Galuh Waluyo\",\n    \"birthday\": \"2009-02-18\",\n    \"phone_number\": \"6285772316783\",\n    \"email\": \"eratozalan@gmail.com\",\n    \"address\": \"Jln. M.T. Haryono No. 549, Pagar Alam 11777, Kalteng\",\n    \"urban\": \"Pematangsiantar\",\n    \"postal_code\": 12785,\n    \"rw\": \"439\",\n    \"rt\": \"588\",\n    \"user_id\": 1,\n    \"subdistrict_id\": 1001001,\n    \"permission\": {\n      \"permission_name\": \"owner_laron\",\n      \"can_crud_product\": false,\n      \"can_read_all_report\": true,\n      \"can_read_self_report\": true,\n      \"can_review_product\": false,\n      \"can_crud_bumdesa\": true,\n      \"can_crud_producer\": true,\n      \"can_ban_customer\": true,\n      \"can_chat\": false,\n      \"can_crud_promo\": true,\n      \"can_control_order\": false\n    },\n  }\n}\n\n```\n\nVariabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *email* | Email dari pengguna | Admin |\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Admin |\n| *photo* | Link dari foto profil user | Admin |\n| *admin_name* (User tipe Admin) | Nama User | Admin |\n| *birthday* | Tanggal ulang tahun User | Admin |\n| *birthday* | No. telepon user | Admin |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Admin |\n| *address* | Alamat dari pengguna | Admin |\n| *urban* | Kelurahan dari pengguna | Admin |\n| *postal_code* | Kode pos dari pengguna | Admin |\n| *rw* | RW dari pengguna | Admin |\n| *rt* | RT dari pengguna | Admin |\n| *user_id* | ID dari pengguna | Admin |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Admin |\n| *permission* | Fitur apa saja yang bisa di lakukan dari pengguna | Admin |\n{.table-documentation}"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Contoh response mengambil data user lain (Status 200):\n\n```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Herlandro Tri B\"\n  }\n}\n```\n\nContoh response ketika user yang login atau admin mengambil data:\n\n```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Herlandro Tri B\",\n    \"birthday\": \"1999-09-10\",\n    \"gender\": \"M\",\n    \"phone_number\": null,\n    \"account_number\": null,\n    \"user_id\": 14,\n    \"email\": \"eratozassist@gmail.com\",\n    \"address\": \"Ds. Pattimura No. 477, Pariaman 66982, Riau\",\n    \"urban\": \"Palopo\",\n    \"postal_code\": 37265,\n    \"rw\": \"103\",\n    \"rt\": \"926\",\n    \"subdistrict_id\": 1001001,\n  }\n}\n\n```\n\nVariabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Semua Role |\n| *photo* | Link dari foto profil user | Semua Role |\n| *customer_name* (User tipe Customer) | Nama User | Semua Role |\n| *birthday* | Tanggal ulang tahun user | User yang mempunyai data dan Admin |\n| *gender* | Jenis kelamin user | User yang mempunyai data dan Admin |\n| *phone_number* | No. Telepon user | User yang mempunyai data dan Admin |\n| *account_number* | No. Rekening user | User yang mempunyai data dan Admin |\n| *email* | Email dari pengguna | User yang mempunyai data dan Admin |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Semua Role |\n|*user_id* | ID dari pengguna | Semua Role |\n| *address* | Alamat user | User yang mempunyai data dan Admin |\n| *urban* | Kelurahan user | User yang mempunyai data dan Admin |\n| *postal_code* | Kode pos user | User yang mempunyai data dan Admin |\n| *rw* | RW user | User yang mempunyai data dan Admin |\n| *rt* | RT user | User yang mempunyai data dan Admin |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"producer_name\": \"Eko Koko Prasetya\",\n    \"birthday\": \"1971-10-05\",\n    \"phone_number\": \"6287949923985\",\n    \"email\": \"eratozproyek1@gmail.com\",\n    \"address\": \"Kpg. Bagis Utama No. 819, Pariaman 88069, Maluku\",\n    \"urban\": \"Tegal\",\n    \"postal_code\": 75564,\n    \"rw\": \"206\",\n    \"rt\": \"733\",\n    \"user_id\": 15,\n    \"subdistrict_id\": 1001001,\n    \"deleted_at\": null\n  }\n}\n\n```\n\nVariabel respon yang tersedia:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *is_email_verified* | Apakah user telah verifikasi emailnya | Semua Role |\n| *photo* | Link dari foto profil user | Semua Role |\n| *customer_name* (User tipe Customer) | Nama User | Semua Role |\n| *birthday* | Tanggal ulang tahun user | User yang mempunyai data dan Admin |\n| *gender* | Jenis kelamin user | User yang mempunyai data dan Admin |\n| *phone_number* | No. Telepon user | User yang mempunyai data dan Admin |\n| *email* | Email dari pengguna | User yang mempunyai data dan Admin |\n| *created_at* (User tipe Customer) | Tanggal pembuatan akun tersebut | Semua Role |\n|*user_id* | ID dari pengguna | Semua Role |\n| *address* | Alamat user | User yang mempunyai data dan Admin |\n| *urban* | Kelurahan user | User yang mempunyai data dan Admin |\n| *postal_code* | Kode pos user | User yang mempunyai data dan Admin |\n| *rw* | RW user | User yang mempunyai data dan Admin |\n| *rt* | RT user | User yang mempunyai data dan Admin |\n| *subdistrict_id* | Kode kecamatan server Laron dari pengguna | Semua Role |\n{.table-documentation}"
                        }
                    ],
                    "id": "guZUUd"
                },
                {
                    "type": "docs",
                    "value": "### Mengubah Data User\n<hr\/>",
                    "id": "qUte4i"
                },
                {
                    "type": "methodTab",
                    "value": [
                        {
                            "title": "Admin",
                            "method": "PUT\/PATCH",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/admins\/ [ ID Admin ]",
                            "authorization": "Admin"
                        },
                        {
                            "title": "Pelanggan",
                            "method": "PUT\/PATCH",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ]",
                            "authorization": "Customer"
                        },
                        {
                            "title": "Produsen",
                            "method": "PUT\/PATCH",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/producers\/ [ ID Produsen ]",
                            "authorization": "Produsen dan Admin"
                        }
                    ],
                    "id": "ZMVLt8"
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
                            "value": "Data yang diperlukan\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *name* | string | Nama dari pengguna | Diperlukan, Maksimal 70 karakter |\n| *phone_number* | string | Nomor telepon pengguna | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *birthday* | string | Tanggal lahir dari pengguna | Diperlukan, Maksimal hingga hari ini |\n| *gender* | string | Gender dari pengguna | Diperlukan, Menerima nilai \"M\" dan \"F\" (M = Laki-laki, F = Perempuan) |\n| *account_number* | string | Rekening pengguna | Diperlukan, 8-12 Digit |\n| *address* | string | Alamat pengguna | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari pengguna | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari pengguna | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari pengguna | Diperlukan, Sesuai kode kecamatan pada server |\n{.table-documentation}\n\nContoh Response ketika ada data yang berubah (Status 200):\n\n```json\n{\n  \"data\": {\n    \"is_email_verified\": true,\n    \"photo\": null,\n    \"customer_name\": \"Herlandro\",\n    \"birthday\": null,\n    \"gender\": \"F\",\n    \"phone_number\": \"628173188221\",\n    \"account_number\": null,\n    \"user_id\": 14,\n    \"email\": \"eratozassist@gmail.com\",\n    \"address\": \"F\",\n    \"urban\": \"F\",\n    \"postal_code\": 93812,\n    \"rw\": \"001\",\n    \"rt\": \"001\",\n    \"subdistrict_id\": 1001002,\n    \"deleted_at\": null\n  }\n}\n```\nResponse akan kosong ketika tidak ada data yang berubah (Status 204):\n\nException:\n\n- Status 422\n\n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid."
                        },
                        {
                            "title": "Produsen",
                            "value": "```json\n\n\n```"
                        }
                    ],
                    "id": "VHo7gc"
                },
                {
                    "type": "docs",
                    "value": "### Menghapus Data User\n<hr\/>",
                    "id": "z3sriB"
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
                            "method": "DELETE",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ]",
                            "authorization": "Semua Admin"
                        },
                        {
                            "title": "Produsen",
                            "method": "DELETE",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/producers\/ [ ID Produsen ]",
                            "authorization": "Semua Admin"
                        }
                    ],
                    "id": "8OJJ9U"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Response :\n\nBelum ada fungsi ini di Admin."
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Response:\n\n- Response balasan kosong ketika penghapusan berhasil (Status 204)\n\nException:\n\n- Status 422\n\n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid."
                        },
                        {
                            "title": "Produsen",
                            "value": "Response:\n\n- Response balasan kosong ketika penghapusan berhasil (Status 204)\n\nException:\n\n- Status 404\n\n  User tidak ditemukan."
                        }
                    ],
                    "id": "HasnMd"
                },
                {
                    "type": "docs",
                    "value": "### Ban dan Unban Data User\n<hr\/>",
                    "id": "BR6rQW"
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
                            "method": "PUT",
                            "queryPlugin": "-",
                            "url": "https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ] \/ [ ban\/unban ]",
                            "authorization": "Semua Admin"
                        },
                        {
                            "title": "Produsen",
                            "method": "PUT",
                            "queryPlugin": "-",
                            "url": "https:\/laron-server-side.test\/api\/v1\/producers\/ [ ID Produsen ] \/ [ ban\/unban ]",
                            "authorization": "Semua Admin"
                        }
                    ],
                    "id": "9DtFfF"
                },
                {
                    "type": "docs",
                    "value": "Body dibutuhkan jika Ban:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *date* | string | Tanggal durasi habisnya ban | Diperlukan, Tanggal, Format Y-m-d |\n{.table-documentation}\n\n**Response kosong ketika ban\/unban berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan user yang dicari.",
                    "id": "MAKekz"
                }
            ],
            "resource-location": [
                {
                    "type": "docs",
                    "value": "# Location (Lokasi)\n<hr\/>\n\nLokasi adalah salah satu resource penyimpanan alamat **Customer** yang bisa digunakan untuk mengganti alamat pengiriman customer dengan instan. Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [ Mendapatkan Spesifik Lokasi melalui ID Pelanggan ]( #mendapatkan-spesifik-lokasi-melalui-id-pelanggan )\n- [ Mendapatkan Koleksi Lokasi melalui ID Pelanggan ]( #mendapatkan-koleksi-lokasi-melalui-id-pelanggan )\n- [ Membuat Lokasi melalui ID Pelanggan ]( #membuat-lokasi-melalui-id-pelanggan )\n- [ Mengubah Lokasi melalui ID Pelanggan ]( #mengubah-lokasi-melalui-id-pelanggan )\n- [ Menghapus Lokasi melalui ID Pelanggan ]( #menghapus-lokasi-melalui-id-pelanggan )\n\n> Koleksi lokasi dan semua fitur pada resource lokasi hanya bisa dilakukan untuk User ID dengan Role **Customer**. {.quote-warning}\n\n### Mendapatkan Spesifik Lokasi melalui ID Pelanggan\n<hr\/>\n\nJika anda memerlukan informasi alamat **Customer** yang sedang dicari atau ingin **Customer** melihat penyimpanan alamatnya, Ini adalah fungsi yang cocok untuk hal itu. Koleksi lokasi yang akan dikembalikan adalah data yang sesuai penyimpanan dari User ID yang ada di server. Setiap **Customer** mempunyai alamat yang bernama **\"Home\"** yang berarti itu adalah alamat asli dari **Customer**.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : User yang mempunyai data dan Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ] \/locations\/ [ ID Lokasi ]",
                    "id": "FAyUJ7"
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
                            "authorization": "Semua Role Admin dan Pelanggan yang mempunyai data tersebut."
                        },
                        {
                            "title": "Produsen",
                            "method": "-",
                            "queryPlugin": "-",
                            "url": "-",
                            "authorization": "-"
                        }
                    ],
                    "id": "jXumsB"
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
                            "value": "Contoh Response (Status 200):\n\n```json\n\n{\n  \"data\": \n    {\n      \"location_id\": 12,\n      \"location_name\": \"Supri's House\",\n      \"address\": \"Kpg. Sukajadi No. 891, Tebing Tinggi 26210, Riau\",\n      \"urban\": \"Administrasi Jakarta Utara\",\n      \"postal_code\": 91160,\n      \"rw\": \"074\",\n      \"rt\": \"940\",\n      \"subdistrict_id\": 1001001\n    }\n}\n\n```\n\nSpesifikasi Response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *location_id* | ID Lokasi dari koleksi lokasi yang dipunyai pelanggan | User yang mempunyai data dan Admin |\n| *location_name* | Nama\/Label dari lokasi yang dipunyai pelanggan | User yang mempunyai data dan Admin |\n| *address* | Alamat lokasi tersebut | User yang mempunyai data dan Admin |\n| *urban* | Kelurahan lokasi tersebut | User yang mempunyai data dan Admin |\n| *postal_code* | Kode pos lokasi tersebut | User yang mempunyai data dan Admin |\n| *rw* | No. RW lokasi tersebut | User yang mempunyai data dan Admin |\n| *rt* | No. RT lokasi tersebut | User yang mempunyai data dan Admin |\n| *subdistrict_id* | Kode kecamatan lokasi tersebut | User yang mempunyai data dan Admin |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "Tidak ada"
                        }
                    ],
                    "id": "WmCZdy"
                },
                {
                    "type": "docs",
                    "value": "### Mendapatkan Koleksi Lokasi melalui ID Pelanggan\n<hr\/>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Only\/Except, Sorting.\n- **Authorization** : User yang mempunyai data dan Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ] \/locations",
                    "id": "9ANZ0X"
                },
                {
                    "type": "docs",
                    "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": [\n    {\n      \"location_id\": 12,\n      \"location_name\": \"Supri's House\",\n      \"address\": \"Kpg. Sukajadi No. 891, Tebing Tinggi 26210, Riau\",\n      \"urban\": \"Administrasi Jakarta Utara\",\n      \"postal_code\": 91160,\n      \"rw\": \"074\",\n      \"rt\": \"940\",\n      \"subdistrict_id\": 1001001\n    } ...\n  ],\n  \"meta\": {\n    \"total_item\": 3,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": null,\n    \"prev_url\": null\n  }\n}\n\n```",
                    "id": "WRZ78n"
                },
                {
                    "type": "docs",
                    "value": "### Membuat Lokasi melalui ID Pelanggan\n<hr\/>\n\nSpesifikasi Request:\n- **Method** : POST\n- **Query Plugin** : -\n- **Authorization** : User yang mempunyai data.\n- **URL** : https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ] \/locations\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *location_name* | string | Nama dari Lokasi | Diperlukan, Unik, Maksimal 254 karakter |\n| *address* | string | Alamat lokasi | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari lokasi | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari lokasi | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari lokasi | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari lokasi | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari lokasi | Diperlukan, Sesuai kode kecamatan pada server |\n{.table-documentation}\n\n**Contoh Response (Status 201):**\n\nResponse JSON:\n\n```json\n\n{\n  \"data\": \n    {\n      \"location_id\": 16,\n      \"location_name\": \"Rumah Omar\",\n      \"address\": \"Kpg. Sukajadi No. 891, Tebing Tinggi 26210, Riau\",\n      \"urban\": \"Manahan\",\n      \"postal_code\": 91160,\n      \"rw\": \"069\",\n      \"rt\": \"029\",\n      \"subdistrict_id\": 1001001\n    }\n}\n\n```\n\nContoh Response Header:\n\n- Location : https:\/\/server.laron.co.id\/api\/v1\/customers\/14\/locations\/16\n\n**Exception:**\n- Status 400\n  \n  Tidak ditemukan lokasi atau pelanggan dengan ID yang di inputkan. \n\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "iBAcqx"
                },
                {
                    "type": "docs",
                    "value": "### Mengubah Lokasi melalui ID Pelanggan\n<hr\/>\n\nSpesifikasi Request:\n- **Method** : PUT\/PATCH\n- **Query Plugin** : -\n- **Authorization** : User yang mempunyai data.\n- **URL** : https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ] \/locations \/ [ ID Lokasi ]\n\n**Contoh Response ketika ada data yang berubah (Status 200) :**\n\nResponse JSON:\n\n```json\n\n{\n  \"data\": \n    {\n      \"location_id\": 16,\n      \"location_name\": \"Rumah Omar\",\n      \"address\": \"Kpg. Sukajadi No. 891, Tebing Tinggi 26210, Riau\",\n      \"urban\": \"Manahan\",\n      \"postal_code\": 91160,\n      \"rw\": \"069\",\n      \"rt\": \"029\",\n      \"subdistrict_id\": 1001001\n    }\n}\n\n```\n\n**Ketika data tidak ada yang berubah maka response kosong (Status 204).**\n\n**Exception:**\n\n- Status 400\n  \n  Tidak ditemukan lokasi atau pelanggan dengan ID yang di inputkan. \n\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "0MYVKA"
                },
                {
                    "type": "docs",
                    "value": "### Menghapus Lokasi melalui ID Pelanggan\n<hr>\n\nSpesifikasi Request:\n- **Method** : DELETE\n- **Query Plugin** : -\n- **Authorization** : User yang mempunyai data.\n- **URL** : https:\/\/server.laron.id\/api\/v1\/customers\/ [ ID Pelanggan ] \/locations \/ [ ID Lokasi ]\n\n**Response kosong ketika penghapusan berhasil (Status 204)**\n\n**Exception:**\n\n- Status 400\n  \n  Tidak ditemukan lokasi atau pelanggan dengan ID yang di inputkan. \n\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "BfoO2T"
                }
            ],
            "resource-bumdesa": [
                {
                    "type": "docs",
                    "value": "# Bumdesa\n<hr\/>\n\nBumdesa adalah salah satu resource yang akan mengelola produk, mengelola produsen, customer service, dan masih banyak lagi. Ini adalah titik tengah antara produsen dan customer. Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [Mendapatkan Bumdesa secara Spesifik ID](#mendapatkan-bumdesa-secara-spesifik-id)\n- [Mendapatkan Koleksi Bumdesa](#mendapatkan-koleksi-bumdesa)\n- [Membuat Bumdesa](#membuat-bumdesa)\n- [Mengubah Data Bumdesa](#mengubah-data-bumdesa)\n- [Ban Bumdesa](#ban-bumdesa)\n- [Unban Bumdesa](#unban-bumdesa)\n\n### Mendapatkan Bumdesa secara Spesifik ID\n\nJika anda ingin menampilkan salah satu **bumdesa** secara spesifik dengan ID **bumdesa**, Ini adalah fungsi yang cocok untuk hal itu.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ ID Bumdesa ]",
                    "id": "FyxNvC"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh response (Status 200):\n\n```json\n{\n   \"data\": [\n    {\n      \"account_number\": 121931024819, \/\/Akan muncul ketika di akses Role Owner Laron & Owner Bumdesa.\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"6281234567890\",\n      \"description\": \"Ini deskripsi\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"subdistrict_id\": 13025013,\n      \"banned_at\": null,\n      \"created_at\": null\n    },\n}\n```\n\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *account_number* | Rekening dari Bumdesa | Pemilik Bumdesa dan Pemilik Aplikasi |\n| *bumdesa_id* | ID dari Bumdesa tersebut | Semua Role |\n| *bumdesa_name* | Nama dari Bumdesa | Semua Role |\n| *description* | Deskripsi dari Bumdesa | Semua Role |\n| *phone_number* | Nomor telepon Bumdesa | Semua Role |\n| *address* | Alamat Bumdesa | Semua Role |\n| *urban* | Kelurahan dari Bumdesa | Semua Role |\n| *postal_code* | Kode pos dari Bumdesa | Semua Role |\n| *rw* | RW dari pengguna | Semua Role |\n| *rt* | RT dari pengguna | Semua Role |\n| *created_at* | Tanggal bergabung Bumdesa | Semua Role |\n| *subdistrict_id* | Kode kecamatan server Laron dari Bumdesa | Semua Role |\n{.table-documentation}"
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
                    "id": "1gtdim"
                },
                {
                    "type": "docs",
                    "value": "### Mendapatkan Koleksi Bumdesa\n<hr\/>\n\nJika anda ingin menampilkan seluruh **Bumdesa** atau ingin memfilter beberapa **Bumdesa**, Ini adalah fungsi yang cocok untuk hal itu.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Only\/Except, Sorting.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa",
                    "id": "Hrjznu"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh response (200):\n\n```json\n{\n  \"data\": [\n    {\n      \"account_number\": 121931024819, \/\/Akan muncul ketika di akses Role Owner Laron & Owner Bumdesa.\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"6281234567890\",\n      \"description\": \"Ini deskripsi\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"subdistrict_id\": 13025013,\n      \"banned_at\": null,\n      \"created_at\": null\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 4,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/laron-server-side.test\\\/api\\\/v1\\\/bumdesa?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Contoh response (200):\n\n```json\n{\n  \"data\": [\n    {\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"81234567890\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"created_at\": null,\n      \"subdistrict_id\": 13025013\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 4,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/laron-server-side.test\\\/api\\\/v1\\\/bumdesa?page=2\",\n    \"prev_url\": null\n  }\n}\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "Contoh response (200):\n\n```json\n{\n  \"data\": [\n    {\n      \"bumdesa_id\": 1,\n      \"bumdesa_name\": \"Bumdesa Sambirejo\",\n      \"phone_number\": \"81234567890\",\n      \"address\": \"test\",\n      \"urban\": \"Sambirejo\",\n      \"postal_code\": 0,\n      \"rw\": \"000\",\n      \"rt\": \"000\",\n      \"created_at\": null,\n      \"subdistrict_id\": 13025013\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 4,\n    \"per_page\": 10,\n    \"last_page\": 1,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/laron-server-side.test\\\/api\\\/v1\\\/bumdesa?page=2\",\n    \"prev_url\": null\n  }\n}\n```"
                        }
                    ],
                    "id": "jwk0HT"
                },
                {
                    "type": "docs",
                    "value": "### Membuat Bumdesa\n<hr\/>\n\nJika terdapat sebuah Bumdesa yang ingin mendaftar ke aplikasi, fungsi ini sangatlah tepat untuk melakukan itu. Ini hanya bisa dilakukan oleh pemilik aplikasi Laron. Jadi pastikan untuk proposal atau perijinan terlebih dahulu ke pemilik aplikasi.",
                    "id": "ruNXPk"
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
                    "id": "OHhfuX"
                },
                {
                    "type": "docs",
                    "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *account_number* | string | Rekening dari Bumdesa | Diperlukan, 8-12 Digit, Input numerik |\n| *bumdesa_name* | string | Nama dari Bumdesa | Diperlukan, Unik, Maksimal 254 karakter |\n| *description* | string | Deskripsi dari Bumdesa | Diperlukan, Maksimal 500 karakter |\n| *phone_number* | string | Nomor telepon Bumdesa | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *address* | string | Alamat Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari Bumdesa | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari Bumdesa | Diperlukan, Sesuai kode kecamatan pada server |\n{.table-documentation}\n\n**Contoh Response (Status 201):**\n\nResponse JSON:\n\n```json\n{\n\t\"bumdesa_name\":\"Bumdesa Nologatenss\",\n        \"description\":\"Ini Deskripsi\",\n\t\"phone_number\":\"08173188221\",\n\t\"account_number\":\"123456789\",\n\t\"address\":\"3219 Huntz Lane\",\n\t\"urban\":\"Ngaglik\",\n\t\"postal_code\":\"98313\",\n\t\"rw\":\"002\",\n\t\"rt\":\"010\",\n\t\"subdistrict_id\":1001001\n}\n```\n\nResponse Header:\n\n- Location : https:\/\/server.laron.co.id\/api\/v1\/bumdesa\/8\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "Y0QDB4"
                },
                {
                    "type": "docs",
                    "value": "### Mengubah Data Bumdesa\n<hr\/>\n\nJika terdapat sebuah Bumdesa yang ingin diubah data profil atau data lainnya ke aplikasi, fungsi ini sangatlah tepat untuk melakukan itu. Ini hanya bisa dilakukan oleh pemilik aplikasi Laron dan pemilik Bumdesa.",
                    "id": "6wSk2r"
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
                    "id": "N5rzq6"
                },
                {
                    "type": "docs",
                    "value": "Body:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *account_number* | string | Rekening dari Bumdesa | Diperlukan, 8-12 Digit, Input numerik |\n| *description* | string | Deskripsi dari Bumdesa | Diperlukan, Maksimal 500 karakter |\n| *phone_number* | string | Nomor telepon Bumdesa | Diperlukan, +62 perlu 11-15 Digit, 08 perlu 10-15 Digit, 8 perlu 9-15 digit |\n| *address* | string | Alamat Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *urban* | string | Kelurahan dari Bumdesa | Diperlukan, Maksimal 254 karakter |\n| *postal_code* | integer | Kode pos dari Bumdesa | Diperlukan, 5 Digit |\n| *rw* | integer | RW dari pengguna | Diperlukan, 1-3 Digit |\n| *rt* | integer | RT dari pengguna | Diperlukan, 1-3 Digit |\n| *subdistrict_id* | integer | Kode kecamatan server Laron dari Bumdesa | Diperlukan, Sesuai kode kecamatan pada server |\n{.table-documentation}\n\n**Contoh Response ketika ada data yang berubah (Status 200) :**\n\nResponse JSON:\n\n```json\n{\n\t\"bumdesa_name\":\"Bumdesa Nologatenss\",\n        \"description\":\"Samfainsfsianfiainfianisfn\",\n\t\"phone_number\":\"08173188221\",\n\t\"account_number\":\"123456789\",\n\t\"address\":\"3219 Huntz Lane\",\n\t\"urban\":\"Ngaglik\",\n\t\"postal_code\":\"98313\",\n\t\"rw\":\"002\",\n\t\"rt\":\"010\",\n\t\"subdistrict_id\":1001001\n}\n```\n\n**Ketika data tidak ada yang berubah maka response kosong (Status 204).**\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.",
                    "id": "Rf9Ci6"
                },
                {
                    "type": "docs",
                    "value": "### Menghapus Bumdesa\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : DELETE\n- **Query Plugin** : -\n- **Authorization** : Admin Aplikasi\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ ID Bumdesa ]\n\n**Response kosong ketika penghapusan berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan bumdesa yang dicari.",
                    "id": "Iu9Qzi"
                },
                {
                    "type": "docs",
                    "value": "### Ban Bumdesa\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : PUT\n- **Query Plugin** : -\n- **Authorization** : Admin Aplikasi\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ ID Bumdesa ]\/ban\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *date* | string | Tanggal durasi habisnya ban | Diperlukan, Tanggal, Format Y-m-d |\n{.table-documentation}\n\n**Response kosong ketika ban berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan bumdesa yang dicari.\n\n### Unban Bumdesa\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : PUT\n- **Query Plugin** : -\n- **Authorization** : Admin Aplikasi\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ ID Bumdesa ]\/unban\n\n**Response kosong ketika unban berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan bumdesa yang dicari.",
                    "id": "x2nAt6"
                }
            ],
            "resource-brand": [
                {
                    "type": "docs",
                    "value": "# Brand\n<hr\/>\n\nBrand adalah salah satu resource yang mempunyai informasi badan usaha dari produsen. Fungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [Mengambil Data Brand secara Spesifik melalui ID Brand](#mengambil-data-brand-secara-spesifik-melalui-id-brand)\n- [Mengambil Koleksi Data Brand](#mengambil-koleksi-data-brand)\n- [Menghapus Brand](#menghapus-brand)\n- [Ban Brand](#ban-brand)\n- [Unban Brand](#unban-brand)\n\n### Mengambil Data Brand secara Spesifik melalui ID Brand\n<hr\/>\n\nJika anda ingin mencari secara spesifik Brand yang anda inginkan di seluruh Bumdesa maka anda dapat menggunakan fungsi\/endpoint ini.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ ID Brand ]",
                    "id": "5e7S75"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": {\n    \"brand_id\": 1,\n    \"brand_name\": \"CV Rahayu\",\n    \"photo\": \"brandtest.jpg\",\n    \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n    \"bumdesa_id\": 1,\n    \"producer_id\": 1,\n    \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n  }\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *brand_id* | ID dari Brand tersebut | Semua Role |\n| *brand_name* | Nama dari Bumdesa | Semua Role |\n| *photo* | Foto Icon\/Logo dari Brand | Semua Role |\n| *description* | Deskripsi Brand | Semua Role |\n| *bumdesa_id* | ID Bumdesa untuk Brand yang di ikuti | Semua Role |\n| *producer_id* | Produsen yang memiliki Brand tersebut | Semua Admin |\n| *created_at* | Tanggal pembuatan Brand tersebut | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": {\n    \"brand_id\": 1,\n    \"brand_name\": \"CV Rahayu\",\n    \"photo\": \"brandtest.jpg\",\n    \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n    \"bumdesa_id\": 1,\n    \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n  }\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *brand_id* | ID dari Brand tersebut | Semua Role |\n| *brand_name* | Nama dari Bumdesa | Semua Role |\n| *photo* | Foto Icon\/Logo dari Brand | Semua Role |\n| *description* | Deskripsi Brand | Semua Role |\n| *bumdesa_id* | ID Bumdesa untuk Brand yang di ikuti | Semua Role |\n| *created_at* | Tanggal pembuatan Brand tersebut | Semua Role |\n{.table-documentation}"
                        },
                        {
                            "title": "Produsen",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": {\n    \"brand_id\": 1,\n    \"brand_name\": \"CV Rahayu\",\n    \"photo\": \"brandtest.jpg\",\n    \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n    \"bumdesa_id\": 1,\n    \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n  }\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *brand_id* | ID dari Brand tersebut | Semua Role |\n| *brand_name* | Nama dari Bumdesa | Semua Role |\n| *photo* | Foto Icon\/Logo dari Brand | Semua Role |\n| *description* | Deskripsi Brand | Semua Role |\n| *bumdesa_id* | ID Bumdesa untuk Brand yang di ikuti | Semua Role |\n| *created_at* | Tanggal pembuatan Brand tersebut | Semua Role |\n{.table-documentation}"
                        }
                    ],
                    "id": "sgtVw4"
                },
                {
                    "type": "docs",
                    "value": "### Mengambil Koleksi Data Brand\n<hr\/>\n\nJika anda ingin menampilkan koleksi Brand, anda bisa menggunakan fungsi ini.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands",
                    "id": "SW7smF"
                },
                {
                    "type": "responseTab",
                    "value": [
                        {
                            "title": "Admin",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": [\n    {\n      \"brand_id\": 1,\n      \"brand_name\": \"CV Rahayu\",\n      \"photo\": \"brandtest.jpg\",\n      \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n      \"bumdesa_id\": 1,\n      \"producer_id\": 1,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 24,\n    \"per_page\": 10,\n    \"last_page\": 3,\n    \"current_page\": 1,\n    \"next_url\": \"https:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/brands?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Pelanggan",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": [\n    {\n      \"brand_id\": 1,\n      \"brand_name\": \"CV Rahayu\",\n      \"photo\": \"brandtest.jpg\",\n      \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n      \"bumdesa_id\": 1,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 24,\n    \"per_page\": 10,\n    \"last_page\": 3,\n    \"current_page\": 1,\n    \"next_url\": \"https:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/brands?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        },
                        {
                            "title": "Produsen",
                            "value": "Contoh Response (Status 200):\n\n```json\n{\n  \"data\": [\n    {\n      \"brand_id\": 1,\n      \"brand_name\": \"CV Rahayu\",\n      \"photo\": \"brandtest.jpg\",\n      \"description\": \"Modi enim unde quidem non et eius. Dolorem qui vitae magnam omnis autem eaque dicta. At pariatur velit rerum. Ipsam est aliquid qui fugit accusantium iusto. Minus quis inventore inventore veritatis voluptatem. Minima voluptas est laboriosam qui omnis quam amet. Debitis dolores doloremque minus ea hic. Ut aut eius eius veniam ex eum non.\",\n      \"bumdesa_id\": 1,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\"\n    },\n    ...\n  ],\n  \"meta\": {\n    \"total_item\": 24,\n    \"per_page\": 10,\n    \"last_page\": 3,\n    \"current_page\": 1,\n    \"next_url\": \"https:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/brands?page=2\",\n    \"prev_url\": null\n  }\n}\n\n```"
                        }
                    ],
                    "id": "UDQKx3"
                },
                {
                    "type": "docs",
                    "value": "### Menghapus Brand\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : DELETE\n- **Query Plugin** : -\n- **Authorization** : Semua Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ ID Brand ]\n\n**Response kosong ketika penghapusan berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan Brand yang dicari.",
                    "id": "HR4odC"
                },
                {
                    "type": "docs",
                    "value": "### Ban Brand\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : PUT\n- **Query Plugin** : -\n- **Authorization** : Semua Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ ID Brand ]\/ban\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *date* | string | Tanggal durasi habisnya ban | Diperlukan, Tanggal, Format Y-m-d |\n{.table-documentation}\n\n**Response kosong ketika ban berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan Brand yang dicari.\n\n### Unban Brand\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : PUT\n- **Query Plugin** : -\n- **Authorization** : Semua Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ ID Brand ]\/unban\n\n**Response kosong ketika unban berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan Brand yang dicari.\n\n> Ban\/Unban Brand akan berpengaruh ke Produsen. Ketika anda ban Brand maka itu akan berlaku ke produsen yang memiliki brand tersebut.\n{.quote-warning}",
                    "id": "ffyFNd"
                }
            ],
            "resource-product-1": [
                {
                    "type": "docs",
                    "value": "# Product\n<hr\/>\nProduct adalah resource yang mengelola produk-produk dari beberapa produsen yang diurus oleh Bumdesa. Produk perlu di review untuk masuk ke aplikasi tersebut. Terdapat tiga tipe produk review:\n\n- Diterima (approved)\n- Ditolak (not_approved)\n- Sedang di review (on_review)\n\nFungsi-fungsi yang dapat dilakukan di resource ini adalah:\n\n- [Mendapatkan Produk secara Spesifik ID](#mendapatkan-produk-secara-spesifik-id)\n- [Mendapatkan Koleksi Produk](#mendapatkan-koleksi-produk)\n- [Mendapatkan Koleksi Produk secara Spesifik dengan ID Brand](#mendapatkan-koleksi-produk-secara-spesifik-dengan-id-brand)\n- [Mendapatkan Koleksi Produk secara Spesifik dengan ID Bumdesa](#mendapatkan-koleksi-produk-secara-spesifik-dengan-id-bumdesa)\n- [Membuat Produk](#membuat-produk)\n- [Mengubah Data Produk](#mengubah-data-produk)\n- [Review Data Produk](#review-data-produk)\n- [Menghapus Data Produk](#menghapus-data-produk)\n\n### Mendapatkan Produk secara Spesifik ID\n<hr\/>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\/ [ ID Products ]\n\nContoh Response:\n\n```json\n{\n  \"product_name\": \"Baju Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"Long\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [\n        {\n          \"min_value\": 4,\n          \"max_value\": null,\n          \"value\": 3,\n          \"expired_at\": \"2021-05-26\",\n          \"promo_type\": \"buy_one_get_one\"\n        }\n  ],\n  \"tags\": [\n     \"baju\"\n  ]\n}\n```\nSpesifikasi nilai response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *product_id* | ID dari produk tersebut | Semua Role |\n| *product_name* | Nama dari produk | Semua Role |\n| *min_purchase* | Minimal pembelian dalam satuan unit | Semua Role |\n| *price* | Harga produk | Semua Role |\n| *stock* | Stok dari produk tersebut | Semua Role |\n| *description* | Deskripsi produk | Semua Role |\n| *brand_id* | Brand yang mempunyai produk | Semua Role |\n| *is_preorder* | Informasi preorder dari produk | Semua Role |\n| *review_status* | Status review dari produk | Semua Role |\n| *promo* | Promo yang ada pada produk | Semua Role |\n| *created_at* | Tanggal pembuatan produk tersebut | Semua Role |\n| *updated_at* | Tanggal perubahan dari produk tersebut | Semua Role |\n{.table-documentation}\n\n### Mendapatkan Koleksi Produk\n<hr\/>\n\nProduk dapat di klasifikasi dengan **QP - Custom Conditional** yang tersedia di resource ini.\n\nCustom Conditional yang tersedia:\n|Nama|Nilai yang Dibolehkan|Deskripsi|\n|--|--|--|\n|category| culinary, fashion, art, service | Klasifikasi menurut kategori produk.<br>- Jika anda ingin hanya kuliner terlihat saja pada response menggunakan \"culinary\". -<br>- Untuk kerajinan menggunakan \"art\".<br>- Untuk jasa menggunakan \"service\". |\n|review_status|approved,  not_approved, on_review| Klasifikasi menurut status review produk.<br>- Jika ingin memperlihatkan produk yang telah diterima menggunakan nilai \"approved\". <br>- Untuk produk yang ditolak menggunakan \"not_approved\".<br>- Untuk produk yang ingin di review memakai \"on_review\" |\n{.table-documentation}\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Sorting, Only\/Except, Custom Conditional.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\n\nContoh Response:\n\n```json\n{\n  \"data\": [\n    {\n      \"product_id\": 34,\n      \"product_name\": \"Snack Vero Porro Voluptas.\",\n      \"min_purchase\": \"4.00\",\n      \"price\": 39000,\n      \"stock\": 52,\n      \"perishable\": true,\n      \"bookable\": false,\n      \"short_description\": \"Facilis laborum et blanditiis et. Saepe qui eos et incidunt aperiam unde id. Et sapiente saepe nesciunt ut voluptates libero rerum.\",\n      \"long_description\": \"Quia est voluptatem quos voluptatem consequatur sapiente et. Officia non qui dolorem placeat vel. Ea quisquam minima rem minima in.\",\n      \"brand_id\": 5,\n      \"created_at\": \"2021-03-08T07:20:58.000000Z\",\n      \"updated_at\": \"2021-03-08T07:20:58.000000Z\",\n      \"is_preorder\": false,\n      \"review_status\": \"on_review\",\n      \"product_category\": \"culinary\",\n      \"unit\": \"paket\",\n      \"promo\": [\n        {\n          \"min_value\": 55028,\n          \"max_value\": 130018,\n          \"value\": 20,\n          \"expired_at\": null,\n          \"promo_type\": \"discount\"\n        }\n      ],\n      \"tags\": [\n        \"laborum\"\n      ]\n    }, ...\n  ],\n  \"meta\": {\n    \"total_item\": 165,\n    \"per_page\": 10,\n    \"last_page\": 17,\n    \"current_page\": 1,\n    \"next_url\": \"http:\\\/\\\/server.laron.id\\\/api\\\/v1\\\/products?custom%21category=culinary&page=2\",\n    \"prev_url\": null\n  }\n```\n\n### Mendapatkan Koleksi Produk secara Spesifik dengan ID Brand\n<hr>\nFungsi ini dipakai ketika anda ingin memfilter produk menurut ID Brand yang di inginkan.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Sorting, Only\/Except, Custom Conditional.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/brands\/ [ID Brand] \/products\n\n### Mendapatkan Koleksi Produk secara Spesifik dengan ID Bumdesa\n<hr>\nFungsi ini dipakai ketika anda ingin memfilter produk menurut ID Bumdesa yang di inginkan.\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Conditional, Sorting, Only\/Except, Custom Conditional.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/bumdesa\/ [ID Bumdesa] \/products",
                    "id": "yAtUzy"
                },
                {
                    "type": "docs",
                    "value": "### Membuat Produk\n\nAnda dapat membuat produk melalui API dari **Produsen\/Brand** ataupun dari **Admin**. Perbedaan dari akses role tersebut adalah, jika anda membuat produk dengan role **Admin** maka, produk tidak memerlukan review lagi. Sebaliknya, ketika anda memasukkan produk melalui role **Produsen** maka perlu adanya review terlebih dahulu ke **Admin**. Terdapat satuan unit juga pada membuat produk. Satuan unit di klasifikasikan secara kategori produk, antara lain:\n\n|Kategori|Nilai yang dibolehkan|\n|--|--|\n|culinary (Kuliner)|kilogram, gram, ons, ikat, biji, paket, porsi, bungkus|\n|fashion (Fashion)|set, paket, buah|\n|art (Kerajinan)|set, paket, biji|\n|service (Jasa)|hari, jam, tiket, malam, tiket|\n{.table-documentation}\n\nTerdapat juga promo yang tersedia di produk yaitu:\n- discount (Diskon)\n\n  Promo bersifat potongan persentase harga item yang dibeli.\n- buy_one_get_one (Beli satu gratis satu)\n  \n  Promo bersifat mendapatkan gratis item baru ketika kondisi dari promo tersebut tercapai.\n- free_shipping (Gratis Ongkir)\n  \n  Promo bersifat mendapatkan gratis pengiriman barang ketika kondisi dari promo tersebut tercapai.\n\nSpesifikasi Request:\n- **Method** : POST\n- **Query Plugin** : -\n- **Authorization** : Semua Admin atau Produsen\/Brand\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *product_name* | string | Nama dari produk tersebut | Diperlukan, Maksimal 254 karakter |\n| *min_purchase* | numeric | Minimal pembelian menurut satuan unit produk | Diperlukan, Maksimal 1000000 |\n| *price* | integer | Harga dari produk | Diperlukan, Minimal 1 |\n| *stock* | integer | Stok pada produk | Diperlukan |\n| *description* | string | Deskripsi dari produk | Diperlukan, Teks, Minimal 1 karakter, Maksimal 700 karakter |\n| *brand_id* | integer | ID dari Brand pemilik produk | Diperlukan jika *producer_id* tidak di isi |\n| *producer_id* | integer | ID dari Brand pemilik produk | Diperlukan jika *brand_id* tidak di isi |\n| *unit* | string | Satuan unit dari produk | Diperlukan, Sesuai kategori satuan unit yang telah dijelaskan |\n| *product_category* | string | Kategori produk | Diperlukan, Hanya menerima kategori yang telah dijelaskan|\n| *is_preorder* | boolean | Status jika produk bersifat pre-order | Diperlukan |\n| *perishable* | boolean | Status produk dapat mudah kadaluarsa | Diperlukan jika kategori kuliner dipilih |\n| *bookable* | boolean | Status produk dapat di booking | Diperlukan jika kategori jasa dipilih |\n| *tags* | array\/string | Sub kategori produk | Opsional, Jika string maka bentuknya \"tag1\",\"tag2\" |\n| *promo* | array| Promo yang ada pada produk | Opsional, Maksimal 3 Promo, Format akan di contohkan dibawah. |\n{.table-documentation}\n\n**Contoh Request Body**\n```json\n{\n\t\"product_name\":\"Baju Saltiga\",\n\t\"min_purchase\":\"1\",\n\t\"price\":\"100000\",\n\t\"stock\":\"10\",\n\t\"description\":\"lorem ipsum\",\n\t\"brand_id\":\"1\",\n\t\"unit\":\"buah\",\n\t\"is_preorder\":false,\n\t\"product_category\":\"fashion\",\n\t\"tags\":[\"baju\",\"trend\"],\n\t\"promo\":[\n\t\t{\n\t\t\t\"type\":\"discount\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":500000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"max\":1000000, \/\/Maksimal Harga Diskon yang dibolehkan (Opsional)\n\t\t\t\"value\":50 \/\/Persentase Diskon (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"buy_one_get_one\", \/\/Tipe Promo (Diperlukan) \n\t\t\t\"min\":3, \/\/Minimal pembelian item untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Kuantitas barang yang gratis (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"free_shipping\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":100000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Beri nilai satu jika ingin aktif (Diperlukan)\n\t\t}\n\t]\n}\n```\n\n**Contoh Response (Status 201):**\n\nResponse JSON:\n\n```json\n\n{\n  \"product_name\": \"Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"lorem ipsum\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [],\n  \"tags\": [\n    \"baju\"\n  ]\n}\n\n```\n\nResponse Header:\n\n- Location : https:\/\/server.laron.co.id\/api\/v1\/products\/ [ID Produk Terbaru]\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid.",
                    "id": "33Ol1R"
                },
                {
                    "type": "docs",
                    "value": "### Mengubah Data Produk\n\nSpesifikasi Request:\n- **Method** : PUT\/PATCH\n- **Query Plugin** : -\n- **Authorization** : Semua Admin dan Produsen\/Brand\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\/ [ ID Products ]\n\nBody:\n\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *product_name* | string | Nama dari produk tersebut | Diperlukan, Maksimal 254 karakter |\n| *min_purchase* | numeric | Minimal pembelian menurut satuan unit produk | Diperlukan, Maksimal 1000000 |\n| *price* | integer | Harga dari produk | Diperlukan, Minimal 1 |\n| *stock* | integer | Stok pada produk | Diperlukan |\n| *description* | string | Deskripsi dari produk | Diperlukan, Teks, Minimal 1 karakter, Maksimal 700 karakter |\n| *unit* | string | Satuan unit dari produk | Diperlukan, Sesuai kategori satuan unit yang telah dijelaskan |\n| *product_category* | string | Kategori produk | Diperlukan, Hanya menerima kategori yang telah dijelaskan|\n| *is_preorder* | boolean | Status jika produk bersifat pre-order | Diperlukan |\n| *perishable* | boolean | Status produk dapat mudah kadaluarsa | Diperlukan jika kategori kuliner dipilih |\n| *bookable* | boolean | Status produk dapat di booking | Diperlukan jika kategori jasa dipilih |\n| *tags* | array\/string | Sub kategori produk | Opsional, Jika string maka bentuknya \"tag1\",\"tag2\" |\n| *promo* | array| Promo yang ada pada produk | Opsional, Maksimal 3 Promo, Format akan di contohkan dibawah. |\n{.table-documentation}\n\n**Contoh Request Body**\n```json\n{\n\t\"product_name\":\"Baju Saltiga\",\n\t\"min_purchase\":\"1\",\n\t\"price\":\"100000\",\n\t\"stock\":\"10\",\n\t\"description\":\"lorem ipsum\",\n\t\"unit\":\"buah\",\n\t\"is_preorder\":false,\n\t\"product_category\":\"fashion\",\n\t\"tags\":[\"baju\",\"trend\"],\n\t\"promo\":[\n\t\t{\n\t\t\t\"type\":\"discount\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":500000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"max\":1000000, \/\/Maksimal Harga Diskon yang dibolehkan (Opsional)\n\t\t\t\"value\":50 \/\/Persentase Diskon (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"buy_one_get_one\", \/\/Tipe Promo (Diperlukan) \n\t\t\t\"min\":3, \/\/Minimal pembelian item untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Kuantitas barang yang gratis (Diperlukan)\n\t\t},\n\t\t{\n\t\t\t\"type\":\"free_shipping\", \/\/Tipe Promo (Diperlukan)\n\t\t\t\"min\":100000, \/\/Minimal Harga Pembelian untuk Promo Aktif (Diperlukan)\n\t\t\t\"value\":1 \/\/Beri nilai satu jika ingin aktif (Diperlukan)\n\t\t}\n\t]\n}\n```\n\n**Contoh Response Ketika data ada yang berubah (Status 200):**\n\nResponse JSON:\n\n```json\n\n{\n  \"product_name\": \"Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"lorem ipsum\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [],\n  \"tags\": [\n    \"baju\"\n  ]\n}\n\n```\n\n**Ketika data tidak ada yang berubah maka balasan akan kosong (Status 204)**\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid.",
                    "id": "bfCBS1"
                },
                {
                    "type": "docs",
                    "value": "### Review Data Produk\nFungsi ini sangat berguna untuk Admin yang ingin mereview produk yang masuk dari produsen.\n\nSpesifikasi Request:\n- **Method** : PUT\/PATCH\n- **Query Plugin** : -\n- **Authorization** : Semua Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\/ [ ID Products ] \/review\n\nBody :\n| Nama Variabel | Tipe Data | Deskripsi | Requirement |\n|--|--|--|--|\n| *approved* | boolean | Jika diterima maka nilai true | Diperlukan |\n{.table-documentation}\n\n**Contoh Response:**\n\nResponse JSON:\n\n```json\n\n{\n  \"product_name\": \"Saltiga\",\n  \"min_purchase\": \"1\",\n  \"price\": \"10000\",\n  \"stock\": \"10\",\n  \"description\": \"lorem ipsum\",\n  \"brand_id\": \"1\",\n  \"is_preorder\": false,\n  \"updated_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"created_at\": \"2021-03-13T09:52:22.000000Z\",\n  \"product_id\": 426,\n  \"review_status\": \"approved\",\n  \"product_category\": \"fashion\",\n  \"unit\": \"buah\",\n  \"promo\": [],\n  \"tags\": [\n    \"baju\"\n  ]\n}\n\n```\n\n**Exception:**\n- Status 422 \n  \n  Beberapa belum di isi untuk input body yang diperlukan.\n\n- Status 400\n\n  Beberapa format request ada yang tidak sesuai\/tidak valid.",
                    "id": "WDZfJe"
                },
                {
                    "type": "docs",
                    "value": "### Menghapus Data Produk\n<hr\/>\n\nSpesifikasi Request:\n\n- **Method** : DELETE\n- **Query Plugin** : -\n- **Authorization** : Semua Admin\n- **URL** : https:\/\/server.laron.id\/api\/v1\/products\/ [ ID Produk ]\n\n**Response kosong ketika penghapusan berhasil (Status 204).**\n\n**Exception:**\n- Status 404 \n  \n  Tidak ditemukan Produk yang dicari.",
                    "id": "0Pj6vj"
                }
            ],
            "resource-product-2": [
                {
                    "type": "docs",
                    "value": "mm",
                    "id": "JHUNwf"
                }
            ]
        },
        "query_plugin": {
            "introduction": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Query Plugin\n\nQuery Plugin (QP) adalah sebuah fitur untuk melakukan pengambilan data layaknya sedang men-query sebuah data SQL pada permintaan sisi klien dengan query parameter GET. Sebutan ini hanya ada pada pengunaan proses request di server Laron.",
                    "id": "n7nby1"
                }
            ],
            "conditional": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Conditional\nQP bagian ini berfungsi untuk memfilter data dengan memakai kondisi yang disediakan resource tersebut. Terdapat dua tipe conditional, yaitu\n- Column Conditional\n  \n  Tipe Conditional ini akan memfilter kolum memakai operator yang tersedia pada resource. Pengunaannya akan digunakan operator yang disediakan, dipisah dengan karakter \"!\" dan ditutup dengan nama kolom yang ingin kita kondisikan. Terdapat macam-macam operator, yaitu:\n  \n| Operator | Fungsi |Contoh\n|--|--|--|\n| **e** | Operator ini akan bekerja layaknya operator *equal* yang akan membenarkan jika dua nilai yang sama|e!is_email_verified|\n| **ne** | Operator ini akan bekerja layaknya operator *not equal* yang akan membenarkan jika dua nilai yang tidak sama|ne!is_email_verified|\n| **gt** | Operator ini akan bekerja layaknya operator *greater than* yang akan membenarkan jika nilai yang dicari lebih besar|gt!age|\n| **lt** | Operator ini akan bekerja layaknya operator *less than* yang akan membenarkan jika nilai yang dicari lebih kecil|lt!age|\n| **gte** | Operator ini akan bekerja layaknya operator *greater than & equal* yang akan membenarkan jika nilai yang dicari lebih besar dan sama dengan itu|gte!price|\n| **lte** | Operator ini akan bekerja layaknya operator *less than & equal* yang akan membenarkan jika nilai yang dicari lebih kecil|lte!price|\n| **bw** | Operator ini akan bekerja layaknya operator *between* yang akan membenarkan jika nilai yang dicari diantara dengan nilai yang di inputkan|bw!created_at|\n| **nbw** | Operator ini akan bekerja layaknya operator *not between* yang akan membenarkan jika nilai yang dicari tidak ada diantara dengan nilai yang di inputkan|nbw!created_at|\n| **fl** | Operator ini akan bekerja layaknya operator *search* yang akan mencari kata-kata didepan dari kata yang di inputkan|fl!name|\n| **ll** | Operator ini akan bekerja layaknya operator *search* yang akan mencari kata-kata dibelakang dari kata yang di inputkan|fl!name|\n| **fll** | Operator ini akan bekerja layaknya operator *search* yang akan mencari kata-kata diantara dua sisi dari kata yang di inputkan|fll!name|\n {.table-documentation}\n \n  Salah satu contoh:",
                    "id": "0SyNkl"
                },
                {
                    "order_content": "2",
                    "type": "codePlatform",
                    "value": [
                        "```kotlin\n  \/\/ With Retrofit Kotlin.\n\n @GET(\"...\")\n    fun getUserProfile(\n            @Header(\"Authorization\") token: String,\n            @Query(\"eq!is_email_verified\") is_email_verified: Boolean,\n            @Query(\"bw!created_at\") created_at: String\n            ): Deferred<JSONArray>\n\n```",
                        "```javascript\n\/\/ With Axios\n\nconst params = {\n  \"eq!is_email_verified\": true,\n  \"bw!created_at\":\"21-10-2020,30-10-2020\",\n};\n\nconst res = await axios.get('https:\/\/.....', { params });\n\n```"
                    ],
                    "id": "k7FoDo"
                },
                {
                    "order_content": "3",
                    "type": "docs",
                    "value": "- Resource Conditional\n  \n  Tipe kondisi ini biasanya telah disiapkan oleh resource tersebut. Resource Conditional lebih praktis karena anda tidak perlu menggunakan operator dan kolom yang banyak nantinya di query parameter. Biasanya pengunaannya dengan menggunakan kata \"custom\" di ikuti dengan karakter \"!\" dan ditutupi dengan nama Resource Conditional tersebut.\n  \n  Contoh: custom!active_user pada Resource User",
                    "id": "oUCEsF"
                }
            ],
            "sort": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Sorting\nMengurutkan data tidak akan susah dengan QP ini. Anda hanya tinggal menulis di query parameter dan menggunakan kata \"sort\" dibagian key query. Isi nilai dari sort nantinya adalah nama kolom yang tersedia pada resource. Jika nilai sort berisi karakter \"-\" sebelum nama kolom, maka kolom tersebut akan di urutkan secara **descending**. Jika anda ingin mengurutkan secara **ascending** maka hapus karakter \"-\".\n\nContoh:",
                    "id": "wB7E8i"
                },
                {
                    "order_content": "2",
                    "type": "codePlatform",
                    "value": [
                        "```kotlin\n\n  \/\/ With Retrofit Kotlin.\n\n @GET(\"...\")\n    fun getUserProfile(\n            @Header(\"Authorization\") token: String,\n            @Query(\"sort\") sort: String,\n            ): Deferred<JSONArray>\n\n```",
                        "```javascript\n\/\/ With Axios\n\nconst params = {\n  \/\/Ascending\n  \"sort\": \"age\",\n  \/\/Descending\n  \"sort\": \"-age\",\n};\n\nconst res = await axios.get('https:\/\/.....', { params });\n\n```"
                    ],
                    "id": "MxAMlL"
                }
            ],
            "only_except": [
                {
                    "order_content": "1",
                    "type": "docs",
                    "value": "# Only \/ Except\n\nQP ini berguna untuk menseleksi kolom apa saja yang akan dikirimkan ke sisi klien. Ini akan mengurangi besar data dari respon balasan sisi server karena hanya beberapa kolom saja yang dibutuhkan. Only \/ Except menseleksi semua key balasan. Pengunaannya hanya memakai kata \"only\" atau \"except\" di key query parameter dan nilainya adalah key balasan sisi server yang disediakan pada resource yang di inginkan.\n\nSeperti pada katanya saja, Only akan menyeleksi kolom yang di inputkan pada nilai query parameter dengan key \"only\". Sebaliknya, Except akan menghilangkan kolom yang di inputkan pada nilai query parameter dengan key \"except\".\n\n> Perlu diketahui bahwa key \"only\" dan \"except\" tidak boleh digunakan secara bersamaan.\n{.quote-warning}",
                    "id": "9p6vWe"
                },
                {
                    "order_content": "2",
                    "type": "codePlatform",
                    "value": [
                        "```kotlin\n\n  \/\/ With Retrofit Kotlin.\n\n @GET(\"...\")\n    fun getUserProfile(\n            @Header(\"Authorization\") token: String,\n            @Query(\"only\") sort: String,\n            ): Deferred<JSONArray>\n\n```",
                        "```javascript\n\/\/ With Axios\n\nconst params = {\n  \/\/Only\n  \"only\": \"age,name\",\n  \/\/Except\n  \"except\": \"age\",\n  \/\/Pilih salah satu.\n};\n\nconst res = await axios.get('https:\/\/.....', { params });\n\n```"
                    ],
                    "id": "GsQiJt"
                }
            ]
        },
        "res-support": {
            "introduction": [
                {
                    "type": "docs",
                    "value": "# Penjelasan\n\nResource tipe support ini sebenarnya hampir sama dengan resource sebelumnya, namun terdapat perbedaan dalam pengunaan dan format balasan yang dikirimkan.  Resource tipe ini biasanya digunakan untuk membantu pengisian data form pada resource inti dan memperlihatkan data bantuan yang tersedia. \n\nFormat balasan pun berubah ketika anda meminta koleksi dari Resource Support, yaitu tidak ada pagination pada balasan. Hal ini membuat data yang didapatkan tidak di limitasi oleh server membuat data yang dikirimkan banyak. Namun, tenang saja karena biasanya balasan data pada resource support hanya sekitar 4-30 data.",
                    "id": "S4Ju3i"
                }
            ],
            "regional": [
                {
                    "type": "docs",
                    "value": "# Regional\n\nResource Support Regional ini dalam server Laron berisi daerah-daerah seperti kecamatan, kabupaten, dan provinsi yang saling berkaitan dengan memakai kode yang telah diatur pada server Laron.\n\n### Mengambil Data Provinsi Secara Spesifik ID-nya\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/provinces\/ [ ID Provinsi ]\n\nContoh Response:\n\n```json\n{\n  \"data\": {\n    \"province_id\": 1,\n    \"province_name\": \"Aceh\"\n  }\n}\n```\n\nSpesifikasi Nilai Response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *province_id* | ID dari provinsi tersebut | Semua Role |\n| *province_name* | Nama dari provinsi | Semua Role |\n{.table-documentation}\n\n\n### Mengambil Koleksi Data Provinsi\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/provinces\n\nContoh Response:\n\n```json\n{\n  \"data\": [\n    {\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    },\n    {\n      \"province_id\": 2,\n      \"province_name\": \"Sumatera Utara\"\n    },\n    {\n      \"province_id\": 3,\n      \"province_name\": \"Sumatera Barat\"\n    }, ...\n  ]\n}\n```",
                    "id": "92mKOL"
                },
                {
                    "type": "docs",
                    "value": "### Mengambil Data Kabupaten Secara Spesifik ID-nya\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/provinces\/ [ ID Provinsi ] \/districts\/ [ ID Kabupaten ]\n\nContoh Response:\n\n```json\n{\n    {\n      \"district_id\": 1001,\n      \"district_name\": \"Aceh Barat\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    },\n}\n```\n\nSpesifikasi Nilai Response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *district_id* | ID dari kabupaten tersebut | Semua Role |\n| *district_name* | Nama dari kabupaten | Semua Role |\n| *province_id* | ID dari provinsi tersebut | Semua Role |\n| *province_name* | Nama dari provinsi | Semua Role |\n{.table-documentation}\n\n\n### Mengambil Koleksi Data Kabupaten\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/provinces\/ [ ID Provinsi ] \/districts\n\nContoh Response:\n\n```json\n{\n  \"data\": [\n    {\n      \"district_id\": 1001,\n      \"district_name\": \"Aceh Barat\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    },\n    {\n      \"district_id\": 1002,\n      \"district_name\": \"Aceh Barat Daya\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    },\n    {\n      \"district_id\": 1003,\n      \"district_name\": \"Aceh Besar\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    }, ...\n  ]\n}\n```",
                    "id": "I3ddsX"
                },
                {
                    "type": "docs",
                    "value": "### Mengambil Data Kecamatan Secara Spesifik ID-nya\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/districts\/ [ ID Kabupaten ] \/subdistricts\/ [ ID Kecamatan ]\n\nContoh Response:\n\n```json\n{\n    {\n      \"subdistrict_id\": 1001001,\n      \"subdistrict_name\": \"Arongan Lambalek\",\n      \"district_id\": 1001,\n      \"district_name\": \"Aceh Barat\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    },\n}\n```\n\nSpesifikasi Nilai Response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *subdistrict_id* | ID dari kecamatan tersebut | Semua Role |\n| *subdistrict_name* | ID dari kecamatan tersebut | Semua Role |\n| *district_id* | ID dari kabupaten tersebut | Semua Role |\n| *district_name* | Nama dari kabupaten | Semua Role |\n| *province_id* | ID dari provinsi tersebut | Semua Role |\n| *province_name* | Nama dari provinsi | Semua Role |\n{.table-documentation}\n\n\n### Mengambil Koleksi Data Kecamatan\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/districts\/ [ ID Kabupaten ] \/subdistricts\n\nContoh Response:\n\n```json\n{\n  \"data\": [\n    {\n      \"subdistrict_id\": 1001001,\n      \"subdistrict_name\": \"Arongan Lambalek\",\n      \"district_id\": 1001,\n      \"district_name\": \"Aceh Barat\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    },\n    {\n      \"subdistrict_id\": 1001002,\n      \"subdistrict_name\": \"Bubon\",\n      \"district_id\": 1001,\n      \"district_name\": \"Aceh Barat\",\n      \"province_id\": 1,\n      \"province_name\": \"Aceh\"\n    }, ...\n  ]\n}\n```",
                    "id": "RgCDUr"
                }
            ],
            "product-categories": [
                {
                    "type": "docs",
                    "value": "# Kategori Produk\n\nResource Support Kategori Produk dalam server Laron berisi kategori-kategori produk yang tersedia pada server Laron.\n\n### Mengambil Data Koleksi Kategori Produk\n<hr>\n\nSpesifikasi Request:\n- **Method** : GET\n- **Query Plugin** : Only\/Except.\n- **Authorization** : * (Semua Role dan User yang tidak login)\n- **URL** : https:\/\/server.laron.id\/api\/v1\/product-categories\n\nContoh Response:\n\n```json\n{\n  \"data\": [\n    {\n      \"name\": \"culinary\"\n    },\n    {\n      \"name\": \"fashion\"\n    },\n    {\n      \"name\": \"art\"\n    },\n    {\n      \"name\": \"service\"\n    }\n  ]\n}\n```\n\nSpesifikasi Nilai Response:\n\n| Nama Variabel | Deskripsi | Terlihat pada Role User|\n|--|--|--|\n| *name* | Nama dari kategori produk | Semua Role |\n{.table-documentation}",
                    "id": "076Aic"
                }
            ]
        }
    }
}
