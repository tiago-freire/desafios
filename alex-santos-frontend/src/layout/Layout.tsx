import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const LayoutTeste = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fundo fixo com degradê de baixo pra cima */}
      <div className="fixed inset-0 bg-[url('@/assets/background.png')] bg-no-repeat bg-cover bg-center grayscale z-[-2]" />
      <div className="fixed inset-0 bg-gradient-to-t from-black via-black/95 to-transparent z-[-1]" />

      {/* Conteúdo rolável */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutTeste;
