# Project HCMUT Student Smart Printing Service (HCMUT_SSPS) - Backend

Deployments: 
- [Frontend](https://hcmutssps.vercel.app/)
- [Backend](https://hcmutssps.azurewebsites.net/)

Công nghệ sử dụng:
- Ngôn ngữ: [TypeScript](https://www.typescriptlang.org/)
- Framework: [Express.js](https://expressjs.com/)
- Database: Microsoft SQL Server
- Authentication: [Passport.js](http://www.passportjs.org/)
- ORM: [Prisma](https://www.prisma.io/)
- [ESLint](https://eslint.org/) và [Prettier](https://prettier.io/) để kiểm tra code và format code.
- Frontend repository: https://github.com/hongphucle1010/HCMUT_SSPS


## Thành viên tham gia project

- 2212615 - Lê Hồng Phúc
- 2211590 - Huỳnh Lê Đăng Khoa
- 2213964 - Lê Ngọc Vinh
- 2211605 - Lê Văn Anh Khoa
- 2211081 - Lê Phúc Hoàng

## Yêu cầu
- [Node.js](https://nodejs.org/) (khuyến nghị sử dụng phiên bản 14.x hoặc mới hơn)
- [npm](https://www.npmjs.com/)

## Cài đặt

```bash
# Clone Repository
git clone https://github.com/hongphucle1010/HCMUT_SSPS_Backend.git

# Move to repository folder
cd HCMUT_SSPS_Backend

# Cài đặt các gói phụ thuộc
npm install
```

Sau khi cài đặt xong, cần tạo file `.env` trong thư mục gốc của project với nội dung như sau:
```env
DATABASE_URL="connection_string_to_your_database"
JWT_SECRET="your_jwt_secret"
PORT=pick_a_port
```

## Chạy code trong chế độ dev
```bash
npm run dev
```

## Build chương trình
```bash
npm run build
```
Mặc định file được build sẽ được tạo trong thư mục `dist`

## Chạy chương trình đã build
```bash
npm start
```