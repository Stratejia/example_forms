import {z} from "zod";
import {Categories} from "../types/Category";

const performerSchema = z.object({
  name: z.string().trim().min(1, 'Pas assez long!').max(255, 'Trop long!'),
  category: z.nativeEnum(Categories),
}).refine(({ name, category }) => name !== 'Crystal' || category !== Categories.Bald, {
  message: 'Crystal is not bald!',
  path: ['name'],
});

type Performer = z.infer<typeof performerSchema>;

export type { Performer };
export { performerSchema };

