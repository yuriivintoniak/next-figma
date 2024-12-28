import { redirect } from "next/navigation";

export default function Index() {
  return redirect("/edit-user");
}
