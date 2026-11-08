# SinopMix
Marketplace local de Sinop – MT. Plataforma para aproximar clientes, empresas, lojas e prestadores de serviços.

## Regras comerciais e de administração definidas
- O cadastro da empresa deve solicitar somente: nome da empresa, endereço completo, nome da pessoa de contato e telefone/WhatsApp.
- Toda empresa cadastrada fica com status **pendente** até aprovação manual do administrador do SinopMix.
- A assinatura comercial planejada custa **R$ 49,90 por mês por empresa**.
- A empresa só poderá publicar/divulgar depois de cumprir as duas condições: aprovação do administrador e mensalidade confirmada como ativa.
- Com a assinatura ativa, a empresa poderá divulgar diferentes tipos de conteúdo no SinopMix: produtos, promoções, serviços, vagas de emprego, eventos, comunicados, imóveis, veículos e outras ofertas permitidas pelas regras da plataforma.
- A aprovação da empresa e a confirmação da mensalidade são controles distintos. Pagar não aprova automaticamente uma empresa, e aprovação administrativa não substitui o pagamento.
- Anúncios continuam sujeitos à moderação, às leis aplicáveis e às regras de conteúdo do SinopMix. Conteúdo enganoso, ilegal, fraudulento ou que viole direitos de terceiros deve ser recusado.

## Recursos de interface implementados
- Catálogo demonstrativo de produtos, categorias, busca e carrinho local.
- Mural de anúncios com filtros: promoções, vagas, serviços, eventos, comunicados, imóveis e veículos.
- Painel administrativo demonstrativo.
- Cadastro temporário de empresas no estado da tela.
- Assistente de anúncios que organiza uma descrição e legenda para revisão.
- Prévia de espaços para imagem e vídeo.
- Área de publicações e controle visual de notificações.

## Preparação do Firebase (projeto exclusivo SinopMix)
1. Use o projeto Firebase **SinopMix**. Não reutilize projetos de outros aplicativos.
2. Registre um aplicativo Web e copie as configurações para um arquivo local `.env`, usando `.env.example` como modelo.
3. Ative Authentication (e-mail/senha) e crie o Cloud Firestore.
4. Publique as regras de segurança de `firestore.rules` no Firestore Rules.
5. Instale dependências com `npm install` e execute `npm run dev`.

## Modelo de acesso previsto
- Cliente: perfil próprio e leitura de conteúdo público aprovado.
- Empresa: gerencia apenas o próprio cadastro, produtos e anúncios; não pode aprovar a própria empresa nem alterar o estado de pagamento.
- Administrador: aprova/reprova empresas, modera anúncios e administra assinaturas por ambiente confiável.
- O status de pagamento deve ser atualizado por integração de pagamento/webhook confiável, nunca por um botão ou campo controlado pelo navegador do cliente.

## Pagamento e custos
O preço comercial planejado é R$ 49,90/mês por empresa. **Nenhum gateway de pagamento foi conectado e nenhuma cobrança está ativa.** Antes de integrar, será necessário escolher o provedor, definir como a renovação/cancelamento funcionará e conferir as tarifas do provedor. Não ativar serviços pagos nem gerar cobranças sem autorização explícita.

## Limitações atuais
Esta versão ainda é uma demonstração front-end. A tela não está conectada ao Firebase; cadastros e anúncios são mantidos apenas na memória e desaparecem ao recarregar. Não há autenticação funcional, proteção ativa do painel, aprovação real, verificação de assinatura, pagamentos, upload de mídia, geração real de imagem/vídeo por IA, publicação automática ou notificações push.

## Variáveis de ambiente
Veja `.env.example`. Nunca coloque chaves privadas, service account, tokens administrativos ou segredos no frontend. A configuração web do Firebase pode ser pública; a proteção real depende de Authentication, Security Rules e App Check.

## Rodar localmente
1. Instale Node.js LTS.
2. Clone este repositório.
3. Execute `npm install`.
4. Copie `.env.example` para `.env` e preencha os dados do app web Firebase.
5. Execute `npm run dev`.

**Segurança:** não cadastrar credenciais, senhas ou tokens diretamente no código-fonte.
