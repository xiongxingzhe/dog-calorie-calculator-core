export type DogGoal = "maintenance" | "weight_loss"
export type DogProfile = {
  neutered: boolean
  activeLevel: "low" | "moderate" | "high"
  goal?: DogGoal
}

export function rerKg(kg: number): number {
  if (!Number.isFinite(kg) || kg <= 0) throw new Error("kg must be > 0")
  return 70 * Math.pow(kg, 0.75)
}

export function dailyDogCalories(kg: number, profile: DogProfile): number {
  const rer = rerKg(kg)
  if (profile.goal === "weight_loss") return Math.round(rer * 1.0)
  if (profile.neutered && profile.activeLevel === "low") return Math.round(rer * 1.2)
  if (profile.neutered && profile.activeLevel === "moderate") return Math.round(rer * 1.4)
  if (profile.neutered && profile.activeLevel === "high") return Math.round(rer * 1.6)
  if (!profile.neutered && profile.activeLevel === "high") return Math.round(rer * 1.8)
  return Math.round(rer * 1.5)
}