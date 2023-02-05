Frontend 環境構築手順
- .env.example ファイルの中身をもとに[.env ファイルを作成](env.md)する
```bash
# editor-eackendをforkしクローンする

# .envを作成し、 .env.exampleの中身をペーストし書きかえ

# 以下voltaのインストール後とする
# nodeのインストール 
$ volta install node@16.14.2

# yarnのインストール
volta install yarn@1.22.18

# 依存パッケージのインストール
$ yarn install

# ローカル起動
$ yarn dev
```

### コマンドリファレンス

```bash
# lintチェック コミット前に流す
$ yarn run lint
# 上記でエラーになったら以下を流す
$ yarn run lintfix
# パッケージのアップデート
$ yarn update
```
