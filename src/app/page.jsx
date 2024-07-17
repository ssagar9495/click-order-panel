"use client";
import { useSelector } from "react-redux";
import { PublicRoutes, PrivateRoutes, Loader } from "@/components";

export default function Home() {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Loader />
      <div>{isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}</div>
    </main>
  );
}
