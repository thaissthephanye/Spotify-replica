import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

//ctrl + ; = comentário no vscode

//rafce

//Arrow function
//const app2 = () => <h1>olá, mundo!</h1>;

//nomeação de variável, função...
//camelCase
//primeira minúscula e as demais maiúsculas

//nomeação de componente
//PascalCase
//todas as palavras juntas e a primeira em maiúscula

//export default, posso importar com qualquer nome e sem chaves
//export sem default, só posso importar entre chaves e com o nome exportado

// selfie closing tag
//<Header></Header>
//<Header />

//colocar javascript no meio do html no jsx, utiliza-se chaves {}

//tem um root é react

//nomeação de classes em CSS
//metodologia BEM
//blocks
//elements
//modifier
//bloco__elemento--modificador
//header__link
//header__link--small
// nomes compostos são separados por -

//tag vazia em React se chama Fragment ou Fragmento

//componentes recebem "props"

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

/* <div className="item-list__container">
          {Array(items)
            .fill()
            .map((currentValue, index) => (
              <SingleItem
                key={`${title} ${index}  
              `}
              /> */

// id={currObj.id}
// name={currObj.name}
// image={currObj.image}
// banner={currObj.banner}

// quando componentes se rerenderiza
// uma das ocasiões é quando uma variavel
// é usada por esse componente é atualizada

//hooks no react
