"use client";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
    fetch('/api/register',{
      method: "POST",
      body: JSON.stringify({email,password}),
      headers: {'Content-Type':'application/json'}
    })
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary  text-4xl">Register</h1>
      <form className="block max-w-xs mx-auto my-4" onSubmit={handleFormSubmit}>
        <input
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
        <div className="my-4 text-gray-400 text-center">
          Or signin with provider
        </div>
        <button className="flex justify-center gap-3">
          <Image
            src={"/google.png"}
            alt="Signin with google"
            width={24}
            height={24}
          />
          Login with google
        </button>
      </form>
    </section>
  );
}
