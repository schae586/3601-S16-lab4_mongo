'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.petWeight = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
            });
        };

        self.getPets();

        self.addData = function(){
            if(self.textField.length >= 1) {
                $http.post('api/pets', {text: self.textField, weight: self.petWeight}).success(function(){
                    self.getPets();
                });
                self.textField = "";
                self.petWeight = "";
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };


        self.heaviestPet = function(){
            var heaviestPetName = "";
            var heaviestPetWeight = 0;
            for (var i = 0; i < self.data.length; i++) {
                if (self.data[i].weight > heaviestPetWeight) {
                    heaviestPetWeight = self.data[i].weight;
                    heaviestPetName = self.data[i].text;
                    console.log("Heaviest: " + heaviestPetWeight);
                }
            }
            console.log("returns correctly...maybe");
            var result =  heaviestPetName + " is the heaviest pet at " +
                    heaviestPetWeight + " units!!! Whoa!";
            return result;
        }

    });