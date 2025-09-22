import type { Metadata } from "next";
import { ReduxProvider } from "@/redux/provider";
import ThemeRegistry from "@/components/ThemeRegistry";

export const metadata: Metadata = {
  title: "FitSupply Admin",
  description: "Admin Dashboard for FitSupply",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ReduxProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
