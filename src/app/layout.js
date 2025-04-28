import Footer from "../components/Footer";
import Header from "../components/Header";
import GlobalComponent from "./global";

export const metadata = {
  title: "페이지 존재하지 않음",
  description: "안산 1등 수학학원, 로지컬 수학학원입니다.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
