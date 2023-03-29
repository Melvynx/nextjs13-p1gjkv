export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// 🦁 Créer un server context ici avec une propriétés "secretCode"

// 🦁 Créer un server context consumer en ajoutant un petit delay via la function "wait" de 1 milliseconde
