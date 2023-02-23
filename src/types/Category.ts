const Categories = {
  Bald: 'bald',
  Energetic: 'energetic',
} as const;

type Category = (typeof Categories)[keyof typeof Categories];

export type { Category };
export { Categories };