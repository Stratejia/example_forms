import {Performer} from "../schemas/performer";

async function updatePerformer(performer: Performer) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    data: 'Success!',
  };
}

export { updatePerformer };