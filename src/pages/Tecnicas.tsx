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
      nome: "Lavagem das Mãos",
      objetivo: "Remover microrganismos e prevenir infecções cruzadas",
      duracao: "1-2 min",
      materiais: ["Sabão líquido", "Água corrente", "Papel toalha", "Álcool gel 70%"],
      passos: [
        "Retirar joias e relógio",
        "Abrir a torneira e molhar as mãos",
        "Aplicar sabão nas palmas das mãos",
        "Friccionar palma com palma",
        "Friccionar dorso e espaços interdigitais",
        "Friccionar unhas e punhos",
        "Enxaguar com água corrente",
        "Secar com papel toalha",
        "Fechar torneira com papel toalha"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 2,
      nome: "Aferição de Temperatura Corporal",
      objetivo: "Avaliar a presença de febre, hipotermia ou normalidade térmica",
      duracao: "2-3 min",
      materiais: ["Termômetro digital", "Algodão com álcool", "Luvas de procedimento"],
      passos: [
        "Higienizar as mãos e calçar luvas",
        "Higienizar o termômetro com álcool",
        "Explicar o procedimento ao paciente",
        "Posicionar termômetro na axila, oral ou timpânico",
        "Aguardar o sinal sonoro do aparelho",
        "Fazer a leitura e anotar o valor",
        "Higienizar novamente o termômetro",
        "Descartar luvas e higienizar as mãos"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 3,
      nome: "Aferição de Pressão Arterial",
      objetivo: "Avaliar a pressão sistólica e diastólica do paciente",
      duracao: "3-5 min",
      materiais: ["Esfigmomanômetro", "Estetoscópio", "Álcool 70%"],
      passos: [
        "Posicionar paciente sentado em repouso",
        "Colocar manguito no braço na altura do coração",
        "Palpar artéria braquial e posicionar estetoscópio",
        "Inflar manguito até 20-30 mmHg acima da pulsação",
        "Desinflar lentamente (2-3 mmHg por segundo)",
        "Identificar 1º som (sistólica) e último som (diastólica)",
        "Registrar valores (ex: 120x80 mmHg)",
        "Higienizar equipamentos"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 4,
      nome: "Aferição de Frequência Cardíaca",
      objetivo: "Avaliar batimentos por minuto, ritmo e amplitude do pulso",
      duracao: "1-2 min",
      materiais: ["Relógio com ponteiro dos segundos", "Papel para anotação"],
      passos: [
        "Posicionar paciente em repouso",
        "Localizar artéria radial com dedos indicador e médio",
        "Não usar o polegar para palpar",
        "Contar batimentos por 1 minuto completo",
        "Observar ritmo (regular/irregular)",
        "Avaliar amplitude (forte/fraco)",
        "Registrar FC, ritmo e característica",
        "Comunicar alterações à equipe"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 5,
      nome: "Aferição de Frequência Respiratória",
      objetivo: "Avaliar o número de movimentos respiratórios por minuto",
      duracao: "1 min",
      materiais: ["Relógio", "Papel para registro"],
      passos: [
        "Observar discretamente os movimentos torácicos",
        "Não informar ao paciente que está contando",
        "Contar inspiração + expiração = 1 movimento",
        "Contar por 1 minuto completo",
        "Observar ritmo e padrão respiratório",
        "Identificar sinais de desconforto",
        "Registrar FR e características",
        "Reportar alterações significativas"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 6,
      nome: "Aferição de Glicemia Capilar",
      objetivo: "Avaliar níveis de glicose no sangue",
      duracao: "3-5 min",
      materiais: ["Glicosímetro", "Lanceta", "Tira-teste", "Álcool 70%", "Algodão", "Luvas"],
      passos: [
        "Higienizar mãos e calçar luvas",
        "Higienizar dedo do paciente com álcool",
        "Inserir tira-teste no glicosímetro",
        "Puncionar lateral do dedo com lanceta",
        "Coletar primeira gota na tira-teste",
        "Pressionar local com algodão",
        "Aguardar resultado no visor",
        "Registrar valor e orientar paciente",
        "Descartar materiais adequadamente"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 7,
      nome: "Administração de Medicamentos Via Oral",
      objetivo: "Administrar medicamentos por via oral de forma segura",
      duracao: "5-10 min",
      materiais: ["Medicamento prescrito", "Copo com água", "Bandeja", "Luvas"],
      passos: [
        "Verificar prescrição médica (5 certos)",
        "Higienizar as mãos e calçar luvas",
        "Confirmar identidade do paciente",
        "Explicar o procedimento",
        "Preparar medicação na bandeja",
        "Administrar medicamento com água",
        "Observar deglutição",
        "Registrar no prontuário",
        "Monitorar efeitos adversos"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 8,
      nome: "Administração Intramuscular",
      objetivo: "Administrar medicamentos na musculatura de forma segura",
      duracao: "5-10 min",
      materiais: ["Seringa", "Agulha 25x7 ou 30x7", "Medicamento", "Álcool 70%", "Algodão", "Luvas"],
      passos: [
        "Preparar medicação conforme prescrição",
        "Escolher local adequado (ventroglúteo, vasto lateral)",
        "Higienizar mãos e calçar luvas",
        "Posicionar paciente adequadamente",
        "Fazer antissepsia da pele",
        "Introduzir agulha em ângulo de 90°",
        "Aspirar para verificar refluxo",
        "Injetar medicamento lentamente",
        "Retirar agulha e comprimir local"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 9,
      nome: "Administração Endovenosa",
      objetivo: "Administrar medicamentos diretamente na corrente sanguínea",
      duracao: "5-15 min",
      materiais: ["Seringa", "Agulha", "Medicamento", "Álcool 70%", "Garrote", "Luvas", "Algodão"],
      passos: [
        "Preparar medicação conforme prescrição",
        "Higienizar mãos e calçar luvas",
        "Posicionar membro e aplicar garrote",
        "Fazer antissepsia do local de punção",
        "Puncionar veia com agulha biselada",
        "Aspirar para confirmar refluxo sanguíneo",
        "Soltar garrote e administrar medicamento",
        "Retirar agulha e comprimir local",
        "Observar sinais de extravasamento"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 10,
      nome: "Sondagem Vesical",
      objetivo: "Introduzir sonda na bexiga para drenagem urinária",
      duracao: "15-30 min",
      materiais: ["Sonda vesical", "Luvas estéreis", "Gel lubrificante", "Antisséptico", "Bolsa coletora", "Seringa"],
      passos: [
        "Explicar procedimento e posicionar paciente",
        "Higienizar mãos e calçar luvas estéreis",
        "Fazer antissepsia da região genital",
        "Lubrificar extremidade da sonda",
        "Introduzir sonda gentilmente no meato",
        "Observar saída de urina",
        "Insuflar balonete (sonda de demora)",
        "Conectar bolsa coletora",
        "Fixar sonda e registrar procedimento"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 11,
      nome: "Coleta de Urina para Exames",
      objetivo: "Coletar amostra de urina de forma estéril",
      duracao: "5-10 min",
      materiais: ["Frasco estéril", "Luvas", "Antisséptico", "Gaze"],
      passos: [
        "Orientar higiene íntima adequada",
        "Calçar luvas de procedimento",
        "Abrir frasco sem contaminar",
        "Orientar jato médio (1º jato no vaso)",
        "Coletar urina no frasco estéril",
        "Fechar frasco imediatamente",
        "Identificar amostra com dados",
        "Encaminhar ao laboratório rapidamente",
        "Registrar coleta no prontuário"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 12,
      nome: "Oxigenoterapia",
      objetivo: "Fornecer oxigênio suplementar para melhorar oxigenação",
      duracao: "5-10 min",
      materiais: ["Cilindro de O2", "Fluxômetro", "Umidificador", "Cateter nasal ou máscara", "Água destilada"],
      passos: [
        "Verificar prescrição médica",
        "Explicar procedimento ao paciente",
        "Conectar umidificador ao fluxômetro",
        "Ajustar fluxo conforme prescrição",
        "Posicionar cateter nasal ou máscara",
        "Verificar conforto e tolerância",
        "Monitorar saturação de oxigênio",
        "Registrar início da terapia",
        "Observar sinais de melhora"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 13,
      nome: "Punção Venosa Periférica",
      objetivo: "Obter acesso venoso para administração de medicamentos",
      duracao: "5-15 min",
      materiais: ["Cateter periférico", "Garrote", "Álcool 70%", "Luvas", "Esparadrapo", "Seringa", "SF 0,9%"],
      passos: [
        "Selecionar veia adequada",
        "Higienizar mãos e calçar luvas",
        "Aplicar garrote proximal ao local",
        "Fazer antissepsia da pele",
        "Puncionar veia com cateter",
        "Observar refluxo sanguíneo",
        "Retirar mandril e conectar extensor",
        "Testar permeabilidade com SF",
        "Fixar cateter com esparadrapo"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 14,
      nome: "Banho no Leito",
      objetivo: "Promover higiene e conforto do paciente acamado",
      duracao: "30-45 min",
      materiais: ["Bacias com água", "Sabonete neutro", "Toalhas", "Luvas", "Roupas de cama", "Biombo"],
      passos: [
        "Explicar procedimento e preservar privacidade",
        "Reunir materiais e aquecer água",
        "Posicionar biombo e calçar luvas",
        "Descobrir só a região a ser lavada",
        "Iniciar pela face sem sabonete",
        "Lavar tórax, membros superiores",
        "Trocar água e lavar genitália",
        "Posicionar em decúbito lateral",
        "Lavar dorso, nádegas e membros inferiores",
        "Secar, hidratar e trocar roupas"
      ],
      video: "https://youtube.com/watch?v=exemplo"
    },
    {
      id: 15,
      nome: "Curativo Simples",
      objetivo: "Proteger ferida e promover cicatrização",
      duracao: "10-20 min",
      materiais: ["Luvas estéreis", "Soro fisiológico", "Gaze estéril", "Esparadrapo", "Antisséptico", "Pinça"],
      passos: [
        "Reunir materiais e explicar procedimento",
        "Higienizar mãos e calçar luvas",
        "Retirar curativo anterior com cuidado",
        "Observar características da ferida",
        "Limpar ferida com SF de dentro para fora",
        "Secar com gaze estéril",
        "Aplicar antisséptico se prescrito",
        "Cobrir com gaze estéril",
        "Fixar com esparadrapo",
        "Registrar aspectos da ferida"
      ],
      video: "https://youtube.com/watch?v=exemplo"
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

                {/* Botão para vídeo */}
                <div className="pt-4">
                  <Button 
                    className="w-full bg-module-tecnicas hover:bg-module-tecnicas/90 text-module-tecnicas-foreground"
                    onClick={() => window.open(tecnica.video, '_blank')}
                  >
                    🎥 Assistir Vídeo Demonstrativo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Informações */}
          <Card className="bg-module-tecnicas/5 border-module-tecnicas/20">
            <CardContent className="flex flex-col items-center justify-center py-8">
              <Stethoscope className="h-12 w-12 text-module-tecnicas mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                15 Técnicas Completas
              </h3>
              <p className="text-muted-foreground text-center">
                Todas as técnicas essenciais de enfermagem com passo a passo detalhado, materiais e vídeos demonstrativos.
              </p>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Tecnicas;