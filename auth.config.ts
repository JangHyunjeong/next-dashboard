import type { NextAuthConfig } from 'next-auth';

//
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  // 미로그인 시, dashboard 페이지 접근 제한
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // 인증되지 않은 사용자 로그인 페이지로 리다이렉트
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
