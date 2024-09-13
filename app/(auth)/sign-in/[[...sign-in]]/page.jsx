import GradientBg from '../../../../components/Gradientbg';
import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <GradientBg>
          <div className="flex items-center justify-center min-h-screen">
            {/* Clerk's SignUp component */}
            <SignIn />
          </div>
          Hellow this is Vini Jod.
        </GradientBg>
      );
}