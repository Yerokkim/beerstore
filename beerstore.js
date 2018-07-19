
var app = new Vue({
    el: "#app",
    data: {

        valueToSearch:"",
        url: "https://api.punkapi.com/v2/beers",
        beers: [],
        herebeer: "",

    },
    
    created: function () {
        this.getData();
    },
    
    computed:{
        
        validBeers: function(){
            return this.beers.filter(function(value){   
                return value.name.toLowerCase().includes(app.valueToSearch.toLowerCase());
            })
        }
        
    },

    methods: {
        getData: function () {

            $.getJSON(this.url, function (data) {
                app.beers = data;
            });

        }
    }
})











