"use strict";

var app = angular.module("TaskTrackerAPI", ["ngRoute"]);



app.config(function ($routeProvider) {
    $routeProvider.
        when("/newtask", {
            templateUrl: "app/Partials/newTask.html",
            controller: "ToDoCtrl"
        }).
         when("/tasks", {
             templateUrl: "app/Partials/tasks.html",
             controller: 'ToDoCtrl'
         }).
        when("/task", {
            templateUrl: "app/Partials/task.html",
            controller: 'ToDoCtrl'
        }).

        when("/edittask/:id", {
            templateUrl: "app/Partials/edit-task.html",
            controller: 'ToDoCtrl',

        }).

        otherwise("/")
    // way to make sure they don't go anywhere else.
});