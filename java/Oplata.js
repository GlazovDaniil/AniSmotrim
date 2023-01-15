// Определяем собственный фильтр валют "currency"
Vue.filter('currency', function (value) {
    return value.toFixed(2) + ' р.';
});

var demo = new Vue({
    el: '#mainUsl',
    data: {
        // Определяем свойства модели; представление будет проходить циклом по массиву услуг и генерировать элементы списка для каждого вложенного пункта.
        services: [
            {
                name: 'Зравствуй чудный новый мир',
                price: 119,
                active:false
            },
            {
                name: 'Стандарт',
                price: 249,
                active:false
            },
            {
                name: 'Набор "PROсто мультики"',
                price: 399,
                active:false
            },
            {
                name: 'Набор "Титан одиночества"',
                price: 699,
                active:false
            }
        ]
    },
    methods: {
        toggleActive: function(s){
            s.active = !s.active;
        },
        total: function(){
            var total = 0;
            this.services.forEach(function(s){
                if (s.active){
                    total+= s.price;
                }
            });
            return total;
        }
    }
});