# cdktf-bun-init

Minimal [cdktf](https://learn.hashicorp.com/tutorials/cdktf/get-started) setup alternative to `cdktf init --template=typescript --providers=--providers=@cdktf/provider-aws --local`, using [Bun](https://bun.sh/) and [Biome](https://biomejs.dev/).

## Prerequisites

- [Install Bun](https://bun.sh/docs/installation)

## Setup

Run `bun install` to install all dependencies.

## Plan & Apply

Plan: `bun run cdktf plan cdktf-stack`

Apply: `bun run cdktf apply cdktf-stack`

[Minimal cdk bun setup](https://github.com/keidarcy/cdk-bun-init)