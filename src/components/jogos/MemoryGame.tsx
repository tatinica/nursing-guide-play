import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, RotateCcw, Target } from "lucide-react";

interface GameCard {
  id: number;
  content: string;
  type: 'term' | 'definition';
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryGameProps {
  gameType: 'nomenclatura' | 'tecnicas';
  onBack: () => void;
}

const MemoryGame = ({ gameType, onBack }: MemoryGameProps) => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [canFlip, setCanFlip] = useState(true);

  const nomenclaturaPairs = [
    { term: "Hipertermia", definition: "Febre alta" },
    { term: "Bradipneia", definition: "Respiração lenta" },
    { term: "Taquicardia", definition: "Batimentos acelerados" },
    { term: "Hipertensão", definition: "Pressão alta" },
    { term: "Hipoglicemia", definition: "Açúcar baixo no sangue" },
    { term: "Sonda nasogástrica", definition: "Tubo inserido pelo nariz até o estômago" },
    { term: "Cateter venoso", definition: "Acesso à veia" },
    { term: "Estetoscópio", definition: "Ouvir sons internos" },
    { term: "Pulsação", definition: "Batimentos do coração" },
    { term: "Oxímetro", definition: "Mede oxigenação no dedo" }
  ];

  const tecnicasPairs = [
    { term: "Lavagem das mãos", definition: "Sabão e água ou álcool" },
    { term: "Administração intramuscular", definition: "Seringa" },
    { term: "Aferição da pressão arterial", definition: "Esfigmomanômetro" },
    { term: "Curativo simples", definition: "Gaze e soro fisiológico" },
    { term: "Punção venosa", definition: "Cateter periférico" },
    { term: "Verificação da glicemia", definition: "Glicosímetro" },
    { term: "Ausculta pulmonar", definition: "Estetoscópio" },
    { term: "Oxigenoterapia", definition: "Máscara de oxigênio" },
    { term: "Higiene íntima no leito", definition: "Luvas descartáveis" },
    { term: "Colocação de sonda vesical", definition: "Gel lubrificante" }
  ];

  const initializeGame = () => {
    const pairs = gameType === 'nomenclatura' ? nomenclaturaPairs : tecnicasPairs;
    const gameCards: GameCard[] = [];
    
    pairs.forEach((pair, index) => {
      gameCards.push({
        id: index * 2,
        content: pair.term,
        type: 'term',
        pairId: index,
        isFlipped: false,
        isMatched: false
      });
      gameCards.push({
        id: index * 2 + 1,
        content: pair.definition,
        type: 'definition',
        pairId: index,
        isFlipped: false,
        isMatched: false
      });
    });

    // Embaralhar cartas
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameCompleted(false);
    setCanFlip(true);
  };

  useEffect(() => {
    initializeGame();
  }, [gameType]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find(card => card.id === firstId);
      const secondCard = cards.find(card => card.id === secondId);

      if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
        // Par encontrado
        setTimeout(() => {
          setMatchedPairs(prev => [...prev, firstCard.pairId]);
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      } else {
        // Não é par
        setTimeout(() => {
          setFlippedCards([]);
          setCanFlip(true);
        }, 1500);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards]);

  useEffect(() => {
    if (matchedPairs.length === (gameType === 'nomenclatura' ? nomenclaturaPairs.length : tecnicasPairs.length)) {
      setGameCompleted(true);
    }
  }, [matchedPairs, gameType]);

  const handleCardClick = (cardId: number) => {
    if (!canFlip || flippedCards.includes(cardId) || matchedPairs.some(pairId => cards.find(card => card.id === cardId)?.pairId === pairId)) {
      return;
    }

    if (flippedCards.length < 2) {
      setFlippedCards(prev => [...prev, cardId]);
    }
  };

  const isCardVisible = (card: GameCard) => {
    return flippedCards.includes(card.id) || matchedPairs.includes(card.pairId);
  };

  const getCardStyle = (card: GameCard) => {
    if (matchedPairs.includes(card.pairId)) {
      return "bg-green-100 border-green-300 text-green-800";
    }
    if (flippedCards.includes(card.id)) {
      return card.type === 'term' 
        ? "bg-module-nomenclaturas/20 border-module-nomenclaturas text-module-nomenclaturas-foreground" 
        : "bg-module-tecnicas/20 border-module-tecnicas text-module-tecnicas-foreground";
    }
    return "bg-muted border-border hover:bg-muted/80 cursor-pointer";
  };

  if (gameCompleted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Parabéns!</CardTitle>
          <div className="space-y-2">
            <p>Você completou o jogo da memória!</p>
            <Badge variant="outline" className="text-lg px-4 py-2">
              {moves} movimentos
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-x-4">
            <Button onClick={initializeGame} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Jogo da Memória - {gameType === 'nomenclatura' ? 'Nomenclatura Técnica' : 'Técnicas e Materiais'}
            </CardTitle>
            <div className="flex gap-4">
              <Badge variant="outline">Movimentos: {moves}</Badge>
              <Badge variant="outline">Pares: {matchedPairs.length}/{gameType === 'nomenclatura' ? nomenclaturaPairs.length : tecnicasPairs.length}</Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`aspect-square cursor-pointer transition-all duration-300 ${getCardStyle(card)}`}
            onClick={() => handleCardClick(card.id)}
          >
            <CardContent className="p-2 h-full flex items-center justify-center">
              <div className="text-center">
                {isCardVisible(card) ? (
                  <div className="text-xs font-medium leading-tight">
                    {card.content}
                  </div>
                ) : (
                  <div className="text-2xl">🃏</div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button onClick={onBack} variant="outline">
          Voltar aos Jogos
        </Button>
      </div>
    </div>
  );
};

export default MemoryGame;