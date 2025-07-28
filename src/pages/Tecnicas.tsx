import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Stethoscope } from "lucide-react";

const Tecnicas = () => {
  const navigate = useNavigate();

  const tecnicas = [
    {
      id: 1,
      nome: "Aferição de Sinais Vitais",
      objetivo: "Monitorar os parâmetros vitais do paciente",
      duracao: "10-15 min",
      materiais: ["Termômetro", "Esfigmomanômetro", "Estetoscópio", "Relógio"],
      passos: [
        "Explicar o procedimento ao paciente",
        "Higienizar as mãos",
        "Aferir temperatura corporal",
        "Verificar pressão arterial",
        "Contar frequência cardíaca",
        "Observar frequência respiratória",
        "Registrar os valores obtidos"
      ]
    },
    {
      id: 2,
      nome: "Administração de Medicamentos Via Oral",
      objetivo: "Administrar medicamentos por via oral de forma segura",
      duracao: "5-10 min",
      materiais: ["Medicamento prescrito", "Copo com água", "Bandeja", "Luvas"],
      passos: [
        "Verificar prescrição médica",
        "Higienizar as mãos",
        "Confirmar identidade do paciente",
        "Explicar o procedimento",
        "Preparar a medicação",
        "Administrar o medicamento",
        "Registrar no prontuário"
      ]
    },
    {
      id: 3,
      nome: "Curativos Simples",
      objetivo: "Proteger e promover cicatrização de feridas",
      duracao: "15-20 min",
      materiais: ["Luvas estéreis", "Soro fisiológico", "Gaze estéril", "Esparadrapo", "Antisséptico"],
      passos: [
        "Reunir materiais necessários",
        "Explicar procedimento ao paciente",
        "Posicionar adequadamente o paciente",
        "Calçar luvas estéreis",
        "Retirar curativo anterior",
        "Limpar a ferida com soro fisiológico",
        "Aplicar antisséptico se necessário",
        "Cobrir com gaze estéril",
        "Fixar com esparadrapo",
        "Registrar características da ferida"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-module-tecnicas border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-module-tecnicas-foreground hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-3">
              <Stethoscope className="h-8 w-8 text-module-tecnicas-foreground" />
              <h1 className="text-3xl font-bold text-module-tecnicas-foreground">Técnicas de Enfermagem</h1>
            </div>
          </div>
          <p className="text-module-tecnicas-foreground/70 mt-2">
            Procedimentos essenciais com passo a passo detalhado
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 max-w-4xl mx-auto">
          
          {tecnicas.map((tecnica) => (
            <Card key={tecnica.id} className="overflow-hidden">
              <CardHeader className="bg-module-tecnicas/10">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {tecnica.nome}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {tecnica.objetivo}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {tecnica.duracao}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-6">
                {/* Materiais */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Materiais Necessários
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tecnica.materiais.map((material, index) => (
                      <Badge key={index} variant="outline">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Passo a passo */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Passo a Passo
                  </h3>
                  <ol className="space-y-3">
                    {tecnica.passos.map((passo, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-module-tecnicas text-module-tecnicas-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground leading-relaxed">
                          {passo}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Botão para vídeo (placeholder) */}
                <div className="pt-4">
                  <Button className="w-full bg-module-tecnicas hover:bg-module-tecnicas/90 text-module-tecnicas-foreground">
                    🎥 Assistir Vídeo Demonstrativo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Placeholder para mais técnicas */}
          <Card className="border-dashed border-2 border-muted">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Stethoscope className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Mais técnicas em breve
              </h3>
              <p className="text-muted-foreground text-center">
                Estamos preparando mais 12 técnicas essenciais para completar seu guia de estudos.
              </p>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Tecnicas;