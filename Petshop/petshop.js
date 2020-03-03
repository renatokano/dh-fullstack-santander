let listaDePets = [];

let adicionarPet = (nome) => {
    let result = listaDePets.push(nome);
    console.log(listaDePets);
    return result;
}

let listarPets = () => listaDePets;

module.exports = {adicionarPet, listarPets};