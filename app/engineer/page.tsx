import { redirect } from "next/navigation";

// The engineer view is now the site root; kept so existing /engineer links resolve.
export default function EngineerPage() {
  redirect("/");
}
