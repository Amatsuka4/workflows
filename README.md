# workflows

再利用可能な GitHub Actions ワークフロー集。

## ワークフロー

| ファイル | 説明 |
|---|---|
| `ai-security-check.yml` | PRの差分をDeepSeekでレビュー。主にセキュリティに関する致命的な変更を発見する目的。 |

## 使い方

1. Secretsに `DEEPSEEK_API_KEY` を登録
2. `.github/workflows/` に `examples/caller.yml` を参考にワークフローを追加

```yaml
jobs:
  ai-security-check:
    uses: Amatsuka4/workflows/.github/workflows/ai-security-check.yml@main
    secrets:
      chat-token: ${{ secrets.DEEPSEEK_API_KEY }}
```
