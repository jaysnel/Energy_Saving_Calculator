let energySavedProject =  new Vue({
    el: '#main_project',
    data: {
        // Project Title
        projectTitle: 'Energy Saved. World A Better Place.',
        // The Users Input
        userInput: null,
        initialInput: null,
        // Content Images
        car_image: null,
        tree_image: null,
        gas_image: null,
        // Buttons Variables
        car_button: "Car",
        tree_button: "Tree",
        gas_button: "Gas",
        // Content Variables
        car_content: null,
        tree_content: null,
        gas_content: null,
        // AVG KWH For Each Item (Totally Made Up Figures)
        avgCarKWHPerMonth: 333,
        avgTreeKWHPerMonth: 50,
        avgGasKWHPerMonth: 4.3,
        randomKWHNumber: 5000,
        savingsPercent: null

    },
    methods: {
        // Content Functions
        theCarContent: function(theUserInput, initialInput) {
            parseInt(this.initialInput);
            this.tree_content = null;
            this.gas_content = null;
            this.tree_image = null;
            this.gas_image = null;
            
            $(".lightbulb").hide();
            $(".tree").hide();
            $(".gas").hide();
            $(".car").fadeIn(3000);

            let theEnergySaved = Math.floor(this.initialInput - theUserInput);
            let theCarsSaved = Math.floor(theEnergySaved / this.avgCarKWHPerMonth);

            let thisMonthEnergyUsed = Math.floor((theUserInput / this.initialInput) * 100);
            
        
            this.savingsPercent = 100 - thisMonthEnergyUsed + "%";

           
            if(theEnergySaved < 0) {
                this.car_content = "Looks like you used a little more energy this month than normal. No worries, we will have another go next month!";
            } else {
                this.car_content = "Good News! You saved " + theEnergySaved + " KWH of energy this month which took " + theCarsSaved + " cars of the road!(And probably a few accidents too)";
            }
        },
        theTreeContent: function(theUserInput, initialInput) {
            parseInt(this.initialInput);
            this.car_content = null;
            this.gas_content = null;
            this.car_image = null;
            this.gas_image = null;

            $(".lightbulb").hide();
            $(".car").hide();
            $(".gas").hide();
            $(".tree").fadeIn(3000);

            this.tree_imge = "/images/trees.png";
            let theEnergySaved = Math.floor(this.initialInput - theUserInput);
            let theTreesSaved = Math.floor(theEnergySaved / this.avgTreeKWHPerMonth);
            let thisMonthEnergyUsed = Math.floor((theUserInput / this.initialInput) * 100);
            
        
            this.savingsPercent = 100 - thisMonthEnergyUsed + "%";

            if(theEnergySaved < 0) {
                this.car_content = "Looks like you used a little more energy this month than normal. No worries, we will have another go next month!";
            } else {
                this.tree_content = "Good News! You saved " + theEnergySaved + " KWH of energy this month which saved " + theTreesSaved + " trees from being cut to shreds!!";
            }

        },
        theGasContent: function(theUserInput, initialInput) {
            parseInt(this.initialInput);
            this.tree_content = null;
            this.car_content = null;
            this.tree_image = null;
            this.car_image = null;

            $(".lightbulb").hide();
            $(".tree").hide();
            $(".car").hide();
            $(".gas").fadeIn(3000);

            this.gas_imge = "/images/co2.png";
            let theEnergySaved = Math.floor(this.initialInput - theUserInput);
            let theGasSaved = Math.floor(theEnergySaved / this.avgGasKWHPerMonth);
            let thisMonthEnergyUsed = Math.floor((theUserInput / this.initialInput) * 100);
            
        
            this.savingsPercent = 100 - thisMonthEnergyUsed + "%";

            if(theEnergySaved < 0) {
                this.car_content = "Looks like you used a little more energy this month than normal. No worries, we will have another go next month!";
            } else {
                this.gas_content = "Good News! You saved " + theEnergySaved + " KWH of energy this prevented " + theGasSaved + " grams of CO2 emissions from polluting our air!";
            }
        }

    }
})
