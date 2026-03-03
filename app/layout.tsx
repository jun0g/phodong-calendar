import "./globals.css";

export const metadata = {
  title: "포동포동 달력",
  description: "사진 동아리 웹 달력 프로젝트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-zinc-800 antialiased">
        <div className="bg-white min-h-screen flex flex-col">
          {/* Header (minimal) */}
          <header className="border-b border-zinc-100 bg-black">
            <div className="mx-auto max-w-4xl px-4 py-4">
              <h1 className="m-0 text-center text-lg font-medium">
                포동포동 달력
              </h1>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1">
            <div className="mx-auto max-w-4xl px-4 py-8">
              {children}
            </div>
          </main>

          {/* Footer (minimal) */}
          <footer className="border-t border-zinc-100 bg-black">
            <div className="mx-auto max-w-4xl px-4 py-6 text-center text-xs text-zinc-800">
              © {new Date().getFullYear()} @hyu_phodong. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}