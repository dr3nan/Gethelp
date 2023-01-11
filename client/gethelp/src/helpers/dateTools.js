export const getDateFromDateString = (dateString) => {
  if (typeof dateString !== 'string') throw new Error(`expected dateString to be of type String: ${typeof dateString} received`);
  return new Date(dateString);
}
