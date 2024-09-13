import GradientBg from '../../../../components/Gradientbg';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <GradientBg>
      <div className="flex items-center justify-center min-h-screen">
        {/* Clerk's SignUp component */}
        <SignUp />
      </div>
    </GradientBg>
  );
}