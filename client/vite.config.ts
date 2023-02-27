import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://employeeapi-env.eba-kdb7me3s.ap-northeast-1.elasticbeanstalk.com",
                changeOrigin: true,
                secure: false,
            },
        },
    },
    plugins: [react()],
});
