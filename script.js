// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [
    {nome: "Wayne Barnett", ruolo: "Founder & CEO", foto: "img/wayne-barnett-founder-ceo.jpg"},
    {nome: "Angela Caroll", ruolo: "Chief Editor", foto: "img/angela-caroll-chief-editor.jpg"},
    {nome: "Walter Gordon", ruolo: "Office Manager", foto: "img/walter-gordon-office-manager.jpg"},
    {nome: "Angela Lopez", ruolo: "Social Media Manager", foto: "img/angela-lopez-social-media-manager.jpg"},
    {nome: "Scott Estrada", ruolo: "Developer", foto: "img/scott-estrada-developer.jpg"},
    {nome: "Barbara Ramos", ruolo: "Graphic Designer", foto: "img/barbara-ramos-graphic-designer.jpg"},
]

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(`Nome: ${member.nome}, Ruolo: ${member.ruolo}, Foto: ${member.foto}`);
}