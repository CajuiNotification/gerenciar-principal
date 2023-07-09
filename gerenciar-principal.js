const db=firebase.firestore(),messaging=firebase.messaging(),uid=localStorage.getItem("Uid");try{db.collection("Notifica\xE7\xF5es").where("enviadoPor","==",uid).orderBy("data_hora","desc").get().then(a=>{if(0==a.docs.length){const a=document.querySelector("p[class='textoPrincipal']");a.innerHTML="Voc\xEA n\xE3o cadastrou nenhuma notifica\xE7\xE3o :/"}else{const b=document.querySelector(".recyclerview"),c=a.docs.reduce((a,b)=>""===b.data().link?(a+=`<div class="container-externo">
                                        <div class="conteudo">
                                            <div class="texto">
                                                <h1>${b.data().title}</h1>
                                                <h3>${b.data().body}</h3>
                                                <h6>UidRemetente: ${b.data().enviadoPor}</h6>
                                                <h6>Destinatario(s): ${b.data().enviadoPara}</h6>
                                                <h6>Aberto(s): ${b.data().aberto}</h6>
                                                <h6>Data de envio: ${b.data().data_hora}</h6>
                                            </div>
                                            <div class="imagem">
                                                <img src="${b.data().url}" alt="Imagem">
                                            </div>
                                        </div>
                                    </div>`,a):(a+=`<a class="link" href="${b.data().link}" target="_blank">
                                        <div class="container-externo">
                                            <div class="conteudo">
                                                <div class="texto">
                                                    <h1>${b.data().title}</h1>
                                                    <h3>${b.data().body}</h3>
                                                    <h6>Uidremetente: ${b.data().enviadoPor}</h6>
                                                    <h6>Destinatario(s): ${b.data().enviadoPara}</h6>
                                                    <h6>Aberto(s): ${b.data().aberto}</h6>
                                                    <h6>Data de envio: ${b.data().data_hora}</h6>
                                                </div>
                                                <div class="imagem">
                                                    <img src="${b.data().url}" alt="Imagem">
                                                </div>
                                            </div>
                                        </div>
                                    </a>`,a),"");b.innerHTML=c}}).catch(a=>{alert(a.message)})}catch(a){alert("Erro "+a)}