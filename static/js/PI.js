const guias = {
    vidro: {
        titulo: "Vidro",
        cor: "vidro",
        aceito: [
            "Frascos de perfume",
            "Garrafas de bebidas",
            "Potes de alimentos , conservas e alimentos ",
            "Vidros Verdes, marrons e transparentes"
        ],
        naoAceito: [
            "Espelhos e vidros temperados",
            "Porcelana,cerâmica e cristal",
            "Ampolas de medicamentos ",
            "Vidro laminado(para-brisa)"
        ],
        dicas: [
            "Lavar com água e sabão, enxaguar bem",
            "Remover rotúlos, tampas e anéis de borracha ",
            " Quebrar os vidros em pedaços grandes(mão protegida)",
            "NÃO precisa secar completamente o vidro ",
        ]

    },

    papel: {


        titulo: "Papel",
        cor: "papel",
        aceito: [
            "Jornais e Revistas ",
            "Papelão e caixas de delivery",
            "Cadernos e folhas de sulfite  ",
            "Papel de escritório (sem grampos)"
        ],

        naoAceito: [
            "Papel plastificado ou metalizado ",
            "Guardanapos e papéis seujos de comida",
            "Papéis carbonos e térmicos",
            "Fitas adesivas e etiquetas",

        ],

        dicas: [
            " Remover grampos,clipes e espirais metálicas",
            " Separar papel sulfite do papelão",
            "Dobrar caixas grandes ao meio ",
            "NÃO precisa estar seco ou limpo",
        ],
    },

    plastico: {
        titulo: "Plástico",
        cor: "plastico",
        aceito: [
            "Garrafas PET(água,refrigerante)",
            "Embalagens de shampoo e detergente",
            "Potinhos de margarina/requeijão",
            "Sacos plásticos limpos(supermercado) ",

        ],
        naoAceito: [
            "Isopor (EPS) e embalagens de fast-food",
            "Plástico sujo ou com comida",
            " CDs,DvDs e canetas",
            " Brinquedos e utensílios plásticos ",
        ],
        dicas: [
            "LAVAR SEMPRE (remove resíduo de comida)",
            "Remover tampas e rotúlos ",
            "Amassar garrafas para economizar espaço",
            " Separar por cor se possivél (transparente/colorido)",

        ],
    },

    organico: {
        titulo: "Orgânico",
        cor: "organico",
        aceito: [
            "Cascas de frutas e legumes",
            "Restos de comida(arroz,feijão)",
            "Folhas secas e podas de jardim",
            "Saquetas de chá e café usado"
        ],
        naoAceito: [
            "Carne, peixes e derivados ",
            "Oléo de cozinha usado",
            "Pão mofado",
            " Frutas estragadas com mofo",
        ],
        dicas: [
            "Corte em pedaços pequenos: Quanto menor os pedaços, mais rápido eles se decompõem! Corte cascas, legumes e restos de comida em tamanhos pequenos.",
            "Retire embalagens: Tire todo plástico, papel ou metal que estiver junto com o alimento. Só coloque a matéria orgânica pura!.",
            "Evite líquidos em excesso: Não coloque muita água ou molhos junto, pois pode estragar. O ideal é que esteja úmido, mais não encharcado.",

        ],


    },


    metal: {
        titulo: "Metal",
        cor: "metal",
        aceito: [
            "Peças e sucatas de metal (ferro, aço, alumínio, cobre, latão, etc.)",
            "Latas de alumínio (refrigerante, cerveja, alimentos, etc.)",
            "Fios e cabos de metal (sem revestimento plástico ou com metal aparente)",
            "Tampas metálicas e arames",
            "Componentes metálicos de eletrodomésticos e eletrônicos",
        ],
        naoAceito: [
           "Materiais com metal misturado a plástico ou madeira",
            "Embalagens plásticas ou de vidro",
            "Lixo orgânico ou restos de comida",
            "Produtos perigosos como pilhas, baterias, lâmpadas e tintas",
            "Medicamentos e seringas (categoria Saúde)" ,
        ],
        dicas: [
            "Separe os metais por tipo sempre que possível (alumínio, cobre, aço, ferro, etc.)",
            "Retire restos de alimentos ou líquidos das embalagens metálicas",
            "Amasse latas e embalagens para reduzir o volume e facilitar o transporte",
            "Procure pontos de logística reversa, ferros-velhos, ecopontos ou cooperativas de reciclagem",
            "Mantenha os recipientes bem vedados para evitar sujeira e contaminação",
        ]
    },

    saude: {
        titulo: "Saude",
        cor: "saude",
        aceito: [
            "Medicamentos vencidos, estragados ou fora de uso",
            "Seringas, agulhas e lancetas descartáveis",
            "Luvas,curativos, gazes e algodão contaminados com sangue/ fluidos ",
            "Termômetros antigos de mercúrio",
        ],
        naoAceito: [
            "Caixas de papelão e bulas de remédios(vão na coleta de Papel)",
            "Frascos de xarope /remédios limpos e sem resíduo(vão no Vidro ou Plástico)",
            "Lixo doméstico comum (papel higiênico, fraldas)",
            "Lixo infectante hospitalar em grande escala"
        ],
        dicas: [
            "Jamais jogue remédios no vaso anitário ou na pia, pois contaminam os rios e a água potável",
            "Entregue medicamentos e frascos em pontos de coleta em farmácias, drogarias e postos de saúde(UBS).",
            "Armazene agulhas e perfurocortantes em garrafas PET rígidas ou recipientes de plástico duro antes de descartar para proteger os trabalhadores da limpeza.",

        ]
    },
    radioativo: {
        titulo: "Radioativo",
        cor: "radioativo",
        aceito: [
            "Equipamentos e materiais de medicina nuclear e radioterapia",
            "Fontes saladas e detectores de fumaça industriais específicos",
            "Resíduos de laboratórios de pesquisas nucleares ou raio-x industrial",

        ],
        naoAceito: [
            "Aparelhos eletrônicos domésticos (celulares,computadores - vão no e-lixo)",
            "Lâmpadas comuns, pilhas ou bateriais",
            "Qualquer resíduo reciclável ou orgânico do dia a dia ",

        ],
        dicas: [
            "Resíduos radioativos não são gerados em residências comuns e exigem manejo industrial especializado",
            "A coleta, transporte e descarte são regularmentos exclusivamente pela CNEN(Comissão Nacional de Energia Nuclear)",
            "Caso encontre algum equipamento médico/industrial abandonadocom símbolo de radioatividade, afaste-se e acione as autoridades sanitárias ou a Defesa Civil.",
            ""
        ]
    },
    misturado: {
        titulo: "Misturado",
        cor: "misturado",
        aceito: [
            "Fraldas descartáveis, absorventes e lençois umedecidos",
            "Papel higiênico,guardanapos muito engordurados e papéis de uso sanitário ",
            "Poeira de varrição, sacos de aspirador e cinzas ",
            "Excrementos de animais de estimação e areia sanitária ",
        ],
        naoAceito: [
            "Materiais recicláveis limpos(papel,papelã,plástico,metal,vidro)",
            "Restos orgânicos compostáveis(cascas de alimentos, borra de café )",
            "Pilhas,eletrônicos ou produtos químicos ",
            ""
        ],
        dicas: [
            "Rejeito é o lixo que realmente não tem como ser reciclado nem compostado, indo direto para o aterro sanitário.",
            "Reduza a geração de rejeito substituindo itens descartáveis por reutilizáveis quando possivél",
            "Embale bem os resíduos em sacos resistentes para evitar odores e proliferação de insetos/vetores de doenças.",

        ]
    }
}
function montarConteudo(dados) {
    return `
        <h4>${dados.titulo}</h4>

        <strong>O que é Aceito:</strong>
        <ul>
            ${dados.aceito.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <hr>

        <strong>O que NÃO é Aceito:</strong>
        <ul>
            ${dados.naoAceito.map(item => `<li>${item}</li>`).join('')}
        </ul>

        <hr>

        <strong>Dicas:</strong>
        <ul>
            ${dados.dicas.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
}


function openModal(tipo) {

    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');
    const title = document.getElementById('modalTitle');
    const modalBox = modal.querySelector('.modal-box');

    const dados = guias[tipo];

    if (!dados) {
        console.log("Tipo não encontrado:", tipo);
        return;
    }

    modalBox.classList.remove(
        'vidro',
        'papel',
        'plastico',
        'organico',
        'metal',
        'saude',
        'radioativo',
        'misturado'
    );

    modalBox.classList.add(dados.cor);


    title.innerText = `Detalhes de Resíduo: ${dados.titulo}`;

    content.innerHTML = montarConteudo(dados);

    modal.classList.add('active');
}


function closeModal() {
    document.getElementById('modal').classList.remove('active');
}


document.querySelectorAll('.btn-card').forEach(btn => {

    btn.addEventListener('click', () => {

        const tipo = btn.dataset.tipo;

        openModal(tipo);

    });

});


document.getElementById('closeModal').addEventListener('click', closeModal);

document.querySelector('.modal-overlay').addEventListener('click', closeModal);
const menuToggle =
    document.getElementById("menuToggle");

const menuLinks =
    document.getElementById("menuLinks");


if (menuToggle && menuLinks) {

    /*
     * Abre e fecha o menu
     */
    menuToggle.addEventListener(
        "click",
        function () {

            const menuAberto =
                menuLinks.classList.toggle("ativo");


            /*
             * Faz o hambúrguer virar X
             */
            menuToggle.classList.toggle("ativo");


            /*
             * Acessibilidade
             */
            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );

        }
    );


    /*
     * Fecha o menu quando clicar
     * em algum link
     */
    document
        .querySelectorAll(".menu-links a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    menuLinks.classList.remove(
                        "ativo"
                    );

                    menuToggle.classList.remove(
                        "ativo"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}