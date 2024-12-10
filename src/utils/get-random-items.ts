export const getRandomItems = <T>(randomCount: number, array: T[]): T[] => {
  const allItems = [...array];
  const randomItems = [];

  if (!array.length) {
    return [];
  }

  for (let i = 0; i < Math.min(randomCount, array.length); i++) {
    const randomIndex = Math.floor(Math.random() * allItems.length);
    const randomItem = allItems.splice(randomIndex, 1)[0];
    randomItems.push(randomItem);
  }

  return randomItems;
};
