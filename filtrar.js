fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then((json)=>
            {
                const ul = document.getElementById('listaProdutos')
                json.forEach((item)=>{
                    const li = document.createElement("li");
                    li.innerHTML = `
                        <a href="#">
                            <img width="50" src="${item.image}" alt="nao sei">
                            <span class="item-name">${item.title}</span>
                        </a>
                    `;
                    ul.appendChild(li);
                }) 
            })

            function filtrar(){
                var input,
                filter,
                ul,
                li,
                a,
                i,
                span,
                txtValue,
                count = 0

                //PEGAR OS ELEMENTOS HTML A SEREM USADOS

                input = document.getElementById('inputBusca');
                ul = document.getElementById('listaProdutos');

                //FILTRO
                filter = input.value.toUpperCase();

                //PEGAR TODAS AS LI's DA LISTA

                li = ul.getElementsByTagName("li");

                //PERCORRER TODOS OS LI's
                for(i = 0; i < li.length; i++){
                    //PEGAR A TAG A DO ELEMENTO PERCORRIDO
                    a = li[i].getElementsByTagName("a")[0];
                    //PEGAR O TEXTO DENTRO DA TAG A
                    txtValue = a.textContent || a.innerText;
                    //VERIFICAR SE OQUE O USUARIO BATE COM O TEXTO DA TAG A

                    if(txtValue.toUpperCase().indexOf(filter) > -1 ){
                        //AQUI È PARA CASO O VALOR DER CERTO OU SEJA OQUE FOI DIGITADO BATE COM OQ ESTA DENTRO DA VARIAVEL
                        li[i].style.display = "";
                        // INCREMENTAR O CONTADOR
                        count++;
                        // PEGAR A TAG SPAN DO ITEM 
                        span = li[i].querySelector(".item-name");
                        if(span){
                            span.innerHTML = txtValue.replace(new RegExp(filter, "gi"), (match)=>{
                                return "<strong>" + match + "</strong>";
                            })
                        }
                    }else{
                        li[i].style.display = "none";
                    }
                }
               
                if(count === 0){
                    ul.style.display = "none";
                }else{
                    ul.style.display = "block";
                }
                
            }