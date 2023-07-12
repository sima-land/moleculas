// css-модули
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// svg как react-компоненты
declare module '*.svg' {
  const content: React.ElementType<React.SVGProps<SVGSVGElement>>;
  export default content;
}

// изображения
declare module '*.jpg' {
  export default string;
}
declare module '*.png' {
  export default string;
}
