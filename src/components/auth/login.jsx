import Link from "next/link";

export const Login = () => {
  return (
    <main className="space-y-6">
      <form action="" className="space-y-2">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
      <p>
        Dont have account?{" "}
        <Link href={"/register"} className="hover:text-blue-500">
          Register here
        </Link>
      </p>
    </main>
  );
};
