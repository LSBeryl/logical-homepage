import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { BackgroundProvider } from "../../context/BackgroundContext";
import GlobalComponent from "../global";

export const metadata = {
  title: "로지컬 수학학원 대시보드",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalComponent />
      {/* 글로벌 CSS 적용 */}
      <BackgroundProvider>{children}</BackgroundProvider>
    </>
  );
}
