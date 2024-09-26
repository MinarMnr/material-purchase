"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { selectApi } from "./reducers/store";

export default function Home() {
  const {
    authData = {
      data: "",
    },
  } = useSelector(selectApi);

  const router = useRouter();

  useEffect(() => {
    if (authData?.data !== "") {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [authData, router]);

  console.log("sad", authData?.data);
}
