# SinopMix
Marketplace local de Sinop – MT. Plataforma demonstrativa para aproximar clientes, empresas, lojas e prestadores de serviços.

## Recursos de interface implementados
- Catálogo demonstrativo de produtos, categorias, busca e carrinho local.
- Mural de anúncios com filtros: promoções, vagas, serviços, eventos, comunicados, imóveis e veículos.
- Painel administrativo demonstrativo.
- Cadastro temporário de empresas no estado da tela.
- Assistente de anúncios que organiza uma descrição e legenda para revisão.
- Prévia de espaços para imagem e vídeo.
- Área de publicações e controle visual de notificações.

## Preparação do Firebase (projeto exclusivo SinopMix)
1. Crie um projeto Firebase novo chamado **SinopMix**. Não reutilize projetos de outros aplicativos.
2. No console Firebase, registre um aplicativo Web e copie as configurações para um arquivo local `.env`, usando `.env.example` como modelo.
3. Ative Authentication (e-mail/senha) e crie o Cloud Firestore.
4. Publique as regras de segurança de `firestore.rules` no Firestore Rules.
5. Instale dependências com `npm install` e execute `npm run dev`.

## Variáveis de ambiente
Veja `.env.example`. Nunca coloque chaves privadas, service account, tokens administrativos ou segredos no frontend. A configuração web do Firebase pode ser pública; a proteção real depende de Authentication, Security Rules e App Check.

## Modelo de acesso previsto
- Cliente: perfil próprio e leitura de conteúdo público aprovado.
- Empresa: gerencia apenas o próprio cadastro, produtos e rascunhos/anúncios pendentes.
- Administrador: aprovação e moderação por custom claim `admin: true`, definida somente em ambiente confiável pelo proprietário do projeto.

## Limitações atuais
Esta versão ainda é uma demonstração front-end. A tela não está conectada ao Firebase; cadastros e anúncios são mantidos apenas na memória e desaparecem ao recarregar. Não há autenticação funcional, proteção ativa do painel, pedidos reais, pagamentos, upload de mídia, geração real de imagem/vídeo por IA, publicação automática ou notificações push.

A próxima integração no código deverá ligar telas e formulários às funções Firebase, implementar login/recuperação de senha, validação, armazenamento de mídia, pedidos e notificações. A IA de mídia e os envios push poderão gerar custos e só devem ser habilitados após escolha e autorização explícita.

## Rodar localmente
1. Instale Node.js LTS.
2. Clone este repositório.
3. Execute `npm install`.
4. Copie `.env.example` para `.env` e preencha os dados do app web Firebase.
5. Execute `npm run dev`.

**Segurança:** não cadastrar credenciais, senhas ou tokens diretamente no código-fonte.
