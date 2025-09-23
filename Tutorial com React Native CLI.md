# Criação de um app com React Native

Este tutorial visa ajudar a configurar o ambiente React Native para Android.

## Pré-requisitos
- [Android studio](https://developer.android.com/studio?hl=pt-br)
- [Java JDK - compatíveis com versões de 17 a 20](https://www.oracle.com/br/java/technologies/downloads/)
- [Node.js](https://nodejs.org/pt)

## Configuração do Android Studio

- Instalar o Android Studio
    > Dica: Use a instalação `Standard` do Android Studio, que já inclui os pacotes básicos para o emulador. Pacotes instalados no Standard: <br/>
        - `Android Emulator`: simula celular no PC <br/>
        - `Android Emulator Hypervisor Driver`: acelera emulador com virtualização <br/>
        - `Android SDK Build-Tools 36.1`: compilação e build de apps <br/>
        - `Android SDK Platform 36`: bibliotecas do sistema Android <br/>
        - `Android SDK Platform-Tools`: adb para depuração <br/>
        - `Google Play Intel x86_64 Atom System Image`: imagem Android com Google Play <br/>
        - `Sources for Android 36`: código-fonte Android <br/>
- Com o **Android Studio** aberto, selecione: `More Actions > SDK Manager`
- SDK Platforms
    > Aqui, selecionar algumas versões do Android, incluindo a mais recente
    - Android 16.0 ("Baklava")
    - Android 15.0 ("VanillaIce")
    - Android 13.0 ("Tiramisu")
    - Android 11.0 ("R")
- SDK Tools
    - Android SDK Build
    - Android Emulator
    - Android SDK Command-line Tools (latest)
    - NDK
    - CMake
    - Android SDK Platform-Tools
    > Caso o processador da sua máquina seja `Intel`:
    - Intel x86 Emulator Accelerator (HAXM Installer)


## Configurar variáveis de ambiente

### Windows
- Java
    - `JAVA_HOME`: C:\Program Files\Java\jdk-\<versao>
    - Adicione ao `Path`:
        - `%JAVA_HOME%\bin`
- Android Studio
    - `ANDROID_HOME`: C:\Users\\<seu usuário>\AppData\Local\Android\Sdk
    - `ANDROID_SDK_ROOT`: C:\Users\\<seu usuário>\AppData\Local\Android\Sdk
        > `ANDROID_SDK_ROOT` é uma boa prática, visto que `ANDROID_HOME` é obsoleto.
    - Adicione ao `Path`:
        - `%ANDROID_HOME%\emulator`
        - `%ANDROID_HOME%\platform-tools`
        - `%ANDROID_SDK_ROOT%\emulator`
        - `%ANDROID_SDK_ROOT%\platform-tools`
    > Isso permite usar `adb`, emulator e outras ferramentas no terminal.

### Linux
- Java  
    Adicione no arquivo `~/.bashrc`, `~/.zshrc` ou similar:
    ```bash
    export JAVA_HOME=/usr/lib/jvm/java-<versao>
    export PATH=$JAVA_HOME/bin:$PATH
    ```
- Android Studio  
    O SDK geralmente fica em `~/Android/Sdk`.  
    Adicione no mesmo arquivo de configuração do shell:
    ```bash
    export ANDROID_HOME=$HOME/Android/Sdk
    export ANDROID_SDK_ROOT=$HOME/Android/Sdk
    export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_SDK_ROOT/emulator:$ANDROID_SDK_ROOT/platform-tools:$PATH
    ```
    > `ANDROID_SDK_ROOT` é recomendado, pois `ANDROID_HOME` está obsoleto.


Após configurar as variáveis de ambiente, reinicie o computador. Isso garantirá que elas sejam lidas corretamente.

## Criar e testar um projeto React Native CLI

1. Abra o terminal.
2. Criar o projeto:
    ```bash
    npx @react-native-community/cli init MeuApp
    ```
3. Entrar na pasta do projeto:
    ```bash
    cd MeuApp
    ```
4. Rodar no Android (certifique-se de ter Android Studio e dispositivo/emulador):
    ```bash
    npx react-native run-android
    ```
5. Rodar no iOS (somente Mac):
    ```bash
    npx react-native run-ios
    ```

## Identificar e corrigir erros:
Para verificar se está tudo configurado corretamente, execute:
```bash
npx react-native doctor
```
Possível saída:
```bash
Common
 ✓ Node.js - Required to execute JavaScript code
 ✓ npm - Required to install NPM dependencies
 ✓ Metro - Required for bundling the JavaScript code

Android
 ✓ Adb - Required to verify if the android device is attached correctly
 ✖ JDK - Required to compile Java code
   - Version found: 24.0.2
   - Version supported: >= 17 <= 20
 ✓ Android Studio - Required for building and installing your app on Android
 ✓ ANDROID_HOME - Environment variable that points to your Android SDK installation
 ✓ Gradlew - Build tool required for Android builds
 ✓ Android SDK - Required for building and installing your app on Android

Errors:   1
Warnings: 1

Usage
 › Press f to try to fix issues.
 › Press e to try to fix errors.
 › Press w to try to fix warnings.
 › Press Enter to exit.
```

Neste caso:
- Versão diferente do Java instalado:
    - Instalar em um a pasta separada. Ex: `C:\Program Files\Java\jdk-17`
    - Configurar o `JAVA_HOME` para usar temporariamente a versão suportada pelo projeto (>= 17 <= 20):
        - Windows:
            ```bash
            set JAVA_HOME=C:\Program Files\Java\jdk-17.0.12
            set PATH=%JAVA_HOME%\bin;%PATH%
            ```
        - Linux:
            ```bash
            export JAVA_HOME=/usr/lib/jvm/java-<versao>
            export PATH=$JAVA_HOME/bin:$PATH
            ```

## Rodar no emulador Android
1. Abra o Android Studio > Tools > AVD Manager > Crie um novo dispositivo virtual (ex.: Pixel 5)
0. Escolha System Image > API 36 com Google Play
0. Clique Play para iniciar o emulador
0. No terminal, dentro do projeto:
    ```bash
    npx react-native run-android
    ```

> O app será compilado e aberto no emulador.

## Rodar em celular físico
1. Ative `Opções de Desenvolvedor e Depuração USB` no Android.
1. Conecte o celular via USB.
1. Ative `Instalação via USB` no Android.
1. Verifique se o dispositivo foi reconhecido:
    ```bash
    adb devices
    ```
    > ADB significa Android Debug Bridge. <br/>
    É uma ferramenta de linha de comando que permite você conectar seu computador a um dispositivo Android (celular ou emulador) para depuração e execução de comandos.
    
    Este comando irá mostrar uma saída semelhante a isto:
    ```
    List of devices attached
    PJFANVGMQSFMIJHA        device
    ```

1. Rodar app no celular:
    ```bash
    npx react-native run-android
    ```

> O app será instalado e aberto diretamente no celular.

