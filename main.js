const LinksSocialMedia = {
  github: 'Luuwei',
  facebook: 'gislaine.jessica.9',
  instagram: 'gislaine_luuwei'
}

function changeSocialMediaLinks() {
  //for (é o Para do algoritmo) e caso de = ele usa ==, se tiver apenas =, ele esta incrimentando que i  recebe 10. E o i++ (i = i + 1)
  //for (let i = 0; i <= 10; i++)- forma padrao da maioria das linguagens
  //children = filho, for vai rodando enquanto tiver filho dentro do ul que recebeu id="socialLinks".
  //const vai mudando o valor dentro do laço, porque ela é escopo local, ela existe enquanto o for tiver rodando, quando for acaba, ela some e ganha o valor do proximo laço.
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
//associar o atributo de class na li e criar a constante social, vai ser procurado dentro da li todos os filhos usando contagem de posicionamento e referencia dela para atribuir, a const social no lugar do link, smp sendo usado ${} e começando com hifen e para por variavel dentro de outra usa-se [].

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bioGitHub.textContent = data.bio
      foto.src = data.avatar_url
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
