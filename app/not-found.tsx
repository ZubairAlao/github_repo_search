import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-2">
        <h1>Oops! Page Not Found</h1>
        <p>The page you are looking for doesn't exist.</p>
        <Link href="/">
            <Button>
                Go back to Home
            </Button>
        </Link>

    </div>
  );
}
