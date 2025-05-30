import Sidebar from "@/components/Sidebar";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-dvh gap-4 p-4">
      <Sidebar />
      {children}
    </main>
  );
}
