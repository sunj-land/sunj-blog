export let count = 1;

export function addCount() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
