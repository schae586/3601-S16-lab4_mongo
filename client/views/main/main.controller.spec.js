'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

});

//=== Testing GPA ===========================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl as gpa', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing addCourse functionality: ", function(){

        it("should be able to calculate GPA", function(){
            var fakeData = [{courseName: "Csci1201", credits: 4, grade: "A"},{courseName: "Csci1301", credits: 4, grade: "A"},{courseName: "Csci1302", credits: 4, grade: "A"}];
            expect(scope.gpa.gpaCalculator(fakeData)).toEqual(4);
        });

        it("should be able to calculate GPA", function(){
            var fakeData = [{courseName: "Csci1201", credits: 4, grade: "B"},{courseName: "Csci1301", credits: 4, grade: "B"},{courseName: "Csci1302", credits: 4, grade: "B"}];
            expect(scope.gpa.gpaCalculator(fakeData)).toEqual(3);
        });

        it("should be able to calculate GPA", function(){
            var fakeData = [{courseName: "Csci1201", credits: 4, grade: "F"},{courseName: "Csci1301", credits: 4, grade: "F"},{courseName: "Csci1302", credits: 4, grade: "F"}];
            expect(scope.gpa.gpaCalculator(fakeData)).toEqual(0);
        });

    });

});
