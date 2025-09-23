# Mini Travel Guide!

Um app simples em **React Native** feito com **Expo** que demonstra **transições de páginas** (stack navigation) e uso de componentes reutilizáveis como `SafeScreen`, `Navbar` e `Footer`.

## Instalação

1. Clone o repositório:
	```bash
	git clone https://github.com/hick-hpe/react-native
	cd react-native
	```
2. Instalar as dependências:
	```bash
	npm install
	```
3. Iniciar aplicação:
	```bash
	npm start
	```

> Isso abrirá o **Expo DevTools** no navegador.  
Você pode rodar no **emulador Android/iOS** ou escanear o QR Code no celular com o app **Expo Go**.

## Funcionalidades

-   Navegação entre telas com **React Navigation**.
-   Layout reutilizável usando `SafeScreen`.    
-   Navbar com título dinâmico e botão de voltar.
-   Footer fixo com botões de navegação.
-   Exemplo de passagem de **parâmetros entre telas** (`Home` → `PlaceScreen`).

## Estrutura do projeto
	/components
	  ├── SafeScreen.js   # Layout genérico com Navbar + Footer
	  ├── Navbar.js       # Barra superior
	  └── Footer.js       # Barra inferior
	/screens
	  ├── HomeScreen.js   # Tela inicial
	  ├── AboutScreen.js  # Tela sobre
	  └── PlaceScreen.js  # Tela de detalhes de um local
	App.js                # Configuração de navegação

