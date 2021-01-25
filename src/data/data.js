import mobile from "raw-loader!../data/auth/mobile.md"
import website from "raw-loader!../data/auth/website.md"
import getstarted from "raw-loader!../data/getstarted.md"
import router from "../router"

export default {
    "sidebar": [
        {
            "label": "Get Started",
            "command": ()=>{
                router.push("/docs");
            }
        },
        {
            "label": "Authentication",
            "items": [{
                "label": "Mobile",
                "to": "/docs/auth/mobile"
            },
            {
                "label": "Website",
                "to": "/docs/auth/website"
            }
            ]
        }
    ],
    "key": {
        "auth": {
            "mobile": {
                "docs": mobile
            },
            "website": {
                "docs": website
            }
        },
        "init": {
            "docs": getstarted
        }
    }
}