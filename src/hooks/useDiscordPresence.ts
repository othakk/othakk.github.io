"use client";

import type { DiscordPresence } from "@/components/integrations/DiscordPresenceDot";

export function useDiscordPresence(): DiscordPresence {
  return "offline";
}
