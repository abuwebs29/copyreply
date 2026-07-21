export const site = {
  name: "CopyReply",
  url: "https://copyreply.com",
  description:
    "Find professional, friendly, polite, and confident replies for work, customers, social messages, invitations, and everyday conversations.",
  gaId: "G-SMP52V7Y3W",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
