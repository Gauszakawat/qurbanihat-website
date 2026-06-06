import { authClient } from "@/lib/auth-client";
import Extra from "./home page/Extra";
import Featured from "./home page/Featured";
import Hero from "./home page/Hero";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";


export default async function Home() {
  
  return (
    <div>
      <Hero></Hero>
      <Featured></Featured>
      <Extra></Extra>


    </div>
  );
}
