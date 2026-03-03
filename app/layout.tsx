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
          <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-black text-white">
            <div className="mx-auto max-w-4xl px-4 py-4">
              <h1 className="m-0 text-center text-lg font-medium text-white">
                포동포동 달력
              </h1>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 pt-20 pb-24">
            <div className="mx-auto max-w-4xl px-4 py-8">
              {children}
            </div>
          </main>

          {/* Footer (minimal) */}
          <footer className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 bg-black text-white">
            <div className="mx-auto max-w-4xl px-4 py-6 text-center text-xs text-white">
              © {new Date().getFullYear()} @hyu_phodong. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}