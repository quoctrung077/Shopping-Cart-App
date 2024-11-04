import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/", // Thay đổi nếu cần thiết
	server: {
		host: "0.0.0.0", // Lắng nghe trên tất cả các địa chỉ IP
		port: 3000, // Hoặc port bạn muốn dùng
		historyApiFallback: true, // Hỗ trợ cho React Router
	},
});
