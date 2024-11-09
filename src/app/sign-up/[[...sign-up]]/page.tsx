import { SignUp} from "@clerk/nextjs";
import React from "react";
export default function SignUpPage() {
  return(
    <div className="flex h-screen items-center justify-center">

    <SignUp />;
    </div>
  )
}