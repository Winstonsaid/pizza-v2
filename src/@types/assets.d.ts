declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.jpg" {
  const content: any;
  export default content;
}
declare module "*.scss" {
  const content: any;
  export default content;
}
declare module "lodash.debounce" {
  const debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait?: number
  ) => T;
  export default debounce;
}
