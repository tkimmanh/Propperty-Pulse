import connectDB from "@/config/database";
import User from "@/models/User";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  // Cấu hình các callback
  callbacks: {
    // Callback được gọi khi người dùng đăng nhập thành công
    async signIn({ profile }) {
      try {
        // 1. Kết nối với cơ sở dữ liệu
        await connectDB();
        // 2. Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
        const userExist = await User.findOne({ email: profile.email });
        // 3. Nếu chưa tồn tại, tạo mới người dùng
        if (!userExist) {
          await User.create({
            email: profile.email,
            name: profile.name.slice(0, 20),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.error("Lỗi trong callback signIn:", error);
        return false;
      }
    },
    // Callback được gọi khi một session được tạo
    async session({ session }) {
      try {
        // 1. Lấy thông tin người dùng đã đăng nhập
        const user = await User.findOne({ email: session.user.email });
        // 2. Thêm ID của người dùng vào đối tượng session
        session.user.id = user._id.toString();
        // 3. Trả về đối tượng session đã được sửa đổi
        return session;
      } catch (error) {
        console.error("Lỗi trong callback session:", error);
        return session;
      }
    },
  },
};
