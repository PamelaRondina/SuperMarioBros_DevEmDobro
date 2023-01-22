# SuperMarioBros_DevEmDobro

* [Html: A Base do FrontEnd](LINK)
* [CSS: Estilizando o Projeto](LINK)

<hr>

## Html: A Base do FrontEnd

- [x] Criar pasta `src` e subpastas `css` e `images`
- [x] Na raiz do projeto criar `index.html`

![image](https://user-images.githubusercontent.com/108991648/213331544-7db5e33f-9b20-4acd-a0ec-6e408f474ceb.png)

- [x] No arquivo `index.html`

```html
   <div class="video">
        <video class="video" autoplay loop muted>
            <source src="src/video/video-mario.mp4" type="video/mp4">
        </video>
    </div>
```
**video** Div criada para a inclusão de um vídeo

```html
<a>   <img src="src/images/logo-chapeu-mario.png" alt="logo chapéu do Mário">     </a>
```
- **src** para localizar o arquivo
- **alt** para escrever o texto alternativo

```html
 <nav>
            <ul class="menu">
                <li>Home</li>
                <li>Detalhes</li>
            </ul>
        </nav>
```
**ul** lista não ordenada
**li** lista ordenada

```html
    <main class="container">
        <div class="informacoes"> 
            <img src="src/images/titulo.png" alt="imagem do título do filme">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo voluptas laudantium voluptatibus molestiae quam architecto provident ipsam ex temporibus minima vitae adipisci, omnis aperiam illo non fugiat ea consequatur.</p>
            <button>Veja o Trailer
            </button>
        </div>
        <img class="mario" src="src/images/super-mario-chars.png" alt="turminha do Mário">    
    </main>
```
**p** parágrafo
**button** botão

- [x] Inserir Fonte 
- [x] Inserir Favicon

<hr>

## CSS: Estilizando o Projeto

### Reset.CSS

- [x] Dentro do diretório `css` incluir um novo arquivo `reset.css`

- [x] No arquivo `index.html` fazer a menção do css

```html
<link rel="stylesheet" href="src/css/style.css">
```

> **src** direcionar para onde o arquivo css está salvo

- [x] Em `style.css` iniciar o arquivo com:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
```

- [x] Editar os itens de navegação: Home e Detalhes

```css
ul {
    list-style: none;

}
```

- list-style: none; = lista sem marcações

- [x] Editar **a** imagem

```css
a {
    text-decoration: none;
}
```

- text-decoration: none = eliminar decoração de link nos textos (cor azul)

### Style.CSS

- [x] Dentro do diretório `css` incluir um novo arquivo `style.css`
- [x] No arquivo `index.html` fazer a menção do css

## Body

## Header

### Cabeçalho

```css
.cabecalho {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    max-width: 1440px;
    margin: auto;
}
```
- display-flex = faz com que os elementos fiquem um ao lado do outro
- justify-content: space-between = espaço igual entre os elementos 
- padding: 30px = tamanho da altura
- max-width: 1440px = largura máxima
- margin: 0 auto = imagem permanecer centralizada

```css
.cabecalho .logo {
    width: 65px;
}
```
- widht = alterar o tamanho da imagem

```css
.cabecalho .menu {
    display: flex;
    height: 100%;
    align-items: center;
```
- display-flex = faz com que os elementos fiquem um ao lado do outro
- height = altura / espaçamento
- align-items: center = alinhar no centro

- [x] No ``index.html` incluir o link na navegação:

```html
<li><a href="#">Home</a></li>
<li><a href="#">Detalhes</a></li>    
```

- [x] No `style.css`, nos itens de navegação: Detalhes e Home

```css
.cabecalho nav li a {
    font-weight: bold;
    color: #ffffff;
    font-size: 25px; 
    padding: 10px 20px;  
    border-radius: 50px;
    transition: 0.2s;
}
```

- font-weight: bold = negrito
- color: #ffffff = cor "branca"
- font-size: 25px = tamanho da fonte
- padding: 10px 20px = tamanho da altura e largura
- border-radius: 50px = arredondamento da borda
- transition: 0.2s = tempo de transição nos botões de navegação

```css
.cabecalho nav li a:hover {
    background-color: #d5011d;
}
```

- Ao clicar nos botões de navegação, sua cor será alterada

```css
.container {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    height: calc(100vh - 132px);
    align-items: center;
    padding: 0 30px 30 px;
}
```
- max-width: 1440px = largura máxima
- margin: 0 auto = imagem permanecer centralizada
- display-flex = faz com que os elementos fiquem um ao lado do outro
- height = cálculo da altura do container - a altura do cabeçalho
- padding: 0 30px = ecima (0) laterais (30) baixo (30)

![image](https://user-images.githubusercontent.com/108991648/213796484-2e3cc794-b050-4f10-a681-1fde1cc0ee14.png)

```css
.container .descricao {
    color: #a8adb7;
    width: 85%;
    font-size: 18px;
    margin: 30px 0;
}
```

- color: #a8adb7 = cor da letra da descrição
- width: 85% = largura
- font-size: 18px = tamanaho da fonte
- margin: 30px 0 = altura e largura 

```css
.container .botao-trailer {
    background-color: #ff0021;
    color: #ffffff;
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    transition: 0.5s all ease-in-out;
    border-radius: 50px; 
}
```
- background-color: #ff0021 = cor do fundo
- color: #ffffff = cor do texto
- padding: 15px = espaçamento do conteúdo com a borda
- font-size: 18px = tamanho da fonte
- font-weight: bold = negrito
- cursor: pointer = mãozinha 
- border: none = elimina a borda
- text-transform: uppercase = toso em Maiúsculo
- transition: 0.5s all ease-in-out = transação em 5s com pulsação
- border-radius: 50px = borda arredondada

```css

.container .botao-trailer:hover {
    transform: scale(1.2);
}
```

- transform: scale(1.2) = ativa a pulsação

```css
.fundo-video {
    background-color: red;
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    overflow: hidden
    display: flex;
    justify-content: center;;
}
```
- background-color: red = visualização para mobile;
- position: absolute = video em posição absoluta
- z-index: -1 = faz com que o vídeo vá para trás do texto
- width: 100vw = ocupar 100% da largura
- height: 100vh = ocupar 100% da altura
- overflow: hidden = imagem transbordar para as laterais

```css
.fundo-video .video {
    height: 100vh;
}
```
- height: 100vh = aumentar altura da tag video

```css
.fundo-video::after {
    content: "";
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%);
}
```
- .fundo-video::after = criar elemento novo 
- content: ""; = elemento aparacerá na inspeção do site
- height: 100vh = altura
- width: 100vw = largura
- position: absolute = elemento em posição absoluta
- top: 0 e left: 0;
- background: linear-gradient (site cssgradient.io)

laterais escuras e miolo colorido

## Criar Modal no Html

- [x] Em `index.html` no final da main criar uma nova div:

```html
   <div clas="modal">
                <div class="conteudo-modal">
                    <span class="fechar-modal">X</span>
                    <iframe id="video" width="560" height="315" src="https://www.youtube.com/embed/Cb4WV4aXBpk" title="Trailer oficial" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
```

- [x] No `style.css` incluir:

```css
.modal {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: rgba(52, 52, 50, 0.749);
    visibility: hidden;
    
}
```
- visibility: hidden = esconder a modal

```css
.conteudo-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    border-radius: 5px;
    gap: 15px;
}
```
- flex-direction: column = X acima - video abaixo
- gap 15px = espaçamento entre o X e o vídeo

```css
.fechar-modal {
    background-color: #ffffff;
    color: #f03a17;
    font-weight: bold;
    font-size: 20px;
    width: 40px;
    text-align: center;
    cursor: pointer;
    border-radius: 10px;
}

.modal iframe {
    border-width: 0;
    width: 640px;
    height: 360;;
}
```

## Criar Responsividade em telas

- [x] Criar `resposive.css` e mencionar no html

- flex-wrap: wrap = se não tem espaço, joga a imagem pra baixo
- max-width: 50%; = reduzir a imagem 