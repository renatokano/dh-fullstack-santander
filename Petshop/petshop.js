let listaDePets = [];

let adicionarPet = (nome) => {
    return listaDePets.push(nome);
}

let listarPets = () => listaDePets;
console.log(listaDePets);

module.exports = {adicionarPet, listarPets};