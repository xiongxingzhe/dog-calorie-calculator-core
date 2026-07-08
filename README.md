# Dog Calorie Calculator Core

[![CI](https://github.com/xiongxingzhe/dog-calorie-calculator-core/actions/workflows/ci.yml/badge.svg)](https://github.com/xiongxingzhe/dog-calorie-calculator-core/actions/workflows/ci.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TypeScript utilities for dog calorie planning with RER baseline and pragmatic DER multipliers.

Built by [pawsandpounds.com](https://pawsandpounds.com).

## Installation

```bash
npm install dog-calorie-calculator-core
```

## Quick Start

```ts
import { rerKg, dailyDogCalories } from "dog-calorie-calculator-core"

const rer = rerKg(18) // baseline kcal/day

const maintenance = dailyDogCalories(18, {
  neutered: true,
  activeLevel: "moderate",
})

const weightLoss = dailyDogCalories(18, {
  neutered: true,
  activeLevel: "moderate",
  goal: "weight_loss",
})
```

## API

### `rerKg(kg: number): number`
Returns resting energy requirement baseline using `70 * kg^0.75`.

### `dailyDogCalories(kg: number, profile: DogProfile): number`
Returns rounded daily kcal target.

`DogProfile`:

```ts
type DogProfile = {
  neutered: boolean
  activeLevel: "low" | "moderate" | "high"
  goal?: "maintenance" | "weight_loss"
}
```

## Notes

- Multipliers are intentionally simple for app-layer planning logic.
- Use veterinary guidance for disease states, puppies, pregnancy, or lactation.

## License

MIT
