import Link from "next/link";

export const Register = () => {
  return (
    <main className="space-y-6">
      <form action="" className="space-y-2">
        <input type="name" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Register</button>
      </form>
      <p>
        Login?{" "}
        <Link href={"/login"} className="hover:text-blue-500">
          Here
        </Link>
      </p>
    </main>
  );
};
