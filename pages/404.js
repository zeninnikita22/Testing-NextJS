import Link from "next/link";
import { use, useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const redirect = useRouter();

  useEffect(() => {
    setTimeout(() => {
      redirect.push("/");
    }, 5000);
  }, []);
  return (
    <div className="not-found">
      <h1>Wow! Where the hell do you think you are going? 404</h1>
      <Link href="/">Go to the homepage, NOW!</Link>
    </div>
  );
}

export default NotFound;
