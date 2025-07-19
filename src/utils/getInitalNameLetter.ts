export function getInitalNameLetter(name: string): string {
  const split = name.split(" ");

  return split[0][0] + split[1][0];
}
