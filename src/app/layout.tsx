import "./globals.css";
import RecoilProvider from "./recoil-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
