/** @jsxImportSource @emotion/react */
"use client";
import { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname, useSearchParams } from "next/navigation";
import { theme } from "../styles/theme";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({
      minimum: 0.3,
      easing: "ease",
      speed: 800,
      showSpinner: false,
    });
  }, []);

  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname, searchParams]);

  return (
    <>
      <style jsx global>{`
        #nprogress .bar {
          background: ${theme.colors.primary} !important;
          height: 0.2rem !important;
        }
      `}</style>
      {children}
    </>
  );
}
