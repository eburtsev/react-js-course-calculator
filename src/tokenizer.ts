//                     digits   |    function's names     | **  | operators & brackets
const tokenRegex = /\d+(?:\.\d)?|[a-zA-Z]+(?:[a-zA-Z0-9])?|\*{2}|[()+\-/*!^]/g;

export const tokenize = (input: string): (string | number)[] => input.match(tokenRegex).map((value) => (/\d+/.test(value) ? Number(value) : value));
