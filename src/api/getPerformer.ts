import {performerSchema} from "../schemas/performer";
import {Categories} from "../types/Category";

async function getPerformer() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const performer = {
    name: 'Crystal',
    category: Categories.Energetic,
  };

  return performerSchema.parse(performer);
}

export { getPerformer };