export const module = {
  rules: [
    {
      test: /\.css$/, // Identifica arquivos com a extensão .css
      use: [
        "style-loader", // Adiciona CSS ao DOM injetando a tag <style>
        "css-loader", // Interpreta os arquivos CSS
        "postcss-loader", // Processa o CSS com o PostCSS
      ],
    },
  ],
};
