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
      <body className="bg-white text-zinc-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold tracking-tight md:text-xl">
                  포동포동 달력
                </h1>
                <span className="text-sm text-zinc-400">
                  @hyu_phodong
                </span>
              </div>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-zinc-100 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-zinc-400 md:px-10">
              © {new Date().getFullYear()} @hyu_phodong All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}