import { authOptions } from "@/utils/oauthOption";
import NextAuth from "next-auth/next";

const handle = NextAuth(authOptions);

export { handle as GET, handle as POST };
/*
 - Xuất ra các hàm xử lý cho các phương thức HTTP GET và POST.
 Điều này có nghĩa là cả hai phương thức GET và POST sẽ được xử lý bởi cùng một hàm handle
*/
