"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { Provider } from "@/contextApi/AuthContext";
import { SnackbarProvider } from "notistack";
import Navbar from "@/components/Navbar";
// import Sidebar from "@/components/Sidebar";
import Drawer from "@/components/Drawer";
// import { Metadata } from "next";
// import icon from "../public/Images/Favicon.png"


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // console.log(children, "children -----");

  return (
    <html lang="en">
      <head>
        <title>
          E-Comm - Admin Panel
        </title>
        <link rel="icon" href="/images/Favicon.png" type="image/x-icon"></link>
      </head>
      <body className={inter.className}>
        <SnackbarProvider>
          <Provider>
            {!(pathname == "/") ? <Navbar /> : ""}
            <div className="flex h-screen overflow-y-hidden">
              {!(pathname == "/") ? (
                <div className="flex">
                  <Drawer />
                </div>
              ) : (
                ""
              )}
              <div className={`flex flex-1 mx-2 overflow-x-hidden no-scrollbar`}>{children}</div>
            </div>
          </Provider>
        </SnackbarProvider>
      </body>
    </html>
  );
}
