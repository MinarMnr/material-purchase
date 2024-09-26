"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  return <h1>Welcome to your Dashboard</h1>;
  //   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //   const router = useRouter();

  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.push("/");
  //     }
  //   }, [isAuthenticated, router]);

  //   return isAuthenticated ? <h1>Welcome to your Dashboard</h1> : null;
}
