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

## Acesso do cliente
- O cadastro e o login do cliente devem solicitar somente número de celular e código de verificação enviado por SMS.
- A autenticação será feita pelo Firebase Authentication com telefone (OTP/SMS). O cliente não precisará criar nem memorizar uma senha.
- O código SMS deve ser validado pelo Firebase; nunca armazenar códigos de verificação ou senhas em texto puro no banco de dados.
- Depois de entrar, o cliente poderá consultar anúncios, acompanhar empresas, receber avisos de promoções e configurar suas preferências de notificações.
- A permissão para notificações deve ser solicitada de forma clara e opcional. O cliente poderá ativar ou desativar notificações e escolher os tipos de avisos que deseja receber.
- O envio real de notificações ainda dependerá da configuração do Firebase Cloud Messaging e de lógica de backend confiável.

## Página pública de cada empresa
Ao abrir o anúncio ou perfil de uma empresa, o cliente deverá encontrar em uma única página:
- Nome da empresa e informações de contato.
- Botão para ligar ou iniciar conversa pelo WhatsApp usando o telefone cadastrado.
- Endereço completo do estabelecimento.
- Lista de produtos disponíveis para venda e respectivas informações/preços, quando fornecidos.
- Promoções e ofertas publicadas pela própria empresa.
- Mapa incorporado com marcador mostrando a localização daquele estabelecimento.
- Botão **“Ver localização / Como chegar”** para abrir o ponto em um aplicativo de mapas.
- Se a empresa possuir mais de uma unidade, mostrar cada unidade separadamente, com endereço e marcador próprios, permitindo ao cliente escolher qual deseja visitar.

O cliente deve conseguir ver os produtos, as promoções, o contato e a localização sem precisar procurar essas informações em telas desconectadas.

## Localização dos estabelecimentos no mapa
- Cada página de empresa/estabelecimento deve exibir um mapa com um marcador na localização correspondente ao endereço cadastrado.
- O endereço será convertido em coordenadas por um serviço de geocodificação; se não puder ser localizado com confiança, mostrar o endereço textual e permitir correção, sem inventar um ponto no mapa.
- O cadastro continua solicitando somente nome da empresa, endereço completo, nome da pessoa de contato e telefone/WhatsApp; coordenadas são obtidas pelo sistema a partir do endereço, sem pedir latitude/longitude à empresa.

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
3. Ative Firebase Authentication com o provedor **Telefone** (verificação por SMS) e crie o Cloud Firestore.
4. Configure os domínios autorizados e as medidas antiabuso exigidas pelo Firebase Phone Auth; teste o fluxo de SMS antes de liberar aos clientes.
5. Publique as regras de segurança de `firestore.rules` no Firestore Rules.
6. Instale dependências com `npm install` e execute `npm run dev`.

## Modelo de acesso previsto
- Cliente: autenticação por telefone/SMS, perfil próprio e leitura de conteúdo público aprovado.
- Empresa: gerencia apenas o próprio cadastro, produtos e anúncios; não pode aprovar a própria empresa nem alterar o estado de pagamento.
- Administrador: aprova/reprova empresas, modera anúncios e administra assinaturas por ambiente confiável.
- O status de pagamento deve ser atualizado por integração de pagamento/webhook confiável, nunca por um botão ou campo controlado pelo navegador do cliente.
- Preferências de notificações devem ser salvas por cliente e respeitadas pelo serviço de envio.

## Pagamento e custos
O preço comercial planejado é R$ 49,90/mês por empresa. **Nenhum gateway de pagamento foi conectado e nenhuma cobrança está ativa.** Antes de integrar, será necessário escolher o provedor, definir como a renovação/cancelamento funcionará e conferir as tarifas do provedor. Não ativar serviços pagos nem gerar cobranças sem autorização explícita.

## Limitações atuais
Esta versão ainda é uma demonstração front-end. A tela não está conectada ao Firebase; cadastros e anúncios são mantidos apenas na memória e desaparecem ao recarregar. Não há autenticação funcional, proteção ativa do painel, aprovação real, verificação de assinatura, pagamentos, página dinâmica de empresa, mapa dinâmico por endereço, geocodificação, upload de mídia, geração real de imagem/vídeo por IA, publicação automática ou notificações push.

## Variáveis de ambiente
Veja `.env.example`. Nunca coloque chaves privadas, service account, tokens administrativos ou segredos no frontend. A configuração web do Firebase pode ser pública; a proteção real depende de Authentication, Security Rules e App Check.

## Rodar localmente
1. Instale Node.js LTS.
2. Execute `npm install`.
3. Copie `.env.example` para `.env` e preencha os dados do app web Firebase.
4. Execute `npm run dev`.

**Segurança:** não cadastrar credenciais, senhas ou tokens diretamente no código-fonte.
