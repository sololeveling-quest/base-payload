# What is this?

`base-payload` is PayloadCMS configured with default TailwindCSS. 

## How I setup this basecode?

```shell
pnpm create payload-app
pnpm install -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

edit file `tailwind.config.js`:
```
...
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"]
...
```

```shell
cd ./src/app
mkdir '(my-app)'
cd '(my-app)'
touch globals.css
```

create file `globals.css` with the following content:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## What If I want to update PayloadCMS to latest version?

```shell
pnpm -g npm-check
npm-check -u
```

## Attributes

- **Database**: mongodb
- **Storage Adapter**: localDisk
