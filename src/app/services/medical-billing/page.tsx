import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { services } from "@/data/services";

const data = services["medical-billing"];

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDesc,
  keywords: data.keywords,
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}