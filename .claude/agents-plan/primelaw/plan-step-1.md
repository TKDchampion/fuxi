# Plan Step 1 — 建立 Next.js 專案 + 設定

## 目標
在 `/Users/wangjunyuan/Desktop/fuxi` 初始化 Next.js 15 專案，配置 Tailwind CSS 自訂顏色、字體、全域樣式。

## 任務清單
- [ ] `npx create-next-app@latest` 初始化專案（App Router、TypeScript、Tailwind）
- [ ] 設定 `tailwind.config.ts` 加入 PrimeLaw 品牌色
- [ ] 設定 `app/layout.tsx` 引入 Google Fonts（Work Sans + Open Sans）
- [ ] 設定 `app/globals.css` 全域基礎樣式

## 設計 Token
| Token | 值 |
|-------|----|
| `accent` | `#b99566` |
| `accent-dark` | `#9a7a4e` |
| `dark-bg` | `#141313` |
| `dark-secondary` | `#3c312e` |
| `text-primary` | `#212529` |
| `text-muted` | `#666666` |
| `section-bg` | `#f8f9fa` |

## 完成條件
- `npm run dev` 可正常啟動
- Tailwind 自訂色可使用
- Google Fonts 載入成功

## 狀態
pending
