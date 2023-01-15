
var demo = new Vue({
    // DOM элемент, к которому прикреплена сущность (div id="mainS")
    el: '#mainS',
    data: {
        active: 'home'
    },
    methods: {
        makeActive: function(item){
            if (item == 'home'){    
                ReactDOM.render(
                    <div class="content">
                        <div class="poster">
                        <div>
                            <img src="../img/Koro.jpg" alt="Poster" class="im"></img>
                        </div>
                        <div>
                            <h2>Почему ученики хотят ликведировать своего учителя?</h2>
                            <p>Самый худший класс - в данном случае это не просто слова рассерженной преподавательницы, а репутация группы 3-E, на которую остальные школьники смотрят сверху вниз, считая ребят «классом лузеров». Всё в корне меняется, когда загадочное суперсильное существо почти уничтожает Луну и грозит уничтожить Землю, при этом выдвигая условие: супер-опасный вторженец хочет стать учителем, да не простым - обучить необучаемый «класс лузеров», сделать худший класс лучшим. В то же время его новым ученикам отводится иная роль: любым способом к выпускному расправиться со своим новым учителем и спасти мир.</p>
                            <p>«Ansatsu Kyoushitsu» - душевное и проникновенное произведение с приятной стилизацией, обилием шуток и курьёзов, поднимающее сразу несколько злободневных вопросов и пытающееся на них ответить. История о том, как загадочный учитель раскрывает в «худших из худших» их таланты и учит поступать правильно, рекомендуется к ознакомлению всем без исключения.</p>
                        </div>
                        </div>

                        <div class="strings">

                            <div class="stringsUp">
                                <div></div>
                                <div><h2>Для вас</h2></div>
                                <div></div>
                                <div><button name="next">Next</button></div>
                            </div>
                            <div class="stringsDown">
                                <div></div>
                                <div class="film">
                                    <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                    <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/Kagy.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">В любви как на войне</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/JJ.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">JoJo`s</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/Pivo.jpeg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/rei.jpeg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                                </div>
                                <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="strings">

                        <div class="stringsUp">
                            <div></div>
                            <div><h2>Для вас</h2></div>
                            <div></div>
                            <div><button name="next">Next</button></div>
                        </div>
                        <div class="stringsDown">
                            <div></div>
                            <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/Kagy.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">В любви как на войне</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/JJ.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">JoJo`s</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/Pivo.jpeg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/rei.jpeg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                            </div>
                            <div class="film">
                                <div><img src="../img/Eva.jpg" alt="Poster" class="imag"></img></div>
                                <div><a href="Kaguya.html"><h2 class="filmN">Евангелион</h2></a></div>
                            </div>
                        </div>
                    </div>
                </div>, 
                document.getElementById('content'));
            }
        }
    }
})
