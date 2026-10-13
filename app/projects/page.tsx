"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function ProjectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}

export default ProjectPage;
