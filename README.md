# 미디어나비 블로그

## 개요

미디어나비의 블로그는 GitHub의 무료 호스팅 서비스 GitHub Pages에서 호스팅하고 있습니다.

React 기반의 정적 사이트 생성기 Gatsby를 사용합니다.

## 브랜치

저장소의 브랜치는 총 3개 입니다.

1. main: 사용하지 않는 브랜치입니다.
2. dev: 개발시 사용하는 브랜치입니다. 작업이 완료된 뒤에는 이 브랜치에 푸시합니다.
3. master: Github Actions에 등록된 Workflow 중 pages-build-deployment라는 작업이 자동 배포를 수행하고 그 결과물을 푸시하는 저장소입니다. \
Github Pages의 설정에서 blog.medianavi.kr 혹은 medianavi.github.io로 접근했을 때 이 브랜치를 보도록 설정되어 있습니다.

## 구조

* /content: 블로그의 구조를 제외한 컨텐츠(포스트 등)를 담는 디렉토리입니다. post, works의 발행은 이 디렉토리의 내용으로 수행합니다.
  * /blog: 블로그에 발행할 포스트를 담은 디렉토리입니다.
* /public: 빌드된 결과물이 자동생성되는 디렉토리입니다. 직접 조작하는 경우는 없습니다.
* /src: 블로그의 개발을 위한 모든 소스를 포함하는 디렉토리입니다.
  * /assets
  * /components
  * /images
  * /pages
  * /scss
  * /templates
* /static

기타 Gatsby 전반에 대한 파일의 용도와 구조는 Gatsby 공식 웹사이트를 참고해 주세요.

## 포스트 발행 방법

`/content` 디렉토리 아래에 새로운 디렉토리를 생성합니다. 디렉토리의 이름은 곧 포스트의 slug(url)이 됩니다. 즉, 각 디렉토리는 하나의 포스트를 담당합니다. 디렉토리 이름은 Blog와 Works가 서로 다른 규칙으로 관리되고 있습니다. Blog 포스트의 경우 `YYYY-MM-DD-name-of-post` 꼴로, Works의 경우 프로젝트 이름을 영문명으로 적어줍니다.

### 디렉토리 명의 예시

> 2022-01-21-history-of-ai

> 2022-10-24-ai-for-creation

> kdata

> kpf

각 포스트 디렉토리 아래에 index.md를 생성하고, 작성시에는 [작성 규칙](https://docs.google.com/document/d/16lJqAfo4MGstxBaMlf-mKSyzEAyuy--DBo9qHRMFcY8/edit?usp=share_link) 대로 작성합니다.

포스트 상단의 yaml에서 category를 “blog”, “works” 두 가지로 설정할 수 있으며 어떤 것으로 설정하는 지에 따라 웹사이트 블로그 내에서 다른 화면에 출력할 것인지 결정할 수 있습니다.

```yaml
---
title: 포스트의 제목
...
category: "blog"
...
---
```

## 배포

작성이 완료가 됐다면 변경된 내용을 저장하고, commit과 push를 합니다. **이때 push 하는 브랜치는 반드시 dev 브랜치여야 합니다.**

push가 완료되면 일정 시간 이후에 Github Actions가 작동하면서 자동으로 배포를 진행합니다. 배포의 진행과 완료 여부는 저장소의 [Actions 탭](https://github.com/medianavi/medianavi.github.io/actions)에서 확인이 가능하며, Slack 채널 ‘미디어나비-홈페이지'에 bot 메시지가 올라옵니다.

배포 중 이상이 생겼다면 Actions 탭에서 확인이 가능합니다.

---

_이하는 블로그 포스트와 무관한 정보입니다. 필요한 경우에만 참고해주세요._

## Github Actions

자동 배포시 사용하는 Github Actions에서 알아두어야 할 몇 가지 정보입니다. (자세한 사용법은 Gatsby Github Actions 자동 배포 등으로 검색하면 많은 정보들이 나옵니다.)

* 자동 배포의 수행을 위해 [Repository Secrets](https://github.com/medianavi/medianavi.github.io/settings/secrets/actions)를 사용합니다. 이 페이지에서 확인이 가능합니다.
* 배포에 사용되는 actions는 `actions/checkout@v1`과 `enriikke/gatsby-gh-pages-action@v2`를 이용하고 있습니다.

## 도메인의 변경

1. [Settings => Pages](https://github.com/medianavi/medianavi.github.io/settings/pages)에서 변경할 도메인을 설정합니다.
2. 저장소의 ‘CNAME’ 파일을 열어 변경한 도메인을 입력합니다.
