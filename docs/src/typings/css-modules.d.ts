declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.m.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.m.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '!*?raw' {
  const src: string;
  export default src;
}
