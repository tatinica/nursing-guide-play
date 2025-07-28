import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Stethoscope, BookOpen, Gamepad2, Heart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Guia de Enfermagem</h1>
          </div>
          <p className="text-muted-foreground mt-2">
            Seu guia completo para técnicas, nomenclaturas e aprendizado interativo
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Módulo Técnicas */}
          <Card className="bg-module-tecnicas border-module-tecnicas hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-white/50 rounded-full w-fit">
                <Stethoscope className="h-12 w-12 text-module-tecnicas-foreground group-hover:scale-110 transition-transform" />
              </div>
              <CardTitle className="text-2xl text-module-tecnicas-foreground">
                Técnicas de Enfermagem
              </CardTitle>
              <CardDescription className="text-module-tecnicas-foreground/70">
                15 técnicas essenciais com passo a passo detalhado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/tecnicas')}
                className="w-full bg-white/20 hover:bg-white/30 text-module-tecnicas-foreground border-0"
                size="lg"
              >
                Explorar Técnicas
              </Button>
            </CardContent>
          </Card>

          {/* Módulo Nomenclaturas */}
          <Card className="bg-module-nomenclaturas border-module-nomenclaturas hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-white/50 rounded-full w-fit">
                <BookOpen className="h-12 w-12 text-module-nomenclaturas-foreground group-hover:scale-110 transition-transform" />
              </div>
              <CardTitle className="text-2xl text-module-nomenclaturas-foreground">
                Nomenclaturas
              </CardTitle>
              <CardDescription className="text-module-nomenclaturas-foreground/70">
                Dicionário com 100 termos técnicos essenciais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/nomenclaturas')}
                className="w-full bg-white/20 hover:bg-white/30 text-module-nomenclaturas-foreground border-0"
                size="lg"
              >
                Consultar Dicionário
              </Button>
            </CardContent>
          </Card>

          {/* Módulo Jogos */}
          <Card className="bg-module-jogos border-module-jogos hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 p-4 bg-white/50 rounded-full w-fit">
                <Gamepad2 className="h-12 w-12 text-module-jogos-foreground group-hover:scale-110 transition-transform" />
              </div>
              <CardTitle className="text-2xl text-module-jogos-foreground">
                Jogos Educativos
              </CardTitle>
              <CardDescription className="text-module-jogos-foreground/70">
                Quiz, memória e associação de termos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/jogos')}
                className="w-full bg-white/20 hover:bg-white/30 text-module-jogos-foreground border-0"
                size="lg"
              >
                Começar a Jogar
              </Button>
            </CardContent>
          </Card>

        </div>

        {/* Info adicional */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-3 text-foreground">
                Bem-vindo ao seu Guia de Enfermagem
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este app foi desenvolvido para estudantes e profissionais de enfermagem. 
                Aqui você encontra técnicas fundamentais, um dicionário completo de termos 
                médicos e jogos educativos para reforçar seu aprendizado de forma interativa.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;