// css-модули
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// изображения
declare module '*.jpg' {
  export default string;
}
declare module '*.png' {
  export default string;
}
