'use strict';

angular.module("appModule")
    .controller('gpaCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.courseNameField = "";
        self.creditsField = "";
        self.gradeField = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getCourses = function(){
            $http.get('api/gpa').success(function(courses) {
                self.data = courses;
            });
        };

        self.getCourses();

        self.addData = function(){
            if(self.courseNameField.length >= 1) {
                $http.post('api/gpa', {courseName: self.courseNameField, credits: self.creditsField, grade: self.gradeField}).success(function(){
                    self.getCourses();
                });
                self.courseNameField = "";
                self.creditsField = "";
                self.gradeField = "";
            }
        };

        self.removeData = function(index){
            $http.delete('/api/gpa/' + self.data[index]._id).success(function(){
                self.getCourses();
            });
        };

        self.cat = function(str1, str2){
            return str1 + str2;
        };

        self.itemsInList = function(){
            return self.data.length;
        };

        self.gpaCalculator = function(){
            var creditTotal = 0;
            var gradePointTotal = 0;

            for(var i = 0; i < gpa.self.data.length ; i++) {
                var gradePointPerClass = 0;
                creditTotal += self.data[i].credits;
                gradePointPerClass = gpa.convertFromLetter(i) * self.data[i].credits;
                gradePointTotal += (gradePointPerClass);
            }

            var finalGPA = Math.round((gradePointTotal/creditTotal) * 100) / 100;

            if (finalGPA >= 0.0) {
                return finalGPA;
            } else {
                return "Add a course to begin!";
            }
        };

        self.convertFromLetter =  function(){
            var gradePoint = 0;
            if (self.data[i].grade === "A") {
                gradePoint = 4.00;
            } else if (self.data[i].grade === "B") {
                gradePoint = 3.00;
            } else if (self.data[i].grade === "C") {
                gradePoint = 2.00;
            } else if (self.data[i].grade === "D") {
                gradePoint = 1.00;
            } else {
                gradePoint = 0.00;
            }
            return gradePoint;
        }



    });
