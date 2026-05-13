import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { industries } from "@/data/industries";

const data = industries["physician-practices"];
export const metadata: Metadata = { title: data.metaTitle, description: data.metaDesc };
export default function Page() { return <IndustryPageTemplate data={data} />; }