import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, BookOpen } from "lucide-react";

const Nomenclaturas = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const nomenclaturas = [
    {
      id: 1,
      termo: "Anamnese",
      definicao: "Entrevista realizada pelo profissional de saúde ao seu paciente, que tem a intenção de ser um ponto de partida do diagnóstico de uma doença.",
      categoria: "Diagnóstico",
      exemplo: "Durante a anamnese, o enfermeiro coleta informações sobre sintomas e histórico médico."
    },
    {
      id: 2,
      termo: "Assepsia",
      definicao: "Conjunto de medidas que utilizamos para impedir a penetração de micro-organismos em ambiente que logicamente devem estar estéreis.",
      categoria: "Prevenção",
      exemplo: "A assepsia das mãos é fundamental antes de qualquer procedimento."
    },
    {
      id: 3,
      termo: "Bradicardia",
      definicao: "Frequência cardíaca abaixo de 60 batimentos por minuto em adultos.",
      categoria: "Sinais Vitais",
      exemplo: "O paciente apresentou bradicardia durante o monitoramento."
    },
    {
      id: 4,
      termo: "Cianose",
      definicao: "Coloração azulada da pele e mucosas devido à inadequada oxigenação do sangue.",
      categoria: "Sinais Clínicos",
      exemplo: "A cianose perioral indica possível hipóxia."
    },
    {
      id: 5,
      termo: "Dispneia",
      definicao: "Sensação de dificuldade para respirar ou falta de ar.",
      categoria: "Respiratório",
      exemplo: "O paciente relatou dispneia aos pequenos esforços."
    },
    {
      id: 6,
      termo: "Edema",
      definicao: "Acúmulo anormal de líquido nos tecidos, causando inchaço.",
      categoria: "Sinais Clínicos",
      exemplo: "Foi observado edema em membros inferiores."
    },
    {
      id: 7,
      termo: "Febre",
      definicao: "Elevação da temperatura corporal acima de 37,8°C, geralmente causada por infecção ou inflamação.",
      categoria: "Sinais Vitais",
      exemplo: "O paciente apresentou febre de 38,5°C."
    },
    {
      id: 8,
      termo: "Hemostasia",
      definicao: "Processo natural do organismo para interromper o sangramento de um vaso lesionado.",
      categoria: "Fisiologia",
      exemplo: "A hemostasia é essencial para controlar hemorragias."
    },
    {
      id: 9,
      termo: "Hipotensão",
      definicao: "Pressão arterial abaixo dos valores normais (sistólica < 90 mmHg).",
      categoria: "Sinais Vitais",
      exemplo: "A hipotensão pode indicar choque ou desidratação."
    },
    {
      id: 10,
      termo: "Icterícia",
      definicao: "Coloração amarelada da pele e mucosas devido ao aumento da bilirrubina no sangue.",
      categoria: "Sinais Clínicos",
      exemplo: "A icterícia pode indicar problemas hepáticos."
    }
  ];

  const filteredNomenclaturas = nomenclaturas.filter(item =>
    item.termo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definicao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categorias = [...new Set(nomenclaturas.map(item => item.categoria))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-module-nomenclaturas border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-module-nomenclaturas-foreground hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-module-nomenclaturas-foreground" />
              <h1 className="text-3xl font-bold text-module-nomenclaturas-foreground">Nomenclaturas Médicas</h1>
            </div>
          </div>
          <p className="text-module-nomenclaturas-foreground/70 mt-2">
            Dicionário com termos técnicos essenciais para enfermagem
          </p>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-module-nomenclaturas/10 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar termos, definições ou categorias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Categorias:</span>
              {categorias.map((categoria) => (
                <Badge 
                  key={categoria} 
                  variant="secondary" 
                  className="cursor-pointer hover:bg-module-nomenclaturas/20"
                  onClick={() => setSearchTerm(categoria)}
                >
                  {categoria}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredNomenclaturas.length} termo(s) encontrado(s)
            </p>
          </div>

          <div className="grid gap-6">
            {filteredNomenclaturas.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-module-nomenclaturas/5">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl text-foreground">
                      {item.termo}
                    </CardTitle>
                    <Badge variant="outline">
                      {item.categoria}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Definição</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.definicao}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Exemplo de uso</h4>
                    <p className="text-muted-foreground italic">
                      "{item.exemplo}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNomenclaturas.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Nenhum termo encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente buscar com outras palavras-chave ou navegue pelas categorias.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Info sobre expansão */}
          <Card className="border-dashed border-2 border-muted mt-8">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Dicionário em expansão
              </h3>
              <p className="text-muted-foreground text-center">
                Estamos adicionando mais 90 termos essenciais para completar seu dicionário de enfermagem.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Nomenclaturas;