"use client";

import GiscusComponent from "@giscus/react";
import { useTheme } from "next-themes"; // Optionnel, pour le dark mode

export default function Giscus() {
  const { theme } = useTheme();
  
  return (
    <GiscusComponent
      repo="ton-username/ton-repo"
      repoId="R_kgDO..." // Copié depuis giscus.app
      category="General"
      categoryId="DIC_kwDO..." // Copié depuis giscus.app
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={theme}
      lang="fr"
      loading="lazy"
    />
  );
}