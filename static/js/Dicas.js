/* Parte da tela de Dicas Sustentáveis */
 
function abrirConteudo(id) {
 
    // Fecha todos os conteúdos
    const todosConteudos = document.querySelectorAll(".conteudo");
 
    todosConteudos.forEach((item) => {
 
        // Fecha os outros conteúdos
        if (item.id !== id) {
            item.classList.remove("ativo");
        }
 
    });
 
    // Abre ou fecha o conteúdo clicado
    const conteudo = document.getElementById(id);
 
    conteudo.classList.toggle("ativo");
}
const menuToggle =
    document.getElementById("menuToggle");


/*
 * Seleciona os links
 */
const menuLinks =
    document.getElementById("menuLinks");



/*
 * Verifica se os elementos existem
 */
if (menuToggle && menuLinks) {


    /* =====================================================
       ABRIR / FECHAR MENU
       ===================================================== */

    menuToggle.addEventListener(
        "click",
        function () {


            /*
             * Adiciona/remove a classe ativo
             */
            const menuAberto =
                menuLinks.classList.toggle("ativo");


            /*
             * Faz o hambúrguer virar X
             */
            menuToggle.classList.toggle("ativo");


            /*
             * Atualiza acessibilidade
             */
            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );


            /*
             * Atualiza descrição do botão
             */
            if (menuAberto) {

                menuToggle.setAttribute(
                    "aria-label",
                    "Fechar menu"
                );

            }

            else {

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }


        }
    );



    /* =====================================================
       FECHAR AO CLICAR EM UM LINK
       ===================================================== */

    const links =
        menuLinks.querySelectorAll("a");


    links.forEach(function (link) {


        link.addEventListener(
            "click",
            function () {


                /*
                 * Fecha os links
                 */
                menuLinks.classList.remove(
                    "ativo"
                );


                /*
                 * Volta o X para hambúrguer
                 */
                menuToggle.classList.remove(
                    "ativo"
                );


                /*
                 * Atualiza acessibilidade
                 */
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );


            }
        );


    });


}