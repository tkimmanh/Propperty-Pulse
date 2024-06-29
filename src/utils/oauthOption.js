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
      // 1. Kết nối với cơ sở dữ liệu
      // 2. Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
      // 3. Nếu chưa tồn tại, tạo mới người dùng
      // 4. Trả về thông tin người dùng
    },
    // Callback được gọi khi một session được tạo
    async session({ session, user }) {
      // 1. Lấy thông tin người dùng đã đăng nhập
      // 2. Lấy thông tin người dùng từ cơ sở dữ liệu
      // 3. Trả về đối tượng session đã được sửa đổi
    },
  },
};
