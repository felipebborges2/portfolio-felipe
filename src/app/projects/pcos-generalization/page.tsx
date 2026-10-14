import type { Metadata } from "next";
import PcosDetail from "@/components/PcosDetail";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deep Learning Generalization for PCOS Detection • Felipe Borges",
  description:
    "Undergraduate thesis (in progress): evaluating how a ResNet-50 trained for PCOS detection in ultrasound images generalizes to datasets from other sources, with a federated learning follow-up.",
};

export default function Page() {
  return (
    <>
      <main>
        <PcosDetail />
      </main>
      <Footer />
    </>
  );
}
