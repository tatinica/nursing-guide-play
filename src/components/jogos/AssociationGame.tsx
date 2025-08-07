import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Brain, CheckCircle, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface AssociationGameProps {
  gameType: 'popular-tecnico' | 'tecnica-objetivo' | 'imagem-termo';
  onBack: () => void;
}

const AssociationGame = ({ gameType, onBack }: AssociationGameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const popularTecnicoQuestions: Question[] = [
    {
      id: 1,
      question: "Como se chama tecnicamente 'febre alta'?",
      options: ["Hipotermia", "Hipertermia", "Normotermia", "Eutermia"],
      correct: 1
    },
    {
      id: 2,
      question: "O termo técnico para 'pressão baixa' é:",
      options: ["Hipertensão", "Hipotensão", "Eutensão", "Normotensão"],
      correct: 1
    },
    {
      id: 3,
      question: "Dificuldade para respirar é chamada de:",
      options: ["Apneia", "Dispneia", "Eupneia", "Taquipneia"],
      correct: 1
    },
    {
      id: 4,
      question: "Batimentos cardíacos acelerados são denominados:",
      options: ["Bradicardia", "Taquicardia", "Arritmia", "Normocardia"],
      correct: 1
    },
    {
      id: 5,
      question: "Pele azulada é chamada tecnicamente de:",
      options: ["Icterícia", "Cianose", "Eritema", "Palidez"],
      correct: 1
    }
  ];

  const tecnicaObjetivoQuestions: Question[] = [
    {
      id: 1,
      question: "Qual o principal objetivo da lavagem das mãos?",
      options: ["Reduzir cansaço", "Evitar infecção", "Melhorar circulação", "Hidratar a pele"],
      correct: 1
    },
    {
      id: 2,
      question: "A administração subcutânea tem como objetivo:",
      options: ["Inserir medicamento na veia", "Introduzir medicamento na gordura", "Limpar ferida", "Medir temperatura"],
      correct: 1
    },
    {
      id: 3,
      question: "A aferição da glicemia serve para:",
      options: ["Medir pressão", "Ver quantidade de açúcar no sangue", "Ver batimentos", "Verificar temperatura"],
      correct: 1
    },
    {
      id: 4,
      question: "O curativo tem como função:",
      options: ["Remover pontos", "Proteger a ferida", "Dar alta ao paciente", "Administrar medicação"],
      correct: 1
    },
    {
      id: 5,
      question: "O uso de luvas estéreis visa:",
      options: ["Proteger as mãos do frio", "Manter técnica asséptica", "Aumentar temperatura da pele", "Facilitar palpação"],
      correct: 1
    }
  ];

  const imagemTermoQuestions: Question[] = [
    {
      id: 1,
      question: "🌡️ Instrumento para medir temperatura:",
      options: ["Glicosímetro", "Termômetro", "Otoscópio", "Estetoscópio"],
      correct: 1
    },
    {
      id: 2,
      question: "💉 Instrumento para administrar injeções:",
      options: ["Máscara de oxigênio", "Seringa", "Bisturi", "Cateter"],
      correct: 1
    },
    {
      id: 3,
      question: "🔗 Dispositivo para acesso venoso:",
      options: ["Gaze", "Cateter", "Sonda nasogástrica", "Curativo"],
      correct: 1
    },
    {
      id: 4,
      question: "🎧 Instrumento para ausculta:",
      options: ["Otoscópio", "Estetoscópio", "Glicosímetro", "Termômetro"],
      correct: 1
    },
    {
      id: 5,
      question: "📊 Aparelho para medir glicose:",
      options: ["Termômetro", "Glicosímetro", "Tensímetro", "Oxímetro"],
      correct: 1
    }
  ];

  const getQuestions = () => {
    switch (gameType) {
      case 'popular-tecnico':
        return popularTecnicoQuestions;
      case 'tecnica-objetivo':
        return tecnicaObjetivoQuestions;
      case 'imagem-termo':
        return imagemTermoQuestions;
      default:
        return popularTecnicoQuestions;
    }
  };

  const getGameTitle = () => {
    switch (gameType) {
      case 'popular-tecnico':
        return 'Popular vs Técnico';
      case 'tecnica-objetivo':
        return 'Técnica e Objetivo';
      case 'imagem-termo':
        return 'Imagem e Termo';
      default:
        return 'Associação';
    }
  };

  const questions = getQuestions();

  const handleAnswer = (selectedIndex: number) => {
    setSelectedAnswer(selectedIndex);
    setShowFeedback(true);

    if (selectedIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  if (showResult) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Jogo Concluído!</CardTitle>
          <div className="space-y-2">
            <p>Você acertou {score} de {questions.length} questões</p>
            <div className="text-4xl font-bold text-module-jogos">
              {Math.round((score / questions.length) * 100)}%
            </div>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-x-4">
            <Button onClick={resetGame} variant="outline">
              Jogar Novamente
            </Button>
            <Button onClick={onBack}>
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
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            {getGameTitle()} - Questão {currentQuestion + 1} de {questions.length}
          </CardTitle>
          <Badge variant="outline">Pontuação: {score}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-semibold">
          {questions[currentQuestion].question}
        </h3>
        <div className="grid gap-3">
          {questions[currentQuestion].options.map((opcao, index) => {
            let buttonStyle = "text-left justify-start h-auto p-4";
            let icon = null;

            if (showFeedback && selectedAnswer !== null) {
              if (index === questions[currentQuestion].correct) {
                buttonStyle += " bg-green-100 border-green-300 text-green-800";
                icon = <CheckCircle className="h-4 w-4 mr-2 text-green-600" />;
              } else if (index === selectedAnswer && index !== questions[currentQuestion].correct) {
                buttonStyle += " bg-red-100 border-red-300 text-red-800";
                icon = <XCircle className="h-4 w-4 mr-2 text-red-600" />;
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={buttonStyle}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
              >
                {icon}
                <span className="font-semibold mr-3">{String.fromCharCode(65 + index)})</span>
                {opcao}
              </Button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-4 p-4 rounded-lg bg-muted">
            <p className="text-sm text-muted-foreground">
              {selectedAnswer === questions[currentQuestion].correct
                ? "✅ Correto! Próxima questão em instantes..."
                : `❌ Incorreto. A resposta correta é: ${questions[currentQuestion].options[questions[currentQuestion].correct]}`
              }
            </p>
          </div>
        )}

        <div className="text-center">
          <Button onClick={onBack} variant="outline" disabled={showFeedback}>
            Voltar aos Jogos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssociationGame;