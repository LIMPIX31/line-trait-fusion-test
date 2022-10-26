export const clamp = (value: number, min: number, max: number): number => {
  return value < min ? min : value > max ? max : value
}

export const map = (value: number, in_min: number, in_max: number, out_min = 0, out_max = 100): number => {
  const mapped: number = ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  return clamp(mapped, out_min, out_max)
}
