import hood_ids from '../geojson/hood_ids';

export const getHoodFromID = id => {
  for (let i in hood_ids) {
    const hood = hood_ids[i];
    if (hood.hoods_id === id) {
      return hood;
    }
  }
};
