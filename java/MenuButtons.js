// Создаем новую сущность Vue.js
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  
var demo = new Vue({
    // DOM элемент, к которому прикреплена сущность (div id="mainS")
    el: '#mainS',
    data: {
        active: 'contenthome'
    },
    methods: {
        makeActive: function(item){
            // представление обновляется.
            item = 'content' + item;
            this.active = item;
            //document.getElementsByClassName('AllContent').id = item;
            if(item == 'contenthome'){
                ContentingMain();
                this.active = item;
            }            
            else
                if(item == 'contentmanga'){
                    
                    ContentingManga();
                    Oups();
                    this.active = item;
                }
                else
                    if(item == 'contentpers')
                    {
                        
                        ContentingPers();
                        this.active = item;
                    }
                    else
                    {
                        rand = getRandomInt(1, 5)
                        if(rand == 1)
                            ContentingRand1();
                        else                            
                            if(rand == 2)
                                ContentingRand2();
                            else
                                if(rand == 3)
                                    ContentingRand3();
                                else
                                    ContentingRand4();
                    }
            Contenting();
        }   
    },
})
/*if(item == 'home')
            this.active = item;
            else
                if(item == 'projects')
                this.active = item;
                else
                    if(item == 'services')
                    this.active = item;
                    else
                    this.active = item;*/