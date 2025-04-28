import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GlobalComponent from "../global";

export const metadata = {
  title: "로지컬 수학학원",
  description: "안산 1등 수학학원, 로지컬 수학학원입니다.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <GlobalComponent />
      {/* 글로벌 CSS 적용 */}
      <Header />
      <div style={{ flex: "1" }}>{children}</div>
      <Footer />
    </>
  );
}
