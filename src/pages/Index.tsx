import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope, BookOpen, Gamepad2, Heart, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Heart className="h-24 w-24 mx-auto mb-6 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bem-vindo(a) ao<br />
              <span className="text-primary">Guia de Enfermagem</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Aqui você encontra <strong>técnicas</strong>, <strong>termos</strong> e <strong>jogos</strong> para 
              aprender e revisar enfermagem de forma simples e eficiente.
            </p>
            <div className="bg-card p-6 rounded-lg border shadow-sm mb-8">
              <p className="text-foreground font-medium">
                ✨ Desenvolvido especialmente para estudantes e profissionais da área da saúde
              </p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            onClick={() => setShowWelcome(false)}
          >
            Começar agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary/10 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Heart className="h-10 w-10 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Guia de Enfermagem</h1>
            </div>
            <p className="text-muted-foreground">
              Escolha um módulo para começar seus estudos
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Técnicas de Enfermagem */}
          <div className="group cursor-pointer" onClick={() => navigate('/tecnicas')}>
            <Card className="border border-module-tecnicas/20 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="bg-module-tecnicas/20 text-center pb-6 border-b">
                <div className="w-16 h-16 bg-module-tecnicas rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-8 w-8 text-module-tecnicas-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  Técnicas de Enfermagem
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-center mb-6">
                  15 técnicas essenciais com nome, objetivo, materiais, passo a passo e vídeo demonstrativo
                </CardDescription>
                <Button 
                  className="w-full bg-module-tecnicas hover:bg-module-tecnicas/90 text-module-tecnicas-foreground"
                >
                  Acessar Técnicas
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Nomenclaturas */}
          <div className="group cursor-pointer" onClick={() => navigate('/nomenclaturas')}>
            <Card className="border border-module-nomenclaturas/20 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="bg-module-nomenclaturas/20 text-center pb-6 border-b">
                <div className="w-16 h-16 bg-module-nomenclaturas rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-module-nomenclaturas-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  Nomenclaturas
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-center mb-6">
                  Dicionário com 100 termos técnicos, definições simples, imagens e sistema de busca
                </CardDescription>
                <Button 
                  className="w-full bg-module-nomenclaturas hover:bg-module-nomenclaturas/90 text-module-nomenclaturas-foreground"
                >
                  Consultar Termos
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Jogos Educativos */}
          <div className="group cursor-pointer" onClick={() => navigate('/jogos')}>
            <Card className="border border-module-jogos/20 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="bg-module-jogos/20 text-center pb-6 border-b">
                <div className="w-16 h-16 bg-module-jogos rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="h-8 w-8 text-module-jogos-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  Jogos Educativos
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-center mb-6">
                  Quiz, associação de termos e jogos de memória para reforçar o conteúdo aprendido
                </CardDescription>
                <Button 
                  className="w-full bg-module-jogos hover:bg-module-jogos/90 text-module-jogos-foreground"
                >
                  Jogar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Index;