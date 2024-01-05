import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Lottie from 'lottie-react';
// import {lottie} from '@/app/ui/img/complete.json'
// https://velog.io/@bjy100/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A1%9C%ED%8B%B0-%EC%A0%81%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
          <div>
            <p>로티</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
