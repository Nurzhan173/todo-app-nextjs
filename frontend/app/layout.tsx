import "@/app/globals.css";
import Providers from "@/app/providers"; // Import QueryClientProvider
import LogoutButton from "@/components/LogoutButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className="bg-gray-100 text-gray-900">
    {/* Navigation Bar */}
    <nav className="bg-blue-600 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">To-Do App</h1>
      <LogoutButton />
    </nav>

    <Providers>
      <main className="max-w-2xl mx-auto p-6">{children}</main>
    </Providers>
    </body>
    </html>
  );
}
