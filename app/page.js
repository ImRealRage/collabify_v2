import Link from "next/link";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      <h2 className="">Collabify</h2>
      <Link href={"../sign-in"}>
        <Button variant="outline">Sign in</Button>
      </Link>
    </div>
  );
}
