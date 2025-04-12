https://typescript-jp.gitbook.io/deep-dive/nodejs


プロジェクトの依存関係設定ファイルであるpackage.jsonをセットアップします。素早くこれを行う方法はこれです：npm init -y

TypeScriptをインストールします(npm install typescript --save-dev)

Node.jsのプログラムに必要な型宣言ファイルnode.d.tsをインストールします(npm install @types/node --save-dev)

TypeScriptの設定ファイルtsconfig.jsonを初期化します(npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs)


```
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

https://jestjs.io/ja/docs/getting-started

```
npm install --save-dev ts-jest
npm i --save-dev @types/jest
npx ts-jest config:init
```