import type { WorkspaceData } from './data';
import { today, type Lead } from './rules';

const samples = [
  { nome: 'Clínica Viva Bem', categoria: 'Clínica odontológica', bairro: 'Vila Mariana', nota: 4.9, avaliacoes: 328, follow: true },
  { nome: 'Studio Bella', categoria: 'Salão de beleza', bairro: 'Pinheiros', nota: 4.8, avaliacoes: 216, follow: true },
  { nome: 'Ótica Visão', categoria: 'Ótica', bairro: 'Moema', nota: 4.9, avaliacoes: 482, follow: false },
  { nome: 'Pet House', categoria: 'Pet shop', bairro: 'Vila Mariana', nota: 4.9, avaliacoes: 307, follow: false },
  { nome: 'Espaço Equilíbrio', categoria: 'Clínica de estética', bairro: 'Jardins', nota: 4.8, avaliacoes: 193, follow: false },
  { nome: 'Auto Center Prime', categoria: 'Oficina mecânica', bairro: 'Brooklin', nota: 4.7, avaliacoes: 156, follow: false },
];

const leads: Lead[] = samples.map((sample, index) => ({
  id: `demo-${index}`,
  nome: sample.nome,
  categoria: sample.categoria,
  bairro: sample.bairro,
  cidade: 'São Paulo',
  nota_google: sample.nota,
  avaliacoes_google: sample.avaliacoes,
  telefone: '',
  site: '',
  instagram: '',
  observacao: 'Empresa fictícia para demonstração',
  origem: 'demonstração',
  saiu: false,
  user_id: 'demo',
  created_at: '2026-11-19',
  contato: {
    id: `contact-${index}`,
    empresa_id: `demo-${index}`,
    status: sample.follow ? 'enviado' : 'a_mandar',
    sistema_sugerido: index === 5 ? 'Resgate de orçamentos' : 'Atendente de I.A no WhatsApp',
    mensagem: `Olá, equipe da ${sample.nome}! Vi que vocês são referência em ${sample.categoria.toLowerCase()} em ${sample.bairro}.\nMuitas empresas do segmento deixam de atender quem chama fora do horário.\nPosso mostrar um atendente de I.A funcionando com o nome de vocês?\nSe não fizer sentido, é só me falar que eu não mando mais.`,
    follow_up: `Olá, equipe da ${sample.nome}! Faz sentido mostrar como seria o atendimento com I.A de vocês?`,
    follow_up_em: sample.follow ? today() : null,
    enviado_em: sample.follow ? '2026-11-16T12:00:00Z' : null,
    respondeu_em: null,
    anotacao: '',
    user_id: 'demo',
    created_at: '2026-11-19',
  },
}));

export const demoData: WorkspaceData = {
  leads,
  offers: [{
    id: 'offer-demo',
    nome: 'Atendente de I.A no WhatsApp',
    para_quem: 'Clínicas, salões, lojas',
    dor: 'Clientes sem resposta fora do horário',
    resultado: 'Atendimento contínuo e agendamento organizado',
    created_at: '',
    user_id: 'demo',
  }],
  settings: { limite: '20', cidade: 'São Paulo', tom: 'Conversacional', assinatura: '' },
  logs: [],
};
