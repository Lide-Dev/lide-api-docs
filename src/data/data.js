import tipe_user from "raw-loader!../data/auth/tipe_user.md"
import penggunaan from "raw-loader!../data/auth/penggunaan.md"
import getstarted from "raw-loader!../data/getstarted.md"
import router from "../router"

export default {
    "sidebar": [
        {
            "label": "Permulaan",
            "command": ()=>{
                router.push("/docs");
            }
        },
        {
            "label": "Tipe User",
            "command": ()=>{
                router.push("/docs/auth/typeuser");
            }
        },
        {
            "label": "Autentikasi",
            "items": [
            {
                "label": "Pengenalan",
                "to": "/docs/auth/introducing"
            }
            ]
        }
    ],
    "key": {
        "auth": {
            "typeuser": {
                "docs": tipe_user
            },
            "introducing": {
                "docs": penggunaan
            }
        },
        "init": {
            "docs": getstarted
        }
    }
}