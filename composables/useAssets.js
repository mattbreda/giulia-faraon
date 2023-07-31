export default function useAssets() {
  /* const svgs = import.meta.globEager('/src/assets/*.svg');
  const pngs = import.meta.globEager('/src/assets/*.png'); */
  const jpegs = import.meta.globEager('/src/assets/*.jpeg');

  return {
    0: jpegs['/assets/0.jpg'].default,
    1: jpegs['/assets/0.jpg'].default,
    2: jpegs['/assets/0.jpg'].default,
    3: jpegs['/assets/0.jpg'].default
  }; 
}