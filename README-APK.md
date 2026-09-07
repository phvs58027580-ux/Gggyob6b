# Pocket World 3D — versão APK-ready

Esta pasta mantém o jogo web original e adiciona configuração para empacotamento Android com Capacitor 8.

## Gerar APK sem PC

O projeto inclui `.github/workflows/android-apk.yml`.

1. Crie/abra um repositório no GitHub pelo celular.
2. Envie todos os arquivos desta pasta para o repositório.
3. Abra **Actions** → **Build Android APK** → **Run workflow**.
4. Aguarde a execução terminar.
5. Abra a execução concluída e baixe o artefato `pocket-world-3d-debug-apk`.
6. No Android, abra o APK e permita a instalação de apps desta fonte quando solicitado.

## Se usar um computador depois

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK final de teste:
`android/app/build/outputs/apk/debug/app-debug.apk`

## Identidade do app

- Nome: Pocket World 3D
- ID Android: `com.pocketworld.game`

## Observação

O APK gerado pelo workflow é um **debug APK**, adequado para instalar e testar no Android. Para publicação na Play Store, o app deve ser assinado com uma chave de release.
