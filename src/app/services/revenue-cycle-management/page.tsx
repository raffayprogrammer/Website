import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { services } from "@/data/services";

const data = services["revenue-cycle-management"];
export const metadata: Metadata = { title: data.metaTitle, description: data.metaDesc };
export default function Page() { return <ServicePageTemplate data={data} />; }