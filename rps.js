var elementos = document.querySelectorAll('.player-options div > img');
        var playerOpt = "";
        var inimigoOpt = "";
        var pontos = 0;


        function validarVitoria(){

            
            let score = document.querySelector('.score');

            let vencedor = document.querySelector('.vencedor');

            //validar papel
            if(playerOpt == 'paper'){
                if(inimigoOpt == 'paper'){
                    //empate
                    vencedor.innerHTML = 'Empate';
                }else if(inimigoOpt == 'scissor'){
                    //Inimigo ganhou
                    vencedor.innerHTML = 'Perdeu';
                    pontos--;
                    score.innerHTML = "Placar: " + pontos;
                }else if(inimigoOpt == 'rock'){
                    //Player ganhou
                    vencedor.innerHTML = 'Ganhou';
                    pontos++;
                    score.innerHTML = "Placar: "+pontos;
                }
            }
            //validar tesoura
            if(playerOpt == 'scissor'){
                if(inimigoOpt == 'scissor'){
                    //empate
                    vencedor.innerHTML = 'Empate';
                }else if(inimigoOpt == 'rock'){
                    //Inimigo ganhou
                    vencedor.innerHTML = 'Perdeu';
                    pontos--;
                    score.innerHTML = "Placar: " + pontos;
                }else if(inimigoOpt == 'paper'){
                    //Player ganhou
                    vencedor.innerHTML = 'Ganhou';
                    pontos++;
                    score.innerHTML = "Placar: "+pontos;
                }
            }
             //validar pedra
             if(playerOpt == 'rock'){
                if(inimigoOpt == 'rock'){
                    //empate
                    vencedor.innerHTML = 'Empate';
                }else if(inimigoOpt == 'paper'){
                    //Inimigo ganhou
                    vencedor.innerHTML = 'Perdeu';
                    pontos--;
                    score.innerHTML = "Placar: " + pontos;
                }else if(inimigoOpt == 'scissor'){
                    //Player ganhou
                    vencedor.innerHTML = 'Ganhou';
                    pontos++;
                    score.innerHTML = "Placar: "+pontos;
                }
            }



        }

        function resetInimigo(){
            const enemyOptions = document.querySelectorAll('.enemy-options div > img');
            for (var i=0; i< enemyOptions.length; i++) {
                enemyOptions[i].style.opacity = 0.3;
            }
        }

        function inimigoJogar(){
            let rand = Math.floor(Math.random()*3);
            

            const enemyOptions = document.querySelectorAll('.enemy-options div > img');
            resetInimigo();
            for (var i=0; i< enemyOptions.length; i++){
                if (i == rand) {
                    enemyOptions[i].style.opacity = 1;
                    inimigoOpt = enemyOptions[i].getAttribute('opt');
                }
            }
            //alert(playerOpt);
            //alert(inimigoOpt);
            validarVitoria();
        }
        
        

        function resetOpacityPlayer() {
            for (var i=0; i<elementos.length; i++){
                elementos[i].style.opacity = 0.3;
            }

        }
      
        for (var i=0; i<elementos.length; i++){
                elementos[i].addEventListener('click', function(t){
                    resetOpacityPlayer();
                    t.target.style.opacity = 1;
                    playerOpt = t.target.getAttribute('opt');
                    inimigoJogar();
                });
            }



        /*elementos.forEach(addEventListener('click', function(t){
            resetOpacityPlayer();
            t.target.style.opacity = 1;
        }))*/