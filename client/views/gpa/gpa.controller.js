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
            if(self.courseNameField.length >= 1 && self.creditsField > 0 && self.gradeField != "") {
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



    });
