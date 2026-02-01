"use client";

import { useEffect, useState } from "react";

export default function UserAgentComponent() {
  const [userAgent, setUserAgent] = useState("");

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      setUserAgent(navigator.userAgent);
      console.log("User Agent:", navigator.userAgent);
    }
  }, []);

  return (
    <div>
      <p><strong>User Agent:</strong> {userAgent || "Loading..."}</p>
    </div>
  );
}
