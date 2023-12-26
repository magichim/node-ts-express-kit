import { parse } from "node-html-parser";

export async function getPublicIpv4() {
  const res = await fetch("https://ifconfig.me");
  const data = await res.text();
  const root = parse(data);

  return root.getElementById("ip_address").textContent ?? "-";
}
