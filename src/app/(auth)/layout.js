export default function Layout({ children }) {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-[320px]">{children}</div>
    </main>
  );
}
