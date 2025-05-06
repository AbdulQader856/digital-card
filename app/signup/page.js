import Link from 'next/link';
import LanguageSelector from '@/src/components/ui/buttons/LanguageSelector';
import { SignupForm } from '@/src/components/ui/general/Forms';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left: Preview */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center">
        <img src="images/default-register.png" alt="Preview" className="h-screen w-screen" />
      </div>

      {/* Right: Signup Form */}
      <div className="w-full md:w-1/2 md:h-screen flex flex-col justify-center px-8 sm:px-16 lg:px-32 py-12 relative">
        {/* Language */}
        <LanguageSelector/> 

        {/* Branding */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            <a href="/" className="flex items-center space-x-2">
              <img src="/images/logo.png" alt="logo" className="h-10 w-auto ml-10" />
            </a>
          </h1>
          <h2 className="text-xl mt-2 font-medium text-gray-700">Create Account</h2>
        </div>

        {/* Form */}
        <SignupForm/>

        {/* Footer */}
        <p className="text-xs text-center text-gray-400 mt-10">
          All Rights Reserved © 2025{' '}
          <Link href="#" className="text-blue-500 hover:underline">
            DigiBCard
          </Link>
        </p>
      </div>
    </div>
  );
}
