export interface route {
    id: string
    path: string
    public: boolean
}

const routes:route[] = [
    {
        id: "home",
        path: "/home",
        public: false
    },
    {
        id: "sign-in",
        path: "/sign-in",
        public: true
    },
    {
        id:"sign-out",
        path: "/sign-out",
        public: true
    }
]