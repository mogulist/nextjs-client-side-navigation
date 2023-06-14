import "./globals.css";
import RecoilProvider from "./recoil-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilProvider>{children}</RecoilProvider>
    </html>
  );
}
