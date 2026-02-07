# shadcn-admin (Base UI Edition)

This project is a **fork** of [satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin).

## What Changed

This repository keeps the original page structure, interactions, and overall design style, while making one core architectural migration:

- Replaced the original **Radix UI**-based component implementations with **Base UI**
- Updated both shared UI wrappers and business-level component usage accordingly
- Added compatibility adjustments for API and state-attribute differences during migration (for example, `data-*` state selectors, trigger behavior, and controlled/uncontrolled state handling)

In short: this is a fork focused on **replacing Radix UI with Base UI**.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- TanStack Router / TanStack Table
- Base UI

## Local Development

```bash
pnpm install
pnpm dev
```

## Quality Checks

```bash
pnpm lint
pnpm check:type
pnpm build
```

## Upstream Repository

- Original project: [https://github.com/satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin)

## License

This fork inherits the upstream project license. See the `LICENSE` file in this repository for details.
