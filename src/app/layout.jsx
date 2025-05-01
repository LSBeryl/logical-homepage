import ClientThemeProvider from "./ClientThemeProvider";
import ClientLayout from "./ClientLayout";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ClientThemeProvider>
      </body>
    </html>
  );
}
