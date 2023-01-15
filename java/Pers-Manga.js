function Oups(){
    var Manga = new Vue({
        // DOM элемент, к которому прикреплена сущность (div class="CatalogDown")
        el: '#makeAct',
        methods: {
            makeAct: function(itemS){
                // представление обновляется.
                if(itemS == 'eva'){
                    //ContentingEvaManga();
                    ContentingRand4();
                }            
                else
                    if(itemS == 'LiW'){
                        
                        ContentingLiWManga();
                    }
                    else
                        if(itemS == 'JoJo')
                        {
                            
                            ContentingJoJoManga();
                        }
                       
            }   
        },
    })
}