# Prospector de I.A

Prospecção comercial semiautomática com mensagens revisadas por você. Feito com React, TanStack Start e Lovable Cloud (Postgres e Auth). Funções protegidas executam no servidor da aplicação, não em Edge Functions separadas.

## Começar
Crie sua conta, confirme o e-mail, cadastre suas ofertas e importe as empresas. A página inicial contém somente uma demonstração fictícia; as páginas privadas mostram seus dados reais.

## Secrets
Configure `IA_CHAVE` com sua chave do Google AI Studio e `IA_PROVEDOR=gemini` (padrão quando ausente). Também aceita `openai` com uma chave OpenAI. Nunca coloque a chave no código ou na planilha. A geração utiliza apenas os dados públicos importados; não visita automaticamente sites ou redes sociais.

## Google Maps e importação
No Apify, execute um exportador de empresas do Google Maps por categoria e cidade. Exporte CSV ou Excel com `title, categoryName, city, neighborhood, phone, website, totalScore, reviewsCount`. Em Importar lista, escolha o arquivo, revise as empresas aceitas e os motivos de descarte, e confirme. Formato simples: `nome, categoria, cidade, bairro, telefone, site, instagram`. Telefones são normalizados com 55, duplicados por telefone são descartados e números claramente fixos são removidos; isso não comprova que um número tem WhatsApp.

## Envio e privacidade
O padrão é 20 primeiras mensagens por dia no fuso de São Paulo. O botão abre `wa.me` com o texto e registra a abertura como enviado; não comprova envio nem entrega. Você confirma no WhatsApp e marca respostas manualmente. Follow-up fica disponível 3 dias depois se não houve resposta. Pedidos de saída bloqueiam novas abordagens. Dados privados por usuário; logs preservam geração e abertura do WhatsApp. Legítimo interesse não dispensa avaliação de conformidade com a LGPD.

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
