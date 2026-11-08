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

## Rodar localmente
1. Instale Node.js LTS.
2. Clone este repositório.
3. Execute `npm install`.
4. Execute `npm run dev`.

## Limitações importantes desta versão
Esta é uma demonstração front-end. Cadastros e anúncios são mantidos apenas na memória da página e desaparecem ao recarregar. Não há autenticação ou proteção real do painel administrativo, banco de dados, upload de mídia, geração real de imagem/vídeo por IA, publicação automática em redes sociais, nem envio real de notificações push.

Para produção, as próximas integrações necessárias são:
1. Backend e banco de dados com regras de acesso por função (administrador, empresa e cliente).
2. Login seguro, verificação de empresas e trilha de auditoria.
3. Serviço de IA para geração de texto e mídia, com limites e aprovação humana.
4. Armazenamento de imagens/vídeos e fila de publicação.
5. Notificações push com consentimento do cliente e preferências por categoria.
6. Moderação, denúncias, validade dos anúncios e controles antifraude.

**Segurança:** não cadastrar credenciais, senhas ou tokens diretamente no código-fonte.