> ⚠️ 이 프로젝트는 아직 진행중에 있습니다. [릴리즈 노트](https://github.com/rainleee/poke/releases)에서 버전을 확인해주세요.

> ⚠️ 현재 Next.js v13이지만, 주된 코드는 v12의 문법으로 작성하고 있습니다. 추후 리팩토링 예정입니다.

# 목차
[배포된 프로젝트 주소](#배포된-프로젝트-주소)

[Overview](#overview)

- [Project Core Specification](#project-core-specification)

[Precondition](#precondition)

[Getting Started](#getting-started)

[Deploy on Vercel](#deploy-on-vercel)

___
## 배포된 프로젝트 주소
https://poke-gules.vercel.app/

## Overview

poke 프로젝트는 포켓몬 목록 조회 및 상세정보를 확인하는 홈페이지입니다. 

간략한 스펙은 Next.js 프레임워크를 기반으로 Apollo Client + GraphQL를 사용하여 서버와 통신합니다. 해당 프로젝트는 서버에서 검색한 데이터를 사용하여 CRUD 기능 중 R을 수행합니다.

### Project Core Specification

- 언어: `TypeScript`, `Javascript`
- Framework: `react.js v18 + Next.js v13`
- 상태 관리: `zustand`
- 스타일링: `stitches(CSS in JS)`

## Precondition
1. api 호출 endpoint는 환경변수로 관리합니다. `.env` 파일에 [NEXT_PUBLIC_GRAPHQL_URI](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser)의 키=값을 세팅합니다. 아래의 정보를 `.env` 파일을 생성하여 세팅해주세요.

```bash
# .env file
NEXT_PUBLIC_GRAPHQL_URI=https://beta.pokeapi.co/graphql/v1beta
```

2. [release-drafter](https://github.com/release-drafter/release-drafter) 과 chatGPT가 코드리뷰를 하는 [ChatGPT-CodeReview](https://github.com/anc95/ChatGPT-CodeReview) github actions이 세팅되어 있습니다. 사용시 TOKEN을 세팅해주거나, 미사용 시 해당 파일을 삭제하시기 바랍니다. `.github/workflows` 디렉토리 안 `.yml` 파일을 삭제해주세요.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
