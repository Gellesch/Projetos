export default function calculateIMC(weight, height) {
  const imc = weight / (height / 100) ** 2

  return imc.toFixed(2)
}