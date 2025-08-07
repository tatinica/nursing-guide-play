import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gamepad2, Trophy, Brain, Target } from "lucide-react";
import MemoryGame from "@/components/jogos/MemoryGame";
import AssociationGame from "@/components/jogos/AssociationGame";

const Jogos = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const jogos = [
    {
      id: "quiz",
      nome: "Quiz de Enfermagem",
      descricao: "Teste seus conhecimentos com perguntas sobre técnicas e nomenclaturas",
      icone: "🧠",
      cor: "bg-module-jogos/20",
      dificuldade: "Fácil a Difícil",
      tempo: "5-15 min"
    },
    {
      id: "associacao",
      nome: "Associação de Termos",
      descricao: "Conecte termos médicos às suas definições corretas",
      icone: "🔗",
      cor: "bg-module-tecnicas/20",
      dificuldade: "Médio",
      tempo: "10 min"
    },
    {
      id: "memoria-nomenclatura",
      nome: "Memória - Nomenclatura",
      descricao: "Encontre os pares de termos técnicos e suas definições",
      icone: "🃏",
      cor: "bg-module-nomenclaturas/20",
      dificuldade: "Fácil",
      tempo: "5-10 min"
    },
    {
      id: "memoria-tecnicas",
      nome: "Memória - Técnicas",
      descricao: "Associe técnicas de enfermagem com seus materiais",
      icone: "🎯",
      cor: "bg-module-tecnicas/20",
      dificuldade: "Médio",
      tempo: "8-12 min"
    },
    {
      id: "associacao-popular",
      nome: "Popular vs Técnico",
      descricao: "Identifique a nomenclatura técnica correta",
      icone: "📝",
      cor: "bg-module-jogos/20",
      dificuldade: "Médio",
      tempo: "5-8 min"
    },
    {
      id: "associacao-objetivo",
      nome: "Técnica e Objetivo",
      descricao: "Relacione cada técnica com seu objetivo principal",
      icone: "🎯",
      cor: "bg-module-nomenclaturas/20",
      dificuldade: "Fácil",
      tempo: "5-8 min"
    }
  ];

  const QuizComponent = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const perguntas = [
      {
        pergunta: "Qual é a frequência cardíaca normal em adultos?",
        opcoes: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "120-140 bpm"],
        correta: 1
      },
      {
        pergunta: "O que significa 'assepsia'?",
        opcoes: [
          "Limpeza com água",
          "Medidas para impedir penetração de micro-organismos",
          "Uso de luvas",
          "Lavagem das mãos"
        ],
        correta: 1
      },
      {
        pergunta: "Qual a temperatura corporal considerada febre?",
        opcoes: ["Acima de 36°C", "Acima de 37°C", "Acima de 37,8°C", "Acima de 39°C"],
        correta: 2
      }
    ];

    const handleAnswer = (selectedIndex: number) => {
      if (selectedIndex === perguntas[currentQuestion].correta) {
        setScore(score + 1);
      }

      if (currentQuestion + 1 < perguntas.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    };

    const resetQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    };

    if (showResult) {
      return (
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Quiz Concluído!</CardTitle>
            <CardDescription>
              Você acertou {score} de {perguntas.length} questões
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="text-4xl font-bold text-module-jogos">
              {Math.round((score / perguntas.length) * 100)}%
            </div>
            <div className="space-x-4">
              <Button onClick={resetQuiz} variant="outline">
                Jogar Novamente
              </Button>
              <Button onClick={() => setSelectedGame(null)}>
                Voltar aos Jogos
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Questão {currentQuestion + 1} de {perguntas.length}</CardTitle>
            <Badge variant="outline">Pontuação: {score}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <h3 className="text-lg font-semibold">
            {perguntas[currentQuestion].pergunta}
          </h3>
          <div className="grid gap-3">
            {perguntas[currentQuestion].opcoes.map((opcao, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left justify-start h-auto p-4"
                onClick={() => handleAnswer(index)}
              >
                <span className="font-semibold mr-3">{String.fromCharCode(65 + index)})</span>
                {opcao}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  // Renderização dos jogos específicos
  if (selectedGame === "memoria-nomenclatura") {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-module-nomenclaturas border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-module-nomenclaturas-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-module-nomenclaturas-foreground">Memória - Nomenclatura</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <MemoryGame gameType="nomenclatura" onBack={() => setSelectedGame(null)} />
        </main>
      </div>
    );
  }

  if (selectedGame === "memoria-tecnicas") {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-module-tecnicas border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-module-tecnicas-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-module-tecnicas-foreground">Memória - Técnicas</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <MemoryGame gameType="tecnicas" onBack={() => setSelectedGame(null)} />
        </main>
      </div>
    );
  }

  if (selectedGame === "associacao-popular") {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-module-jogos border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-module-jogos-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-module-jogos-foreground">Popular vs Técnico</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <AssociationGame gameType="popular-tecnico" onBack={() => setSelectedGame(null)} />
        </main>
      </div>
    );
  }

  if (selectedGame === "associacao-objetivo") {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-module-nomenclaturas border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-module-nomenclaturas-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-module-nomenclaturas-foreground">Técnica e Objetivo</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <AssociationGame gameType="tecnica-objetivo" onBack={() => setSelectedGame(null)} />
        </main>
      </div>
    );
  }

  if (selectedGame === "quiz") {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-module-jogos border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-module-jogos-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-module-jogos-foreground">Quiz de Enfermagem</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <QuizComponent />
        </main>
      </div>
    );
  }

  if (selectedGame === "associacao") {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-module-tecnicas border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setSelectedGame(null)}
                className="text-module-tecnicas-foreground hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <h1 className="text-3xl font-bold text-module-tecnicas-foreground">Imagem e Termo</h1>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <AssociationGame gameType="imagem-termo" onBack={() => setSelectedGame(null)} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-module-jogos border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-module-jogos-foreground hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-3">
              <Gamepad2 className="h-8 w-8 text-module-jogos-foreground" />
              <h1 className="text-3xl font-bold text-module-jogos-foreground">Jogos Educativos</h1>
            </div>
          </div>
          <p className="text-module-jogos-foreground/70 mt-2">
            Aprenda de forma divertida e interativa
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {jogos.map((jogo) => (
            <Card key={jogo.id} className={`${jogo.cor} border-0 hover:shadow-lg transition-shadow cursor-pointer group`}>
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">
                  {jogo.icone}
                </div>
                <CardTitle className="text-xl">
                  {jogo.nome}
                </CardTitle>
                <CardDescription className="text-sm">
                  {jogo.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <Badge variant="secondary">
                    {jogo.dificuldade}
                  </Badge>
                  <Badge variant="outline">
                    {jogo.tempo}
                  </Badge>
                </div>
                <Button 
                  onClick={() => setSelectedGame(jogo.id)}
                  className="w-full bg-white/20 hover:bg-white/30 text-foreground border-0"
                  size="lg"
                >
                  {jogo.id === "quiz" ? "Começar Quiz" : 
                   jogo.id.includes("memoria") ? "Jogar Memória" :
                   jogo.id.includes("associacao") ? "Começar Associação" : "Jogar"}
                </Button>
              </CardContent>
            </Card>
          ))}

        </div>

        {/* Estatísticas placeholder */}
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader className="text-center">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <CardTitle>Suas Estatísticas</CardTitle>
            <CardDescription>
              Acompanhe seu progresso nos jogos
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-module-jogos">0</div>
              <div className="text-sm text-muted-foreground">Jogos Completados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-module-tecnicas">0%</div>
              <div className="text-sm text-muted-foreground">Taxa de Acerto</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-module-nomenclaturas">0</div>
              <div className="text-sm text-muted-foreground">Pontuação Total</div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Jogos;