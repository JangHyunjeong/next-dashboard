import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

// init NextAuth
// auth property export
// 미들웨어가 인증을 확인할 때까지 보호된 경로가 렌더링을 시작하지 않음
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
